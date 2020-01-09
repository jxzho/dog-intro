<template>
  <h1 class="title">{{title}}</h1>
</template>

<script>
export default {
  props:{
    title: String 
  },
  name: 'PageTitle'
}
</script>

<style scoped lang="less">
@fontSize:50px;

.title {
  font-size: @fontSize;
  line-height: @fontSize;
  font-weight: 600;
  color: @grey;
  text-shadow: 2px 1px 6px rgba(0, 0, 0, .2)
}
</style>