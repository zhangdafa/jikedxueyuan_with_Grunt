$(document).ready(function() {
    // 搜索按钮
    $("#search-btn").click(function() {
        $("#searchbox").addClass("scale");
    });
    $("#close-icon").click(function() {
        $("#searchbox").removeClass("scale");
    });
    // 搜索按钮结束
    $("#banner-container").mouseover(function() {
        // 滚动1   左按钮
        $("#banner-arrow-left").css("display", "block");
        $("#banner-arrow-right").css("display", "block");
        // 滚动1  右按钮
        $("#banner-arrow-left").animate({ opacity: "1" }, "2000");
        $("#banner-arrow-right").animate({ opacity: "1" }, "2000");
    });
    $("#banner-container").mouseout(function() {
        $("#banner-arrow-left").animate({ opacity: "0" }, "2000", function() {
            $("#banner-arrow-left").css("display", "none");
        });
        $("#banner-arrow-right").animate({ opacity: "0" }, "2000", function() {
            $("#banner-arrow-right").css("display", "none");
        });
    });

    $("#banner-arrow-left").mouseover(function() {
        $("#banner-arrow-left").stop();
        $("#banner-arrow-right").stop();
        $("#banner-arrow-left").css("display", "block");
        $("#banner-arrow-left").css("opacity", "1");
        $("#banner-arrow-right").css("display", "block");
        $("#banner-arrow-right").css("opacity", "1");
    });

    $("#banner-arrow-right").mouseover(function() {
        $("#banner-arrow-left").stop();
        $("#banner-arrow-right").stop();
        $("#banner-arrow-left").css("display", "block");
        $("#banner-arrow-left").css("opacity", "1");
        $("#banner-arrow-right").css("display", "block");
        $("#banner-arrow-right").css("opacity", "1");
    });
    // $("#banner-container").addClass("moveleft");
    // $("#banner-container").animate({transform:"translate('-750px')"},"2000");
    // $("#banner-container").animate({left:"-750px"},2000);
    // 滚动1结束
    num = 0;
    aSwitch = $("#banner-pagination span");
    // aSwitch2=$("#banner-pagination span");
    // aSwitch3=$("#banner-pagination span");
    scrollb();


});
// 滚动函数
function scrollb() {
    if (num < 3) {
        $("#banner-container").animate({ left: "-=750px" }, 2000, function() {

            aSwitch.first().removeClass("swiper-active-switch");
            aSwitch = aSwitch.not(aSwitch.first());
            aSwitch.first().addClass("swiper-active-switch");
        }).delay(2000);

        num += 1;
        scrollb();
    } else {
        $("#banner-container").animate({ left: "0" }, 2000, function() {

            aSwitch = $("#banner-pagination span");
            aSwitch.last().removeClass("swiper-active-switch");
            aSwitch.first().addClass("swiper-active-switch");
        }).delay(2000);
        num = 0;
        scrollb();
    }
}
