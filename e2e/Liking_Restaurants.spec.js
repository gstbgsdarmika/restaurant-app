const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('#query');
  // I.seeElement('.query'); // membuat test menjadi gagal
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');

  I.amOnPage('/');

  I.seeElement('.restaurant__name a');

  const firstRestaurant = locate('.restaurant__name a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item');
  const likedRestaurantName = await I.grabTextFrom('.restaurant__name');

  assert.strictEqual(firstRestaurantName, likedRestaurantName);
});

Scenario('searching restaurants', async ({ I }) => {
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');

  I.amOnPage('/');

  I.seeElement('.restaurant__name a');

  const restaurants = [];

  for (let i = 1; i <= 3; i++) {
    I.click(locate('.restaurant__name a').at(i));
    I.seeElement('#likeButton');
    I.click('#likeButton');
    restaurants.push(await I.grabTextFrom('.restaurant__name'));
    I.amOnPage('/');
  }

  I.amOnPage('/#/favorite');
  I.seeElement('#query');

  const searchQuery = restaurants[1].substring(1, 3);
  const matchingRestaurants = restaurants.filter((restaurant) => restaurant.indexOf(searchQuery) !== -1);

  I.fillField('#query', searchQuery);
  I.pressKey('Enter');

  const visibleLikedRestaurants = await I.grabNumberOfVisibleElements('.restaurant-item');
  assert.strictEqual(matchingRestaurants.length, visibleLikedRestaurants);

  matchingRestaurants.forEach(async (restaurant, index) => {
    const visiblerestaurant = await I.grabTextFrom(locate('.restaurant__name').at(index + 1));
    assert.strictEqual(restaurant, visiblerestaurant);
  });
});

Scenario('unliked restaurant', ({ I }) => {
  I.amOnPage('/#home');
  I.waitForElement('.restaurant__name a', 20);
  I.seeElement('.restaurant__name a');
  I.click(locate('.restaurant__name a').first());

  I.waitForElement('#likeButton', 20);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.waitForElement('.restaurant__name a', 20);
  I.seeElement('.restaurant__name a');
  I.click('.restaurant__name a');

  I.waitForElement('#likeButton', 20);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.waitForElement('.restaurant-item__not__found', 20);
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');
});
