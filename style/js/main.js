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
    
 var fullscreenmenu = $(".header__menu");
    
    var strokes = $(".hamburger__line"),
        icon = $(".hamburger"),
        fullscreenmenu = $(".header__menu");
        
  
    function transformStart() {

        strokes.eq(0).toggleClass("hamburger__line_top-js");
        strokes.eq(1).toggleClass("hamburger__line_hide-js");
        strokes.eq(2).toggleClass("hamburger__line_bottom-js");
        fullscreenmenu.toggleClass("header__menu_show");
    }
    
    icon.on("click", transformStart);
    
    
    var link = $(".header__menu-link")

            link.on("click", transformStart);   
        
    

})();


//team accordeon




$(function(){
   $('.team-accordeon__item').on('click' ,   e => { 
    
        const $this = $(e.currentTarget);

        $this.toggleClass("active").siblings().removeClass("active");
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

//$(function(){
   

    
//});   


    //slider
    /*
$(function() {

    var moveSlide = function (container , slideNum) {
            var 
                items = container.find('.slider__item'),
                activeSlide = items.filter('.active-slide'),
                reqItem = items.eq(slideNum),
                reqIndex = reqItem.index(),
                list = container.find('.slider__list'),
                duration = 1000;
    
            if (reqItem.length) {
                list.animate({
                    'left': -reqIndex *100 +'%'
                
                }, duration, function () {
                    activeSlide.removeClass('active-slide');
                    reqItem.addClass('active-slide');
                });
            };
        }; 
   
    
    $('.slider-arrow__link').on('click' , function(e){
        e.preventDefault(); 

        var $this = $(this);
            container = $this.parents().siblings('.slider'),
            items = container.find('.slider__item'),
            activeItem = items.filter('.active'),
            nextItem = activeItem.next(),
            prevItem = activeItem.prev();

        if($this.hasClass('arrow-right-link')){
            if(nextItem.length){
                moveSlide(container , nextItem.index())
            } else {
                moveSlide(container , items.first().index())
            }

        } else {
            if(prevItem.length){
                moveSlide(container , prevItem.index())
            } else {
                moveSlide(container , items.last().index())
            }
        }
        
        
    });
});
*/


// slick slider

    $('.slider__list').slick({
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
     });


// 

