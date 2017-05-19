//banner
var colorArr = ["#1E52D2", "#56CCBD", "#FF9B05", "#D9F3E2", "#E8E8E8", "#E8E8E8"];
$(".btnbox li").click(function () {
    $(".btnbox li").filter(".active").removeClass("active").end().filter(this).addClass("active");
    var index = $(this).index();
    num1 = index;
    $(".bannerbox li").filter(".active").removeClass("active").end().eq(index).addClass("active");
    $(".banner").css("background", colorArr[index]);
})

var t = setInterval(move, 3000);
var num1 = 0;
function move() {
    num1++;
    if (num1 == $(".btnbox li").length) {
        num1 = 0;
    }
    if (num1 < 0) {
        num1 = $(".btnbox li").length - 1;
    }
    $(".btnbox li").filter(".active").removeClass("active").end().eq(num1).addClass("active");
    $(".bannerbox li").filter(".active").removeClass("active").end().eq(num1).addClass("active");
    $(".banner").css("background", colorArr[num1]);
}
$('.bannermain').hover(function () {
    clearInterval(t);
}, function () {
    t = setInterval(move, 3000);
});

//顶部搜索
var flag1 = true;
var flag2 = true;
$(window).scroll(function () {
    var st = $(this).scrollTop();
    if (st > 700) {
        if (flag1) {
            flag2 = true;
            flag1 = false;
            $(".left").animate({width: 36, height: 333}).css("display", "block");
        }

        $(".topbar").css("top", 0);
        $(".righttop").css("display", "block");
    } else {
        if (flag2) {
            flag1 = true;
            flag2 = false;
            $(".left").animate({width: 0, height: 0});
        }
        // $(".left").css({"width": 0, "height": 0});
        $(".topbar").css("top", -50);
        $(".righttop").css("display", "none");
    }
});

//		回到顶部

$(".left .lefttop").click(function () {
    $("html,body").animate({scrollTop: 0}, 500);
});

$(".righttop").click(function () {
    $("html,body").animate({scrollTop: 0}, 500);
});


//楼层点击
var colorFloor = ["pink", "blue", "green", "red", "lightgreen", "orange", "black"]
$(".left .left1").click(function () {
    $("html,body").animate({scrollTop: $(".floor").eq($(this).index() - 1).offset().top + 1}, 500);
}).hover(function () {
    $(this).css("background", colorFloor[($(this).index() - 1)]);
}, function () {
    $(this).css("background", "");
});

var to;
$(window).scroll(function () {
    var st = $(window).scrollTop();
    clearTimeout(to);
    to = setTimeout(function () {
        $(".floor").each(function (index, ele) {
            if (st >= $(ele).offset().top) {
                $(".left .left1").eq(index).addClass("active").siblings().removeClass("active");
            }
        });
    }, 200);
});
