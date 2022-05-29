import Vue from 'vue'

const registerGlobalComponents = () => {
  const [componentPaths, getComponent] = components()
  componentPaths.forEach((path) => {
    if (isCommonComponent(path)) {
      const componentConfig = getComponent(path)
      const componentName = getComponentName(path)
      Vue.component(componentName, componentConfig.default || componentConfig)
    }
  })
}

const components = () => {
  const requireComponent = require.context('../', true, /\.vue$/)
  return [requireComponent.keys(), requireComponent] // <- ./App.vue ./common/Dial.vue ./pages/Home.vue
}

const isCommonComponent = (path) => {
  return path.match(/\/(common)/g)
}

const useUpperCamelCase = (string) =>
  string
    .split('-')
    .map((item) => item[0].toUpperCase() + item.substring(1))
    .join('')

const getComponentName = (path) => {
  const mainComponentFileName = path.split('/').at(-1)
  if (mainComponentFileName.toLowerCase() === 'index.vue') {
    const parentDir = path.split('/').at(-2)
    return useUpperCamelCase(parentDir)
  } else {
    const vueFileName = /([^/]+)\.vue$/.exec(mainComponentFileName)[1]
    return capitalizeFirstLetter(useUpperCamelCase(vueFileName))
  }
}

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export { registerGlobalComponents }
