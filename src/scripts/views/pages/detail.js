import RestaurantDbSource from '../../data/restaurantdb-source'
import { createRestaurantDetailTemplate } from '../templates/creator'
import UrlParser from '../../routes/url-parser'

const Detail = {
  async render () {
    return `
        <h5 class="title mt2">Detail Restaurant</h5>
        <div class="cards m2" id="restaurant">
            
        </div>
    `
  },

  async afterRender () {
    const url = UrlParser.parseActiveUrlWithoutCombiner()
    const restaurant = await RestaurantDbSource.restaurant(url.id)

    const detailContainer = document.querySelector('#restaurant')
    detailContainer.innerHTML = createRestaurantDetailTemplate(restaurant)
  }
}

export default Detail
