import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb'
import { createRestaurantItemTemplate } from '../templates/creator'

const Home = {
  async render () {
    return `
        <h5 class="title mt2" id="title">Favorited Restaurants</h5>
        <div class="cards m2" id="restaurants">
            
        </div>
    `
  },

  async afterRender () {
    const restaurants = await FavoriteRestaurantIdb.getRestaurants()
    const titleContainer = document.querySelector('#title')
    const restaurantsContainer = document.querySelector('#restaurants')
    if (restaurants.length > 0) {
      restaurants.forEach(restaurant => {
        restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant)
      })
    } else {
      restaurantsContainer.remove()
      titleContainer.innerHTML += '<h4 class="favorited-restaurants__not__found mt4 mb4">No Favorited...</h4>'
    }
  }
}

export default Home
