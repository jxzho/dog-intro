<template>
  <div class="home">
    <div class="avatar-wrapper">
      <div class="avatar" @mouseenter="dialogueShow = true" @mouseleave="dialogueShow = false">
        <img src="https://cdn.junxio.com/static/pepsi.png">
      </div>
        <transition>
          <div class="dialogue" v-show="dialogueShow">hello~</div>
        </transition>
    </div>

    <h1 class="name">钟俊雄</h1>
    <social></social>

    <ICP />
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      dialogueShow: false
    }
  }
}
</script>

<style scoped lang="less">
@avatarWidth: 150px;

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
}
</style>