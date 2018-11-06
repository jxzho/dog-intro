<template>
  <div class="intro">
    <title-cp :title="title"></title-cp>
    <div class="brief">
      前端学徒，熟悉JavaScript、Vue
    </div>
    <div class="person-info">
      <div class="person-info-item">
        <img class="state-icon" src="https://cdn.junxio.site/static/info/cake.svg">
        <span class="state">1996.02.25</span>
      </div>
      <div class="person-info-item">
        <img class="state-icon" src="https://cdn.junxio.site/static/info/university.svg">
        <span class="state">东莞理工学院</span>
      </div>
      <div class="person-info-item">
        <img class="state-icon" src="https://cdn.junxio.site/static/info/pin.svg">
        <span class="state">home.深圳</span>
      </div>
      <div class="person-info-item">
        <img class="state-icon" src="https://cdn.junxio.site/static/info/mail.svg">
        <span class="state">me@junxio.site</span>
      </div>
      <div class="person-info-item">
        <img class="state-icon" src="https://cdn.junxio.site/static/info/phone.svg">
        <span class="state">13049896626</span>
      </div>
      <div class="person-info-item">
        <img class="state-icon" src="https://cdn.junxio.site/static/info/cap.svg">
        <span class="state">计算机科学与技术</span>
      </div>
    </div>
  </div>
</template>

<script>
import TitleCp from 'common/Title';
export default {
  data () {
    return {
      title: "自我介绍"
    }
  },
  name: 'PageS',
  components: {
    TitleCp
  }
}
</script>

<style scoped lang="less">
@blue:#2c9ab7;
@panelWidth: 1000px;
@fontSize: 13px;
.intro {
  background: #faca51;
  display: flex;
  flex-direction: column;
  align-items: center;
  perspective: 1000px;
  padding: 40px;
  box-sizing: border-box;
  .brief {
    margin-top: 40px;
    padding: 20px 0;
    width: @panelWidth;
    text-align: center;
    background: #fff;
    border-radius: 4px;
    font-size: @fontSize;
    color: rgba(0, 0, 0, .7);
    box-shadow: 0 4px 10px rgba(0, 0, 0, .1);
  }
  .person-info {
    margin-top: 30px;
    width: @panelWidth;
    background: #fff;
    border-radius: 4px;
    font-size: @fontSize;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    box-shadow: 0 4px 10px rgba(0, 0, 0, .1);
    .person-info-item {
      width: 30%;
      box-sizing: border-box;
      margin: 25px 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .state-icon {
        width: 25px;
        height: 25px;
      } 
      .state {
        margin: 4px 0 0 0;
      }
    }
  }
}  
</style>