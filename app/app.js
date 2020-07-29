console.log("I am alive!");


let last_known_scroll_position = 0;
let ticking = false;

let body = document.getElementsByTagName("BODY")[0];
console.log(body);

let pageHeight = body.clientHeight;

console.log(pageHeight);

function doSomething(scroll_pos) {
  // Do something with the scroll position
  console.log(scroll_pos);
//   document.getElementByClass("pageBackground").style.backgroundPosition = "0px 40px";

}

window.addEventListener('scroll', function(e) {
  last_known_scroll_position = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function() {
      doSomething(last_known_scroll_position);
      ticking = false;
    });

    ticking = true;
  }
});