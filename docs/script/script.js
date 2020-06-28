// ----------------------------------MAP----------------------------------
ymaps.ready(init);

function init() {
    var map = new ymaps.Map('map', {
        center: [55.761946, 37.606634],
        zoom: 13,
        controls:[],
        behaviors: ['drag']
    });
    var placemark = new ymaps.Placemark([55.755566, 37.611813],{
        hintContent: ' место встречи ',
        balloonContent:'<b>Встречаемся тут!</b>',
        
    });
    map.geoObjects.add(placemark);
}
var meeting =  document.querySelector(".meeting");
meeting.classList.add("block");

map.onclick = function (){
    meeting.classList.toggle("block")
}
// ----------------------------------Down----------------------------------
var dots =  document.querySelector("#dots");
var photoDown = document.querySelector("#photo__down");
photoDown.onclick = function(){
	if (dots.classList.toggle("fleX")) {
        photoDown.innerText = "Скрыть фото";
    } else {
        photoDown.innerText = "Показать фото"; 
    }
}

var revDots = document.querySelector("#reviews__dots");
var revDown = document.querySelector("#reviews__down");
revDown.onclick = function(){
	if (revDots.classList.toggle("fleX")) {
        revDown.innerText = "Показать все фото (134)";
    } else {
        revDown.innerText = "Скрыть отзывы";
    }
}
// ----------------------------------BOOKING----------------------------------
var  booking = document.querySelector("#booking");
var  buttHeader = document.querySelector("#button__header");
var  closeBooking = document.querySelector("#close__booking");
var  body = document.querySelector("body");

buttHeader.onclick = function(){
    booking.style.display = "block";
    body.classList.add("hidden");
}
closeBooking.onclick = function(){
    booking.style.display = "none";
    body.classList.remove("hidden");
}
window.onclick = function(event){
    if (event.target == booking) {
        booking.style.display = "none";
    }

}
// ----------------------------------VIDEO---------------------------------- 
var  video = document.querySelector("#video");
var  play = document.querySelector("#play");

play.addEventListener ("click", function(){
    video.play();
})
// ----------------------------------SLIDER---------------------------------- 
$(document).ready(function(){
    $("#slider-row").owlCarousel({
        items:4,
        margin:10,
        loop: true,
        dots: false,
        responsive: {
            0: {
                items:1
            },
            320: {
                items:1
            },
            600: {
                items:2
            },
            880: {
                items:3
            },
            1140:{
                items:4
            }
        }
    });

    $("#slider__map").owlCarousel({
        items:1,
        dots: true,
        nav:true,
        margin:0,
        loop: true,
        navText: ['<span class="map-left"> <img src="image/icons/left.svg" alt="left"></span>', '<span class="map-rite"><img src="image/icons/right.svg" alt="left"></span>'],
        responsive:{
            1140:{
                items:1
            }
        }
    
       
        
});








  });