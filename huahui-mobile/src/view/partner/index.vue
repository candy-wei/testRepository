<template>
  <div>
    <van-tabs animated>
      <van-tab title="我的推荐">
        <van-list>
          <template v-if="recommendList.length > 0">
            <van-row
              class="recomend-box"
              type="flex"
              align="center"
              v-for="item in recommendList"
              :key="item"
            >
              <van-col span="8" class="avatar-box">
                <van-image round width="60px" height="60px" :src="item.headImgUrl" />
              </van-col>
              <van-col offset="1" span="`12" class="name-box">
                <span>{{item.nickName}}</span>
              </van-col>
            </van-row>
          </template>
          <template v-else>
            <van-row type="flex" justify="center" style="margin-top: 20px">
              <van-col>暂无数据</van-col>
            </van-row>
          </template>
        </van-list>
      </van-tab>

      <van-tab title="我的团队">
        <van-list>
          <template v-if="teamList.length > 0">
            <van-row
              class="recomend-box"
              type="flex"
              align="center"
              v-for="item in teamList"
              :key="item"
            >
              <van-col span="8" class="avatar-box">
                <van-image round width="60px" height="60px" :src="item.headImgUrl" />
              </van-col>
              <van-col offset="1" span="`12" class="name-box">
                <span>{{item.nickName}}</span>
              </van-col>
            </van-row>
          </template>
          <template v-else>
            <van-row type="flex" justify="center" style="margin-top: 20px">
              <van-col>暂无数据</van-col>
            </van-row>
          </template>
        </van-list>
      </van-tab>

      <van-tab title="我的邀请码">
        <div ref="poster" class="poster-box">
          <qrcode class="qr_code" :value="qrcodeUrl" :options="{ size: 85 }"></qrcode>
          <img src="@/assets/img/poster-bg.jpg" class="poster-bg" alt @load="posterLoad" />
          <img :src="posterImg" class="poster-img" alt v-if="showPoster" />
        </div>
      </van-tab>
    </van-tabs>

    <div class="nav" style="display: block;">
      <a class="nav_left" href="javascript:void(0);" @click="toIndex">
        <img width="100%" src="@/assets/img/home_icon@2x.png" alt />
      </a>
      <a href="javascript:void(0);" onclick="javascript:history.go(-1);">
        <img width="100%" src="@/assets/img/back_icon@2x.png" alt />
      </a>
    </div>
  </div>
</template>
<script src="./partner.js"></script>

<style lang="less">
.text-center {
  text-align: center;
}

.partner-item {
  border-bottom: 1px solid #eaeaea;
}
.recomend-box {
  padding: 10px;
  background-color: #fff;
  border-bottom: 1px solid #efefef;
}
.avatar-box {
  display: flex;
  justify-content: center;
}
.name-box {
  font-size: 20px;
}

// 海报
.poster-box {
  position: relative;
  overflow: hidden;
}
.qr_code {
  position: absolute;
  right: 20px;
  top: 460px;
  width: 85px;
  height: 85px;
}
.poster-bg {
  width: 100%;
  display: block;

  filter: blur(4px);
}
.poster-img {
  width: 80%;
  position: absolute;
  left: 10%;
  top: 50%;
  transform: translateY(-50%);
  box-shadow: 4px 2px 8px 2px #b64b4b;
}

.nav {
  position: fixed;
  bottom: 7rem;
  right: 1.24rem;
  z-index: 99;
}
.nav>a {
  display: -webkit-box;
  width: 2.96rem;
  height: 2.96rem;
}
.nav_left {
  margin-bottom: 0.1rem;
}
a {
  background: transparent;
  text-decoration: none;
  color: #000;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
}
</style>