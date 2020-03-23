<template>
  <div>
    <van-row class="van-hairline--bottom text-center">
      <van-cell>
        <van-col span="8">我的推荐</van-col>
        <van-col span="8">我的团队</van-col>
        <van-col span="8">我的邀请码</van-col>
      </van-cell>
    </van-row>
    <!-- 列表 -->
    <van-list>
      <van-row
        class="van-hairline--bottom text-center partner-item"
        v-for="item in [1, 2, 4, ]"
        :key="item"
      >
        <van-cell>
          <van-col span="8">一级推荐</van-col>
          <van-col span="8">二级推荐</van-col>
          <van-col span="8">邀请码</van-col>
        </van-cell>
      </van-row>
    </van-list>
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
</style>