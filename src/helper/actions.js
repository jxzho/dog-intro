const DIR_UP = 'UP'
const DIR_DOWN = 'DOWN'

let isTouchStart = false
let isTouchMoving = false
let isTouchEnd = true

let startY, endY
let directionVal

const createListeners = (
  defaultOptions = {
    capture: true,
    passive: false,
  }
) => {
  const containerEle = document.querySelector('.container')
  const { addEventListener, removeEventListener } = containerEle

  const addListener = (key, fn) => {
    return addEventListener(key, fn, defaultOptions)
  }

  const removeListener = (key, fn) => {
    return removeEventListener(key, fn, defaultOptions)
  }

  const registerEvent = (eventName) => {
    let callback

    const start = (eventCallback) => {
      callback = eventCallback
      addListener(eventName, eventCallback)
    }

    const stop = () => {
      removeListener(eventName, callback)
    }

    return {
      start,
      stop,
    }
  }

  return {
    addListener,
    removeListener,
    registerEvent,
  }
}

const handleRealDirection = (state, val) => {
  if (val === DIR_UP) {
    state.slideUp()
  }
  if (val === DIR_DOWN) {
    state.slideDown()
  }
}

export const injectActions = (state) => {
  const { registerEvent } = createListeners()
  const { start: startTouchStart } = registerEvent('touchstart')
  const { start: startTouchMoving, stop: stopTouchMoing } = registerEvent('touchmove')
  const { start: startTouchEnd, stop: stopTouchEnd } = registerEvent('touchend')

  const touchMoving = (e) => {
    if (e.preventDefault) {
      e.preventDefault()
      e.stopPropagation()
    } else {
      e.returnVal = false
    }

    if (isTouchStart) {
      isTouchMoving = true
    }
  }

  const touchEnd = (e) => {
    endY = e.changedTouches[0].clientY
    if (isTouchMoving && state.transitionEnd) {
      const offsetY = startY - endY
      const offsetYAbs = Math.abs(offsetY)

      if (offsetYAbs > 120) {
        directionVal = offsetY < 0 ? DIR_UP : DIR_DOWN
      }
      handleRealDirection(state, directionVal)
    }

    isTouchEnd = true
    isTouchStart = isTouchMoving = false

    stopTouchMoing()
    stopTouchEnd()
  }

  const touchStart = (e) => {
    isTouchStart = true
    if (isTouchEnd) {
      startY = e.touches[0].clientY
      startTouchMoving(touchMoving)
      startTouchEnd(touchEnd)
    }
  }

  if (window.document) {
    startTouchStart(touchStart)
  }
}
