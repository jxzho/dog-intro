<template>
  <div class="social">
    <div class="nav-bar"></div>
    <div class="social-wrapper">
      <div class="switch-btn">
        <button class="switch-btn-left">
          <svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path d="M671.968 912c-12.288 0-24.576-4.672-33.952-14.048L286.048 545.984c-18.752-18.72-18.752-49.12 0-67.872l351.968-352c18.752-18.752 49.12-18.752 67.872 0 18.752 18.72 18.752 49.12 0 67.872L387.872 512.032l318.016 318.016c18.752 18.752 18.752 49.12 0 67.872-9.344 9.408-21.632 14.08-33.92 14.08z" fill="#fff"/></svg>
        </button>
        <button class="switch-btn-right">
          <svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path d="M671.968 912c-12.288 0-24.576-4.672-33.952-14.048L286.048 545.984c-18.752-18.72-18.752-49.12 0-67.872l351.968-352c18.752-18.752 49.12-18.752 67.872 0 18.752 18.72 18.752 49.12 0 67.872L387.872 512.032l318.016 318.016c18.752 18.752 18.752 49.12 0 67.872-9.344 9.408-21.632 14.08-33.92 14.08z" fill="#fff"/></svg>
        </button>
      </div>
      <div class="icons-menu">
        <SocialLogo name="Blog" :colors="['#d6d6d6', '#e3b888']" @mouseenter.native="handleMosEnter" />
        <SocialLogo name="Github" :colors="['#d6d6d6', '#333']" @mouseenter.native="handleMosEnter" />
        <SocialLogo name="Zhihu" :colors="['#d6d6d6', '#1672F6']" @mouseenter.native="handleMosEnter" />
        <!-- <SocialLogo name="Weibo" :colors="['#d6d6d6', '#fdd692']" @mouseenter.native="handleMosEnter" /> -->
        <SocialLogo name="Twitter" :colors="['#d6d6d6', '#03A9F4']" @mouseenter.native="handleMosEnter" />

        <!-- 兼容旧写法 -->
        <!-- <div class="icon-wrapper" @mouseenter="handleMosEnter">
          <svg class="stroke-blog" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <circle></circle>
          </svg>
          <a class="icon jianshu" href="https://www.jianshu.com/u/8c0f62fa164f" target="_blank">
            <svg aria-hidden="true" width="30" height="30" viewBox="0 0 1024 1024"
              xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <path d="M48.6 617V259.1h134.3c27.3 0 49.3 3.6 65.8 10.9 16.5 7.2 29.5 18.4 38.8 33.4 9.4 15.1 14 30.8 14 47.2 0 15.3-4.2 29.7-12.5 43.2-8.3 13.5-20.8 24.4-37.6 32.7 21.6 6.3 38.3 17.2 49.9 32.5 11.6 15.3 17.5 33.4 17.5 54.2 0 16.8-3.5 32.3-10.6 46.8s-15.8 25.5-26.2 33.3c-10.4 7.8-23.5 13.7-39.2 17.7-15.7 4-35 6-57.7 6H48.6zM96 409.5h77.4c21 0 36-1.4 45.2-4.2 12-3.6 21.1-9.5 27.2-17.8s9.2-18.7 9.2-31.3c0-11.9-2.8-22.3-8.5-31.4-5.7-9-13.8-15.2-24.4-18.6-10.6-3.3-28.7-5-54.4-5H96v108.3z m0 165.3h89.1c15.3 0 26-0.6 32.2-1.7 10.9-2 20-5.2 27.3-9.8 7.3-4.6 13.3-11.2 18.1-19.9 4.7-8.7 7.1-18.8 7.1-30.2 0-13.3-3.4-24.9-10.3-34.8-6.8-9.8-16.3-16.8-28.4-20.8-12.1-4-29.6-6-52.4-6H96v123.2zM377.5 617V259.1h43.9V617h-43.9zM473.2 487.4c0-48 13.3-83.6 40-106.7 22.3-19.2 49.5-28.8 81.5-28.8 35.6 0 64.8 11.7 87.4 35 22.6 23.4 33.9 55.6 33.9 96.8 0 33.4-5 59.6-15 78.7s-24.6 34-43.7 44.6c-19.1 10.6-40 15.9-62.6 15.9-36.3 0-65.6-11.6-88-34.9-22.3-23.3-33.5-56.9-33.5-100.6z m45.1 0c0 33.2 7.2 58.1 21.7 74.6 14.5 16.5 32.7 24.8 54.7 24.8 21.8 0 40-8.3 54.4-24.9 14.5-16.6 21.7-41.9 21.7-75.9 0-32.1-7.3-56.4-21.9-72.9-14.6-16.5-32.7-24.8-54.3-24.8-22 0-40.2 8.2-54.7 24.7-14.3 16.3-21.6 41.2-21.6 74.4zM759.6 638.5l42.7 6.3c1.8 13.2 6.8 22.8 14.9 28.8 10.9 8.1 25.8 12.2 44.7 12.2 20.3 0 36-4.1 47.1-12.2 11.1-8.1 18.6-19.5 22.5-34.2 2.3-9 3.3-27.7 3.2-56.4-19.2 22.6-43.1 33.9-71.8 33.9-35.6 0-63.2-12.9-82.8-38.6-19.5-25.7-29.3-56.6-29.3-92.5 0-24.7 4.5-47.6 13.4-68.5s21.9-37.1 38.9-48.5c17-11.4 37-17.1 59.9-17.1 30.6 0 55.8 12.4 75.7 37.1v-31.3h40.5v224.1c0 40.4-4.1 69-12.3 85.8-8.2 16.8-21.2 30.2-39.1 39.9S888 721.9 862 721.9c-30.9 0-55.9-7-75-20.9s-28.1-34.5-27.4-62.5z m36.3-155.8c0 34 6.8 58.8 20.3 74.5 13.5 15.6 30.4 23.4 50.8 23.4 20.2 0 37.1-7.8 50.8-23.3 13.7-15.5 20.5-39.9 20.5-73.1 0-31.7-7-55.7-21.1-71.8-14.1-16.1-31-24.2-50.9-24.2-19.5 0-36.1 7.9-49.8 23.8s-20.6 39.5-20.6 70.7z" fill="#333333"></path>
            </svg>
          </a>
        </div>
        <div class="icon-wrapper" @mouseenter="handleMosEnter">
          <svg class="stroke-github" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <circle></circle>
          </svg>
          <a class="icon github" href="https://github.com/jxzho" target="_blank">
            <svg aria-hidden="true" width="30" height="30" viewBox="0 0 1024 1024"
              xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <path d="M486.73579 0.6396C218.27254 0.6396 0.6396 223.99952 0.6396 499.527795c0 275.528275 217.632939 498.888195 486.09619 498.888195 268.46325 0 486.09619-223.35992 486.09619-498.888195C972.83198 223.99952 755.199041 0.6396 486.73579 0.6396zM628.55947 933.589946c-22.731393 4.552675-30.778843-9.750066-30.778843-22.044462 0-15.061307 0.538543-64.556132 0.538543-125.88868 0-42.835308-14.324487-70.9112-30.375895-85.094976 99.739263-11.320924 204.402169-50.163848 204.402169-226.476052 0-50.133147-17.315258-91.118731-46.009004-123.21643 4.585934-11.557577 19.974716-58.231765-4.455455-121.463925 0 0-37.531743-12.331493-123.018154 47.096325-35.740862-10.227208-74.059313-15.323543-112.083548-15.491118-38.076682 0.157342-76.384899 5.26391-112.075873 15.491118-85.549092-59.427818-123.134561-47.096325-123.134561-47.096325-24.370049 63.23216-8.97615 109.906349-4.395333 121.463925-28.636182 32.097699-46.070406 73.083283-46.070406 123.21643 0 175.901582 104.51196 215.284327 203.914793 226.86365-12.775375 11.500012-24.370049 31.689634-28.419998 61.409299-25.499583 11.681659-90.371678 31.980012-130.300642-38.172622 0 0-23.64858-44.030081-68.577939-47.290763 0 0-43.738423-0.557731-3.08799 27.90448 0 0 29.352535 14.104465 49.714848 67.129884 0 0 26.281174 89.313779 150.827973 61.547453 0.19188 38.352989 0.585874 67.20024 0.585874 78.077282 0 12.201014-8.152345 26.343855-30.562658 22.093072C167.269537 872.978868 39.015615 700.914888 39.015615 498.093811 39.015615 244.552435 239.466334 39.015615 486.712765 39.015615 734.001409 39.015615 934.455965 244.552435 934.455965 498.093811 934.455965 700.857324 806.291588 872.795943 628.55947 933.589946z"></path>
            </svg>
          </a>
        </div>
        <div class="icon-wrapper" @mouseenter="handleMosEnter">
          <svg class="stroke-weibo" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <circle></circle>
          </svg>
          <a class="icon weibo" href="javascript:void(0);" data-href="https://weibo.com/u/2585370241" target="_self">
            <svg aria-hidden="true" width="30" height="30" viewBox="0 0 1024 1024"
              xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <path d="M498.752 571.104c-8.64-3.456-19.488 0.736-24.544 9.28-4.96 8.576-2.24 18.368 6.432 21.952 8.864 3.648 20.128-0.576 25.216-9.28 4.864-8.832 1.696-18.72-7.104-21.952m-55.616 23.136c-22.56-9.504-51.744 0.256-65.664 22.176-14.08 21.984-7.488 48.192 14.944 58.432 22.72 10.4 52.896 0.512 67.008-22.048 13.824-22.752 6.528-48.8-16.32-58.56m-39.52 131.392c-70.08-22.688-99.744-92.096-69.088-154.592 30.144-61.312 108.512-96 177.888-77.888 71.744 18.624 108.384 86.528 79.04 152.48-29.76 67.52-115.296 103.488-187.84 80m59.968-306.336c-145.696 14.464-256.224 103.968-246.72 199.904 9.44 96 135.232 162.08 280.96 147.648 145.76-14.464 256.224-103.968 246.784-200-9.44-95.936-135.264-162.016-281.024-147.552m115.2-82.688c89.632-37.632 167.84-39.84 196.416 1.12 15.232 21.824 13.76 52.448-0.256 87.904-6.528 16.352 1.984 18.88 14.4 22.624 50.464 15.68 106.688 53.664 106.688 120.64 0 110.752-159.264 250.304-398.688 250.304C314.688 819.2 128 730.4 128 584.384c0-76.352 48.224-164.64 131.264-247.968 110.88-111.2 240.16-161.824 288.8-113.024 21.44 21.504 23.552 58.752 9.76 103.2-7.2 22.4 20.928 9.984 20.928 10.016"></path>
            </svg>
          </a>
        </div>
        <div class="icon-wrapper" @mouseenter="handleMosEnter">
          <svg class="stroke-zhihu" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <circle></circle>
          </svg>
          <a class="icon zhihu" href="https://www.zhihu.com/people/xioxio96/activities" target="_blank">
            <svg aria-hidden="true" width="30" height="30" viewBox="0 0 1024 1024"
              xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <path d="M506.995009 496.907257 381.830335 496.907257 381.830335 305.519322l110.707404 0c18.09103 0 32.809243-14.604626 32.809243-32.556487 0-17.949814-14.718213-32.552393-32.809243-32.552393l-212.008578 0c5.584182-23.909549 7.270591-45.157479 8.683776-62.956867l0.166799-2.055822c0.404206-4.989641 0.784876-9.702989 1.260713-14.012132 0.945535-8.618285-1.537006-17.092283-6.990205-23.858384-5.500271-6.825452-13.348006-11.096732-22.102391-12.028964-8.810666-0.978281-17.389042 1.475608-24.163329 6.900154-6.77838 5.428639-11.032264 13.226233-11.977799 21.940708-0.603751 5.51255-1.064238 11.294231-1.550309 17.414625l-0.042979 0.552585c-3.815909 48.001247-8.565073 107.74084-87.151919 179.124633-6.497994 5.895267-10.275018 13.948687-10.636245 22.679535-0.361227 8.729825 2.737344 17.066701 8.734942 23.485901 6.187933 6.611581 14.95255 10.403954 24.046672 10.403954 8.203846 0 16.063861-3.025916 22.152533-8.538467 33.040511-30.011524 57.760518-60.869323 75.247798-93.991698 0.602727 0.032746 1.209548 0.049119 1.816369 0.049119l58.189284 0 0 191.387935L167.024038 496.907257c-18.09103 0-32.809243 14.603603-32.809243 32.553417 0 17.951861 14.718213 32.556487 32.809243 32.556487l148.147108 0c-5.961782 94.7909-40.229237 213.795271-162.89909 275.067776-7.884574 3.936659-13.727653 10.694573-16.452717 19.030425-2.707668 8.27957-2.000564 17.105586 1.980097 24.829502 5.624091 10.958586 16.82827 17.765619 29.241998 17.765619 5.136997 0 10.255575-1.215688 14.733563-3.480264 88.605014-44.24469 149.058874-117.018134 178.777733-213.754339 1.201361 4.614088 3.431146 8.942673 6.603395 12.70844l103.458303 122.777301c6.258541 7.408737 15.435551 11.659551 25.178449 11.659551 7.604188 0 15.014972-2.644223 20.849864-7.429203 6.801916-5.561669 10.993378-13.422707 11.802814-22.13616 0.806365-8.695033-1.856277-17.171078-7.497765-23.864524L417.504836 652.429333c-11.55415-13.715373-32.223912-15.609513-46.040592-4.245697-0.938372 0.76748-1.822508 1.583055-2.659573 2.433422 6.377244-27.808346 10.44284-57.367569 12.125155-88.598874l126.066207 0c18.09103 0 32.809243-14.604626 32.809243-32.556487C539.804253 511.51086 525.08604 496.907257 506.995009 496.907257z"></path><path d="M865.192088 234.109945 609.331769 234.109945c-18.09103 0-32.809243 14.604626-32.809243 32.556487l0 472.916866c0 17.951861 14.718213 32.556487 32.809243 32.556487l19.237133 0 4.499477 79.69918 0.057305 0.711198c1.227967 11.884678 8.886391 22.132066 19.968797 26.734898 4.01443 1.673106 8.278547 2.521426 12.675694 2.521426 7.419993 0 14.678304-2.517333 20.436448-7.088442l0.663102-0.527003 102.988606-102.113679 75.334779 0.062422c8.584516 0 17.006326-3.441379 23.121604-9.455349 6.248308-6.161327 9.689686-14.365172 9.689686-23.101137L898.004401 266.666432C898.003378 248.714572 883.284141 234.109945 865.192088 234.109945zM658.862859 707.034998l-16.721847 0L642.141012 299.214732l190.240809 0 0 407.79366-54.960753-0.040932c-7.393387 0-14.641465 2.509147-20.408819 7.065929l-0.821715 0.648776-62.605873 65.067948-2.01489-42.603307-0.063445-0.840134C689.796382 719.618595 675.761738 707.034998 658.862859 707.034998z"></path>
            </svg>
          </a>
        </div> -->
      </div>
    </div>

    <div class="brief">
      <i class="trigon" />
      <template v-for="(item, index) of mottoes">
        <transition :key="`trigon-tran-${index}`">
          <p class="motto" v-show="curIndex == index + 1">{{ item }}</p>
        </transition>
      </template>
      <!-- <button class="to-right" @click="handleChangeMo">&#xe608;</button> -->
    </div>

    <note></note>
  </div>
