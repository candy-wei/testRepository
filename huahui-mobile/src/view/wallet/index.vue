<template>
  <div>
    <div class="wallet-box">
      <div class="money">￥{{cashSum}}</div>
      <div class>总收益</div>

      <van-row class="withdraw-box">
        <van-col span="19">可提现金额：￥{{canCashSum}}</van-col>
        <van-col span="5">
          <van-button size="small" plain class="withdraw-btn" @click="onTapwithdraw">提现</van-button>
        </van-col>
      </van-row>
    </div>

    <van-cell :title="'提现记录'"></van-cell>

    <van-list>
      <van-cell v-for="history in cashList" :key="history.createTime">
        <van-row type="flex" align="center">
          <van-col span="19">
            <div>{{history.optionType}}</div>
            <div>{{history.createTime}}</div>
          </van-col>
          <van-col span="5">{{history.finance}}元</van-col>
        </van-row>
      </van-cell>
    </van-list>
  </div>
</template>

<script src="./wallet.js"></script>

<style lang="less" scoped>
.wallet-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  background-image: repeating-linear-gradient(
    130deg,
    #f1151573 30px,
    #e21e1e69 100px
  );
  padding: 40px 0 20px;
  .money {
    font-size: 32px;
    margin-top: 20px;
  }
}

.withdraw-box {
  width: 80%;
  margin-top: 10px;
  .withdraw-btn {
    background-color: transparent;
    color: #fff;
  }
}
</style>>