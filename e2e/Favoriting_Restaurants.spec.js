const assert = require('assert')

Feature('Favoriting Restaurants')

Before(({ I }) => {
  I.amOnPage('/#/favorite')
})

function seeEmptyFavorited(I) {
  I.seeElement('#title')
  I.see('No Favorited...')
}

Scenario('Showing empty favorited restaurants', ({ I }) => {
  seeEmptyFavorited(I)
})

async function addRestaurantToFavorite(I) {
  I.amOnPage('/')
  I.seeElement('#loader')

  I.seeElement('#restaurants')
  I.seeElement('.card-body .description')

  const firstRestaurant = locate('.card-body h5 a').first()
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant)
  I.click(firstRestaurant)

  I.seeElement('#favoriteButton')
  I.click('#favoriteButton')

  I.amOnPage('/#/favorite')
  I.seeElement('.card-item')
  return firstRestaurantName
}

Scenario('Add Restaurant as Favorite', async({ I }) => {
  const firstRestaurantName = await addRestaurantToFavorite(I)
  const favoritedRestaurantName = await I.grabTextFrom('.card-body h5 a')

  assert.strictEqual(firstRestaurantName, favoritedRestaurantName)
})

Scenario('Remove Restaurant from Favorite', async({ I }) => {
  await addRestaurantToFavorite(I)

  const favoritedRestaurant = locate('.card-body h5 a').first()
  I.click(favoritedRestaurant)

  I.seeElement('#removeFavoriteButton')
  I.click('#removeFavoriteButton')

  I.amOnPage('/#/favorite')
  seeEmptyFavorited(I)
})