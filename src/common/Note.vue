<template>
  <div class="note-panel" ref="note-panel">
    <ul class="note-list">
      <li class="note-item">
        <p class="message">WE PERSEVERE</p>
        <span class="time">{{ new Date('2018-2-12') | dateFormat('yyyy.MM.dd') }}</span>
      </li>
      <li class="note-item">
        <p class="message">Cat is best!</p>
        <span class="time">{{ new Date('2018-3-11') | dateFormat('yyyy.MM.dd') }}</span>
      </li>
      <li class="note-item">
        <p class="message">快毕业了</p>
        <span class="time">{{ new Date('2018-6-12') | dateFormat('yyyy.MM.dd') }}</span>
      </li>
      <li class="note-item">
        <p class="message">安排</p>
        <span class="time">{{ new Date('2018-12-25') | dateFormat('yyyy.MM.dd') }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { dateFormat } from '@/filters'
export default {
  name: "Note",
  filters: {
    dateFormat: dateFormat
  }
}
</script>

<style scoped lang="less">
.text () {
  color: #fff;
  font-size: 12px;
  font-weight: 500;
}
.note-panel {
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  overflow: hidden;
  height: 122px;
  position: relative;
  
  .note-list {
    .note-item {
      display: flex;
      background-color: @blue;
      color: @grey;
      border-top: 1px solid transparent;
      padding: 10px 30px 10px 20px;
      height: 40px;
      line-height: 40px;
      
      .message {
        flex: 1;
        .text ();
      }

      .time {
        .text ();
      }
    }
  }
}
</style>