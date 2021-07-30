const bubbles = document.querySelectorAll('.js-bubble');


const remover = function (event) {
  console.log(event.clientX);
  console.log(event.clientY);
  event.target.remove();
};

for (let bubble of bubbles) {
  bubble.addEventListener('click', remover);
  bubble.addEventListener('mouseover', function () {
    console.log("Please don't click me");
  });
}
