<template >
  <div id="TaskList">
    <template v-for="task in [1, 2, 4]">
      <van-panel title="初级任务" icon="label" :key="task" :status="'任务到期2020:10:10'" class="task-box">
        <van-row class="task-content">
          <van-col span="19">内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</van-col>
          <van-col span="5">
            <van-button round block hairline size="small" color="#e20e84" type="info">已完成</van-button>
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