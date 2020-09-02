<template>
  <div class="icp-info-cont" v-if="!isMobile">
    <a :href="sourceUrl" target="_blank">
      <span :class="`source x_link left ${type}`">Source</span>
    </a>
    <em :class="`separator x_link ${type}`">&#124;</em>
    <a :href="recordUrl" target="_blank">
      <p :class="`record x_link right ${type}`">粤&nbsp;ICP&nbsp;备{{ icp }}号</p>
    </a>
  </div>
</template>

<script>
export default {
  name: 'IcpInfo',
  props: {
    type: {
      type: String,
      default: 'dark'
    }
  },
  data () {
    return {
      sourceUrl: `https://github.com/${githubUsername}/junxio.com`,
      recordUrl: 'http://www.beian.miit.gov.cn',
      icp: 20001943,
      isMobile: false
    }
  },
  created () {
    this.init()
  },
  methods: {
    init () {
      this.isMobile = /Mobile/.test(navigator.userAgent)
    }
  },
}
</script>

<style lang="less" scoped>
.icp-info-cont {
  position: absolute;
  bottom: 20px;
  display: flex;
  font-size: 11px;
  
  .source {
    display: inline-block;
  }

  .separator {
    margin: 0 10px;
  }
}
</style>