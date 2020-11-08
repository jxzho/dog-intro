<template>
  <div class="project"> 
    <page-title :style="titleColor">{{ oRo.Project.pageTitle }}</page-title>
    <div class="project-panel">
      <ul class="project-list" ref="container">
        <li class="project-item" v-for="(item, index) of projects" :key="index">
          <!-- title and eye -->
          <div class="title-wrapper">
            <h2 class="title">{{item.title}}</h2>
            <img class="preview" src="https://junxio-static.oss-cn-shenzhen.aliyuncs.com/static/info/eye.svg"
                 @click="handleShowClick(index)">
          </div>

          <!-- content -->
          <p class="content">{{item.content}}</p>
          <button :class="['btn', {up: index === showHideIndex}]" 
                  @click="handleChangeSHIndex(index)">
            <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="30" height="30"><path d="M972.69 286.413L529.478 757.491c-1.327 1.327-3.096 1.769-3.981 1.769s-2.654 0-3.981-1.327L49.995 314.721c-11.943-11.5-30.963-10.616-42.021 1.327s-10.616 30.963 1.327 42.021l471.078 443.212c12.827 11.943 29.194 18.135 46.887 17.693 17.251-.442 33.617-7.962 45.56-20.347l443.212-471.521c5.308-5.75 7.962-13.27 7.961-20.347 0-7.962-3.096-15.924-9.289-21.674-11.943-11.5-30.963-10.616-42.021 1.327z"/></svg>
          </button>

          <!-- hidden content -->
          <ul :class="['detail', { act: index === showHideIndex }]">
            <li v-for="(item, index) of item.detail" :key="`detail-item-${index}`">{{item}}</li>
          </ul>

          <!-- preview area -->
          <transition>
            <div class="show" v-show="index === showIndex">
              <img class="preview" 
                   src="https://junxio-static.oss-cn-shenzhen.aliyuncs.com/static/info/picture.svg" 
                   @mouseenter="handleCaptureIndex(index)"
                   @mouseleave="captureIndex = -1">
              <a :href="item.link" target="_black"><img class="link" src="https://junxio-static.oss-cn-shenzhen.aliyuncs.com/static/info/link.svg"></a>
              <img class="qr-code" 
                   src="https://junxio-static.oss-cn-shenzhen.aliyuncs.com/static/info/qr-code.svg"
                   @click="handleShowViewer(item.viewerUrl)">
              <transition name="capture">
                <img class="capture" 
                     :src="item.capture"
                     v-show="captureIndex === index">
              </transition>
            </div>
          </transition>
        </li>
      </ul>
    </div>
    
    <Viewer />
    <ICP />
  </div>
</template>

<script>
import { getCurrentInstance, reactive, toRefs } from '@vue/composition-api'

const meta = {
  label: '项目',
  page: 4
}

export default {
  name: 'Project',
  meta,
  setup (_, context) {
    const state = reactive({
      showHideIndex: -1,
      showIndex: -1,
      captureIndex: -1,
    })

    function handleChangeSHIndex (index) {
      state.showHideIndex = state.showHideIndex === index ? -1 : index;
    }

    function handleShowClick (index) {
      state.showIndex = state.showIndex === index ? -1 : index;
    }

    function handleCaptureIndex (index) {
      state.captureIndex = state.captureIndex === index ? -1 : index;
    }

    function handleShowViewer (url) {
      context.root.$store.commit('showViewer', url);
    }

    return {
      titleColor: {
        color: 'rgba(0, 0, 0, .4)'
      },
      projects: INFO_PROJECT,
      oRo: getCurrentInstance().$global,
      ...toRefs(state),
      handleChangeSHIndex,
      handleShowClick,
      handleCaptureIndex,
      handleShowViewer
    }
  }
}
</script>

<style lang="less" scoped>
@iconWidth: 10px;

.project {
  background: @grey;
  padding: 40px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;

  .project-panel {
    width: 100%;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    .project-list {
      transition: .4s ease-out;

      .project-item {
        width: 600px;
        background: #fff;
        border-radius: 4px;
        padding: 20px;
        box-shadow: 0 0 10px rgba(0, 0, 0, .1);
        color: rgb(51, 51, 61);
        position: relative;
        font-family: "Lucida Grande", "Lucida Sans Unicode", Helvetica, Arial, Verdana, sans-serif;
        margin-top: 10px;

        .title-wrapper {
          display: flex;
          justify-content: space-between;

          .title {
            font-size: 20px;
          }

          .preview {
            width: 20px;
            height: 20px;
            cursor: pointer;
          }
        }

        .content {
          font-weight: 300;
          font-size: 17px;
          line-height: 20px;
          margin-top: 18px;
          letter-spacing: .1em;
        }

        .detail {
          margin-top: 10px;
          padding-left: 20px;
          max-height: 0;
          overflow: hidden;
          opacity: 0;

          &.act {
            max-height: 180px;
            overflow: visible;
            opacity: 1;
            transition: max-height .6s ease-in-out, opacity .6s .2s ease-in-out;
          }

          li {
            list-style: disc;
            font-size: 16px;
            line-height: 16px;
            letter-spacing: .2em;
            padding: .2em 0;
          }
        }
        
        .btn {
          position: absolute;
          bottom: 10px;
          right: 18px;
          background: transparent;
          width: 15px;
          height: 15px;
          cursor: pointer;

          svg {
            width: 100%;
            height: 100%;
            fill: rgb(51, 51, 61);
          }
        }

        .up {
          transform: rotate(180deg);
        }

        .show {
          position: absolute;
          top: 0;
          right: -50px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          background: #fff;
          border-radius: 4px;
          box-shadow: 0 0 10px rgba(0, 0, 0, .1);

          img {
            width: 25px;
            height: 25px;
            padding: 10px;
          }

          .capture {
            position: fixed;
            width: unit(375 * 0.6, px);
            height: unit(667 * 0.6, px);
            box-sizing: border-box;
            border: 1px dashed #aaa;
            border-radius: 4px;
            padding: 0;
            top: 50%;
            left: 50%;
            z-index: 1;
            margin-top: unit(-667 * 0.6/2, px);
            margin-left: unit(-375 * 0.6/2, px);
          }

          .qr-code {
            cursor: pointer;
          }
        }
      }

      
    }
  }
}

.v-enter, .v-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}
.v-enter-active, .v-leave-active {
  transition: .3s ease;
}

.capture-enter {
  opacity: 0;
  transform: translateX(-20px);
}
.capture-leave-to {
  opacity: 0;
  transform: translateX(20px);
}
.capture-enter-active, .capture-leave-active {
  transition: .3s ease;
}

.detail-enter {
  opacity: 0;
}
.detail-enter-active {
  transition: .6s ease-in-out;
}
</style>