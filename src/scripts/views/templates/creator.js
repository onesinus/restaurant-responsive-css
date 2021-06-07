import CONFIG from '../../globals/config'
import { maxString } from '../../utils/string-helper'

const createRestaurantItemTemplate = (restaurant) => `
    <div class="card-item">
        <div class="card-header">
            <img 
                src="${restaurant.pictureId ? `${CONFIG.BASE_IMAGE_MEDIUM_URL}/${restaurant.pictureId}` : CONFIG.NO_IMAGE_URL}"
                width="350" 
                height="350" 
                alt="${restaurant.name}"
            >
        </div>
        <div class="card-body">
            <h5>${restaurant.city}</h5>
            <h6>Rating: ${restaurant.rating}</h6>
            <p>${maxString(restaurant.description, 300)}</p>
        </div>
    </div>
`

export {
  createRestaurantItemTemplate
}
