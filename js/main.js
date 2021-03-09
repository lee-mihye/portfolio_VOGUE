$(function () {
    console.log("로딩완료")
    // 새로고침시 맨위로 이동하기
    $("html,body").animate({
        scrollTop: "0"
    }, 200);



    $(window).scroll(function (event) {
        var scroll = $(this).scrollTop();
        console.log(scroll);
        if (scroll > 50) {
            //이벤트를 적용시킬 스크롤 높이
            $("header").addClass("on");
            $(".mt").css({
                marginTop: "150px"
            }); //////if////////

        } else {
            $("header").removeClass("on");
            $(".mt").css({
                marginTop: "217px"
            }); //////else/////////
        }

        // 미디어쿼리
        if (window.matchMedia("(max-width: 500px)").matches == true) {

            $('header').removeAttr('removeClass("on")');
            $('header').removeAttr('addClass("on")');

            $('.mt').removeAttr('style');

        }; // 500px 이하일 경우 원하는 코드

    }); //////////////scroll////////////////////




    // *스크롤시 퀵메뉴 보이기*/
    $(window).scroll(function () {
        var scTop = $(this).scrollTop();

        if (scTop > 200) {
            $('.top').fadeIn();
        } else {
            $('.top').fadeOut();
        }
    });
    $('.top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 400);
        return false;
    });

    
    

    // 검색버튼 클릭시 모바일 검색창 보이기
    // 이벤트대상: .Magnifier
    // 변경대상: .mos
    $(".Magnifier").click(function () {
        $(".mos").slideToggle(300);
    }); ////////click////////////


    
    
    
    // 햄버거 버튼 클릭시 모바일 메뉴 보이기
    // 이벤트대상: #ham
    // 변경대상: .mognb
    $("#ham").click(function () {
        $(".mognb").slideToggle(500);
    }); ///////click////////////

}); //////////////jqb//////////////////////////////////
