<template>
  <div>
    <van-tabs animated>
      <van-tab title="我的推荐">
        <van-list>
          <template v-if="true">
            <van-row
              class="recomend-box"
              type="flex"
              align="center"
              v-for="item in [1, 2, 4]"
              :key="item"
            >
              <van-col span="8" class="avatar-box">
                <van-image
                  round
                  width="60px"
                  height="60px"
                  src="https://img.yzcdn.cn/vant/cat.jpeg"
                />
              </van-col>
              <van-col offset="1" span="`12" class="name-box">
                <span>nick</span>
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
          <template v-if="true">
            <van-row
              class="recomend-box"
              type="flex"
              align="center"
              v-for="item in [1, 2, 4]"
              :key="item"
            >
              <van-col span="8" class="avatar-box">
                <van-image
                  round
                  width="60px"
                  height="60px"
                  src="https://img.yzcdn.cn/vant/cat.jpeg"
                />
              </van-col>
              <van-col offset="1" span="`12" class="name-box">
                <span>team</span>
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
          <qrcode class="qr_code" :value="qrcodeUrl" :options="{ size: 65 }"></qrcode>
          <img src="@/assets/img/poster-bg.jpg" class="poster-bg" alt @load="posterLoad" />
          <img :src="posterImg" class="poster-img" alt v-if="showPoster" />
        </div>
      </van-tab>
    </van-tabs>
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
  left: 160px;
  top: 530px;
  width: 65px;
  height: 65px;
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
  box-shadow: 4px 2px 8px 2px #715f5f;
}
</style>