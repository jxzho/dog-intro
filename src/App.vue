<template>
  <div class="container" 
       ref="container">
    <page-f :class="['page']" @transitionend.native="handleIfTran"></page-f>
    <page-s :class="['page']" @transitionend.native="handleIfTran"></page-s>
    <page-t :class="['page']" @transitionend.native="handleIfTran"></page-t>
    <progress-bar :style="pgsStyle"></progress-bar>
  </div>
</template>

<script>
import PageF from '@/components/pages/PageF.vue';
import PageS from '@/components/pages/PageS.vue';
import PageT from '@/components/pages/PageT.vue';
import ProgressBar from '@/components/progress/ProgressBar.vue';
import Velocity from 'velocity-animate';
export default {
  name: "app",
  data () {
    return {
      timer: null,
      index: 0,
      pageList: [],
      transitionEnd: true
    }
  },
  components: {
    PageF, PageS, PageT,
    ProgressBar
  },
  methods: {
    handleIfTran () {
      this.transitionEnd = true;
      clearTimeout(this.timer);
      this.timer = null;
    },
    handleMouseWheel (e) {
      clearTimeout(this.timer);
      this.timer = null;
      if (!this.transitionEnd) return;
      if (this.pageList.length == 0) return;
      if (this.index == 0 && e.wheelDelta > 0) return;
      if (this.index == this.pageList.length - 1 && e.wheelDelta < 0) return;
      this.timer = setTimeout(() => {
        this.transitionEnd = false
        e.wheelDelta > 0  
          ? this.runUpward(this.index) 
          : this.runDownward(this.index);
      }, 100);
    },
    runUpward (index) {
      const curIndex = index,
            preIndex = ( --index );
      this.pageList[curIndex].classList.remove('curPage');
      this.pageList[curIndex].classList.add('nextPage');
      this.pageList[preIndex].classList.remove('prePage');
      this.pageList[preIndex].classList.add('curPage');
      this.index--;
    },
    runDownward (index) {
      const curIndex = index,
            nextIndex = ( ++index );
      this.pageList[curIndex].classList.remove('curPage');
      this.pageList[curIndex].classList.add('prePage');
      this.pageList[nextIndex].classList.remove('nextPage');
      this.pageList[nextIndex].classList.add('curPage');
      this.index++;
    },
    initPos (defIndex) {
      this.$nextTick(() => {
        const con = this.$refs['container'];
        const pageList = Array.from(con.getElementsByClassName('page'));
        pageList.forEach((item, index) => {
          if (index < defIndex) {
            item.classList.add('prePage');
          } else if (index == defIndex) {
            item.classList.add('curPage');
          } else if(index > defIndex) {
            item.classList.add('nextPage');
          }
        });
        this.pageList = pageList;
      });
    }
  },
  computed: {
    pgsStyle () {
      return {
        width: `${ (this.index + 1) / this.pageList.length * 100 }%`
      }
    }
  },
  watch: {
  },
  mounted () {
    window.addEventListener('mousewheel', this.handleMouseWheel);
    this.initPos(0);
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
    .page {
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      transition: all 1s ease;
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
