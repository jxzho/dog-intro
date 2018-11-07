<template>
  <div class="home">
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
      <em class="separator">&#124;</em>
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
@avatarWidth: 150px;
@footerColor: rgba(0, 0, 0, .4);
.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translateX(-50px);
}

.v-enter-active,
.v-leave-active {
  transition: all .6s;
}

.home {
  background: @grey;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .avatar-wrapper {
    position: relative;

    .avatar {
      margin-top: -100px;
      width: @avatarWidth;
      height: @avatarWidth;
      background: #fff;
      border: 4px solid #fff;
      border-radius: unit(@avatarWidth/2, px);
      overflow: hidden;
      box-shadow: 0 5px 10px rgba(0, 0, 0, 0.16);
      transition: .2s;
      img {
        width: 100%;
      }
      &:hover {
      box-shadow: 0 5px 12px rgba(0, 0, 0, 0.3); 
      }
    }

    .dialogue {
      position: absolute;
      right: -80px;
      top: -50px;
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
    font-size: 11px;
    color: rgba(0, 0, 0, .3);
    
    .source{
      color: @footerColor;
    }
    .separator {
      margin: 0 10px;
      color: @footerColor;
    }
    .records {
      color: @footerColor;
    }
  }
}
</style>