const Pages = []

export const GithubUsername = 'jxzho'

const initPages = () => {
  const pages = require.context('../pages/', true, /\.vue$/)
  pages.keys().forEach(key => {
    let cur = pages(key)
    const { label, page } = (cur.default || cur).meta || {}
    Pages.push({ name: cur.default.name, label, page })
  })
}

export { Pages, initPages }
