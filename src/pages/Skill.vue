<template>
  <div class="skill">
    <page-title>{{ oRo.Skill.pageTitle }}</page-title>
    <dial class="dial"></dial>
    <my-switch></my-switch>

    <div class="skill-panel">
      <div class="skill-item" v-for="item of oRo.Skill.list" :key="item.text">
        <!-- <img class="icon" :src="item.iconUrl"> -->
        <span>{{ item.text }}</span>
      </div>
    </div>

    <ICP type="light" />
  </div>
</template>

<script>
export default {
  name: 'Skill',
  meta: {
    label: '技能',
    page: 3,
  },
  data() {
    return {
      oRo: { ...this.$global },
    }
  },
}
</script>

<style scoped lang="less">
.skill {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  box-sizing: border-box;
  background: #06d6a0;
  position: relative;
  overflow: hidden;

  .skill-panel {
    margin-top: 20px;
    border-radius: 4px;
    width: 500px;
    background: #fff;
    display: none;

    .skill-item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 28px 0;
      color: rgba(0, 0, 0, 0.8);
      font-size: 16px;
    }
  }
}
</style>
