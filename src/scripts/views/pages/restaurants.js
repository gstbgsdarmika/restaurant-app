import RestaurantsDbSource from '../../data/restaurantdb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Restaurants = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Restaurant Catalogue</h2>
        <div id="restaurants" class="restaurants">
        </div>
      </div>
      `;
  },

  async afterRender() {
    const restaurant = await RestaurantsDbSource.restaurants();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurant.forEach((restaurants) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurants);
    });
  },
};

export default Restaurants;
