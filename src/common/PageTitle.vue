<!--
<template>
  <h1 class="title">{{title}}</h1>
</template>
-->
<script>
export default {
  name: 'PageTitle',
  render (h) {
    return h('h1', {
      class: 'title'
    }, this.$slots.default)
  }
}
</script>

<style scoped lang="less">
@fontSize:50px;

.title {
  font-size: @fontSize;
  line-height: @fontSize;
  color: @grey;
  text-shadow: 2px 1px 8px rgba(0, 0, 0, .3)
}
</style>