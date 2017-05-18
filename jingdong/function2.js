// window.onload=function(){
// 	const lis =document.querySelectorAll(".xxk li");
// 	const div =document.querySelectorAll(".xxk dl dt");
// 	const zhe =document.querySelector(".zhezhao .zz");
// 	const zhe1 =document.querySelector(".zhezhao");
// 	const banner =document.querySelectorAll(".bannerbox ul li");
// 	const banner1 =document.querySelector(".bannerbox .k1");
// 	xxka(lis,div);
// 	// zzhao(zhe1,zhe);
// 	xxka(banner,banner1);
// }


// 选项卡   
// btn选项卡按钮及父级   
// con选项卡内容
function xxka(btn, con) {
    for (let i = 0; i < btn.length; i++) {
        // btn[i].index=i;
        btn[i].onmouseover = function () {
            for (let j = 0; j < con.length; j++) {
                con[j].style.display = "none";
            }
            con[i].style.display = "block";
        }
    }

}


// 遮罩 
// a  父级
// b  效果 出现 隐藏的子级
function zzhao(a, b) {
    a.onmouseover = function () {
        b.style.display = "block";
    }
    a.onmouseout = function () {
        b.style.display = "none";
    }
}


// var btns = $(".ban_zjs>a img");
// console.log(btns)
// btns.click(function () {
//
//     //先过滤有active的进行移除，end()恢复到初始，然后单独添加
//     btns.filter(".active").removeClass("active").end().filter(this).addClass("active");
//     var index = $(this).index();
// //        console.log(index);
//     num = index;
// //        console.log(index);
//     $(".banner li").filter(".active").removeClass("active").end().eq(index).addClass("active");
// });
// var t = setInterval(move, 3000);
// var num = 0;
// function move() {
//     num++;
//     if (num >= btns.length) {
//         num = 0;
//     }
//     if (num < 0) {
//         num = btns.length - 1;
//     }
// //        console.log(num);
//     btns.filter(".active").removeClass("active").end().eq(num).addClass("active");
//     $(".banner li").filter(".active").removeClass("active").end().eq(num).addClass("active");
// }
// $(".box").hover(function () {
//     clearInterval(t);
// }, function () {
//     t = setInterval(move, 3000);
// });
//
// //轮播箭头
// $(".zuo").click(function () {
//     num -= 2;
//     move();
// });
// $(".you").click(function () {
//     move();
// });


function lunbo(tu1, banner1, li1, colorarr, z2, lbcolor, lbcolor2, js, z1) {
    const tu = $(tu1);//banner图
    const banner = $(banner1)[0];//banner背景只有一个
    const li = $(li1);//轮播点
    const color = colorarr//背景图颜色
    tu[0].style.zIndex = z1;//轮播图层级
    li[0].style.background = lbcolor;//选中轮播点颜色
    banner.style.background = colorarr[0];
    var num = 0;
    var t = setInterval(move, js);//轮播时间
    banner.onmouseover = function () {
        clearInterval(t);
    }
    banner.onmouseout = function () {
        t = setInterval(move, js);//轮播时间
    }


    for (let j = 0; j < li.length; j++) {
        li[j].onmouseover = function () {
            for (let i = 0; i < tu.length; i++) {
                tu[i].style.zIndex = z1;//初始图层级
                li[i].style.background = lbcolor2//初始轮播点颜色
            }
            ;
            tu[j].style.zIndex = z2;//轮播图层级
            banner.style.background = colorarr[j];
            li[j].style.background = lbcolor;//选中轮播点颜色
            num = j;
        }
    }
    function move() {
        num++;
        if (num > 2) {
            num = 0;
        }
        for (let i = 0; i < tu.length; i++) {
            tu[i].style.zIndex = z1;//初始图层级
            li[i].style.background = lbcolor2//初始轮播点颜色
        }
        tu[num].style.zIndex = z2;//轮播图层级
        banner.style.background = colorarr[num];
        li[num].style.background = lbcolor;//选中轮播点颜色
    }

}
//轮播箭头
$(".ban_zjs .zuo").click(function () {
    num -= 2;
    move();
});
console.log($(".ban_zjs .zuo"))
$(".ban_zjs .you").click(function () {
    move();
});
