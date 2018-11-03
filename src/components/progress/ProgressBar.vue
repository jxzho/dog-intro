<template>
  <nav class="progress">
    <div class="nav-item">
      <span :class="['dot',{ actived: curIndex == 0 }]">
        <img src="https://cdn.junxio.site/static/home.svg">
      </span>
      <div class="hint">
        主页
      </div>
    </div>
    <div class="nav-item">
      <span :class="['dot',{ actived: curIndex == 1 }]">
        <img src="https://cdn.junxio.site/static/skill.svg">
      </span>
      <div class="hint">
        技能
      </div>
    </div>
    <div class="nav-item">
      <span :class="['dot',{ actived: curIndex == 2 }]">
        <img src="https://cdn.junxio.site/static/project.svg">
      </span>
      <div class="hint">
        项目
      </div>
    </div>
  </nav>
</template>

<script>
import Velocity from 'velocity-animate';
import { mapState } from 'vuex';
export default {
  name: 'ProgressBar',
  created () {
  },
  computed: {
    ...mapState(['curIndex'])
  }
}
</script>

<style scoped lang="less">
  .progress {
    position: fixed;
    right: 0;
    top: 0;
    width: 60px;
    height: 100%;
    transition: all .4s ease;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .nav-item {
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      cursor: pointer;
      &:hover > .hint {
        left: -40px;
        opacity: 1;
      }
      &:hover .dot {
        width: 30px;
        height: 30px;
        background: rgba(0, 0, 0, 0.6);
        img {
          width: 14px;
          height: 14px;
          opacity: 1;
        }
      }

      .dot {
        width: 10px;
        height: 10px;
        border-radius: 15px;
        background: rgba(0, 0, 0, 0.2);
        transition: all .3s ease-out;
        font-size: 14px;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 0px;
          height: 0px;
          opacity: 0;
          transition: all .3s;
        }
      }

      .actived {
        width: 30px;
        height: 30px;
        background: rgba(0, 0, 0, 0.6);
        img {
          width: 14px;
          height: 14px;
          opacity: 1;
        }
      }

      .hint {
        position: absolute;
        left: 0;
        height: 18px;
        padding: 0 4px 0 10px;
        opacity: 0;
        background: rgba(0, 0, 0, 0.6);
        transition: all .5s;
        font-size: 11px;
        font-weight: 600;
        line-height: 16px;
        text-align: center;
        color: #fff;
        &:after {
          content: '';
          display: block;
          width: 0px;
          height: 0px;
          position: absolute;
          top: 0;
          right: -16px;
          border-top: 9px solid transparent;
          border-bottom: 9px solid transparent;
          border-left: 8px solid rgba(0, 0, 0, 0.6);
          border-right: 8px solid transparent;
        }
      }
    }
  }
</style>