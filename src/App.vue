<template>
  <div class="container">
    <page-f></page-f>
    <page-s></page-s>
    <page-t></page-t>
  </div>
</template>

<script>
import PageF from '@/components/pages/PageF.vue';
import PageS from '@/components/pages/PageS.vue';
import PageT from '@/components/pages/PageT.vue';
export default {
  name: "app",
  components: {
    PageF, PageS, PageT
  }
};
</script>

<style>

</style>
