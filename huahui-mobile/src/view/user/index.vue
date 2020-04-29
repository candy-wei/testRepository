<template>
  <div class="member">
    <div class="header">
      <van-row class="header-row" type="flex" justify="center" align="center" span="8">
        <van-col span="12" class="header-row-left">
          <van-image class="avartar" round width="50px" height="50px" :src="userInfo.headImgUrl" />
          <span>{{userInfo.nickName}}</span>
        </van-col>
        <van-col span="16" class="header-row-right">
          <van-row>
            <van-image :src="require('@/assets/img/level'+ userInfo.vip +'.png')" width="26px" height="26px"></van-image>
            <span style="margin-left:10px;margin-bottom: 10px;">{{userInfo.vipName}}</span>
          </van-row>
          <div class="integral">累计积分: {{userInfo.points}} 分</div>
        </van-col>
      </van-row>

      <div class="rule" @click="onTapRule">
        <van-icon name="question-o" />&nbsp;会员规则
      </div>
    </div>

    <van-cell-group class="order-group">
      <van-row class="user-links">
        <van-col span="6">
          <van-icon name="pending-payment" @click="toOrder(1)" />待付款
        </van-col>
        <van-col span="6">
          <van-icon name="tosend" @click="toOrder(2)" />待发货
        </van-col>
        <van-col span="6">
          <van-icon name="logistics" @click="toOrder(3)" />已发货
        </van-col>
        <van-col span="6">
          <van-icon name="bag-o" @click="toOrder(4)" />已完成
        </van-col>
      </van-row>
    </van-cell-group>

    <van-grid :column-num="2" class="redpack-group">
      <van-grid-item info="99+" to="/wallet">
        <img src="@/assets/img/redpack4.png" class="redpack-img" />
        <span class="redpack-label">红包总数{{userInfo.redpacketAmount}}个</span>
      </van-grid-item>

      <van-grid-item to="/wallet">
        <img src="@/assets/img/wallet.png" class="redpack-img" />
        <span class="redpack-label">我的钱包</span>
      </van-grid-item>

      <van-grid-item @click="onTapTodayRedPack">
        <img src="@/assets/img/redpack5.png" class="redpack-img tada" />
        <span class="redpack-label">每日可领红包{{userInfo.redpacketDaily}}/{{userInfo.redpacketReceive}}个</span>
      </van-grid-item>

      <van-grid-item to="/taskList">
        <img src="@/assets/img/task5.png" class="redpack-img" />
        <span class="redpack-label">今日任务</span>
      </van-grid-item>
    </van-grid>

    <van-cell-group>
      <van-cell icon="records" title="全部订单" is-link to="order" />
      <van-cell icon="location-o" title="收货地址" is-link to="address" />
      <van-cell icon="friends-o" title="我的团队" is-link to="partner" />
      <van-cell icon="qr" title="点击关注公众号" is-link @click="showQr" />
    </van-cell-group>

    <!-- 领取红包图片 -->
    <van-popup
      v-model="showReceiveRedPackImg"
      :style="{ width: '100%', 'background-color': 'transparent' }"
    >
      <img src="@/assets/img/receiver_red_pack_bg.png" width="100%" @click="onTapRedPackImg" />
      <img src="@/assets/img/receiver_red_pack_btn.png" class="open_btn" @click="onTapRedPackImg" />
      <img src="@/assets/img/close.png" class="close_btn" @click="onCloseRedPackImg" />
    </van-popup>

    <!-- 红包金额 -->
    <van-popup
      v-model="showRedPackMoney"
      :style="{ width: '100%', 'background-color': 'transparent' }"
      class="redpack-money"
    >
      <img src="@/assets/img/receiver_red_pack.png" width="100%" @click="opTapRedPackMoney" />
      <div class="redpack-word">
        <div class="redpack-title">恭喜你!</div>
        <div>抽中{{redpack}}元红包</div>
      </div>
      <img src="@/assets/img/close.png" class="close_btn" @click="onCloseRedPackMoney" />
    </van-popup>

    <!-- 活动规则 -->
    <van-popup
      v-model="showRule"
      :style="{ width: '100%', 'background-color': 'transparent' }"
      class="rule-box"
    >
      <img src="@/assets/img/rule.png" style="width: 90%;margin-left:5%" />
      <img src="@/assets/img/close.png" class="close_btn" @click="onCloseRule" />
    </van-popup>

    <van-overlay :show="showQR" @click="showQR = false" z-index="2002">
      <div class="wrapper">
        <div>
          <div class="qr_content">
            <span>扫描二维码关注公众号</span>
            <img width="100%" height="100%" src="@/assets/img/qrcode_for_gh_6e0fed043799_258.jpg"/>
          </div>
          <div style="margin-top: 10px;">
            <img src="@/assets/img/close.png" style="width: 32px; height: 32px" />
          </div>
        </div>
      </div>
    </van-overlay>

    <van-tabbar v-model="activeFooter">
      <van-tabbar-item icon="home-o" replace to="/index">首页</van-tabbar-item>
      <van-tabbar-item icon="cart-o" replace to="/cart">购物车</van-tabbar-item>
      <van-tabbar-item icon="user-o" replace to="/user">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script src="./user.js"></script>

