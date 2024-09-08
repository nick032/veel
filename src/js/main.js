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
      '<div class="map-markers" style="color: #000000; font-weight: bold;">$[properties.iconContent]</div>'
    ),
    myPlacemarkMetro = new ymaps.Placemark(
      [55.712486, 37.455477],
      {
        hintContent: "",
      },
      {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: "default#image",
        // Своё изображение иконки метки.
        iconImageHref: "./img/map-markers/metro.png",
        // Размеры метки.
        iconImageSize: [80, 93],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        // iconImageOffset: [-5, -38],
      }),

    myPlacemarkPark = new ymaps.Placemark(
      [55.713555, 37.440596],
      {
        hintContent: "",
      },
      {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: "default#image",
        // Своё изображение иконки метки.
        iconImageHref: "./img/map-markers/park.png",
        // Размеры метки.
        iconImageSize: [80, 93],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        // iconImageOffset: [-5, -38],
      }),
    myPlacemarkDepo = new ymaps.Placemark(
      [55.704447, 37.463875],
      {
        hintContent: "",
      },
      {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: "default#image",
        // Своё изображение иконки метки.
        iconImageHref: "./img/map-markers/depo.png",
        // Размеры метки.
        iconImageSize: [80, 93],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        // iconImageOffset: [-5, -38],
      });

  myMap.geoObjects.add(myPlacemarkMetro)
    .add(myPlacemarkPark)
    .add(myPlacemarkDepo);

  myPlacemarkMetro.events
    .add('mouseenter', function (e) {
      e.get('target').options.set('iconImageSize', [90, 100]);
    })
    .add('mouseleave', function (e) {
      e.get('target').options.set('iconImageSize', [80, 93]);
    });

  myPlacemarkDepo.events
    .add('mouseenter', function (e) {
      e.get('target').options.set('iconImageSize', [90, 100]);
    })
    .add('mouseleave', function (e) {
      e.get('target').options.set('iconImageSize', [80, 93]);
    });
  myPlacemarkPark.events
    .add('mouseenter', function (e) {
      e.get('target').options.set('iconImageSize', [90, 100]);
    })
    .add('mouseleave', function (e) {
      e.get('target').options.set('iconImageSize', [80, 93]);
    });
}

// Модальные окна
const modalForm = new HystModal({
  linkAttributeName: "data-hystmodal",
  closeOnOverlay: true,
  backscroll: true,
});

const modalSuccess = new HystModal({
  linkAttributeName: "data-hystmodal",
  closeOnOverlay: true,
  backscroll: true,
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
