<template>
  <div class="icp-info-cont" v-if="show">
    <a href="https://github.com/junxio220/junxio.com" target="_blank">
      <span class="source x_link left">Source</span>
    </a>
    <em class="separator">&#124;</em>
    <a href="http://www.beian.miit.gov.cn" target="_blank">
      <p class="record x_link right">粤&nbsp;ICP&nbsp;备{{ icp }}号</p>
    </a>
  </div>
</template>

<script>
export default {
  name: 'IcpInfo',
  data () {
    return {
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
  computed: {
    show () {
      return !this.isMobile
    }
  }
}
</script>

<style lang="less" scoped>
@footerColor: rgba(0, 0, 0, .4);
.icp-info-cont {
  position: absolute;
  bottom: 20px;
  display: flex;
  font-size: 11px;
  color: rgba(0, 0, 0, .3);
  
  .source {
    display: inline-block;
    color: @footerColor;
  }

  .separator {
    margin: 0 10px;
    color: @footerColor;
  }

  .record {
    color: @footerColor;
  }
}
</style>