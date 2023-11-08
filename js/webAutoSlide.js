$(function(){
    // 알라딘
    $("#aladin_box").mouseenter(function(){
        $("#section02_aladin > li").stop().animate({marginTop:"-3550px"},10000)
    }).mouseleave(function(){
        $("#section02_aladin > li").stop().animate({marginTop:"0px"},3000)
    })
    
    // 코닥
    $("#kodak_box").mouseenter(function(){
        $("#section03_kodak > li").stop().animate({marginTop:"-1590px"},6000)
    }).mouseleave(function(){
        $("#section03_kodak > li").stop().animate({marginTop:"0px"},3000)
    })
    
    // gibson
    $("#gibson_box").mouseenter(function(){
        $("#section04_gibson > li").stop().animate({marginTop:"-2795px"},8000)
    }).mouseleave(function(){
        $("#section04_gibson > li").stop().animate({marginTop:"0px"},3000)
    })
    
    // vittz
    $("#caffe_box").mouseenter(function(){
        $("#section05_caffe > li").stop().animate({marginTop:"-4700px"},8000)
    }).mouseleave(function(){
        $("#section05_caffe > li").stop().animate({marginTop:"0px"},3000)
    })

    $('.bhoverbox').hover(function(){
        $(this).css({"background":"rgba(0,0,0,0.3)"});
        $(this).find('i').show();
    },function(){
        $(this).css({"background":"rgba(0,0,0,0)"});
        $(this).find('i').hide();
    });
})
