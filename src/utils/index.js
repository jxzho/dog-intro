export * from './debounce.js'

export const isDev = process.env.NODE_ENV === 'development'

export const isMobile = () => {
  const ua = window.navigator.userAgent.toUpperCase()
  if (ua.match(/MOBILE/g)) {
    return true
  } else {
    return false
  }
}

export const setImgSrcset = (config) => {
  return Object.entries(config)
    .map((item) => {
      const [key, value] = item
      return value + ` ${key}`
    })
    .join(', ')
}
