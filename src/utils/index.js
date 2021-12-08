export const isMobile = () => {
  const ua = window.navigator.userAgent.toUpperCase()
  if (ua.match(/MOBILE/g)) {
    return true
  } else {
    return false
  }
}
