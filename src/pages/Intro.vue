<template>
  <div class="intro">
    <page-title>{{ oRo.Introduce.pageTitle }}</page-title>
    <div class="brief" v-html="getHTML(oRo.Introduce.brief)" />
    <div class="person-info">
      <div class="person-info-item">
        <img class="state-icon" :src="oRo.Introduce.major.iconUrl" />
        <span class="state">{{ oRo.Introduce.major.text }}</span>
      </div>
      <div class="person-info-item">
        <img class="state-icon" :src="oRo.Introduce.birth.iconUrl" />
        <span class="state">{{ oRo.Introduce.birth.text }}</span>
      </div>
      <div class="person-info-item">
        <img class="state-icon" :src="oRo.Introduce.university.iconUrl" />
        <span class="state">{{ oRo.Introduce.university.text }}</span>
      </div>
      <div class="person-info-item">
        <img class="state-icon" :src="oRo.Introduce.home.iconUrl" />
        <span class="state">{{ oRo.Introduce.home.text }}</span>
      </div>
      <div class="person-info-item">
        <img class="state-icon" :src="oRo.Introduce.mail.iconUrl" />
        <span class="state">{{ oRo.Introduce.mail.text }}</span>
      </div>
      <div class="person-info-item">
        <img class="state-icon" :src="oRo.Introduce.tel.iconUrl" />
        <span class="state">{{ oRo.Introduce.tel.text }}</span>
      </div>
    </div>
    <ICP type="light" />
  </div>
</template>

<script>
const getHTML = string => {
  const htmlText = string.replace(/(`([a-zA-Z]+)`)/g, '<span class="code">$2</span>')
  return htmlText
}

export default {
  name: 'Intro',
  meta: {
    label: '关于我的',
    page: 2,
  },
  data() {
    return {
      oRo: { ...this.$global },
    }
  },
  methods: {
    getHTML,
  },
}
</script>

<style scoped lang="less">
@panelWidth: 70%;

.intro {
  background: @blue;
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
    color: #333;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }

  .person-info {
    margin-top: 30px;
    width: @panelWidth;
    background: #fff;
    border-radius: 4px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    overflow: hidden;

    .person-info-item {
      width: 30%;
      box-sizing: border-box;
      margin: 25px 0;
      display: flex;
      flex-direction: column;
      align-items: center;

      .state-icon {
        width: 25px;
        height: 25px;
      }

      .state {
        color: #555;
        margin: 8px 0 0 0;
      }
    }
  }
}
</style>