</template>

<script>
const mottoes = ['Keep Moving', '保持热情', '永远不要放弃', '坚持', '你好，我是钟俊雄']

// const getDailySentence = () => {
//   return fetch('https://v1.hitokoto.cn/?encode=json', {
//     method: 'GET',
//   })
//     .then(_ => _.json())
//     .then(res => {
//       return res.hitokoto
//     })
// }

export default {
  name: 'Social',
  data() {
    return {
      timer: null,
      mottoes,
      curIndex: 1,
    }
  },
  // created() {
  //   getDailySentence().then(sentence => {
  //     this.mottoes = [sentence].concat(mottoesDefault)
  //   })
  // },
  mounted() {
    const showBrief = () => {
      setTimeout(() => {
        this.handleChangeMo()
        showBrief()
      }, 2000)
    }
    showBrief()
  },
  methods: {
    handleChangeMo() {
      this.curIndex = ++this.curIndex > this.mottoes.length ? 1 : this.curIndex
    },
    handleMosEnter(e) {
      document.querySelector('.nav-bar').style.transform = `translateX(${e.target.offsetLeft - 5}px)`
    },
  },
}
</script>

<style scoped lang="less">
@icon-width: 50px;
@icon-wrapper: 60px;
.v-enter {
  opacity: 0;
  transform: translateY(-20px);
}

