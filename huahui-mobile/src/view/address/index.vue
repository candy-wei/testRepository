<template>
  <div>
    <van-address-list
      v-model="chosenAddressId"
      :list="list"
      disabled-text
      @add="onAdd"
      @edit="onEdit"
    />
  </div>
</template>

<script src="./address.js"></script>

<style lang="less">
.user {
  &-poster {
    width: 100%;
    height: 53vw;
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
}
</style>
