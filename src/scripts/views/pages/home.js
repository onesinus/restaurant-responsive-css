import RestaurantDbSource from '../../data/restaurantdb-source'
import { createRestaurantItemTemplate } from '../templates/creator'

const Home = {
  async render () {
    return `
        <h5 class="title mt2">List Restaurants</h5>
        <div class="cards m2" id="restaurants">
            
        </div>
    `
  },

  async afterRender () {
    const restaurants = await RestaurantDbSource.restaurants()
    const restaurantsContainer = document.querySelector('#restaurants')
    restaurants.forEach(restaurant => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant)
    })
  }
}

export default Home
