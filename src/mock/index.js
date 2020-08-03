global.pages = []
const pages = require.context('../pages/', false, /\.vue$/)
pages.keys().forEach(key => {
  let cur = pages(key)
  const { name, label } = cur.default || cur
  global.pages.push({ name, label }) 
})

global.githubUsername = 'jxzho'