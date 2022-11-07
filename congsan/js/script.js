$(document).ready(function(){
    let homeSlide = $('.home_slide').bxSlider({
        auto:true,
        controls:false,
        pager:true
    });
    $('.nav_wrap').hover(function(){
        $('.menu_box').stop().animate({height:'320px'},100);
        $('.menu_box').css('border-top','1px solid #6e6e6e');
    }, function(){
        $('.menu_box').stop().animate({height:0},300,function(){
            $('.menu_box').css('border-top','none');
        });
    });
    // let headerOffset = $('.menu_box').offset().top;
    //     $(window).scroll(function(){
    //        let scr = $(window).scrollTop();
    //        if(scr >= headerOffset){
    //             $('.menu_box').css('position','fixed').css('top','0');
    //         } else {
    //             $('.menu_box').css('position','absolute').css('top','calc(100vh - 100px)');
    //         }
    // });
});

