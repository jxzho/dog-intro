const State = () => {}

let stateInstance

const install = (Vue) => {
  stateInstance = new Vue({
    data: {
      name: '__State__',
      curIndex: 0,
      transitionEnd: true,
      ifShowViewer: false,
      url: '', // 链接
    },
    methods: {
      changeIndex(index) {
        this.curIndex = index
      },
      changeTranEnd(boolean) {
        this.transitionEnd = boolean
      },
      showViewer(url) {
        this.ifShowViewer = true
        this.url = url
      },
      hideViewer() {
        this.ifShowViewer = false
      },
      slideUp() {
        const val = this.curIndex - 1
        if (val >= 0) {
          this.state.changeIndex(val)
          this.state.changeTranEnd(false)
        }
      },
      slideDown() {
        const val = this.curIndex + 1
        if (val < 4) {
          this.state.changeIndex(val)
          this.state.changeTranEnd(false)
        }
      },
    },
  })
  Vue.prototype.state = stateInstance
}

const mapState = (arr) => {
  const o = {}
  arr.reduce((computedO, key) => {
    computedO[key] = function () {
      return stateInstance[key]
    }
    return computedO
  }, o)
  return o
}

State.install = install

export { State, mapState }
