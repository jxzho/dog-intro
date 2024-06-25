<template>
  <div class="home">
    <div class="avatar-wrapper">
      <div class="avatar" @mouseenter="dialogueShow = true" @mouseleave="dialogueShow = false">
        <img :src="oRo.Home.avatarUrl" :srcset="avatarSrcset" />
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
import { setImgSrcset } from '@/utils'

export default {
  name: 'Home',
  meta: {
    label: '主页',
    page: 1,
  },
  data() {
    const oRo = { ...this.$global }

    const avatarSrcset = setImgSrcset({
      ['1x']: oRo.Home.avatarUrl + '?x-oss-process=image/resize,w_150',
      ['2x']: oRo.Home.avatarUrl + '?x-oss-process=image/resize,w_300',
      ['3x']: oRo.Home.avatarUrl + '?x-oss-process=image/resize,w_450',
    })

    return {
      dialogueShow: false,
      oRo,
      avatarSrcset
    }
  },
  mounted() {
    this.$emit('mounted')
  }
}
</script>

<style scoped lang="less">
@avatarWidth: 150px;

.home {
  background: linear-gradient(90deg, #ececec 50%, #eee 0);
  background-size: 15px;
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
      transition: 0.2s;

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
    font-size: 28px;
    font-weight: bold;
    color: rgba(0, 0, 0, 0.7);
  }

  @keyframes slide-fade-up {
    from {
      transform: translate(-50%, 0);
      opacity: 0.8;
    }
    to {
      transform: translate(-50%, -20vw);
      opacity: 0.1;
    }
  }
  .icon-pointer-up {
    position: fixed;
    bottom: 50px;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 15vw;
    height: 15vw;
    fill: rgba(#000, 0.2);
    animation: slide-fade-up infinite 1.5s ease;
  }
}

.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translate(-20px, 0);
}

.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}
</style>
