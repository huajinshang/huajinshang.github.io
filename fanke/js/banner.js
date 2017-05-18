var  pbtn=document.querySelectorAll(".banner-tu li");  //图片
var  lbtn=document.querySelectorAll(".lunbo li");  //轮播点
var  Bbox=document.querySelector(".banner");        //大框
var  Left=document.querySelector(".bleft");
var  Right=document.querySelector(".bright");
var obj1=lbtn[0];
var obj2=pbtn[0];
Array.from(lbtn).forEach(function (v,index1) {
    v.onmouseover=function () {
        num1=index1;     //移动过去之后，接着走
        obj1.style.background="#dddddd";
        obj2.style.opacity="0";
        obj2.style.zIndex="1";
        lbtn[index1].style.background="#A10000";
        pbtn[index1].style.opacity="1";
        pbtn[index1].style.zIndex="2";
        obj1=lbtn[index1];
        obj2=pbtn[index1];
    }
});
var num1=0;
var t2=setInterval(move1,3000);
    function move1() {
        num1++;
        if (num1==lbtn.length){
            num1=0;
        }
        if(num1==-1){
            num1=lbtn.length-1;  //最后一个轮播点的下标，回到最后一个轮播点的
        }
        obj1.style.background="#dddddd";
        obj2.style.opacity="0";
        obj2.style.zIndex="1";
        lbtn[num1].style.background="#A10000";
        pbtn[num1].style.opacity="1";
        pbtn[num1].style.zIndex="2";
        obj1=lbtn[num1];
        obj2=pbtn[num1];
    }
Bbox.onmouseover=function () {
    clearInterval(t2);
};
Bbox.onmouseout=function () {
    t2=setInterval(move1,3000);
};
Right.onclick=function () {
    move1();
};
Left.onclick=function () {
    num1-=2;
    move1();
    //num-2之后再执行move
};
//nav的JS
var lis=document.querySelectorAll(".lists .t2");
var twolis=document.querySelectorAll(".twolists");
var arr=[];    //用来保存ul的高度
Array.from(twolis).forEach(function (ul) {
    let lis=ul.querySelectorAll("li");
    arr.push(lis.length*35-25+"px");
});
//上一步：遍历二级目录，获取子元素个数，计算ul的对应高度
Array.from(lis).forEach(function (oli,index) {   //遍历一级目录
    oli.onmouseover=function () {
        twolis[index].style.height=arr[index];
    };
    oli.onmouseout=function () {
        twolis[index].style.height=0;
    }
});
//二维码
var erweima=document.querySelector(".erweima");
var weixin=document.querySelector(".weixin");
weixin.onmouseover=function () {
    erweima.style.display="block";
};
weixin.onmouseout=function () {
    erweima.style.display="none";
};

//购物车
var gou=document.querySelector(".sou-tu");
var goubai=document.querySelector(".gouwuche-baik");
var gouop=document.querySelector(".sou-tu>i");
gou.onmouseover=function () {
    goubai.style.display="block";
    gouop.style.opacity=1;
};
gou.onmouseout=function () {
    goubai.style.display="none";
    gouop.style.opacity=0;
};

//返回顶部
var backtop=document.querySelector(".back");
backtop.onclick=function () {
    animate(document.body,{scrollTop:0},500);
    //有五个属性:对象、操作属性、时间、运动效果、回调函数
};





