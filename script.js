function closeMobileMenu() {
    document.getElementById("mobile_menu").addClass("hidden")
}

document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.carousel');

  var instances = M.Carousel.init(elems, {
      fullWidth: true,
      indicators: true
  });

  // Next and Previous Controls
  document.querySelector('.next').addEventListener('click', function () {
      instances[0].next();
  });

  document.querySelector('.prev').addEventListener('click', function () {
      instances[0].prev();
  });
});