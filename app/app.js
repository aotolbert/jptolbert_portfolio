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

    let transformValue = degreeOfTransform * -20;

    let viewportTransformString = transformValue + 'vh';

    let debugEl = document.getElementById('debuglog');
    debugEl.innerText = viewportTransformString;


    // TODO 'Scroll' the background manipulating the y coordinate proportionate to the amount scrolled / total available scroll space with a max shift value of 25vh
    body.style.backgroundPositionY = viewportTransformString;
    console.log(scrollPosition);

}

function transformBackgroundMobile(scrollPosition) {

    // Because the background image is 125vh we have 25vh "hidden" under the viewport when the user is at the top of the document.
    let degreeOfTransform = (scrollPosition / maxScollPositionY);
    console.log(degreeOfTransform);

    let baseTransformValluePx = scrollPosition;
    let degreedAdditionalTransformValuePx = degreeOfTransform * 250;
    console.log(degreedAdditionalTransformValuePx);

    let transformValueActualPx = baseTransformValluePx - degreedAdditionalTransformValuePx;
    console.log(transformValueActualPx);

    let viewportTransformString = transformValueActualPx  + 'px';
    // TODO 'Scroll' the background manipulating the y coordinate proportionate to the amount scrolled / total available scroll space with a max shift value of 25vh
    body.style.backgroundPositionY = viewportTransformString;

    let debugEl = document.getElementById('debuglog');
    debugEl.innerText = viewportTransformString;


    console.log(scrollPosition);

}

var isMobile = navigator.userAgent.match(
    /(iPhone|iPod|iPad|Android|webOS|BlackBerry|IEMobile|Opera Mini)/i);

if(isMobile) {
    console.log('I am on mobile');
    window.addEventListener('scroll', function(e) {
        lastKnownScrollPosition = window.scrollY;
      
        if (!ticking) {
            window.requestAnimationFrame(function() {
                transformBackgroundMobile(lastKnownScrollPosition);
                ticking = false;
            });

            ticking = true;

          }
          
      });
} else {
    console.log('I am  not on mobile');

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
}


