<template>
  <div class="skill">
    <title-cp title="技能"></title-cp>
    <dial class="dial"></dial>
    <my-switch></my-switch>
    <div class="skill-panel">
      <div class="skill-item">javaScript</div>
      <div class="skill-item">css</div>
      <div class="skill-item">html</div>
      <div class="skill-item">jquery</div>
      <div class="skill-item">vue</div>
      <div class="skill-item">node</div>
      <div class="skill-item">ps</div>
      <div class="skill-item">less</div>
    </div>
  </div>
</template>

<script>
import TitleCp from 'common/Title.vue';
import Dial from 'common/Dial.vue';
import mySwitch from 'common/MySwitch.vue';
export default {
  data () {
    return {
      curIndex: 0
    }
  },
  name: 'PageT',
  components: {
    TitleCp, Dial, mySwitch
  }
}
</script>

<style scoped lang="less">
.skill {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  box-sizing: border-box;
  background: #159957;
  position: relative;
  .skill-panel {
    margin-top: 20px;
    border-radius: 4px;
    width: 500px;
    background: #fff;
    .skill-item {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 20px 0;
      color: rgba(0, 0, 0, .8);
      font-size: 20px;
      font-weight: 100;
    }
  }
}
</style>