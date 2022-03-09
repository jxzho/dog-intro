<template>
  <div class="note-panel" ref="note-panel">
    <ul class="note-list">
      <li class="note-item" v-for="{ text, title } of pharase" :key="text" :title="title">
        {{ text }}
      </li>
    </ul>
  </div>
</template>

<script>
import { dateFormat } from '@/filters'

const pharase = [
  {
    text: '说得好不如做得好。',
    title: 'Do well is better than say well.',
  },
  {
    text: '努力是唯一的解药。',
    title: '别逃，奥利给。',
  },
]

export default {
  name: 'Note',
  data() {
    return {
      pharase,
    }
  },
  filters: {
    dateFormat: dateFormat,
  },
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
      // display: flex;
      // text-align: center;
      background-color: @blue;
      color: @grey;
      border-top: 1px solid transparent;
      padding: 10px 20px;
      height: 40px;
      line-height: 40px;

      .message {
        flex: 1;
        .text (#fff, 14px, 500);
      }

      .time {
        .text (#fff, 14px, 100);
      }
    }
  }
}
</style>
