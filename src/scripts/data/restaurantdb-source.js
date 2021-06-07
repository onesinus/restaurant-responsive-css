import API from '../globals/api'

class RestaurantDbSource {
  static async restaurants () {
    const response = await fetch(API.RESTAURANTS)
    const responseJson = await response.json()
    return responseJson.restaurants
  }

  static async restaurant (id) {
    const response = await fetch(API.RESTAURANT(id))
    const responseJson = await response.json()
    return responseJson.restaurant
  }
}

export default RestaurantDbSource
