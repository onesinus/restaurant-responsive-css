import 'regenerator-runtime'

import App from './views/app'

import '../styles/main.css'
import '../styles/card.css'
import '../styles/responsive.css'

const app = new App({
  button: document.querySelector('#hamburger'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('main')
})

window.addEventListener('load', () => {
  app.renderPage()
})
