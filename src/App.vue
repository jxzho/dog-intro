<template>
  <div class="container" 
       ref="container"
       @mousewheel="handleMouseWheel">
    <home class="page"
          :class="{
            prePage: curIndex > 0,
            curPage: curIndex === 0,
            nextPage: curIndex < 0
          }" 
          @transitionend.native="handleTranEnd"></home>
    <intro class="page"
          :class="{
            prePage: curIndex > 1,
            curPage: curIndex === 1,
            nextPage: curIndex < 1
          }" 
           @transitionend.native="handleTranEnd"></intro>
    <skill class="page"
           :class="{
              prePage: curIndex > 2,
              curPage: curIndex === 2,
              nextPage: curIndex < 2
            }"  
           @transitionend.native="handleTranEnd"></skill>
    <project class="page"
            :class="{
              prePage: curIndex > 3,
              curPage: curIndex === 3,
              nextPage: curIndex < 3
            }" 
             @transitionend.native="handleTranEnd"></project>
    <progress-bar></progress-bar>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: "app",
  data () {
    return {
      timer: null,
      pageList: []
    }
  },
  methods: {
    handleTranEnd () {
      this.$store.commit('changeTranEnd', true);
      clearTimeout(this.timer);
      this.timer = null;
    },
    handleMouseWheel (e) {
      // wheelDelta > 0 up or wheelDelta < 0 down
      clearTimeout(this.timer);
      this.timer = null;
      if ( (e.wheelDelta < 0 && this.curIndex === 3 ) || 
        (e.wheelDelta > 0) && this.curIndex === 0) return;
      if (!this.transitionEnd) return;
      this.timer = setTimeout(() => {
        this.$store.commit('changeTranEnd', false);
        e.wheelDelta < 0 
          ? this.changeIndex(this.curIndex + 1) 
          : this.changeIndex(this.curIndex - 1) ;
      }, 100);
    },
    changeIndex (index) {
      this.$store.commit('changeIndex', index);
    }
  },
  computed: {
    ...mapState(['curIndex', 'transitionEnd'])
  }
};
</script>

<style lang="less">
  html, body {
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
      transition: all .5s ease;
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
