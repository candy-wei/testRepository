<template>
  <div>
    <!-- <van-nav-bar title="收银台" /> -->
    <van-cell-group>
      <van-cell title="订单编号" :value="order.orderSn" />
      <van-cell title="应付金额">
        <span class="red strong">￥{{formatPrice(order.totalPrice)}}</span>
      </van-cell>
    </van-cell-group>

    <van-radio-group v-model="payType">
      <van-cell-group>
        <van-cell clickable @click="radio = 'wxpay'">
          <img
            style="width:120px;margin-right: 200px;"
            slot="icon"
            slot-scope="props"
            src="@/assets/img/wxpay.png"
          />
        </van-cell>
      </van-cell-group>
    </van-radio-group>
    <van-button class="footer" type="primary" size="large" @click="pay">立即支付</van-button>
  </div>
</template>

<script src="./payment.js"></script>

<style lang="less">
.red {
  color: red;
}

.strong {
  font-weight: bold;
}

.van-cell-group {
  margin-top: 10px;
}

.footer {
  position: fixed;
  bottom: 0px;
}
</style>
