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
import { GithubUsername } from '@/modules/init'

export default {
  name: 'IcpInfo',
  props: {
    type: {
      type: String,
      default: 'dark',
    },
  },
  data() {
    return {
      sourceUrl: `https://github.com/${GithubUsername}/dog-intro`,
      recordUrl: 'https://beian.miit.gov.cn/#/Integrated/index',
      icp: 2023134810,
      isMobile: false,
    }
  },
  created() {
    this.init()
  },
  methods: {
    init() {
      this.isMobile = /Mobile/.test(navigator.userAgent)
    },
  },
}
</script>

<style lang="less" scoped>
.icp-info-cont {
  position: absolute;
  bottom: 20px;
  display: flex;
  font-size: 12px;

  .source {
    display: inline-block;
  }

  .separator {
    margin: 0 10px;
  }
}
</style>
