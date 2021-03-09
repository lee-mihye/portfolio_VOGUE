$(function () {
    console.log("로딩됬어?")
    // 스크롤액션 요소위치변수
    var tgpos = []; //배열변수

    // 화면높이값의 절반(위치보정용:기존위치값에서 뺀다!)
    var winH = $(window).height() / 2;
    console.log("화면절반:" + winH);

    // 비디오박스 위치
    tgpos[0] = $(".ibx").offset().top;
    console.log("비디오보정위치:" + tgpos[0]);

    // 비디오박스 높이값(빠져나간 top값에 이값을 더한다)
    var vbH = $(".ibx").height();
    console.log("비디오박스높이값:" + vbH);

    // 비디오요소
    var vvd = $(".vvd").get(0);
    // get(순번) - 제이쿼리는 비디오를 별도의 get메서드에 담는다(첫번째 0번)




    /*스크롤 후 비디오 재생*/
    $(window).scroll(function () {
        var scTop = $(this).scrollTop();
        
        // 비디오 재생하기!
        if (scTop > tgpos[0] -
            winH && scTop < tgpos[0] + 100) {
            vvd.play(); //재생
        } ////// if ///////////
        else {

            vvd.pause(); //멈춤  

        } ///// else ///////////
    });



}); //////////////jqb//////////////////////////////////
