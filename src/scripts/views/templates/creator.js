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
            <h5><i class="fa fa-cutlery"></i> Categories</h5>
            <p class='text-center mt2'>
                ${restaurant.categories.map(category => category.name)}
            </p>
 
            <br/>
            <h5><i class="fa fa-map-marker"></i> Location</h5>
            <p class='text-center mt2'>
                ${restaurant.address}
            </p>
 
            <br/> 
            <h5><i class="fa fa-coffee"></i> Foods & Drinks</h5>
            <p class='text-center mt2'>
                ${restaurant.menus.foods.map(food => food.name)}
                ${restaurant.menus.drinks.map(drink => drink.name)}
            </p>

            <br/> 
            <h5><i class="fa fa-comments"></i> Reviews</h5>
            <p class='text-center mt2'>
                ${restaurant.customerReviews.slice(0, 5).map(customerReview => `
                    ${maxString(customerReview.review, 500)} - ${customerReview.name} <br/>
                `)}
            </p>
        </div>
    </div>
`

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate
}
