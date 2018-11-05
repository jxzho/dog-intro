<template>
  <div class="skill">
    <title-cp title="技能"></title-cp>
    <dial class="dial"></dial>
  </div>
</template>

<script>
import TitleCp from 'common/Title.vue';
import Dial from 'common/Dial.vue';
export default {
  data () {
    return {
      curIndex: 0
    }
  },
  name: 'PageT',
  components: {
    TitleCp, Dial
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
    background: linear-gradient(to right, #0f0c29, #302b63, #24243e);
  }
</style>