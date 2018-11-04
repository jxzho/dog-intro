<template>
  <div class="skill">
    <title-cp title="技能"></title-cp>
    <p class="define">let skills = [ ];</p>
    <div class="expression">
      <span class="express-left">skills.push(</span>
      <div class="skill-panel" @click="curIndex = ++curIndex > 4 ? 0 : curIndex">
        <div class="skill-item" v-show="curIndex == 0">1</div>
        <div class="skill-item" v-show="curIndex == 1">2</div>
        <div class="skill-item" v-show="curIndex == 2">3</div>
        <div class="skill-item" v-show="curIndex == 3">4</div>
        <div class="skill-item" v-show="curIndex == 4">5</div>
      </div>
      <span class="express-right">);</span>
    </div>
  </div>
</template>

<script>
import TitleCp from 'common/Title.vue';
export default {
  data () {
    return {
      curIndex: 0
    }
  },
  name: 'PageT',
  components: {
    TitleCp
  }
}
</script>

<style scoped lang="less">
@bgColor: #646d8d;
@fontWeight: 800;
@skillItemWidth: 200px;
.fontStyle () {
  display: block;
  font-size: 90px;
  font-weight: @fontWeight;
  color: #fff;
  text-shadow: 2px 2px 30px rgba(0, 0, 0, .4);
}
  .skill {
    background: @bgColor;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px;
    box-sizing: border-box;
    .define {
      margin-top: 40px;
      font-size: 60px;
      line-height: 60px;
      font-weight: @fontWeight;
      color: #fff;
      text-shadow: 2px 2px 30px rgba(0, 0, 0, .4);
    }
    .expression {
      margin-top: 60px;
      width: 800px;
      line-height: 180px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .express-left {
        .fontStyle();
      }

      .skill-panel {
        width: @skillItemWidth;
        height: @skillItemWidth;
        border-radius: unit(@skillItemWidth/2, px);
        background: #fff;
        box-shadow: 0 0 30px rgba(0, 0, 0, .8);
        .skill-item {
          height: 100%;
          text-align: center;
        }
      }

      .express-right {
        .fontStyle();
      }
    }
  }
</style>