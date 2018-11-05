<template>
  <div class="skill">
    <title-cp title="技能"></title-cp>
    
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
@panelWidth: 700px;
  .skill {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px;
    box-sizing: border-box;
    background: -webkit-linear-gradient(top, #fff3b2, #ffb6af);
  }
</style>