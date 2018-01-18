$(document).ready(function (){
  loadPage();
});

var target = 0;

var loadPage = function() {
    //Elementos
    var $buttons = $(".control");
    var $previous = $(".previous");
    var $next = $(".next");

    //Eventos
    $buttons.click(changeImage);
    $previous.click(previousImage);
    $next.click(nextImage);
}

//funcion para carlar la imagen con su data
var changeImage = function() { //cargar imagen
    target = $(this).data("target");
    showImage(target);
    changeColorButton(target);
    previousImage(target);
    nextImage(target);
};

//funcion para cambiar la imagen
var showImage = function(target) { // changeImage Silvana
    var $lastSlide = $("div.active");
    var $slide = $("div[data-slide = '" + target + "']");
    $lastSlide.removeClass("active");
    $slide.addClass("active");
};

//funcion para cambiar el color de boton activo
var changeColorButton = function (target) {
    var $actualButton = $("button.active");
    console.log($actualButton);
    var $newButton = $("button[data-target='" + target +"']");
    $actualButton.removeClass("active");
    $newButton.addClass("active");
}


//funciones para botones de siguiente y anterior

var previousImage = function(e) {
  if (e!=null) {
    e.preventDefault();
    target = target - 1;
    target = (target < 0) ? 6 : target;
    showImage(target);
    changeColorButton(target);
};

var nextImage = function(e) {
    if (e!=null) {
      e.preventDefault();
    }
    target = target + 1;
    target = (target > 6) ? 0 : target;
    showImage(target);
    changeColorButton(target);
}
