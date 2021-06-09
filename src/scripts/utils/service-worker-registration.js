import runtime from 'serviceworker-webpack-plugin/lib/runtime'

const registerServiceWorker = async () => {
  if ('serviceWorker' in navigator) {
    await runtime.register()
    return
  }
  console.log('Browser not support Service Worker')
}

export default registerServiceWorker
