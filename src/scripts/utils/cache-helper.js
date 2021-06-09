import CONFIG from '../globals/config'

const CacheHelper = {
  async cachingAppShell (requests) {
    const cache = await this._openCache()
    cache.addAll(requests)
  },

  async deleteOldCache () {
    const cacheNames = await global.caches.keys()
    cacheNames
      .filter((name) => name !== CONFIG.CACHE_NAME)
      .map((filteredName) => global.caches.delete(filteredName))
  },

  async revalidateCache (request) {
    const response = await global.caches.match(request)

    if (response) {
      return response
    }

    return this._fetchRequest(request)
  },

  async _openCache () {
    return global.caches.open(CONFIG.CACHE_NAME)
  },

  async _fetchRequest (request) {
    const response = await fetch(request)
    if (!response || response.status !== 200) {
      return response
    }

    const cacheResponse = response.clone()
    await this._putCache(request, cacheResponse)
    return response
  },

  async _putCache (request, cacheResponse) {
    const cache = await this._openCache()
    cache.put(request, cacheResponse)
  }
}

export default CacheHelper
