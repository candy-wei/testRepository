import request from '@/utils/request'

export default {
    getUserInfo: function () {
        return request({
            url: '/shop/user/getInfo',
            method: 'post'
        })
    },
    updateUserName: function (userName) {
        return request({
            url: '/user/updateUserName/' + userName,
            method: 'post'
        })
    },
    updatePwd: function (params) {
        return request({
            url: '/account/updatePwd',
            method: 'post',
            params
        })
    },
    updateGender: function (gender) {
        return request({
            url: '/user/updateGender/' + gender,
            method: 'post'
        })
    },
    updatePassword: function (oldPwd, password, rePassword) {
        return request({
            url: '/user/updatePassword/' + oldPwd + '/' + password + '/' + rePassword,
            method: 'post'
        })
    },
    upload: function (file) {
        console.log('file', file)
        return request({
            url: '/file/upload/base64',
            method: 'post',
            data: file
        })
    },
    sendSmsCode: function (mobile) {
        return request({
            url: '/user/sendSmsCode',
            method: 'post',
            params: {
                "mobile": mobile
            }
        })
    },
    getTask: function () {
        return request({
            url: '/shop/user/tasks',
            method: 'post',
        })
    },
    getMyTeam: function () {
        return request({
            url: '/shop/user/team',
            method: 'post',
        })
    },
    getMyRecommend: function () {
        return request({
            url: '/shop/user/recommend',
            method: 'post',
        })
    },

}

