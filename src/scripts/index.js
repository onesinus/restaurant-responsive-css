import 'regenerator-runtime'

import App from './views/app'
import Drawer from './utils/drawer-initiator'
import ServiceWorkerRegistration from './utils/service-worker-registration'

import '../styles/main.css'
import '../styles/card.css'
import '../styles/responsive.css'
import '../styles/loader.css'

import './views/elements/vertical-information'

import 'lazysizes'
import 'lazysizes/plugins/parent-fit/ls.parent-fit'

const drawer = document.querySelector('#drawer')

const app = new App({
  button: document.querySelector('#hamburger'),
  drawer,
  content: document.querySelector('main')
})

window.addEventListener('hashchange', (e) => {
  app.renderPage()
  Drawer._closeDrawer(e, drawer)
})

window.addEventListener('load', () => {
  app.renderPage()
  ServiceWorkerRegistration()
})
