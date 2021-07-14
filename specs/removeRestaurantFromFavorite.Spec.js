import FavoriteButtonInisiator from '../src/scripts/utils/favorite-button-inisiator'
import FavoriteRestaurantIdb from '../src/scripts/data/favoriterestaurant-idb'

describe('Un-Favoriting a restaurant', () => {
  const favoriteButtonContainer = () => {
    document.body.innerHTML = '<div id="favoriteButtonContainer"></div>'
  }

  beforeEach(async () => {
    favoriteButtonContainer()
    await FavoriteRestaurantIdb.putRestaurant({ id: 1 })
  })

  afterEach(async () => {
    await FavoriteRestaurantIdb.deleteRestaurant(1)
  })

  it('Should show un-favorite button if the restaurant has been favorited', async () => {
    await FavoriteButtonInisiator.init({
      favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
      restaurant: {
        id: 1
      }
    })

    expect(document.querySelector('[aria-label="Remove this restaurant from favorite"]')).toBeTruthy()
  })

  it('should not show favorite button if the restaurant has been favorited', async () => {
    await FavoriteButtonInisiator.init({
      favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
      restaurant: {
        id: 1
      }
    })

    expect(document.querySelector('[aria-label="Add this restaurant to favorite"]')).toBeFalsy()
  })

  it('should be able to remove restaurant from favorited', async () => {
    await FavoriteButtonInisiator.init({
      favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
      restaurant: {
        id: 1
      }
    })

    document.querySelector('[aria-label="Remove this restaurant from favorite"]').dispatchEvent(new Event('click'))

    expect(await FavoriteRestaurantIdb.getRestaurants()).toEqual([])
  })

  it('should not error if the un-favorited restaurant is not exist', async () => {
    await FavoriteButtonInisiator.init({
      favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
      restaurant: {
        id: 1
      }
    })

    await FavoriteRestaurantIdb.deleteRestaurant(1)
    document.querySelector('[aria-label="Remove this restaurant from favorite"]').dispatchEvent(new Event('click'))

    expect(await FavoriteRestaurantIdb.getRestaurants()).toEqual([])
  })
})