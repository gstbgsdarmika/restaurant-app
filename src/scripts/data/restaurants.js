import $ from 'jquery';
import dataRestaurants from '../../DATA.json';

const renderRestaurant = () => {
  const listRestaurant = dataRestaurants.restaurants;
  listRestaurant.forEach((restaurant) => {
    $('.restaurant-list').append(`
        <div class="card">
        <div class="card-img">
            <div class="city">
                <p tabindex="0" ><i class="fa-solid fa-city"></i>${restaurant.city}</p>
            </div>
            <img tabindex="0" src="${restaurant.pictureId}" alt="Restaurant${restaurant.name}">
        </div>
        <div class="card-info">
            <h3 tabindex="0" class="rating">Rating : ${restaurant.rating} <i class="fa-solid fa-star"></i></h3>
            <h2 tabindex="0" class="restaurant-name">${restaurant.name}</h2>
            <p tabindex="0">${restaurant.description}</p>
        </div>
        </div>
        `);
  });
};

export default renderRestaurant;
