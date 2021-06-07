import CONFIG from './config'

const ENDPOINTS = {
  RESTAURANTS: `${CONFIG.BASE_URL}/list`,
  RESTAURANT: (id) => `${CONFIG.BASE_URL}/detail/${id}`
}

export default ENDPOINTS
