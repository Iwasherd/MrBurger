// MAP

ymaps.ready(init);
var myMap;

function init(){     
    myMap = new ymaps.Map("map", {
        center: [59.92685228381057,30.33549108362017],
        zoom: 11,
        controls: []
    });

    myMap.behaviors.disable('scrollZoom');
    



    var myPlacemark = new ymaps.Placemark([59.94554327989287,30.38935262114668], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'style/images/icons/map-marker.svg',
        iconImageSize: [46, 57],
        iconImageOffset: [-26, -52]
    });


    var coords = [
        [59.94554327989287,30.38935262114668],
        [59.91142323563909,30.50024587065841],
        [59.88693161784606,30.319658102103713],
        [59.97033574821672,30.315194906302924]
    ],
        myCollection = new ymaps.GeoObjectCollection({}, {
            iconLayout: 'default#image',
            iconImageHref: 'style/images/icons/map-marker.svg',
            iconImageSize: [46, 57],
            iconImageOffset: [-26, -52],
            draggable: false
        });
    
    for (var i = 0; i < coords.length; i++) {
        myCollection.add(new ymaps.Placemark(coords[i]));
    }
    
    myMap.geoObjects.add(myCollection);

      myMap.geoObjects.add(myPlacemark);
      
}


//Humburger

(function () {
    
 var fullScreenMenu = $(".header__menu");
    
    var strokes = $(".hamburger__line"),
        icon = $(".hamburger"),
        fullScreenMenu = $(".header__menu");
        link = $(".header__menu-link");
        
        
  
    function transformStart() {

        strokes.eq(0).toggleClass("hamburger__line_top-js");
        strokes.eq(1).toggleClass("hamburger__line_hide-js");
        strokes.eq(2).toggleClass("hamburger__line_bottom-js");
        fullScreenMenu.toggleClass("header__menu_show");
        $.fn.fullpage.setAllowScrolling(false);
        $.fn.fullpage.setKeyboardScrolling(false, 'down');
        
    }
    function transformEnd(){
        strokes.eq(0).removeClass("hamburger__line_top-js");
        strokes.eq(1).removeClass("hamburger__line_hide-js");
        strokes.eq(2).removeClass("hamburger__line_bottom-js");
        fullScreenMenu.removeClass("header__menu_show");
        $.fn.fullpage.setAllowScrolling(true);
        $.fn.fullpage.setKeyboardScrolling(true, 'down');
    }

    icon.on("click", transformStart);
    link.on("click", transformEnd);   
        
    

})();


//team accordeon




$(function(){
   $('.team-accordeon__item').on('click' ,   e => { 
    
        const $this = $(e.currentTarget);

        $this.toggleClass("team-accordeon__item--active").siblings().removeClass("team-accordeon__item--active");
  });
});



// menu accordeon
  
$(function(){

    $('.menu-acc__item').on('click'
    ,   e =>{

        const $this = $(e.currentTarget);
        e.preventDefault()

        $this.toggleClass("current").siblings().removeClass("current");  

    });
});
 
  


    //slider
    /*
$(function() {

    let   list = $('.slider__list'),
          sliderItemsCount = $('.slider__item').length;
          sliderWidth = sliderItemsCount * 100 + "%";
          setSliderWidth = function(element, width) {
            $(element).css(width, sliderWidth);
          }


      moveSlide = function(container, slideNum) {
            let items = $('.slider__item'),
                activeSlide = items.filter('.active-slide'),
                reqItem = items.eq(slideNum),
                reqIndex = reqItem.index(),
                duration = 500;
      }

    
            if (reqItem.length) {
                list.animate({
                    'left': -reqIndex *100 +'%'
                
                }, duration, function () {
                    activeSlide.removeClass('active-slide');
                    reqItem.addClass('active-slide');
                });
            };
     
   
    
    $('.slider-arrow__link').on('click' , function(e){
        e.preventDefault(); 

        let $this = $(this);
            container = $this.parents().siblings('.slider'),
            items = container.find('.slider__item'),
            activeItem = items.filter('.active'),
            existedItem, edgeItem, reqItem;

        if($this.hasClass('arrow-right-link')){
            existedItem = activeItem.next();
            edgeItem = items.first();

        }
        if ($this.hasClass('arrow-left-link')){
            existedItem = activeItem.prev(),
            edgeItem = items.last();
        }
        
        reqItem = existedItem.length ? existedItem.index() : edgeItem.index();

        moveSlide(container, reqItem);
    
    });
});

*/

// slick slider

    $('.slider__list').slick({
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
     });



 // full page scroll 
 $(document).ready(function() {
	$('.main-content').fullpage({
        scrollingSpeed: 1100,
        menu: '#menu',
 //       anchors:['greeting-page', 'best', 'burgerslider', 'team', 'menu', 'reviews', 'delivery', 'map-page']
        responsiveHeight: 100,

    });
});