import "./_components.js";
import "./components/hystmodal.min.js"
import "./components/jquery.fancybox.min.js"

//Карта
ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map("origin__map", {
    center: [55.708511, 37.455382],
    controls: [],
    zoom: 15,
  });
}

// Модальные окна
const modalForm = new HystModal({
  linkAttributeName: "data-hystmodal",
});

const modalSuccess = new HystModal({
  linkAttributeName: "data-hystmodal",
})

// burger menu
function burgerMenu(selector) {

  let menu = $(selector);

  let button = menu.find('.nav__burger-menu', '.burger');

  let links = menu.find('.nav__link');
  let menuList = $('.nav__list')

  // let overlay = menu.find('.burger-menu_overlay');

  button.on('click', (e) => {
    e.preventDefault();
    toggleMenu();
  });

  links.on('click', () => toggleMenu());
  // overlay.on('click', () => toggleMenu());

  function toggleMenu(){
    menu.toggleClass('burger-menu__active');

    if (menu.hasClass('burger-menu__active')) {
      $('body').css('overlow', 'hidden');
    } else {
      $('body').css('overlow', 'visible');
    }
  }
}

burgerMenu('.nav');



