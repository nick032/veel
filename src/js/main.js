import "./_components.js";
import "./components/hystmodal.min.js"
import "./components/jquery.fancybox-1.3.4.pack.js"

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
