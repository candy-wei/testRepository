package cn.enilu.flash.service.system;

import cn.enilu.flash.bean.constant.cache.Cache;
import cn.enilu.flash.bean.constant.cache.CacheKey;
import cn.enilu.flash.bean.entity.system.FileInfo;
import cn.enilu.flash.bean.enumeration.ConfigKeyEnum;
import cn.enilu.flash.bean.vo.query.SearchFilter;
import cn.enilu.flash.bean.vo.shop.Base64File;
import cn.enilu.flash.cache.ConfigCache;
import cn.enilu.flash.cache.TokenCache;
import cn.enilu.flash.dao.system.FileInfoRepository;
import cn.enilu.flash.security.JwtUtil;
import cn.enilu.flash.service.BaseService;
import org.slf4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.IOException;
import java.util.Date;
import java.util.UUID;

@Service
public class FileService extends BaseService<FileInfo,Long,FileInfoRepository> {
    private Logger logger;
    @Autowired
    private ConfigCache configCache;
    @Autowired
    private FileInfoRepository fileInfoRepository;
    @Autowired
    private TokenCache tokenCache;

    /**
     * 文件上传
     * @param multipartFile
     * @return
     */
    public FileInfo upload(MultipartFile multipartFile){
        String uuid = UUID.randomUUID().toString();
        String originalFileName = multipartFile.getOriginalFilename();
        String realFileName =   uuid +"."+ originalFileName.split("\\.")[originalFileName.split("\\.").length-1];
        try {

            File file = new File(configCache.get(ConfigKeyEnum.SYSTEM_FILE_UPLOAD_PATH.getValue()) + File.separator+realFileName);
            if (!file.getParentFile().exists()) {
                file.getParentFile().mkdirs();
            }
            multipartFile.transferTo(file);
            return save(multipartFile.getOriginalFilename(),file);
        } catch (Exception e) {

            logger.error("保存文件异常",e);

        }
        return null;
    }
    /**
     * 文件上传
     * @param base64File
     * @return
     */
    public FileInfo upload(Base64File base64File){
        String uuid = UUID.randomUUID().toString();
        String originalFileName = base64File.getName();
        String realFileName =   uuid +"."+ originalFileName.split("\\.")[originalFileName.split("\\.").length-1];
        try {
            File file = new File(configCache.get(ConfigKeyEnum.SYSTEM_FILE_UPLOAD_PATH.getValue()) + File.separator+realFileName);
            if(base64ToFile(base64File.getBase64(),file)){
                return save(originalFileName,file);
            }

        } catch (Exception e) {
            logger.error("保存文件异常",e);
        }
        return null;
    }

    private boolean base64ToFile(String base64, File file) {
        base64 = base64.substring(base64.indexOf(",")+1);
        BufferedOutputStream bos = null;
        java.io.FileOutputStream fos = null;
        try {

            byte[] bytes = org.apache.commons.codec.binary.Base64.decodeBase64(base64);
            fos = new java.io.FileOutputStream(file);
            bos = new BufferedOutputStream(fos);
            bos.write(bytes);
            return true;
        } catch (Exception e) {
            logger.error("base64转视频文件失败", e);
            return false;
        } finally {
            if (bos != null) {
                try {
                    bos.close();
                } catch (IOException e) {
                    logger.error("关闭文件流bos失败", e);
                    return false;
                }
            }
            if (fos != null) {
                try {
                    fos.close();
                } catch (IOException e) {
                    logger.error("关闭文件流fos失败", e);
                    return false;
                }
            }
        }
    }

    /**
     * 创建文件
     * @param originalFileName
     * @param file
     * @return
     */
    public FileInfo save(String originalFileName,File file){
        try {
            FileInfo fileInfo = new FileInfo();
            fileInfo.setCreateTime(new Date());
            fileInfo.setCreateBy(JwtUtil.getUserId());
            fileInfo.setOriginalFileName(originalFileName);
            fileInfo.setRealFileName(file.getName());
            fileInfoRepository.save(fileInfo);
            return fileInfo;
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    @Override
    @Cacheable(value = Cache.APPLICATION, key = "'" + CacheKey.FILE_INFO + "'+#id")
    public FileInfo get(Long id){
        FileInfo fileInfo = fileInfoRepository.getOne(id);
        fileInfo.setAblatePath(configCache.get(ConfigKeyEnum.SYSTEM_FILE_UPLOAD_PATH.getValue()) + File.separator+fileInfo.getRealFileName());
        return fileInfo;
    }

    public FileInfo getByName(String fileName) {
        FileInfo fileInfo =  get(SearchFilter.build("id",fileName));
        fileInfo.setAblatePath(configCache.get(ConfigKeyEnum.SYSTEM_FILE_UPLOAD_PATH.getValue()) + File.separator+fileInfo.getRealFileName());
        return fileInfo;
    }
}
