<template>
  <nav class="progress">
    <div class="nav-item">
      <span :class="['dot',{ actived: curIndex == 0 }]">
        <img src="https://cdn.junxio.site/static/home.svg">
      </span>
      <div class="hint">主页</div>
    </div>
    <div class="nav-item">
      <span :class="['dot',{ actived: curIndex == 1 }]">
        <img src="https://cdn.junxio.site/static/introduce.svg">
      </span>
      <div class="hint">介绍</div>
    </div>
    <div class="nav-item">
      <span :class="['dot',{ actived: curIndex == 2 }]">
        <img src="https://cdn.junxio.site/static/skill.svg">
      </span>
      <div class="hint">技能</div>
    </div>
    <div class="nav-item">
      <span :class="['dot',{ actived: curIndex == 3 }]">
        <img src="">
      </span>
      <div class="hint">项目</div>
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
@hintActColor: rgba(0, 0, 0, .7);
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
    .nav-item {
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      cursor: pointer;
      &:hover > .hint {
        transform: translateX(-48px);
        opacity: 1;
      }
      &:hover .dot {
        width: 32px;
        height: 32px;
        background: @hintActColor;
        img {
          width: 14px;
          height: 14px;
          opacity: 1;
        }
      }

      .dot {
        width: 10px;
        height: 10px;
        border-radius: 20px;
        background: rgba(0, 0, 0, 0.1);
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
        width: 32px;
        height: 32px;
        background: @hintActColor;
        img {
          width: 14px;
          height: 14px;
          opacity: 1;
        }
      }

      .hint {
        position: absolute;
        left: -14px;
        padding: 5px 12px 5px 18px;
        border-top-left-radius: 2px;
        border-bottom-left-radius: 2px;
        opacity: 0;
        background: @hintActColor;
        transition: all .8s;
        font-size: 12px;
        line-height: 12px;
        white-space: nowrap;
        font-weight: 600;
        text-align: center;
        color: #fff;
        &:after {
          content: '';
          display: block;
          width: 0px;
          height: 0px;
          position: absolute;
          top: 0;
          right: -10.5px;
          border-top: 10.5px solid transparent;
          border-bottom: 10.5px solid transparent;
          border-left: 10.5px solid @hintActColor;
        }
      }
    }
  }
</style>