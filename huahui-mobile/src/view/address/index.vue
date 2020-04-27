<template>
  <div>
    <van-address-list
      v-model="chosenAddressId"
      :list="list"
      disabled-text
      @add="onAdd"
      @edit="onEdit"
    />
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
}
</style>
