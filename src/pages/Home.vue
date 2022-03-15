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
        d="M170.667 375.467c-10.24 0-17.067-6.827-17.067-17.067V17.067C153.6 6.827 160.427 0 170.667 0s17.066 6.827 17.066 17.067V358.4c0 10.24-6.826 17.067-17.066 17.067z"
        fill="#333"
      />
      <path
        d="M238.933 102.4c-3.413 0-10.24 0-13.653-3.413L170.667 40.96 112.64 98.987c-3.413 3.413-17.067 3.413-23.893 0s-6.827-17.067 0-23.894l68.266-68.266C163.84 0 177.493 0 180.907 3.413l68.266 68.267c6.827 6.827 6.827 17.067 0 23.893-3.413 6.827-6.826 6.827-10.24 6.827zm460.8 921.6H593.92c-51.2 0-102.4-20.48-136.533-54.613L136.533 665.6c-10.24-10.24-17.066-27.307-17.066-40.96s6.826-34.133 17.066-44.373c37.547-37.547 102.4-40.96 143.36-10.24l75.094 61.44V256c3.413-44.373 44.373-85.333 88.746-85.333 23.894 0 40.96 10.24 58.027 23.893 13.653-34.133 40.96-58.027 78.507-58.027 44.373 0 85.333 40.96 85.333 85.334v221.866c13.653-10.24 30.72-17.066 51.2-17.066 40.96 0 75.093 30.72 81.92 68.266 13.653-10.24 34.133-17.066 54.613-17.066 47.787 0 85.334 37.546 85.334 81.92v235.52C938.667 921.6 832.853 1024 699.733 1024zm-481.28-440.32c-20.48 0-40.96 6.827-54.613 20.48-3.413 3.413-6.827 10.24-6.827 17.067s3.414 13.653 6.827 17.066L481.28 942.08c30.72 27.307 71.68 44.373 116.053 44.373h105.814c112.64 0 204.8-88.746 204.8-197.973V552.96c0-27.307-23.894-47.787-51.2-47.787s-54.614 17.067-54.614 44.374v10.24c0 10.24-6.826 17.066-17.066 17.066S768 570.027 768 559.787V512c0-27.307-23.893-51.2-51.2-51.2s-51.2 23.893-51.2 51.2v51.2c0 10.24-6.827 17.067-17.067 17.067s-17.066-6.827-17.066-17.067V221.867c0-27.307-23.894-51.2-51.2-51.2-34.134 0-47.787 34.133-51.2 47.786V563.2c0 10.24-6.827 17.067-17.067 17.067s-17.067-6.827-17.067-17.067V259.413c0-23.893-23.893-54.613-51.2-54.613s-51.2 23.893-51.2 51.2v409.6c0 6.827-3.413 13.653-10.24 13.653s-13.653 3.414-17.066-3.413l-102.4-81.92c-13.654-6.827-30.72-10.24-44.374-10.24z"
        fill="#333"
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
    // const firstIn = !localStorage.getItem('page-home-leaved')
    const isMobile = navigator.userAgent.match(/Mobile/g)
    return {
      dialogueShow: false,
      oRo: { ...this.$global },
      iconPointerVisible: isMobile, // && firstIn,
    }
  },
  watch: {
    'state.curIndex'(val) {
      if (val !== 0) {
        // localStorage.setItem('page-home-leaved', true)
        this.iconPointerVisible = false
      }
    },
  },
  mounted() {
    this.$emit('mounted')
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
