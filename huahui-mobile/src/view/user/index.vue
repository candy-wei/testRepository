<template>
  <div>
    <img class="user-poster" src="@/assets/img/banner.jpg" >
    <van-row class="user-links">
      <van-col span="6">
        <van-icon name="pending-payment" @click="toOrder(1)"/>
        待付款
      </van-col>
      <van-col span="6">
        <van-icon name="tosend" @click="toOrder(2)"/>
        待发货
      </van-col>
      <van-col span="6">
        <van-icon name="logistics" @click="toOrder(3)"/>
        已发货
      </van-col>
      <van-col span="6">
        <van-icon name="bag-o" @click="toOrder(4)"/>
        已完成
      </van-col>
    </van-row>

    <van-cell-group class="user-group">
      <van-cell icon="records" title="全部订单" is-link to="order" />
    </van-cell-group>

    <van-cell-group class="user-group">
      <van-cell icon="todo-list-o" title="直推任务" is-link @click="sorry"/>
      <van-cell icon="todo-list-o" title="团队任务" is-link @click="sorry" />
      <van-cell icon="todo-list-o" title="线下任务" is-link  @click="sorry"/>
    </van-cell-group>

    <van-cell-group class="user-group">
      <van-cell icon="bill-o" title="红包管理" is-link  @click="sorry"/>
    </van-cell-group>

    <van-cell-group>
      <van-cell icon="location-o" title="收货地址" is-link to="address"/>
      <van-cell icon="setting-o" title="设置" is-link to="setting"/>
      <van-cell icon="info-o" title="规则说明" is-link to="sorry"/>
    </van-cell-group>

    <van-tabbar v-model="activeFooter">
      <van-tabbar-item icon="home-o"  replace to="/index">首页</van-tabbar-item>
      <van-tabbar-item icon="cart-o"  replace to="/cart">购物车</van-tabbar-item>
      <van-tabbar-item icon="user-o"  replace to="/user">我的</van-tabbar-item>
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
</style>
