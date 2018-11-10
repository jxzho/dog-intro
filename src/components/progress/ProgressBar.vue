<template>
  <nav class="progress">
    <div class="nav-wrapper">
      <div class="nav-item" v-for="(item, index) of hintList" :key="index">
        <span class="dot" 
              @click="handleJumpPage(index)"></span>
        <div class="hint">{{item}}</div>
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
  data () {
    return {
      hintList: ['主页', '自我介绍', '技能', '项目'],
      timer: null
    }
  },
  methods: {
    handleJumpPage (index) {
      clearTimeout(this.timer);
      if (!this.transitionEnd) return;
      this.timer = setTimeout(() => {
        this.$store.commit('changeTranEnd', false);
        this.$store.commit('changeIndex', index);
      }, 100);
    }
  },
  computed: {
    ...mapState(['curIndex', 'transitionEnd']),
    pos () {
      return {
        transform: `translateY(${ this.curIndex * 45 }px)`
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
    display: flex;
    flex-direction: column;
    align-items: center;
    .nav-item {
      position: relative;
      display: flex;
      align-items: center;
      .dot {
        display: block;
        width: 15px;
        height: 15px;
        border-radius: 20px;
        margin: 15px;
        background: rgba(0, 0, 0, 0.1);
        transition: all .3s ease-out;
        cursor: pointer;
        &:hover + .hint {
          transform: translateX(-50px);
          opacity: 1;
        }
      }
      .hint {
        position: absolute;
        z-index: -1;
        right: -15px;
        padding: 6px 20px;
        border-radius: 2px;
        opacity: 0;
        background: #fff;
        transition: all .6s;
        white-space: nowrap;
        font-weight: 600;
        text-align: center;
        color: #000;
        box-shadow: 0 0 4px rgba(0, 0, 0, .15);
      }
    }
    .nav-dot {
      width: 45px;
      height: 45px;
      box-sizing: border-box;
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