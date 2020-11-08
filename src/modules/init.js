global.pages = []

const pages = require.context('../pages/', true, /\.vue$/)
pages.keys().forEach(key => {
  let cur = pages(key)
  const { name, label, page } = (cur.default || cur).meta || {}
  global.pages.push({ name, label, page }) 
})

global.githubUsername = 'jxzho'
global.inMobile = /Mobile/.test(window.navigator.userAgent)