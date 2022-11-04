
/* 헤더 스크롤 이벤트 */
$(document).ready(function () {
    $(window).on('scroll', function () {
        event.stopPropagation();
        if ($(window).scrollTop()) {
            $('#header').addClass('active');
            $('.topMenu').addClass('active');
            $('#gnb').addClass('active');
        } else {
            $('#header').removeClass('active');
            $('.topMenu').removeClass('active');
            $('#gnb').removeClass('active');
        }
    });
});


// 헤더 메뉴 슬라이드
function chk() {
    if (cc == 1) {
        $("#gnb ul li ul").slideDown(300);
        $("#gnb .gnb_bg").slideDown(300);
        $("#header").addClass('active');
    } else if ($(window).scrollTop()) {
        $("#gnb ul li ul").slideUp(200);
        $("#gnb .gnb_bg").slideUp(200);
        $("#header").addClass('active');
    } else {
        $("#gnb ul li ul").slideUp(200);
        $("#gnb .gnb_bg").slideUp(200);
        $("#header").removeClass('active');
    }
    return false;
}

$(function () {
    $('#gnb>ul>li').mouseover(function () {
        setTimeout(chk, 100);
        cc = 1;
        /* $(this).addClass('active'); */
        $(this).parent('#header').addClass('active');
        $(".gnb_bg>h2").text($(this).children('a').text());
        return false;
    });

    $('#gnb').mouseout(function () {
        setTimeout(chk, 100);
        cc = 0;
        /* $('#gnb ul li').removeClass('active'); */
        $('#gnb ul li').parent('#header').removeClass('active');
        return false;
    });

    $('#gnb ul li a').focus(function () {
        setTimeout(chk, 100);
        cc = 1;
        $(this).parent('#header').addClass('active');
        return false;
    });

    $('#gnb ul li a').blur(function () {
        setTimeout(chk, 100);
        cc = 0;
        /*   $('#gnb ul li').removeClass('active'); */
        $('#gnb ul li').parent('#header').removeClass('active');
        return false;
    });
});



/* 헤더 검색창 클릭이벤트 */
$(document).ready(function () {
    $(".search_open > button").off().click(function () {
        if ($('.search').hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $('.search').addClass('active');
        }
    });

    $(".search_close > button").off().click(function () {
        if ($(".search_close").parent('.search').hasClass('active')) {
            $(".search_close").parent('.search').removeClass('active');
        } else {
            $(".search_close").parent('.search').addClass('active');
        }
    });
});


/* 모바일 메뉴 클릭이벤트 */
$(document).ready(function () {

    $('.m_btn').off('click').on('click', function () {
        $('.m_bg').show().animate({ opacity: "0.75" }, 100)
        $('.m_menu').show().animate({
            right: 0
        });
    });
    $('.close_btn').off('click').on('click', function () {
        $('.m_bg').hide().animate({ opacity: "0" }, 100)
        $('.m_menu').animate({
            right: '-' + 50 + '%'
        }, function () { $('.m_menu').hide(); });
    });

});


/* 모바일 드롭다운 메뉴 */
$(document).ready(function () {
    $("ul.depth2").hide();
    $("ul.m_depth1 li").off().click(function () {
        $("ul", this).stop().slideToggle("fast");

        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).addClass('active');
        }
    });

    // 페이지 url에 따른 메뉴 활성화
    /*     $(window).load(function () {
            var url = window.location.pathname + window.location.search;
            $(".m_depth1 > li ").each(function () {
                $(this).removeClass('active');
                if ($(".m_depth1 > li > a").attr("href") == url) {
                    $(this).addClass("active");
                }
            });
        }); */
});



/* 상세검색창 띄우고 닫기 */
$(document).ready(function () {
    $(".s_pop_wrap").hide();
    $(".total_btn").off().click(function () {
        $(".s_pop_wrap").show();
    });
    $(".spop_close").off().click(function () {
        $(".s_pop_wrap").hide();
    });
});



/* 메인슬라이드 */
$(document).ready(function () {
    console.clear();

    // 기존 버튼형 슬라이더
    $('.slider_wrap > .slider_control > li').off().click(function () {
        var $this = $(this);
        var index = $this.index();

        $this.addClass('active');
        $this.siblings('.active').removeClass('active');

        var $slider = $this.parent().parent();

        var $current = $slider.find(' > .slide_box > li.active');

        var $post = $slider.find(' > .slide_box > li').eq(index);

        $current.removeClass('active');
        $post.addClass('active');
    });

    // 좌/우 버튼 추가 슬라이더
    $('.slider_wrap > .slider_btn > button').off().click(function () {
        var $this = $(this);
        var $slider = $this.closest('.slider_wrap');

        var index = $this.index();
        var isLeft = index == 0;

        var $current = $slider.find(' > .slider_control > li.active');
        var $post;

        if (isLeft) {
            $post = $current.prev();
        }
        else {
            $post = $current.next();
        };

        if ($post.length == 0) {
            if (isLeft) {
                $post = $slider.find('  > .slider_control > li:last-child');
            }
            else {
                $post = $slider.find(' > .slider_control > li:first-child');
            }
        };

        $post.click();
    });

    setInterval(function () {
        $('.slider_wrap > .slider_btn > button').eq(1).click();
    }, 6000);
});



/* top 버튼 이벤트*/
$(function () {
    $('#btn_top').hide();
    var main = $('main').offset().top;
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#btn_top').fadeIn();
        } else {
            $('#btn_top').fadeOut();
        }
    });

    $('#btn_top').off().click(function () {
        $('html, body').animate({ scrollTop: main }, 400);
        return false;
    });

});
