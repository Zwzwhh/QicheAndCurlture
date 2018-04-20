//设为首页
function SetHome(obj,url){
    try{
        obj.style.behavior='url(#default#homepage)';
        obj.setHomePage(url);
    }catch(e){
        if(window.netscape){try{netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
        }catch(e){
            alert("抱歉，此操作被浏览器拒绝！\n\n请在浏览器地址栏输入“about:config”并回车然后将[signed.applets.codebase_principal_support]设置为'true'");
        }
        }else{
            alert("抱歉，您所使用的浏览器无法完成此操作。\n\n您需要手动将【"+url+"】设置为首页。");
        }
    }
}
//收藏本站
function AddFavorite(title, url) {

    try {
        window.external.addFavorite(url, title);
    }
    catch (e) {
        try {
            window.sidebar.addPanel(title, url, "");
        }
        catch (e) {
            alert("抱歉，您所使用的浏览器无法完成此操作。\n\n加入收藏失败，请使用Ctrl+D进行添加");
        }
    }
}

$(function() {
    var winWidth = $(window).width();
    if (winWidth <= 800) {
        $(".flexslider").flexslider({
            slideshowSpeed: 3000,
            animationSpeed: 300,
            touch: true
        });
        $(document).ready(function() {
            $(".sidebar").removeClass("hide");
            $.ajaxSetup({
                cache: false
            });
            $(".sidebar").simpleSidebar({
                settings: {
                    opener: "#open-sb",
                    wrapper: ".wrapper",
                    animation: {
                        duration: 500,
                        easing: "easeOutQuint"
                    }
                },
                sidebar: {
                    align: "right",
                    width: 400,
                    closingLinks: "a",
                }
            })
        });
        $(".secondBox").removeClass("w1200");
        $(".activitiesBox,.noticeBox,.aisleScroll").addClass("w1200")
    }
});