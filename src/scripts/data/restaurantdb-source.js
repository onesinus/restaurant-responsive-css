import API from '../globals/api'

class RestaurantDbSource {
  static async restaurants () {
    const response = await fetch(API.RESTAURANTS)
    const responseJson = await response.json()
    return responseJson.restaurants
  }
}

export default RestaurantDbSource
