<template>
  <div class="intro">
    <div class="avatar-wrapper">
      <div class="avatar" @mouseenter="dialogueShow = true" @mouseleave="dialogueShow = false">
        <img src="https://cdn.junxio.site/static/pepsi.png">
      </div>
        <transition>
          <div class="dialogue" v-show="dialogueShow">hello~</div>
        </transition>
    </div>
    <h1 class="name">钟俊雄</h1>
    <social></social>
    <footer class="footer">
      <a href="https://github.com/junxio220/xio_site" target="_blank">
        <span class="source">Source</span>
      </a>
      <em>&#124;</em>
      <a href="http://www.miitbeian.gov.cn/publish/query/indexFirst.action" target="_blank">
        <p class="records">粤&nbsp;ICP&nbsp;备案18133198</p>
      </a>
    </footer>
  </div>
</template>
<script>
import Social from '@/common/Social.vue';
export default {
  name: 'PageF',
  data() {
    return {
      dialogueShow: false
    }
  },
  components: {
    Social
  }
}
</script>
<style scoped lang="less">
@avatarWidth: 120px;

.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translateX(-30%);
}

.v-enter-active,
.v-leave-active {
  transition: all .6s;
}

.intro {
  background: @grey;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .avatar-wrapper {
    position: relative;

    .avatar {
      margin-top: -70px;
      width: @avatarWidth;
      height: @avatarWidth;
      background: #fff;
      border: 4px solid #fff;
      border-radius: unit(@avatarWidth/2, px);
      overflow: hidden;
      box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);

      img {
        width: 100%;
      }
    }

    .dialogue {
      position: absolute;
      left: 100%;
      top: -40px;
      color: #fff;
      font-weight: 100;
      padding: 10px 20px;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
      background: #5c5cfb;
      box-shadow: -1px 2px 2px rgba(0, 0, 0, 0.2);
    }
  }

  .name {
    margin-top: 20px;
    font-size: 24px;
    color: rgba(0, 0, 0, 0.7);
    font-weight: 600;
  }

  .footer {
    position: absolute;
    bottom: 20px;
    display: flex;
    font-size: 12px;
    color: rgba(0, 0, 0, 0.4);

    em {
      margin: 0 10px;
    }
  }
}
</style>