<template>
  <div class="home">
    <div class="avatar-wrapper">
      <div class="avatar" @mouseenter="dialogueShow = true" @mouseleave="dialogueShow = false">
        <img :src="oRo.Home.avatarUrl">
      </div>
      <transition>
        <div class="dialogue" v-show="dialogueShow">{{ oRo.Home.greeting }}</div>
      </transition>
    </div>
    <h2 class="name">{{ oRo.Home.myName }}</h2>
    <SocialPanel />
    <ICP />
  </div>
</template>

<script>
export default {
  name: 'Home',
  meta: {
    label: '主页',
    page: 1
  },
  data() {
    return {
      dialogueShow: false,
      oRo: { ...this.$global }
    }
  }
}
</script>

<style scoped lang="less">
@avatarWidth: 150px;

.home {
  background: @grey;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .avatar-wrapper {
    position: relative;

    .avatar {
      width: @avatarWidth;
      height: @avatarWidth;
      background: #fff;
      border: 4px solid #fff;
      border-radius: unit(@avatarWidth, px);
      overflow: hidden;
      box-shadow: 0 5px 10px rgba(0, 0, 0, 0.16);
      transition: .2s;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      
      &:hover {
        box-shadow: 0 5px 25px -5px rgba(0, 0, 0, 0.4); 
      }
    }

    .dialogue {
      position: absolute;
      left: 100%;
      top: 30px;
      color: #fff;
      font-weight: 100;
      padding: 10px 20px;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
      background: @blue;
      box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.16);
      white-space: nowrap;
    }
  }

  .name {
    margin: 40px 0;
    font-size: 24px;
    color: rgba(0, 0, 0, 0.7);
    font-weight: 600;
  }
}

.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translate(-20px, 0);
}

.v-enter-active,
.v-leave-active {
  transition: all .5s ease;
}
</style>