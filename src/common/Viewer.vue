<template>
  <transition name="viewer">
    <div
      v-if="url"
      class="viewer"
      v-show="ifShowViewer"
      @click="handleCloseViewer">
      <img class="image" :src="url">
    </div>  
  </transition>
</template>

<script>
import { computed } from '@vue/composition-api'

export default {
  name: 'Viewer',
  setup (_, ctx) {
    const store = ctx.root.$store

    return {
      ifShowViewer: computed(() => store.state.ifShowViewer),
      url: computed(() => store.state.url),
      handleCloseViewer () {
        store.commit('hideViewer')
      }
    }
  },
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