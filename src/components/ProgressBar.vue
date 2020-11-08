<template>
  <nav class="progress">
    <div class="nav-wrapper">
      <div class="nav-item" v-for="(item, index) of pagesInfo" :key="index">
        <span class="dot" @click="handleJumpPage(index)"></span>
        <div :class="['hint', { hover: showCurLint && index === curIndex }]">
          {{ item.label || 'HI' }}
        </div>
      </div>
      <div class="nav-dot" :style="pos" @mouseenter="showCurLint = true" @mouseleave="showCurLint = false"></div>
    </div>
  </nav>
</template>

<script>
import { computed, watch, unref, watchEffect } from '@vue/composition-api'
import { mapState } from 'vuex';

const name = 'ProgressBar'

export default {
  name,
  setup (_, ctx) {
    const store = ctx.root.$store
    const curIndex = computed(() => store.state.curIndex)
    const transitionEnd = computed(() => store.state.transitionEnd)
    const pos = computed(() => ({
      transform: `translateY(${curIndex.value * 45}px)`,
    }))

    watchEffect(() => {
      init()
    })

    watch(curIndex, (index) => {
      document.title = `Junxio's ${global.pages[index].label}`;
    }, {
      immediate: true
    })

    function handleJumpPage(index) {
      clearTimeout(this.timer);
      if (!this.transitionEnd) return;
      this.timer = setTimeout(() => {
        store.commit('changeTranEnd', false);
        store.commit('changeIndex', index);
      }, 100);
    }

    function init () {
      const doc = document.body || document.documentElement
      doc.addEventListener('keyup', (e) => {
        clearInterval(ctx._keyActionTimer)
        const pageNum = global.pages.length
        const curIndexVal = unref(curIndex)

        const key = e.keyCode || e.which
        // 38 up. 40 down
        ctx._keyActionTimer = setTimeout(() => {
          if (key === 38 && curIndexVal !== 0) store.commit('changeIndex', curIndexVal - 1);
          if (key === 40 && curIndexVal !== pageNum - 1) store.commit('changeIndex', curIndexVal + 1);
        }, 200);
      })
    }

    return {
      pagesInfo: pages.sort((cur, next) => cur.page - next.page),
      showCurLint: false,
      pos,
      curIndex,
      transitionEnd,
      handleJumpPage
    }
  },
};
</script>
<style scoped lang="less">
@hintActColor: rgba(0, 0, 0, 0.7);
@itemWidth: 30px;
@itemHeight: 30px;
.progress {
  position: fixed;
  right: 0;
  top: 0;
  width: 100px;
  height: 100%;
  transition: all 0.4s ease;
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
        transition: all 0.3s ease-out;
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
        transition: all 0.6s;
        white-space: nowrap;
        text-align: center;
        color: rgba(0, 0, 0, 0.75);
        box-shadow: 0 0 4px rgba(0, 0, 0, 0.15);

        &.hover {
          transform: translateX(-50px);
          opacity: 1;
        }
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
      transition: transform 0.6s cubic-bezier(0.24, -0.98, 0.7, 1.01);
      &:after {
        content: '';
        display: block;
        width: 20px;
        height: 20px;
        border-radius: 20px;
        box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
        background: #fff;
      }
      &:hover::after {
        width: 15px;
        height: 15px;
      }
    }
  }
}
</style>
