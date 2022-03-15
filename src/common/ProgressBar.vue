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
// import { mapState } from 'vuex';
import { mapState } from '@/store/state'
import { Pages } from '@/modules/init'

export default {
  name: 'ProgressBar',
  data() {
    return {
      pagesInfo: Pages.sort((cur, next) => cur.page - next.page),
      showCurLint: false,
    }
  },
  computed: {
    ...mapState(['curIndex', 'transitionEnd']),
    pos() {
      return {
        transform: `translateY(${this.curIndex * 45}px)`,
      }
    },
  },
  watch: {
    curIndex: {
      handler(index) {
        document.title = `Junxio's ${Pages[index].label}`
      },
      immediate: true,
    },
  },
  created() {
    const doc = document.body || document.documentElement
    doc.addEventListener('keyup', e => {
      clearInterval(this._keyActionTimer)
      const pageNum = Pages.length

      const key = e.keyCode || e.which
      // 38 up. 40 down
      this._keyActionTimer = setTimeout(() => {
        if (key === 38 && this.curIndex !== 0) {
          // this.$store.commit('changeIndex', this.curIndex - 1)
          const val = this.curIndex - 1
          this.state.changeIndex(val)
        }
        if (key === 40 && this.curIndex !== pageNum - 1) {
          // this.$store.commit('changeIndex', this.curIndex + 1)
          const val = this.curIndex + 1
          this.state.changeIndex(val)
        }
      }, 200)
    })
  },
  methods: {
    handleJumpPage(index) {
      clearTimeout(this.timer)
      if (!this.transitionEnd) return
      this.timer = setTimeout(() => {
        this.state.changeTranEnd(false)
        this.state.changeIndex(index)
        // this.$store.commit('changeTranEnd', false);
        // this.$store.commit('changeIndex', index);
      }, 100)
    },
  },
}
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
