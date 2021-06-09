import Drawer from '../utils/drawer-initiator'
import UrlParser from '../routes/url-parser'
import routes from '../routes/route'
import { createLoaderTemplate } from './templates/creator'

class App {
  constructor ({ button, drawer, content }) {
    this._button = button
    this._drawer = drawer
    this._content = content

    this._initAppShell()
  }

  _initAppShell () {
    Drawer.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content
    })
  }

  _addLoader () {
    this._content.innerHTML = createLoaderTemplate()
  }

  _removeLoader () {
    document.querySelector('#loader').remove()
  }

  async renderPage () {
    const url = UrlParser.parseActiveUrlWithCombiner()
    const page = routes[url]

    this._addLoader()
    this._content.innerHTML += await page.render()

    await page.afterRender()
    this._removeLoader()
  }
}

export default App
