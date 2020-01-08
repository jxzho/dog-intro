<template>
  <div class="note-panel" ref="note-panel">
    <ul class="note-list">
      <li class="note-item">
        <p class="message">今天天气不错</p>
        <span class="time">19:44</span>
      </li>
      <li class="note-item">
        <p class="message">node好难</p>
        <span class="time">2天前</span>
      </li>
      <li class="note-item">
        <p class="message">快毕业了</p>
        <span class="time">2天前</span>
      </li>
      <li class="note-item">
        <p class="message">安排</p>
        <span class="time">2天前</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Note"
}
</script>

<style scoped lang="less">
.note-panel {
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  overflow: hidden;
  height: 122px;
  position: relative;
  .note-list {
    .note-item {
      display: flex;
      background: #6755bd;
      color: @grey;
      border-top: 1px solid #7161c1;
      padding: 10px 30px 10px 20px;
      height: 40px;
      line-height: 40px;
      .message {
        flex: 1;
        font-size: 13px;
        font-weight: 600;
        letter-spacing: 1px;
      }
      .time {
        color: #8c85ce;
        font-size: 12px;
      }
    }
  }
}
</style>