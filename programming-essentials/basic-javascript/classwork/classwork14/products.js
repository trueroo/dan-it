const DESCRIPTIONS = {
  0: `17 oz double wall 18/8 stainless steel thermal bottle with copper vacuum insulation, threaded stainless steel insulated lid, and stainless steel base. The world is boundless with this stylish water bottle! The perfect giveaway!`,
  1: `The coziest zip up hoodie around. So stylish and comfy, you won't want to take it off. It has unisex sizing, a full zipper, and kangaroo pockets for all your essentials.`,
  2: `One of our best sellers - the Swag.com Triblend Crew! Our blend of durable polyester, combed ring-spun cotton, and silky rayon makes for a soft, comfortable, and long-lasting tee.`,
}

const main = document.querySelector('.js-main');
const itemWrappers = document.querySelectorAll('.js-item-wrapper');
const clearElements = document.querySelectorAll('.js-clear');
let interval; 

const showDescription = function (event) {
  const currentItem = event.target.closest('.js-item-wrapper');
  const id = currentItem.dataset.productId;
  const descriptionText = DESCRIPTIONS[id];
  clearInterval(interval);

  const descriptionElement = document.querySelector('.js-description');
  descriptionElement.innerHTML = descriptionText;

  setTimeout(function() {
    interval = setInterval(showNextDescription, 3000);
  }, 5000);

  console.log('will show');
}

const clearDescription = function (event) {
  event.stopPropagation();
  const descriptionElement = document.querySelector('.js-description');
  descriptionElement.innerHTML = '';
  console.log('will clear');
}

main.addEventListener('click', showDescription);
for (const clear of clearElements) {
  clear.addEventListener('click', clearDescription);
}

let nextDescription = window.localStorage.getItem('currentDescription') || 0;
console.log(nextDescription);

const showNextDescription = function() {
  const descriptionElement = document.querySelector('.js-description');

  descriptionElement.classList.add('description-hidden');
  setTimeout(function() {
    descriptionElement.innerHTML = nextDescription.toString() + '. ' + DESCRIPTIONS[nextDescription];
    nextDescription++;
    descriptionElement.classList.remove('description-hidden');
  }, 500)

  if (nextDescription >= Object.keys(DESCRIPTIONS).length) {
    nextDescription = 0;
  }
} 

showNextDescription();

interval = setInterval(showNextDescription, 3000);

window.addEventListener('beforeunload', function () {
  window.localStorage.setItem(
    'currentDescription',
    nextDescription === 0 ? Object.keys(DESCRIPTIONS).length - 1 : nextDescription - 1);
});