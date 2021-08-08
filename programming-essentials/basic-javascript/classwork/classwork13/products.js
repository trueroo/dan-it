const DESCRIPTIONS = {
  0: `17 oz double wall 18/8 stainless steel thermal bottle with copper vacuum insulation, threaded stainless steel insulated lid, and stainless steel base. The world is boundless with this stylish water bottle! The perfect giveaway!`,
  1: `The coziest zip up hoodie around. So stylish and comfy, you won't want to take it off. It has unisex sizing, a full zipper, and kangaroo pockets for all your essentials.`,
  2: `One of our best sellers - the Swag.com Triblend Crew! Our blend of durable polyester, combed ring-spun cotton, and silky rayon makes for a soft, comfortable, and long-lasting tee.`,
}

const main = document.querySelector('.js-main');
const itemWrappers = document.querySelectorAll('.js-item-wrapper');
const clearElements = document.querySelectorAll('.js-clear');

const showDescription = function (event) {
  const currentItem = event.target.closest('.js-item-wrapper');
  const id = currentItem.dataset.productId;
  const descriptionText = DESCRIPTIONS[id];
  
  const descriptionElement = document.querySelector('.js-description');
  descriptionElement.innerHTML = descriptionText;
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
