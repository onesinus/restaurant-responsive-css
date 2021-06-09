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
            <h5>
                <a href="/#/detail/${restaurant.id}">${restaurant.city}</a>
            </h5>
            <h6><i class="fa fa-star"></i> ${restaurant.rating}</h6>
            <p class='description'>${maxString(restaurant.description, 300)}</p>
        </div>
    </div>
`

const createRestaurantDetailTemplate = (restaurant) => `
    <div class="card-item">
        <div class="card-header">
            <img 
                src="${restaurant.pictureId ? `${CONFIG.BASE_IMAGE_MEDIUM_URL}/${restaurant.pictureId}` : CONFIG.NO_IMAGE_URL}"
                width="350" 
                height="350" 
                alt="${restaurant.name}"
            >
        </div>
    </div>
    <div class="card-item">
        <div class="card-body">
            <h5>${restaurant.city}</h5>
            <h6><i class="fa fa-star"></i> ${restaurant.rating}</h6>
            <p class='description'>${maxString(restaurant.description, 1000)}</p>
        </div>
    </div>
    <div class="card-item">
        <div class="card-body">
            <vertical-information
                icon="fa fa-cutlery"
                title="Categories"
                content="${restaurant.categories.map(category => category.name)}"
            ></vertical-information>            

             <vertical-information
                icon="fa fa-map-marker"
                title="Location"
                content="${restaurant.address}"
            ></vertical-information>
 
            <vertical-information
                icon="fa fa-coffee"
                title="Foods & Drinks"
                content="
                    ${restaurant.menus.foods.map(food => food.name)}
                    ${restaurant.menus.drinks.map(drink => drink.name)}                
                "
            ></vertical-information>

            <vertical-information
                icon="fa fa-comments"
                title="Reviews"
                content="
                    ${restaurant.customerReviews.slice(0, 5).map(customerReview => `
                        ${maxString(customerReview.review, 500)} @<b>${customerReview.name}</b> <br/>
                    `)}
                "
            ></vertical-information>            
        </div>
    </div>
`

const createFavoriteButtonTemplate = () => `
  <button aria-label="Add this restaurant to favorite" id="favoriteButton" class="favorite">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`

const createFavoritedButtonTemplate = () => `
  <button aria-label="Remove this restaurant from favorite" id="removeFavoriteButton" class="favorite">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createFavoriteButtonTemplate,
  createFavoritedButtonTemplate
}
