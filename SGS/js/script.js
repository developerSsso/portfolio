$(document).ready(function(){
    let homeSlide = $('.home_slide').bxSlider({
        auto:true,
        minSlides:3,
        maxSlides:3,
        moveSlides:1,
        slideWidth:'380px',
        pager:false,
        controls:false
    });
    $('.next').click(function(){
        homeSlide.goToNextSlide();
        return false;
    });
    $('.prev').click(function(){
        homeSlide.goToPrevSlide();
        return false;
    });
    $('.bx-wrapper').css('max-width','100%');
});
