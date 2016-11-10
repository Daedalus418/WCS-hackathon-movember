class navbarController {

  constructor($window) {
      $(".button-collapse").sideNav();
      $('.js-scrollTo').on('click', function() { // Au clic sur un élément
          var page = $(this).attr('href'); // Page cible
          var speed = +(window.scrollY + $(page).offset().top) / 2; // Durée de l'animation (en ms)
          $('html, body').animate({
              scrollTop: ((window.scrollY < 324) ? ($(page).offset().top - 170 - 64) : ($(page).offset().top - 170))
          }, speed); // Go
          return false;
      });

  }

}
