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
$(function(){
    $('.slider__list').slick({
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
     });

})

 // full page scroll 
 $(document).ready(function() {
	$('.main-content').fullpage({
        scrollingSpeed: 1100,
        menu: '#menu',
 //       anchors:['greeting-page', 'best', 'burgerslider', 'team', 'menu', 'reviews', 'delivery', 'map-page']
        responsiveHeight: 100,
        

    });
});
        //pagination  
 

// modal window section reviews

$(function(){

    let btn = $('.review__button'),
        modal = $('.modal-window')
        item = $('.modal-windiw__item'),
        close = $('.modal-window__box-closeImg');
     // закрытие по нажатию на крест 
    close.on('click', e =>{
        modal.removeClass('first'),
        modal.removeClass('second'),
        modal.removeClass('third'),
        modal.removeClass('fourth'),
        modal.removeClass('five'),
        modal.removeClass('sixth'),
        modal.removeClass('seventh'),
        modal.removeClass('eighth');
        $.fn.fullpage.setAllowScrolling(true);  // возобновление прокрутки мышью
        $.fn.fullpage.setKeyboardScrolling(true, 'down'); // возобновление скролла клавишей "вниз"
        $.fn.fullpage.setKeyboardScrolling(true, 'up'); // возобновление скролла клавишей "вверх"
    })

    btn.eq(0).on("click", e =>{
        e.preventDefault

        modal.toggleClass("first"),
        $.fn.fullpage.setAllowScrolling(false), // запрет прокрутки мышью
        $.fn.fullpage.setKeyboardScrolling(false, 'down'); // запрет скролла клавишей "вниз"
        $.fn.fullpage.setKeyboardScrolling(false, 'up'); // запрет скролла клавишей "вверх"
    })
    btn.eq(1).on("click", e =>{
        e.preventDefault

        modal.toggleClass("second"),
        $.fn.fullpage.setAllowScrolling(false), // запрет прокрутки мышью
        $.fn.fullpage.setKeyboardScrolling(false, 'down'); // запрет скролла клавишей "вниз"
        $.fn.fullpage.setKeyboardScrolling(false, 'up'); // запрет скролла клавишей "вверх"
    })
    btn.eq(2).on("click", e =>{
        e.preventDefault

        modal.toggleClass("third"),
        $.fn.fullpage.setAllowScrolling(false), // запрет прокрутки мышью
        $.fn.fullpage.setKeyboardScrolling(false, 'down'); // запрет скролла клавишей "вниз"
        $.fn.fullpage.setKeyboardScrolling(false, 'up'); // запрет скролла клавишей "вверх"
    })
    btn.eq(3).on("click", e =>{
        e.preventDefault

        modal.toggleClass("fourth"),
        $.fn.fullpage.setAllowScrolling(false), // запрет прокрутки мышью
        $.fn.fullpage.setKeyboardScrolling(false, 'down'); // запрет скролла клавишей "вниз"
        $.fn.fullpage.setKeyboardScrolling(false, 'up'); // запрет скролла клавишей "вверх"
    })
    btn.eq(4).on("click", e =>{
        e.preventDefault

        modal.toggleClass("five"),
        $.fn.fullpage.setAllowScrolling(false), // запрет прокрутки мышью
        $.fn.fullpage.setKeyboardScrolling(false, 'down'); // запрет скролла клавишей "вниз"
        $.fn.fullpage.setKeyboardScrolling(false, 'up'); // запрет скролла клавишей "вверх"
    })
    btn.eq(5).on("click", e =>{
        e.preventDefault

        modal.toggleClass("sixth"),
        $.fn.fullpage.setAllowScrolling(false), // запрет прокрутки мышью
        $.fn.fullpage.setKeyboardScrolling(false, 'down'); // запрет скролла клавишей "вниз"
        $.fn.fullpage.setKeyboardScrolling(false, 'up'); // запрет скролла клавишей "вверх"
    })
    btn.eq(6).on("click", e =>{
        e.preventDefault

        modal.toggleClass("seventh"),
        $.fn.fullpage.setAllowScrolling(false), // запрет прокрутки мышью
        $.fn.fullpage.setKeyboardScrolling(false, 'down'); // запрет скролла клавишей "вниз"
        $.fn.fullpage.setKeyboardScrolling(false, 'up'); // запрет скролла клавишей "вверх"
    })
    btn.eq(7).on("click", e =>{
        e.preventDefault

        modal.toggleClass("eighth"),
        $.fn.fullpage.setAllowScrolling(false),    // запрет прокрутки мышью
        $.fn.fullpage.setKeyboardScrolling(false, 'down'); // запрет скролла клавишей "вниз"
        $.fn.fullpage.setKeyboardScrolling(false, 'up'); // запрет скролла клавишей "вверх"
    })

})


// modal window delivery
$(function(){
    let btn = $('.delivery__form-button'),
        modal = $('.delivery__modal'),
        close = $('.delivery__modal-btn');

        btn.eq(0).on('click', e =>{
            e.preventDefault
            modal.addClass('delivery__modal--active');
            
        })
        close.on('click', e =>{
            e.preventDefault
            modal.removeClass('delivery__modal--active');
            
        })

})

// order


$('#delivery__form').on('submit', function(e) {
    e.preventDefault();
    let checkForm = true;
    if ($('delivery__form-input_name').value == '') { checkForm = false };
    if ($('#delivery__form-input_phone').value == '') { checkForm = false };
    if ($('#delivery__form-input_street').value == '') { checkForm = false };
    if ($('#delivery__form-input_home').value == '') { checkForm = false };
    if ($('#delivery__form-input_part').value == '') { checkForm = false };
    if ($('#delivery__form-input_apart').value == '') { checkForm = false };
    if ($('#delivery__form-input_floor').value == '') { checkForm = false };
    if ($('#delivery__form-input_comment').value == '') { checkForm = false };
    if (($('#cash')[0].checked === false) && ($('#card')[0].checked === false)) { checkForm = false };
    // if ($('#payments2')[0].checked === false) { checkForm = false };
    if ($('#callback')[0].checked === false) { checkForm = false };

    if (checkForm == false) {
    //    $('.delivery__modal').removeClass('delivery__modal--active')
    //    return
    }
    // Все поля заполнены

    $.ajax('http://MrBurger/server.php', {
        type: "Post",
        data: $(this).serialize(),
        dataType: "Text",
        success: function(data) {
            alert(data);
        }

    })
})