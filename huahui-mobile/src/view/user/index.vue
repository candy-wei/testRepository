<template>
  <div>
    <div class="header">
      <!-- <div class="van-cell--clickable">
        <i class="van-icon van-icon-setting-o">
        </i>
        <span>设置</span>
      </div> -->
      <van-row class="header-row" type="flex" justify="center">
        <!-- 用户头像 -->
        <van-image
          class="avartar"
          round
          width="70px"
          height="70px"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
        <div class="username">
          <span>September</span>
          <span>普通会员</span>
        </div>
      </van-row>

      <van-row>
        <van-col span="12">
          <van-cell title="已领红包数" value="0 个" />
        </van-col>
        <van-col span="12">
          <van-cell title="累计收入" value="0.00" />
        </van-col>
      </van-row>

      <van-row class="task-row" gutter="20">
        <van-col span="12" class="receive-red-pack">
          <div class="recommand">
            <img width="34px" height="34px" src="@/assets/img/redpack4.png" />
            <div class="recommand-desc">
              <span>领红包</span>
              <br />
              <span class="font-desc">领取今日红包</span>
            </div>
          </div>
        </van-col>
        <van-col span="12" class="do-task">
          <div class="recommand">
            <img width="34px" height="34px" src="@/assets/img/task5.png" />
            <div class="recommand-desc">
              <span>做任务</span>
              <br />
              <span class="font-desc">今日任务详情</span>
            </div>
          </div>
        </van-col>
      </van-row>
    </div>
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

    <van-cell-group class="user-group">
      <van-cell icon="records" title="全部订单" is-link to="order" />
    </van-cell-group>

    <van-cell-group>
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

.username {
  margin: 10px;
  position: absolute;
  top: 80px;
}

.avartar {
  margin: 20px;
}

.header-row {
  height: 125px;
  background: #ff5555;
  color: #ffffff;
}

.task-row {
  background: #ffffff;
  margin: 5px 5px;
}

.receive-red-pack {
  display: flex;
  width: 50%;
}

.receive-red-pack::after {
  border: #ff5555
}

.do-task {
  padding-left: 10px;
  padding-right: 10px;
  width: 50%;
  display: flex;
}

.recommand-desc {
  margin: 10px 0 0 5px;
}

.font-desc {
  font-size: smaller;
  font-weight: lighter;
}

.recommand {
  display: flex;
  width: 100%;
  margin-left: 20px;
  align-items: center;
  font-size: 12px;
}
</style>
