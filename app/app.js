console.log("I am alive!");


let last_known_scroll_position = 0;
let ticking = false;

let body = document.getElementsByClassName('parallax')[0];

let windowHeight = window.innerHeight;
let scrollHeight = document.body.scrollHeight;

let maxScollPositionY = scrollHeight - windowHeight;
console.log('Max scroll => "'+ maxScollPositionY);

function transformBackground(scrollPosition) {
    // Because the background image is 125vh we have 25vh "hidden" under the viewport when the user is at the top of the document.
    let degreeOfTransform = (scrollPosition / maxScollPositionY);
    console.log(degreeOfTransform);

    let transformValue = degreeOfTransform * -300;

    let viewportTransformString = transformValue + 'px';


    // TODO 'Scroll' the background manipulating the y coordinate proportionate to the amount scrolled / total available scroll space with a max shift value of 25vh
    body.style.backgroundPositionY = viewportTransformString;
    console.log(scrollPosition);

}

window.addEventListener('scroll', function(e) {
  lastKnownScrollPosition = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function() {
      transformBackground(lastKnownScrollPosition);
      ticking = false;
    });

    ticking = true;
  }
});