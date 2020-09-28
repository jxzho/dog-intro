global.pages = []

const pages = require.context('../pages/', false, /\.vue$/)

pages.keys().forEach(key => {
  let cur = pages(key)
  const { name, label, page } = (cur.default || cur).meta
  global.pages.push({ name, label, page }) 
})

global.githubUsername = 'jxzho'