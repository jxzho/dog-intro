<template>
  <div class="skill">
    <page-title title="技能"></page-title>
    <dial class="dial"></dial>
    <my-switch></my-switch>
    <div class="skill-panel">
      <div class="skill-item">
        <img src="https://cdn.junxio.com/static/pocket_monster/bullbasaur.svg">
        <span>javaScript</span>
      </div>
      <div class="skill-item">
        <img src="https://cdn.junxio.com/static/pocket_monster/caterpie.svg">
        <span>css</span>
      </div>
      <div class="skill-item">
        <img src="https://cdn.junxio.com/static/pocket_monster/mankey.svg">
        <span>html</span>
      </div>
      <div class="skill-item">
        <img src="https://cdn.junxio.com/static/pocket_monster/pidgey.svg">
        <span>jquery</span>
      </div>
      <div class="skill-item">
        <img src="https://cdn.junxio.com/static/pocket_monster/pikachu.svg">
        <span>vue</span>
      </div>
      <div class="skill-item">
        <img src="https://cdn.junxio.com/static/pocket_monster/psyduck.svg">
        <span>node</span>
      </div>
      <div class="skill-item">
        <img src="https://cdn.junxio.com/static/pocket_monster/snorlax.svg">
        <span>ps</span>
      </div>
      <div class="skill-item">
        <img src="https://cdn.junxio.com/static/pocket_monster/squirtle.svg">
        <span>less</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      curIndex: 0
    }
  },
  name: 'Skill',
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
      color: rgba(0, 0, 0, .8);
      font-size: 16px;
    }
  }
}
</style>