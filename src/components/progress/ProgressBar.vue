<template>
  <div class="progress-bar">
  </div>
</template>

<script>
import Velocity from 'velocity-animate';
export default {
  name: 'ProgressBar'
}
</script>

<style scoped lang="less">
  .progress-bar {
    position: fixed;
    right: 0;
    top: 0;
    height: 2px;
    background: @blue;
    transition: all 1s ease;
  }
</style>