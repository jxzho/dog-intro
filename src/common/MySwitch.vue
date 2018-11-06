<template>
  <div :class="['switch', {on: ifSwitch, off: !ifSwitch}]">
    <transition name="off">
      <span class="switch-info off" v-show="!ifSwitch">OFF</span>
    </transition>
    <transition name="on">
      <span class="switch-info on" v-show="ifSwitch">ON</span>
    </transition>
    <button :class="['switch-btn', {on: ifSwitch, off: !ifSwitch}]" 
            @click="handleSwitchClick">
    </button>
  </div>
</template>

<script>
export default {
  name: 'MySwitch',
  data () {
    return {
      ifSwitch: true
    }
  },
  methods: {
    handleSwitchClick () {
      this.ifSwitch = !this.ifSwitch;
      // ifSwitch：true 轮盘播放
      this.ifSwitch && this.$eventBus.$emit('onPlay');
      this.ifSwitch || this.$eventBus.$emit('offPlay');
    }
  }
}
</script>

<style scoped lang="less">
@switchWidth: 100px;
@btnWidth: 40px;
@distance: unit(@switchWidth - @btnWidth, px);
.switch {
  position: absolute;
  top: 20px;
  left: 20px;
  width: @switchWidth;
  border: 3px solid transparent;
  display: flex;
  align-items: center;
  background: #eee;
  border-radius: 50px;
  overflow: hidden;
  transition: 1s cubic-bezier(1, 0.01, 0.21, 0.99) .12s;
  user-select: none;
  z-index: 3;
  &.on {
    background: #9c90c2;
  }
  &.off {
    background: #eee;
  }
  .switch-info {
    display: block;
    position: absolute;
    font-size: 16px;
    line-height: 16px;
    top: 50%;
    margin-top: -8px;
    font-weight: 800;
    &.off {
      right: unit(@btnWidth / 2, px);
    }
    &.on {
      color: #fff;
      left: unit(@btnWidth / 2, px);
    }
  }
  .switch-btn {
    box-sizing: border-box;
    border: 2px solid #9c90c2;
    width: @btnWidth;
    height: @btnWidth;
    border-radius: unit(@btnWidth/2, px);
    background: #fff;
    box-shadow: 0 0 2px rgba(0, 0, 0, .2);
    cursor: pointer;
    transition: all 1s cubic-bezier(1, 0.01, 0.21, 0.99);
    &.on {
      transform: translateX(@distance);
      border: 0px solid transparent;
    }
    &.off {
      transform: translateX(0);
    }
  }
}
.off-enter{opacity: 0;transform: translateX(-30px);} 
.off-leave-to {opacity: 0;transform: translateX(-30px);}
.on-enter{opacity: 0;transform: translateX(30px);} 
.on-leave-to {opacity: 0;transform: translateX(30px)}
.off-enter-active, .on-enter-active{transition: 1s cubic-bezier(1, 0.01, 0.21, 0.99) .12s;}
.off-leave-active, .on-leave-active {transition: .1s .5s;}
</style>