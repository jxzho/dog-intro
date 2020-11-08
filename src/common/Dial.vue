<template>
  <div class="dial">
    <div class="center">
      <template v-for="(item, index) of planets">
        <transition :key="`dial-tran-${index}`">
          <span :class="['item', `item${ index + 1 }`]" v-show="curIndex == index"></span>
        </transition>
      </template>
    </div>
    <div class="planet" ref="planetRef">
      <span v-for=" (item, index) of planets" :class="['item', `item${ index + 1 }`]" :key="`planet-item-${index}`" @click="handleRotate(index)">
        {{item}}
      </span>
    </div>
  </div>
</template>
<script>
import { reactive, ref, onMounted, watchEffect, unref } from '@vue/composition-api'

const name = 'Dial'

export default {
  name,
  setup (_, ctx) {
    const $eventBus = ctx.root.$eventBus
    const dialDuration = 3000
    const curIndex = ref(7)
    const lastIndex = ref(0)
    const planetRef = ref(null)
    let playTimer = null

    watchEffect(() => {
      // 监听switch action
      $eventBus.$on('onPlay', () => {
        dialAutoPlay(dialDuration);
      });
      $eventBus.$on('offPlay', () => {
        clearInterval(playTimer);
        playTimer = null;
      });
    })

    function handleRotate(index) {
      const lastIndexVal = unref(lastIndex)
      curIndex.value = index;

      if (planetRef) {
        const planetEle = planetRef.value
        planetEle.style.transform = `rotate(${ (index - 6) * 45 }deg)`

        Array.apply(null, planetEle.querySelectorAll('.planet >.item')).forEach((item) => {
          item.style.transform = `rotate(${ -(index - 6) * 45 }deg)`
        })

        // 清除上一个item激活样式 激活当前item
        planetEle.querySelectorAll('.planet >.item')[lastIndexVal].classList.remove('actived')
        planetEle.querySelectorAll('.planet >.item')[index].classList.add('actived');

        lastIndex.value = index;
      }
    }

    function dialAutoPlay(intervalTime) {
      playTimer = setInterval(() => {
        const curIndexVal = unref(curIndex)
        handleRotate(curIndexVal);
        curIndex.value = curIndexVal + 1 > 7 ? 0 : curIndexVal + 1 ;
      }, dialDuration);
    }

    return {
      planetRef,
      planets: ['JavaScipt', 'HTML', 'CSS', 'Vue', 'jQuery', 'PS', 'Node', 'Less'],
      curIndex,
      lastIndex,
      handleRotate
    }
  }
}
</script>
<style scoped lang="less">
@Len: unit(250 - 15, px);
@Lenx: unit(125 - 50, px);
@Leny: unit(125 - 15, px);
@activeColor: #44633F;

.v-enter,
.v-leave-to {
  opacity: 0;
  transform: scale(0);
}

.v-enter-active,
.v-leave-active {
  transition: .5s;
}

.dial {
  width: 500px;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -250px;
  margin-top: -250px;
  .center {
    width: 200px;
    height: 200px;
    background: url(https://junxio-static.oss-cn-shenzhen.aliyuncs.com/static/skill/earth.svg) no-repeat;
    background-size: 200px 200px;
    border-radius: 125px;
    position: relative;
    box-shadow: 0px 0px 69px 1px #2b152e;

    .item {
      display: block;
      width: 100%;
      height: 100%;
      border-radius: 125px;
      overflow: hidden;
      position: absolute;
      left: 0;
      top: 0;
    }

  }

  .planet {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 2s;
    transform: rotateZ(0deg);

    .item.actived {
      box-shadow: 0 0px 20px #fff;
      color: @activeColor;
    }

    .item {
      display: block;
      width: 100px;
      height: 30px;
      border-radius: 4px;
      transition: all .6s ease;
      position: absolute;
      box-sizing: border-box;
      box-shadow: 2px 2px 10px rgba(0, 0, 0, .4);
      cursor: pointer;
      text-align: center;
      color: rgba(0, 0, 0, .7);
      font-size: 16px;
      line-height: 30px;
      user-select: none;
      background: #fff;

      &:hover {
        box-shadow: 0 0px 20px #fff;
        color: @activeColor;
      }
    }

    .item1 {
      left: 200px;
      top: 30px;
      // background: #4e54c8;
    }

    .item2 {
      left: @Lenx;
      top: @Leny;
      // background: #f7797d;
    }

    .item3 {
      left: 0;
      top: @Len;
      // background: #f5af19;
    }

    .item4 {
      left: @Lenx;
      bottom: @Leny;
      // background: #928dab;
    }

    .item5 {
      left: 200px;
      bottom: 30px;
      // background: #fdfc47;
    }

    .item6 {
      right: @Lenx;
      bottom: @Leny;
      // background: #da22ff;
    }

    .item7 {
      top: @Len;
      right: 0;
      // background: #076585;
    }

    .item8 {
      right: @Lenx;
      top: @Leny;
      // background: #11998e;
    }
  }
}
</style>