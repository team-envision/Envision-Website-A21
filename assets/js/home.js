function isOnScreen(elem) {
  // if the element doesn't exist, abort
  if (elem.length == 0) {
    return;
  }
  var $window = jQuery(window);
  var viewport_top = $window.scrollTop();
  var viewport_height = $window.height();
  var viewport_bottom = viewport_top + viewport_height;
  var $elem = jQuery(elem);
  var top = $elem.offset().top;
  var height = $elem.height();
  var bottom = top + height;

  return (
    (top >= viewport_top && top < viewport_bottom) ||
    (bottom > viewport_top && bottom <= viewport_bottom) ||
    (height > viewport_height &&
      top <= viewport_top &&
      bottom >= viewport_bottom)
  );
}

var flag = true;

jQuery(document).ready(function () {
  window.addEventListener("scroll", function (e) {
    // console.log(flag);
    if (isOnScreen(jQuery(".brief-divisions"))) {
      /* Pass element id/class you want to check */
      {
        // console.log(flag);
        if (flag) {
          // console.log(flag);
          $(".Count").each(function () {
            var $this = $(this);
            jQuery({
              Counter: 0,
            }).animate(
              {
                Counter: $this.text(),
              },
              {
                duration: 2700,
                easing: "swing",
                step: function () {
                  $this.text(Math.ceil(this.Counter));
                },
              }
            );
          });
          flag = false;
          // console.log(flag);
        }
      }
    }
  });
});

// $('.brief-divisions').hover(() => {
//     if (flag) {

//         $('.Count').each(function () {
//             var $this = $(this);
//             jQuery({
//                 Counter: 0
//             }).animate({
//                 Counter: $this.text()
//             }, {
//                 duration: 2700,
//                 easing: 'swing',
//                 step: function () {
//                     $this.text(Math.ceil(this.Counter));
//                 }
//             });
//         });
//         flag = false;
//     }

// });

// Mobile navigation Bar
let menu = document.querySelector(".menu-bar");
let nav = document.querySelector(".nav-items");

menu.addEventListener("click", () =>{
    nav.classList.toggle("nav-active");
})