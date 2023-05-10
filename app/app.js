console.log("I am alive!");

let func = () => {
  {};
}


let last_known_scroll_position = 0;
let ticking = false;

let parallaxEl = document.getElementsByClassName('parallax')[0];

let windowHeight = window.innerHeight;
let scrollHeight = document.body.scrollHeight;

let maxScollPositionY = scrollHeight - windowHeight;
console.log('Max scroll => ' + maxScollPositionY);

function transformBackground(scrollPosition) {

    // Because the background image is 125vh we have 25vh "hidden" under the viewport when the user is at the top of the document.
    let degreeOfTransform = (scrollPosition / maxScollPositionY);

    let transformValue = degreeOfTransform * -30;

    let viewportTransformString = transformValue + 'vh';

    // TODO 'Scroll' the background manipulating the y coordinate proportionate to the amount scrolled / total available scroll space with a max shift value of 25vh
    parallaxEl.style.backgroundPositionY = viewportTransformString;

}

function transformBackgroundMobile(scrollPosition) {

    // An initial offset is the easiest way to soften the initial shock of scrolling rapidly on mobile
    // Because it takes a second for the javascript to kick in, offsetting the background above the viewport kides the jerk better than a colored background
    const initialOffset = 150;
    // Because the background image is 125vh we have 25vh "hidden" under the viewport when the user is at the top of the document.
    let degreeOfTransform = (scrollPosition / maxScollPositionY);
    let degreedAdditionalTransformValuePx = degreeOfTransform * 600;
    let degreedAndOffsetTransformValuePx = degreedAdditionalTransformValuePx + initialOffset;
    let transformValueActualPx = scrollPosition - degreedAndOffsetTransformValuePx.toFixed(1);

    let viewportTransformString = transformValueActualPx  + 'px';
    // TODO 'Scroll' the background manipulating the y coordinate proportionate to the amount scrolled / total available scroll space with a max shift value of 25vh
    parallaxEl.style.backgroundPositionY = viewportTransformString;
    // requestAnimationFrame( transformBackgroundMobile );
    
}
console.log(navigator.userAgent);
let isMobile = navigator.userAgent.match(
    /(Android|webOS|BlackBerry|IEMobile|Opera Mini)/i);
let isIOS = (/iPad|iPhone|iPod/.test(navigator.platform) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)) && !window.MSStream
let isSafari = navigator.userAgent.match(
        /(Safari)/i);

if(isSafari) {  
    console.log('This is is on safari');
} 

if(isMobile || isIOS) {
    // body.style.backgroundPosition = 'left top';
    // parallaxEl.classList.add('isMobile');

    // background-attachment: scroll;
    // background-position: left top;
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

    console.log('I am on mobile');
    // window.addEventListener('scroll', function(e) {
    //     lastKnownScrollPosition = window.scrollY;
    //     // if (!ticking) {
    //         // window.requestAnimationFrame(function() {
    //         //     transformBackgroundMobile(lastKnownScrollPosition);
    //         //     // ticking = false;
    //         // });

    //         // ticking = true;

    //     //   }
          
    //   });
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





