<template >
  <div id="TaskList">
    <template v-for="task in taskList">
      <van-panel :title="task.title" icon="label" :key="task.content" class="task-box">
        <van-row class="task-content">
          <van-col span="17" style="white-space:pre-line">{{task.content}}</van-col>
          <van-col span="5" offset="2">
            <van-button
              round
              block
              hairline
              size="small"
              color="#f59292"
              type="info"
            >{{task.taskStatus}}</van-button>
          </van-col>
        </van-row>
      </van-panel>
    </template>

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

<script src="./taskList.js"></script>

<style lang="less">
.task-box {
  margin-bottom: 20px;
  .task-content {
    padding: 10px 20px;
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