$(document).ready(function(){
    let mainSlide = $('.pf_slider').bxSlider({
        touchEnabled : (navigator.maxTouchPoints > 0),
        controls:false,
        auto:false,
        pager:false
    });
    $('.prev').click(function(){
        mainSlide.goToPrevSlide();
        return false;
    });
    $('.next').click(function(){
        mainSlide.goToNextSlide();
        return false;
    })
    let contentHeight = $('.full').height();
    let scroller = 0
    $('.con_down').click(function(){
        if($(document).height() - contentHeight != scroller){
            scroller += contentHeight;
            $('html').animate({scrollTop:scroller},600,'swing');
        }
    });
    $('.con_up').click(function(){
        if(scroller != 0){
            scroller -= contentHeight;
            $('html').animate({scrollTop:scroller},500,'swing');
        }
    })

    $('a.lightbox').colorbox();
})