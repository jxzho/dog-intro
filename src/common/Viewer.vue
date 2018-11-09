<template>
  <transition name="viewer">
    <div class="viewer" 
       v-show="ifShowViewer"
       @click="handleCloseViewer">
      <img class="image" :src="url">
    </div>  
  </transition>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'Viewer',
  methods: {
    handleCloseViewer () {
      this.$store.commit('hideViewer');
    }
  },
  computed: {
    ...mapState(['ifShowViewer', 'url'])
  }
}
</script>

<style scoped lang="less">
@imageWidth: 180px;
.viewer {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, .8);
  .image {
    width: @imageWidth;
    height: @imageWidth;
    border-radius: 5px;
  }
}

.viewer-enter, .viewer-leave-to {
  opacity: 0;
}
.viewer-enter-active, .viewer-leave-active {
  transition: .3s;
}
</style>