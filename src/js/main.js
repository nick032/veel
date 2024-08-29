import "./_components.js";

//Карта
ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map("origin__map", {
    center: [55.708511, 37.455382],
    controls: [],
    zoom: 15,
  });
}
