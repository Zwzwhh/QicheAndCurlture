/**
 * Created by Administrator on 2017/5/2.
 */
$(function(){
    var wd=$(window).width();
    if(wd<768){
        $(".PC").addClass("hide");
        $(".MB").removeClass("hide");
        $(".navB li:first-child").addClass("active");
    }else{
        $(".MB").addClass("hide");
        $(".PC").removeClass("hide");
        //页面滚动到500时显示导航
        var smH, gdH = 500;
        $(window).scroll(
            function () {
                smH = Math.max(document.body.scrollTop || document.documentElement.scrollTop);
                if (smH > gdH) {
                    $('.fixNav').slideDown();
                }else{
                    $('.fixNav').slideUp();
                }
            })
    }
})