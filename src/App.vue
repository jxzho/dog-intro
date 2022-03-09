<template>
  <div class="container" ref="container" @mousewheel="handleMouseWheel">
    <!-- prettier-ignore -->
    <Home :class="['page', {
           prePage: curIndex > 0,
           curPage: curIndex === 0,
           nextPage: curIndex < 0
         }]"
          @transitionend.native="handleTranEnd" />
    <!-- prettier-ignore -->
    <Intro :class="['page', {
            prePage: curIndex > 1,
            curPage: curIndex === 1,
            nextPage: curIndex < 1
          }]"
           @transitionend.native="handleTranEnd" />
    <!-- prettier-ignore -->
    <Skill :class="['page', {
            prePage: curIndex > 2,
            curPage: curIndex === 2,
            nextPage: curIndex < 2
          }]" 
           @transitionend.native="handleTranEnd" />
    <!-- prettier-ignore -->
    <Project :class="['page', {
              prePage: curIndex > 3,
              curPage: curIndex === 3,
              nextPage: curIndex < 3
            }]"
             @transitionend.native="handleTranEnd" />
    <ProgressBar />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { injectActions } from './helper/actions'

export default {
  name: 'App',
  data() {
    return {
      pageSize: global.pages.length || 0,
    }
  },
  computed: {
    ...mapState(['curIndex', 'transitionEnd']),
  },
  mounted() {
    injectActions(this.$store)
  },
  methods: {
    // changeIndex(index) {
    //   this.$store.commit('changeIndex', index)
    // },
    handleTranEnd() {
      this.$store.commit('changeTranEnd', true)
      clearTimeout(this.timer)
      this.timer = null
    },
    handleMouseWheel(e) {
      // wheelDelta > 0 up or wheelDelta < 0 down
      // clearTimeout(this.timer)
      // this.timer = null
      // if ((e.wheelDelta < 0 && this.curIndex === this.pageSize - 1) || (e.wheelDelta > 0 && this.curIndex === 0)) return
      // if (!this.transitionEnd) return
      // this.timer = setTimeout(() => {
      //   this.$store.commit('changeTranEnd', false)
      //   e.wheelDelta < 0 ? this.changeIndex(this.curIndex + 1) : this.changeIndex(this.curIndex - 1)
      // }, 100)
    },
  },
}
</script>

<style lang="less">
html,
body {
  height: 100%;
  position: relative;
}

.container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;

  .page {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    transition: all 0.5s ease;
    animation: 10s ease page-change;
  }

  .prePage {
    transform: translateY(-100%);
  }

  .curPage {
    transform: translateY(0%);
  }

  .nextPage {
    transform: translateY(100%);
  }
}
</style>
