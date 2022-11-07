$(document).ready(function(){
    $('.head_wrap').hover(function(){
        $('.menu_box').stop().animate({height:'350px'},100);
    }, function(){
        $('.menu_box').stop().animate({height:0},300,function(){
        });
    });
    $(function() {
        $(window).scroll(function() {
          var scroll = $(window).scrollTop();
          if(scroll >= 47) {
            $("#head").css("top","0")
            $("#head").addClass("fixed");
          }else{
            $("#head").css("top","47px")
            $("#head").removeClass("fixed");
          }
        });
    });
    let homeSlide = $('.home_slide').bxSlider({
        auto:true,
        controls:false,
        pager:true
    });
    $('.next').click(function(){
        homeSlide.goToNextSlide();
        return false;
    });
    $('.stop').click(function(){
        homeSlide.stopAuto();
        return false;
    });
    $('.prev').click(function(){
        homeSlide.goToPrevSlide();
        return false;
    });
    $('.picto1').hover(function(){
        $('.picto1 img').attr('src',"./images/picto1-1.png");
        }, function(){ 
        $('.picto1 img').attr('src',"./images/picto1.png");
    });
    $('.picto2').hover(function(){
        $('.picto2 img').attr('src',"./images/picto2-1.png");
        }, function(){ 
        $('.picto2 img').attr('src',"./images/picto2.png");
    });
    $('.picto3').hover(function(){
        $('.picto3 img').attr('src',"./images/picto3-1.png");
        }, function(){ 
        $('.picto3 img').attr('src',"./images/picto3.png");
    });
    $('.picto4').hover(function(){
        $('.picto4 img').attr('src',"./images/picto4-1.png");
        }, function(){ 
        $('.picto4 img').attr('src',"./images/picto4.png");
    });
    $('.picto5').hover(function(){
        $('.picto5 img').attr('src',"./images/picto5-1.png");
        }, function(){ 
        $('.picto5 img').attr('src',"./images/picto5.png");
    });
    $('.picto6').hover(function(){
        $('.picto6 img').attr('src',"./images/picto6-1.png");
        }, function(){ 
        $('.picto6 img').attr('src',"./images/picto6.png");
    });
    $('.picto7').hover(function(){
        $('.picto7 img').attr('src',"./images/picto7-1.png");
        }, function(){ 
        $('.picto7 img').attr('src',"./images/picto7.png");
    });
    $('.picto8').hover(function(){
        $('.picto8 img').attr('src',"./images/picto8-1.png");
        }, function(){ 
        $('.picto8 img').attr('src',"./images/picto8.png");
    });

    $('.sub a').click(function(){
        $('.sub a').css('background-color','#fff');
        $('.sub a').css('color','#d90047');
        let space = $(this).attr('data-space');
        $('.spacepic').attr('src','./images/' + space + '.jpg');
        $(this).css('background-color','#d90047');
        $(this).css('color','#fff');
        return false;
    });

    let seeSlide = $('.see_slide').bxSlider({
        auto:true,
        controls:false,
        pager:true
    });

});