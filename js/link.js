/// GNB메뉴 링크 연결 JS - linksys.js ///

$(function(){ /////// jQB ///////////////////////
    console.log("로딩완료!");
    
    $(".gnb a, .ham_popup a").click(function(e){
        e.preventDefault();
        
        // a태그의 텍스트 읽어오기
        var txt = $(this).text();
        
        console.log("메뉴:"+txt);
        
        var pg;
        
        switch(txt){
            case "FASHION": pg = "fashion.html"; break;
            case "BEAUTY": pg = "beauty.html"; break;
            case "LIVING": pg = "living.html"; break;
            case "PEOPLE": pg = "people.html"; break;
            case "VIDEO": pg = "video.html"; break;
            case "RUNWAY": pg = "runway.html"; break;
        }////// switch case ////////
        
        // 페이지이동
        location.href = pg;
        
    });//////// click //////////////
    
    $(".logo a").click(function(e){
        e.preventDefault();
        location.href = "index.html";
    });////////// click //////////////
    
    
    
    
});////////// jQB ///////////////////////////////
/////////////////////////////////////////////////