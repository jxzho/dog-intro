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
             @transitionend.native="handleTranEnd">
      </Project>
    <ProgressBar />
  </div>
</template>

<script>
// import Vue from 'vue'
import { injectActions } from './helper/actions'
import { mapState } from '@/store/state'
import { Pages } from '@/modules/init'

export default {
  name: 'App',
  components: {
    Home: () => import('@/pages/Home.vue'),
    Intro: () => import(/* webpackChunkName: "Intro" */ '@/pages/Intro.vue'),
    Skill: () => import(/* webpackChunkName: "Skill" */ '@/pages/Skill.vue'),
    Project: () => import(/* webpackChunkName: "Project" */ '@/pages/Project.vue'),
  },
  data() {
    return {
      pageSize: Pages.length || 0,
      otherPagesVisible: false,
    }
  },
  computed: {
    ...mapState(['curIndex', 'transitionEnd']),
  },
  mounted() {
    injectActions(this.state)
  },
  methods: {
    onHomeMounted() {
      // import(
      //   /* webpackChunkName: "Project.page" */
      //   /* webpackMode: "lazy" */
      //   /* webpackExports: ["default"] */
      //   './pages/Project.vue'
      // ).then(({ default: Component }) => {
      //   const Project = Vue.extend(Component)
      //   const project = new Project().$mount()
      //   document.querySelector('.page.project').appendChild(project.$el)
      // })
    },
    // changeIndex(index) {
    //   this.$store.commit('changeIndex', index)
    // },
    handleTranEnd() {
      // this.$store.commit('changeTranEnd', true)
      this.state.changeTranEnd(true)
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
