import CONFIG from '../../globals/config';

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item">
    <div class="restaurant-item__header">
      <img class="lazyload restaurant-item__header__poster" data-src="${CONFIG.BASE_IMAGE_URL_SMALL + restaurant.pictureId}" alt="${restaurant.name}" tabindex="0">
      <div class="restaurant-item__header__rating">
        <p tabindex="0">⭐️<span tabindex="0" class="restaurant-item__header__rating__score">${restaurant.rating || '-'}</span></p>
      </div>
    </div>
    <div class="restaurant-item__content">
      <h3 class="restaurant__name" tabindex="0"><a href="/#/detail/${restaurant.id}">${restaurant.name || '-'}</a></h3>
      <p tabindex="0">City : <span class="city">${restaurant.city}</span></p>
      <p tabindex="0">${restaurant.description || '-'}</p>
    </div>
  </div>
`;

const createRestaurantDetailTemplate = (restaurant) => `
  <div class="restaurant-detail">
    <h2  tabindex="0" class="restaurant__name">${restaurant.name}</h2>
    <img class="lazyload restaurant__poster" data-src="${CONFIG.BASE_IMAGE_URL_SMALL + restaurant.pictureId}" alt="${restaurant.name}" >
    <div class="restaurant__info">
      <h4 tabindex="0">Categories</h4>
      <p  tabindex="0">${restaurant.categories.map((categories) => `${categories.name}`)}</p>
      <h4  tabindex="0">Address</h4>
      <p  tabindex="0">${restaurant.address}, ${restaurant.city}</p>
    </div>
    <div class="restaurant__overview">
      <h3 tabindex="0">Overview</h3>
      <p tabindex="0">${restaurant.description}</p>
    </div>
    <div class="restaurant__menu">
      <h3 tabindex="0">Foods</h3>
      <p tabindex="0">${restaurant.menus.foods.reduce((show, value) => show.concat(`<li>${value.name}</li>`), '')}</p>
      <h3 tabindex="0">Drinks</h3>
      <p tabindex="0">${restaurant.menus.drinks.reduce((show, value) => show.concat(`<li>${value.name}</li>`), '')}</p>
  </div>
  <div class="restaurant__review">
  ${restaurant.customerReviews.reduce((show, value) => show.concat(`<br>
  <p tabindex="0">${value.name}</p>
  <p tabindex="0">${value.review}</p>
  <p tabindex="0">${value.date}</p>`), '<h3>Customer Reviews:</h3>')}
  </div>
  </div>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
