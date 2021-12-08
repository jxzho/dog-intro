<template>
  <div class="home">
    <div class="avatar-wrapper">
      <div class="avatar" @mouseenter="dialogueShow = true" @mouseleave="dialogueShow = false">
        <img :src="oRo.Home.avatarUrl" />
      </div>
      <transition>
        <div class="dialogue" v-show="dialogueShow">{{ oRo.Home.greeting }}</div>
      </transition>
    </div>
    <h2 class="name">{{ oRo.Home.myName }}</h2>
    <SocialPanel />
    <ICP />

    <svg
      v-if="iconPointerVisible"
      class="icon-pointer-up"
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
    >
      <path
        d="M275.2 166.4v172.354a231.04 231.04 0 0 0-44.8-4.352c-95.828 0-166.4 70.144-166.4 184 0 90.628 97.074 114.004 157.568 151.414 24.826 15.47 46.634 33.988 66.506 51.702l.292.262.296.258C323.614 752.676 336 768.472 336 782.4v5.358c-9.904 11.494-16 27.072-16 44.24v128c0 35.346 25.788 64 57.6 64h460.8c31.812 0 57.6-28.654 57.6-64v-128c0-17.168-6.096-32.746-16-44.24V782.4c0-57.376 80-134.274 80-254.4v-42.598c0-125.084-77.316-197.6-182.29-199.88-35.626-24.964-81.57-36.982-125.582-31.97A186.296 186.296 0 0 0 608 237.694V166.4C608 75.53 532.832 0 441.6 0c-90.198 0-166.4 76.202-166.4 166.4zm236.8 0v182.052c29.338-25.674 85.65-28.83 122.1 9.9 39.292-22.454 91.248-3.374 107.25 25.85C819.606 371.154 864 404.354 864 485.402V528c0 90.982-71.826 154.42-79.352 240H431.142c-5.928-50.478-42.444-85.932-79.192-118.15-25.3-22.55-50.6-43.45-79.75-61.598C225.424 559.29 160 535.988 160 518.4c0-46.75 17.6-88 70.4-88 70.4 0 106.15 52.8 140.8 52.8V166.4c0-36.85 33-70.4 70.4-70.4 37.95 0 70.4 32.45 70.4 70.4zM768 848c26.51 0 48 21.49 48 48s-21.49 48-48 48-48-21.49-48-48 21.49-48 48-48z"
      />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'Home',
  meta: {
    label: '主页',
    page: 1,
  },
  data() {
    const firstIn = !localStorage.getItem('page-home-leaved')
    const isMobile = navigator.userAgent.match(/Mobile/g)
    return {
      dialogueShow: false,
      oRo: { ...this.$global },
      iconPointerVisible: isMobile && firstIn,
    }
  },
  watch: {
    '$store.state.curIndex'(val) {
      if (val !== 0) {
        localStorage.setItem('page-home-leaved', true)
        this.iconPointerVisible = false
      }
    },
  },
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
    font-size: 24px;
    color: rgba(0, 0, 0, 0.7);
  }

  @keyframes slide-fade-up {
    from {
      transform: translate(-50%, 0);
    }
    to {
      transform: translate(-50%, -20vw);
      opacity: 0.1;
    }
  }
  .icon-pointer-up {
    position: fixed;
    bottom: 80px;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 30vw;
    height: 30vw;
    fill: rgba(#000, 0.2);
    animation: slide-fade-up infinite 1s ease;
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
