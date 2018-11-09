<template>
  <nav class="progress">
    <div class="nav-wrapper">
      <div class="nav-item">
        <span class="dot"></span>
        <div class="hint">主页</div>
      </div>
      <div class="nav-item">
        <span :class="['dot']"></span>
        <div class="hint">介绍</div>
      </div>
      <div class="nav-item">
        <span :class="['dot']"></span>
        <div class="hint">技能</div>
      </div>
      <div class="nav-item">
        <span :class="['dot']"></span>
        <div class="hint">项目</div>
      </div>
      <div class="nav-dot" :style="pos"></div>
    </div>
  </nav>
</template>
<script>
import Velocity from 'velocity-animate';
import { mapState } from 'vuex';
export default {
  name: 'ProgressBar',
  created() {},
  computed: {
    ...mapState(['curIndex']),
    pos () {
      return {
        transform: `translateY(${ this.curIndex * 50 }px)`
      }
    }
  }
}
</script>
<style scoped lang="less">
@hintActColor: rgba(0, 0, 0, .7);
@itemWidth: 30px;
@itemHeight: 30px;
.progress {
  position: fixed;
  right: 0;
  top: 0;
  width: 100px;
  height: 100%;
  transition: all .4s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;
  .nav-wrapper {
    position: relative;
    .nav-item {
      position: relative;
      cursor: pointer;
      margin: 20px;
      &:hover>.hint {
        transform: translateX(-40px);
        opacity: 1;
      }
      .dot {
        display: block;
        width: 15px;
        height: 15px;
        border-radius: 20px;
        background: rgba(0, 0, 0, 0.1);
        transition: all .3s ease-out;
        font-size: 14px;
      }
      .hint {
        position: absolute;
        left: -14px;
        padding: 5px 18px;
        border-radius: 2px;
        opacity: 0;
        background: #fff;
        transition: all .8s;
        font-size: 12px;
        line-height: 12px;
        white-space: nowrap;
        font-weight: 600;
        text-align: center;
        color: #000;
        box-shadow: 0 0 4px rgba(0, 0, 0, .15);
      }
    }
    .nav-dot {
      width: @itemWidth;
      height: @itemHeight;
      position: absolute;
      left: 0;
      top: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: transform .6s cubic-bezier(0.24,-0.98, 0.7, 1.01);
      &:after {
        content: '';
        display: block;
        width: 20px;
        height: 20px;
        border-radius: 20px;
        box-shadow: 1px 1px 2px rgba(0, 0, 0, .2);
        background: #fff;
      }
    }
  }
  
}
</style>