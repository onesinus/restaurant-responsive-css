import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/card.css';
import '../styles/responsive.css';

hamburgerHandler()
loadData()

function hamburgerHandler() {
	const hamburger = document.querySelector('#hamburger')
	const drawer = document.querySelector('#drawer')
	const main = document.querySelector('main')

	hamburger.addEventListener('click', event => {
		drawer.classList.toggle("open")
		event.stopPropagation()
	})

	main.addEventListener('click', event => {
		drawer.classList.remove("open")
		event.stopPropagation()
	})
}

function loadData() {
	const datas = require('../DATA.json')
	const restaurants = datas.restaurants

	const cards = document.querySelector('.cards')
	
	let content = ''
	restaurants.map(restaurant => {
		let maxCharacters = 300;
		let description = restaurant.description.substr(0, maxCharacters)
		description += restaurant.description.length > maxCharacters ? '...' : ''

		content += `
			<div class="card-item">
			    <div class="card-header">
					<img 
						src="${restaurant.pictureId}" 
						width="350" height="350" 
						alt="${restaurant.name}"
					>
			    </div>
			    <div class="card-body">
			    	<h5>${restaurant.city}</h5>
			    	<h6>Rating: ${restaurant.rating}</h6>
			    	<p>${description}</p>
			    </div>
			</div>
		`
	})

	cards.innerHTML = content
}
