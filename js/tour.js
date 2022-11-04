/* sub 페이지 공통 script */

$(document).ready(function () {
    /* sns공유 오픈 */
    $(".share-bx > .share > .view").hide();
    $(".share-bx > .share > .open").off().click(function () {
        if ($(this).parent('.share').hasClass('on')) {
            $(this).parent('.share').removeClass('on');
            $(".share-bx > .share > .view").hide();
        } else {
            $(this).parent('.share').addClass('on');
            $(".share-bx > .share > .view").show();
        }
    });

    /* 서브메뉴 클릭 */
    $(".submenu1 ul li a").off().click(function () {
        $(".submenu1 ul li a").parent('li').hasClass('over')
        $(".submenu1 ul li a").parent('li').removeClass('over');
        $(this).parent('li').addClass('over');
    });


    /*  후기작성 모달 이벤트 */
    $(".tourRVpop").hide();
    $(".rv").off().click(function () {
        $(".tourRVpop").show();
    });
    $(".rvpop_close").off().click(function () {
        $(".tourRVpop").hide();
    });

    /*  통합검색 상세검색 열고 닫기 */
    $(".total_sch").hide();
    $(".detail").off().click(function () {
        $(".total_sch").show();
    });
    $(".total_close").off().click(function () {
        $(".total_sch").hide();
    });
});



