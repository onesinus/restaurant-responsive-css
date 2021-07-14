import FavoriteRestaurantIdb from '../src/scripts/data/favoriterestaurant-idb'
import FavoriteButtonInisiator from '../src/scripts/utils/favorite-button-inisiator'

describe('Favoriting a restaurant', () => {
  const favoriteButtonContainer = () => {
    document.body.innerHTML = '<div id="favoriteButtonContainer"></div>'
  }

  beforeEach(() => {
    favoriteButtonContainer()
  })

  it('Should show the favorite button if the restaurant has not been favorited', async () => {
    await FavoriteButtonInisiator.init({
      favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
      restaurant: {
        id: 1
      }
    })

    expect(document.querySelector('[aria-label="Add this restaurant to favorite"]')).toBeTruthy()
  })

  it('Should not show the un-favorite button if the restaurant has not been favorited', async () => {
    await FavoriteButtonInisiator.init({
      favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
      restaurant: {
        id: 1
      }
    })

    expect(document.querySelector('[aria-label="Remove this restaurant from favorite"]')).toBeFalsy()
  })

  it('Should be able to add restaurant as favorite', async () => {
    await FavoriteButtonInisiator.init({
      favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
      restaurant: {
        id: 1
      }
    })

    document.querySelector('#favoriteButton').dispatchEvent(new Event('click'))

    const restaurant = await FavoriteRestaurantIdb.getRestaurant(1)
    expect(restaurant).toEqual({ id: 1 })

    FavoriteRestaurantIdb.deleteRestaurant(1)
  })

  it('Should not add a restaurant if already favorited', async () => {
    await FavoriteButtonInisiator.init({
      favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
      restaurant: {
        id: 1
      }
    })

    await FavoriteRestaurantIdb.putRestaurant({ id: 1 })
    document.querySelector('#favoriteButton').dispatchEvent(new Event('click'))

    expect(await FavoriteRestaurantIdb.getRestaurants()).toEqual([{ id: 1 }])

    FavoriteRestaurantIdb.deleteRestaurant(1)
  })

  it('Should not add a restaurant as favorite if has no id', async () => {
    await FavoriteButtonInisiator.init({
      favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
      restaurant: {}
    })

    document.querySelector('#favoriteButton').dispatchEvent(new Event('click'))

    expect(await FavoriteRestaurantIdb.getRestaurants()).toEqual([])
  })
})
