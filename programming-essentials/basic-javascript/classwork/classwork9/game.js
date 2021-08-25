let clickCount = 0;

const handleClick = function (element) {
  let wasClicked = false;

  for (let child of element.children) {
    if (child.style.display === 'block') {
      wasClicked = true;
    }
  }
  if (wasClicked) return;

  if (clickCount % 2 === 0) {
    showElem('.cross', element);
  } else {
    showElem('.circle', element)
  }
  clickCount++;
}

function showElem (selector, elementToSearch) {
  let elementToShow = elementToSearch.querySelector(selector)
  elementToShow.style.display = 'block';
}