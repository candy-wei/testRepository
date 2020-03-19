<template>
  <div class="member">
    <div class="header">
      <van-row class="header-row" type="flex" justify="center" align="center" span="8">
        <van-col span="12" class="header-row-left">
          <van-image
            class="avartar"
            round
            width="50px"
            height="50px"
            src="https://img.yzcdn.cn/vant/cat.jpeg"
          />
          <span>September</span>
        </van-col>
        <van-col span="16" class="header-row-right">
          <van-row>
            <img src="@/assets/img/level1.png" width="32px" height="32px" alt />
            <span style="margin-left:10px;margin-bottom: 10px;">{{'普通会员'}}</span>
          </van-row>
          <div class="integral">累计积分: {{100}} 分</div>
        </van-col>
      </van-row>
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
      <van-grid-item info="99+" to="/index">
        <img src="@/assets/img/redpack4.png" class="redpack-img" />
        <span class="redpack-label">已领红包{{10}}个</span>
      </van-grid-item>

      <van-grid-item>
        <img src="@/assets/img/wallet.png" class="redpack-img" />
        <span class="redpack-label">累计收入{{10}}元</span>
      </van-grid-item>

      <van-grid-item>
        <img src="@/assets/img/redpack5.png" class="redpack-img tada" />
        <span class="redpack-label">可领红包{{12}}个</span>
      </van-grid-item>

      <van-grid-item to="/taskList">
        <img src="@/assets/img/task5.png" class="redpack-img" />
        <span class="redpack-label">今日任务</span>
      </van-grid-item>
    </van-grid>

    <van-cell-group>
      <van-cell icon="records" title="全部订单" is-link to="order" />
      <van-cell icon="location-o" title="收货地址" is-link to="address" />
      <van-cell icon="setting-o" title="设置" is-link to="setting" />
      <van-cell icon="info-o" title="规则说明" is-link to="sorry" />
    </van-cell-group>

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
</style>