<style lang="less">
.member {
  padding-bottom: 50px;
}
.user {
  &-poster {
    width: 100%;
    display: block;
  }

  &-group {
    margin-bottom: 15px;
  }

  &-links {
    padding: 15px 0;
    font-size: 12px;
    text-align: center;
    background-color: #fff;

    .van-icon {
      display: block;
      font-size: 24px;
    }
  }

  .van-tabs__line {
    position: absolute !important;
    /* bottom: 15px; */
    /* left: 0; */
    /* z-index: 1; */
    /* height: 3px; */
    /* background-color: #ee0a24; */
    /* border-radius: 3px; */
  }
}

.header {
  position: relative;
}
.header-row {
  height: 125px;
  background: repeating-linear-gradient(
    130deg,
    #f1151573 30px,
    #e21e1e69 100px
  );
  color: #ffffff;
  .header-row-left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .header-row-right {
    padding-left: 40px;
    .integral {
      font-size: 12px;
      margin-top: 4px;
    }
  }
}

// 规则
.rule {
  position: absolute;
  right: 10px;
  top: 10px;
  color: #eee;
}

.rule-box {
  padding: 100px 5%;
}
// 规则

.task-row {
  background: #ffffff;
}

.receive-red-pack {
  display: flex;
  width: 50%;
}

.receive-red-pack::after {
  border: #ff5555;
}

.do-task {
  padding-left: 10px;
  padding-right: 10px;
  width: 50%;
  display: flex;
}

.order-group {
  margin-bottom: 10px;
}

.redpack-group {
  margin-bottom: 10px;
  .redpack-img {
    width: 50px;
    height: 50px;
  }
  .redpack-label {
    margin-top: 5px;
    font-size: 14px;
    color: #666;
  }
}

@keyframes tada {
  0% {
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }

  10%,
  20% {
    -webkit-transform: scale3d(0.9, 0.9, 0.9) rotate(-3deg);
    transform: scale3d(0.9, 0.9, 0.9) rotate(-3deg);
  }

  30%,
  50%,
  70%,
  90% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate(3deg);
    transform: scale3d(1.1, 1.1, 1.1) rotate(3deg);
  }

  40%,
  60%,
  80% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate(-3deg);
    transform: scale3d(1.1, 1.1, 1.1) rotate(-3deg);
  }

  to {
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }
}
.tada {
  animation: tada 1.5s infinite;
}

@keyframes showMoney {
  0% {
    transform: scale(0.7);
    -webkit-transform: scale(0.7);
  }

  45% {
    transform: scale(1.05);
    -webkit-transform: scale(1.05);
  }

  80% {
    transform: scale(0.95);
    -webkit-tranform: scale(0.95);
  }

  100% {
    transform: scale(1);
    -webkit-transform: scale(1);
  }
}
.showMoney {
  animation: tada 0.5s;
}
.redpack-money {
  .redpack-word {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 35%;
    color: #fff;
    text-align: center;
    .redpack-title {
      font-size: 24px;
    }
  }
}

// 红包关闭按钮
.close_btn {
  position: absolute;
  right: 10%;
  top: 10%;
  width: 32px;
  height: 32px;
}

// 红包开启按钮
@keyframes scale {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.2);
  }
}
.open_btn {
  position: absolute;
  right: 42%;
  top: 55%;
  width: 60px;
  height: 60px;
  animation: scale 0.5s infinite alternate forwards;
}
.wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    text-align: center;
  }

  .block {
    width: 120px;
    height: 120px;
    background-color: #fff;
  }
  .qr_content{
    padding: 20px 5%;
    background: white;
    margin-left: 17%;
    margin-right: 17%;
  }
</style>