.v-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

.v-enter-active {
  transition: all 0.8s ease;
}

.v-leave-active {
  transition: all 0.4s ease;
}

.social {
  position: relative;
  width: 320px;
  box-shadow: 0 10px 45px 2px rgba(0, 0, 0, 0.15);

  .nav-bar {
    width: 70px;
    height: 4px;
    border-radius: 2px;
    background-color: @blue;
    box-shadow: 0 2px 20px rgba(92, 76, 168, 0.8);
    transition: all 0.8s ease;
    position: absolute;
    top: -2px;
    left: 0;
    z-index: 1;
  }

  .social-wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @keyframes switchRun {
      60% {
        width: 124%;
      }
      to {
        width: 120%;
      }
    }
    .switch-btn {
      width: 120%;
      align-self: center;
      position: absolute;
      z-index: -1;
      display: flex;
      justify-content: space-between;
      animation: switchRun 1s ease infinite;

      .switch-btn-left {
        transform: rotate(0deg);
        background: transparent;
        color: #fff;
        cursor: pointer;
        text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
      }
      .switch-btn-right {
        transform: rotate(180deg);
        background: transparent;
        color: #fff;
        cursor: pointer;
        text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
      }
    }

    .icons-menu {
      padding: 4px 0;
      display: flex;
      justify-content: space-around;
      align-items: center;
      background: #fff;
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
      transition: all 0.4s ease;

      .icon {
        svg {
          path {
            transition: all 0.8s ease;
            fill: rgba(5, 1, 1, 0.2);
          }
        }
      }

      .icon-wrapper {
        width: @icon-wrapper;
        height: @icon-wrapper;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
        transition: all 0.2s linear;

        &:hover > .stroke-github > circle {
          stroke-dashoffset: 0px;
          stroke: #8fbc94;
        }

        .stroke-github {
          width: @icon-width;
          height: @icon-width;
          transform: rotate(-90deg);

          circle {
            .circle(@icon-width);
          }
        }

        &:hover > .stroke-zhihu > circle {
          stroke-dashoffset: 0px;
          stroke: @blue;
        }

        .stroke-zhihu {
          width: @icon-width;
          height: @icon-width;
          transform: rotate(-90deg);

          circle {
            .circle(@icon-width);
          }
        }

        &:hover > .stroke-blog > circle {
          stroke-dashoffset: 0px;
          stroke: #fa6d72;
        }

        .stroke-blog {
          width: @icon-width;
          height: @icon-width;
          transform: rotate(-90deg);

          circle {
            .circle(@icon-width);
          }
        }

        &:hover > .stroke-weibo > circle {
          stroke-dashoffset: 0px;
          stroke: #fdd692;
        }

        .stroke-weibo {
          width: @icon-width;
          height: @icon-width;
          transform: rotate(-90deg);

          circle {
            .circle(@icon-width);
          }
        }
      }

      .github {
        .iconStyle();

        &:hover > svg > path {
          fill: #8fbc94;
        }
      }

      .zhihu {
        .iconStyle();

        &:hover > svg > path {
          fill: @blue;
        }
      }

      .jianshu {
        .iconStyle();

        &:hover > svg > path {
          fill: #fa6d72;
        }
      }

      .weibo {
        .iconStyle();

        &:hover > svg > path {
          fill: #fdd692;
        }
      }
    }
  }

  .brief {
    background: @blue;
    text-align: center;
    height: 54px;
    color: @grey;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    .trigon {
      display: block;
      width: 2px;
      height: 0;
      border-top: 6px solid #fff;
      border-bottom: 6px solid transparent;
      border-left: 6px solid transparent;
      border-right: 6px solid transparent;
      position: absolute;
      top: 0;
      left: 50%;
      margin-left: -5px;
    }

    .to-right {
      background: transparent;
      color: #fff;
      transform: rotate(180deg);
      position: absolute;
      right: 12px;
      cursor: pointer;
    }

    .motto {
      position: absolute;
      line-height: 1.35;
      font-weight: normal;
      padding: 0 20px;

      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }
}
</style>
