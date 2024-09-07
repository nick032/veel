import "./_components.js";
import "./components/hystmodal.min.js";
import "./components/jquery.fancybox.min.js";

//Карта
ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map("origin__map", {
      center: [55.708511, 37.455382],
      controls: [],
      zoom: 14,
    }),
    // Создаём макет содержимого.
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
      '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    ),
    myPlacemark = new ymaps.Placemark(
      myMap.getCenter(),
      {
        hintContent: "Собственный значок метки",
      },
      {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: "default#image",
        // Своё изображение иконки метки.
        iconImageHref: "./img/map-markers/metro.png",
        // Размеры метки.
        // iconImageSize: [30, 42],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-5, -38],
      }
    );

    myMap.geoObjects
      .add(myPlacemark);
}

// Модальные окна
const modalForm = new HystModal({
  linkAttributeName: "data-hystmodal",
});

const modalSuccess = new HystModal({
  linkAttributeName: "data-hystmodal",
});

// burger menu
function burgerMenu(selector) {
  let menu = $(selector);

  let button = menu.find(".nav__burger-menu", ".burger");

  let links = menu.find(".nav__link");
  let menuList = $(".nav__list");

  // let overlay = menu.find('.burger-menu_overlay');

  button.on("click", (e) => {
    e.preventDefault();
    toggleMenu();
  });

  links.on("click", () => toggleMenu());
  // overlay.on('click', () => toggleMenu());

  function toggleMenu() {
    menu.toggleClass("burger-menu__active");

    if (menu.hasClass("burger-menu__active")) {
      $("body").css("overlow", "hidden");
    } else {
      $("body").css("overlow", "visible");
    }
  }
}

burgerMenu(".nav");
