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
    <van-tabs>
      <van-tab  title="领取记录">
        <van-cell :title="'提现记录'"></van-cell>

        <van-list>
          <template v-if="cashList.length > 0">
            <van-cell v-for="history in cashList" :key="history.createTime">
              <van-row type="flex" align="center">
                <van-col span="19">
                  <div>{{history.optionType}}</div>
                  <div>{{history.createTime}}</div>
                </van-col>
                <van-col span="5">{{history.finance}}元</van-col>
              </van-row>
            </van-cell>
          </template>
          <template v-else>
            <van-row type="flex" justify="center" style="margin-top: 20px">
              <van-col>暂无数据</van-col>
            </van-row>
          </template>
        </van-list>
      </van-tab>

      <van-tab title="红包记录">
        <van-list>
          <template v-if="recordList.length > 0">
            <van-cell v-for="recorder in recordList" :key="recorder.createTime">
              <van-row type="flex" align="center">
                <van-col span="19">
                  <div>{{recorder.desc}}</div>
                  <div>{{recorder.createTime}}</div>
                </van-col>
                <van-col span="5">+{{recorder.num}}个</van-col>
              </van-row>
            </van-cell>
          </template>
          <template v-else>
            <van-row type="flex" justify="center" style="margin-top: 20px">
              <van-col>暂无数据</van-col>
            </van-row>
          </template>
        </van-list>
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