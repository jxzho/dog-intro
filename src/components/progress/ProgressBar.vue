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
    left: 0;
    bottom: 0;
    height: 5px;
    background: @blue;
    transition: all 1s ease;
  }
</style>