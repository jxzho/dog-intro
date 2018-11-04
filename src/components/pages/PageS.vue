<template>
  <div class="intro">
    <title-cp :title="title"></title-cp>
    <div class="brief">
      前端学徒，熟悉JavaScript、Vue
    </div>
    <div class="person-info">
      <div class="person-info-item">
        <img class="state-icon" src="https://cdn.junxio.site/static/info/birthday.svg">
        <span class="state">1996.02.25</span>
      </div>
      <div class="person-info-item">
        <img class="state-icon" src="https://cdn.junxio.site/static/info/college.svg">
        <span class="state">东莞理工学院</span>
      </div>
      <div class="person-info-item">
        <img class="state-icon" src="https://cdn.junxio.site/static/info/location.svg">
        <span class="state">home.深圳</span>
      </div>
      <div class="person-info-item">
        <img class="state-icon" src="https://cdn.junxio.site/static/info/email.svg">
        <span class="state">me@junxio.site</span>
      </div>
      <div class="person-info-item">
        <img class="state-icon" src="https://cdn.junxio.site/static/info/phone.svg">
        <span class="state">13049896626</span>
      </div>
      <div class="person-info-item">
        <img class="state-icon" src="https://cdn.junxio.site/static/info/major.svg">
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
    padding: 15px 0;
    width: 620px;
    text-align: center;
    background: #fff;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 600;
    color: rgba(0, 0, 0, .7);
    box-shadow: 0 4px 10px rgba(0, 0, 0, .1);
  }
  .person-info {
    margin-top: 20px;
    width: 620px;
    background: #fff;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 600;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    box-shadow: 0 4px 10px rgba(0, 0, 0, .1);
    .person-info-item {
      width: 30%;
      box-sizing: border-box;
      margin: 20px 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .state-icon {
        width: 20px;
        height: 20px;
      } 
      .state {
        margin: 4px 0 0 0;
      }
    }
  }
}  
</style>