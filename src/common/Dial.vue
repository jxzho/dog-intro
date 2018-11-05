<template>
  <div class="dial">
    <div class="center">
      <template v-for="(item, index) of planets">
        <transition>
          <span :class="['item', `item${ index + 1 }`]" v-show="curIndex == index"></span>
        </transition>
      </template>
    </div>
    <div class="planet"">
      <span v-for=" (item, index) of planets" :class="['item', `item${ index + 1 }`]" @click="handleRotate(index, $event)">{{item}}</span>
    </div>
  </div>
</template>
<script>
import $ from 'jquery';
export default {
  data() {
    return {
      planets: ['JavaScipt', 'HTML', 'CSS', 'Vue', 'jQuery', 'PS', 'Node', 'less'],
      curIndex: 0,
      lastIndex: 0,
      timer: null
    }
  },
  name: 'Dial',
  methods: {
    handleRotate(index, e) {
      this.curIndex = index;
      $('.planet').css('transform', `rotate(${ (index - 6) * 45 }deg)`);
      $('.planet').children('.item').css('transform', `rotate(${ -(index - 6) * 45 }deg)`);
      // 清除上一个item激活样式 激活当前item
      $('.planet').children('.item').get(this.lastIndex).classList.remove('actived');
      $('.planet').children('.item').get(index).classList.add('actived');
      this.lastIndex = index;
    },
    dialAutoPlay(intervalTime) {
      clearInterval(this.timer);
      this.timer = setInterval(() => {
        this.curIndex = this.curIndex++ > 7 ? 0 : this.curIndex;
        this.handleRotate(this.curIndex);
      }, intervalTime);
    }
  },
  mounted() {
    /*this.dialAutoPlay(3000);*/
  }
}
</script>
<style scoped lang="less">
@Len: unit(250 - 42, px);
@Lenc: unit(208 - 208 / pow(2, 1/2), px);

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
  margin-top: 20px;
  width: 500px;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  .center {
    width: 250px;
    height: 250px;
    background: url(https://cdn.junxio.site/static/earth.svg) 100% no-repeat;
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

    .item1 {
      background: rgba(78, 84, 200, .5);
    }

    .item2 {
      background: rgba(247, 121, 125, .5);
    }

    .item3 {
      background: rgba(245,175,25, .5);
    }

    .item4 {
      background: rgba(146,141,171, .5);
    }

    .item5 {
      background: rgba(253,252,71, .5);
    }

    .item6 {
      background: rgba(218,34,255, .5);
    }

    .item7 {
      background: rgba(7,101,133, .5);
    }

    .item8 {
      background: rgba(17,153,142, .5);
    }

    .item1:after,
    .item2:after,
    .item3:after,
    .item4:after,
    .item5:after,
    .item6:after,
    .item7:after,
    .item8:after {
      content: '';
      display: block;
      position: absolute;
      left: -1px;
      top: 0;
      border-right: 125px solid rgba(0, 0, 0, 0.4);
      height: 100%;
    }
  }

  .planet {
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 2s;
    transform: rotateZ(0deg);

    .item.actived {
      box-shadow: 0 0px 20px #fff;
    }

    .item {
      display: block;
      width: 84px;
      height: 84px;
      border-radius: 42px;
      background: @grey;
      transition: all .6s ease;
      position: absolute;
      box-sizing: border-box;
      box-shadow: 2px 2px 10px rgba(0, 0, 0, .4);
      cursor: pointer;
      text-align: center;
      color: #fff;
      font-size: 16px;
      font-weight: 800;
      line-height: 84px;
      user-select: none;
      &:hover {
        box-shadow: 0 0px 20px #fff;
      }
    }

    .item1 {
      left: Len;
      top: 0;
      background: linear-gradient(to left, #4e54c8, #8f94fb);
    }

    .item2 {
      left: @Lenc;
      top: @Lenc;
      background: linear-gradient(to right, #c6ffdd, #fbd786, #f7797d);
    }

    .item3 {
      left: 0;
      top: @Len;
      background: linear-gradient(to right, #f12711, #f5af19);
    }

    .item4 {
      left: @Lenc;
      bottom: @Lenc;
      background: linear-gradient(to left, #00d2ff, #928dab);
    }

    .item5 {
      left: Len;
      bottom: 0;
      background: linear-gradient(to left, #fdfc47, #24fe41);
    }

    .item6 {
      right: @Lenc;
      bottom: @Lenc;
      background: linear-gradient(to left, #da22ff, #9733ee);
    }

    .item7 {
      top: @Len;
      right: 0;
      background: linear-gradient(to left, #076585, #fff);
    }

    .item8 {
      right: @Lenc;
      top: @Lenc;
      background: linear-gradient(to left, #11998e, #38ef7d);
    }
  }
}
</style>