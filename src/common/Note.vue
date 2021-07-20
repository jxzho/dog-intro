<template>
  <div class="note-panel" ref="note-panel">
    <ul class="note-list">
      <li class="note-item">
        <p class="message">Run 4ever</p>
        <span class="time">{{ new Date('2020-08-02') | dateFormat('yyyy.MM.dd') }}</span>
      </li>
      <li class="note-item">
        <p class="message">Nothing:D</p>
        <span class="time">{{ new Date('2018-08-01') | dateFormat('yyyy.MM.dd') }}</span>
      </li>
      <li class="note-item">
        <p class="message">Alarm</p>
        <span class="time">{{ new Date('2018-6-12') | dateFormat('yyyy.MM.dd') }}</span>
      </li>
      <li class="note-item">
        <p class="message">up up</p>
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
.text (@color, @fontSize, @fontWeight) {
  color: @color;
  font-size: @fontSize;
  font-weight: @fontWeight;
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
      padding: 10px 20px;
      height: 40px;
      line-height: 40px;
      
      .message {
        flex: 1;
        .text (#fff, 13px, 500);
      }

      .time {
        .text (#fff, 12px, 100);
      }
    }
  }
}
</style>