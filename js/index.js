$(function(){
  $('.slider-wrap').slick({
    slide:'div', 
    infinite : true,
    slidesToShow : 2,
    slidesToScroll : 1,
    speed : 500,
    arrows :true,
    dots :true,
    autoplay :true,
    autoplaySpeed : 2000,
    pause0nHover : true,
    vertical : false,
    prevArrow : "<buttno type='button' class='slick-prev'>Previous</button>",
    nextArrow : "<button type='button' class='slick-next'>Next</button>",
    draggable : true,
  });
})