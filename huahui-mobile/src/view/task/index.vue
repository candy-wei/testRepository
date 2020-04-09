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
</style>