import CONFIG from '../globals/config'

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONFIG

const inisiateDB = (openDB) => {
  return openDB(DATABASE_NAME, DATABASE_VERSION, {
    upgrade (database) {
      database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' })
    }
  })
}

const dbPromise = import('idb')
  .then((module) => module.openDB)
  .then(inisiateDB)
  .catch((error) => alert(error))

const FavoriteRestaurant = {
  async getRestaurant (id) {
    if (!id) return
    return (await dbPromise).get(OBJECT_STORE_NAME, id)
  },
  async getRestaurants () {
    return (await dbPromise).getAll(OBJECT_STORE_NAME)
  },
  async putRestaurant (restaurant) {
    if (!restaurant.id) return
    return (await dbPromise).put(OBJECT_STORE_NAME, restaurant)
  },
  async deleteRestaurant (id) {
    return (await dbPromise).delete(OBJECT_STORE_NAME, id)
  }
}

export default FavoriteRestaurant
