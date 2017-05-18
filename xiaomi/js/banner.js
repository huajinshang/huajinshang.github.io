//banner的轮播
var  pbtn=document.querySelectorAll(".banner-tu li");  //图片
var  lbtn=document.querySelectorAll(".lunbo li");  //轮播点
var  Bbox=document.querySelector(".banner");   //大框
var  Left=document.querySelector(".jiantou1");
var  Right=document.querySelector(".jiantou2");
var obj1=lbtn[0];
var obj2=pbtn[0];
Array.from(lbtn).forEach(function (v,index1) {
    v.onmouseover=function () {
        num1=index1;     //移动过去之后，接着走
        obj1.style.background="rgba(0, 0, 0, 0.4)";
        obj2.style.opacity="0";
        obj2.style.zIndex="1";

        lbtn[index1].style.background="rgba(255, 255, 255, 0.4)";
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
            num1=lbtn.length-1;
        }
        obj1.style.background="rgba(0, 0, 0, 0.4)";
        obj2.style.opacity="0";
        obj2.style.zIndex="1";

        lbtn[num1].style.background="rgba(255, 255, 255, 0.4)";
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
Left.onclick=function () {
    num1-=2;
    move1();
};
Right.onclick=function () {
    move1();
};
//小米明星单品轮播
var xiaomi=document.querySelector(".six-tuk");
var zuojiank=document.querySelector(".jianzuo5");
var youjiank=document.querySelector(".jianyou5");
var zuojian=document.querySelector(".jianzuo5>div");
var youjian=document.querySelector(".jianyou5>div");
var n=0;
console.log(youjian);
    var t=setInterval(lun,5000);
    function lun() {
        n++;
        xiaomi.style.marginLeft=-1240+"px";
        zuojian.style.color="#B6B0B0";
        youjian.style.color="#EDEDED";


        if(n==2){
            xiaomi.style.marginLeft=0;
            zuojian.style.color="#EDEDED";
            youjian.style.color="#B6B0B0";
            n=0;
        }
    }
zuojiank.onclick=function () {
    xiaomi.style.marginLeft=0;
    zuojian.style.color="#EDEDED";
    youjian.style.color="#B6B0B0";
};
youjiank.onclick=function () {
    xiaomi.style.marginLeft=-1240+"px";
    zuojian.style.color="#B6B0B0";
    youjian.style.color="#EDEDED";
};
xiaomi.onmousemove=function () {
    clearInterval(t)
};
xiaomi.onmouseout=function () {
    t=setInterval(lun,5000)
};

//topbar
$(".first").each(function (i,v) {
    $(v).hover(function () {
        $(".second").eq(i).css("height","230px");
    },function () {
        $(".second").eq(i).css("height","0px");
    })
})

//内容
function neirong(next,prev,rongqi,dian) {
    var newbtn=dian[0];
    dian.forEach(function (v,i) {
        v.onclick=function () {
            newbtn.style.background="#b0b0b0";
            newbtn.style.border="2px solid #fff";
            dian[i].style.background="#fff";
            dian[i].style.border="2px solid #ff6700";

            rongqi.style.marginLeft=-296*i+"px";
            newbtn = dian[i]
        }
    })
    var num=0;
    next.onclick=function () {
        num++;
        if(num==dian.length){
            num=dian.length-1;
        }
        newbtn.style.background="#b0b0b0";
        newbtn.style.border="2px solid #fff";
        dian[num].style.background="#fff";
        dian[num].style.border="2px solid #ff6700";
        newbtn = dian[num]
        rongqi.style.marginLeft=-296*num+"px";
    }
    prev.onclick=function () {
        num--;
        if(num==-1){
            num=0;
        }
        newbtn.style.background="#b0b0b0";
        newbtn.style.border="2px solid #fff";
        dian[num].style.background="#fff";
        dian[num].style.border="2px solid #ff6700";
        newbtn = dian[num]
        rongqi.style.marginLeft=-296*num+"px";
    }
}
var tushu=document.querySelector(".tushu");
var tushuprev=document.querySelector(".neirong1-bottom1 .neirong-zuojiantou")
var tushunext=document.querySelector(".neirong1-bottom1 .neirong-youjiantou");
var dian=document.querySelectorAll(".neirong1-bottom1 .nrlb .nrlb2");

neirong(tushunext,tushuprev,tushu,dian)

var zhuti=document.querySelector(".zhuti");
var zhutiprev=document.querySelector(".neirong1-bottom2 .neirong-zuojiantou");
var zhutinext=document.querySelector(".neirong1-bottom2 .neirong-youjiantou");
var dian1=document.querySelectorAll(".neirong1-bottom2 .nrlb3 .nrlb2");
neirong(zhutinext,zhutiprev,zhuti,dian1);
var youxi=document.querySelector(".youxi");
var youxiprev=document.querySelector(".neirong1-bottom3 .neirong-zuojiantou");
var youxinext=document.querySelector(".neirong1-bottom3 .neirong-youjiantou");
var dian2=document.querySelectorAll(".neirong1-bottom3 .nrlb3 .nrlb2");
neirong(youxinext,youxiprev,youxi,dian2);
var yingyong=document.querySelector(".yingyong");
var yingyongprev=document.querySelector(".neirong1-bottom4 .neirong-zuojiantou");
var yingyongnext=document.querySelector(".neirong1-bottom4 .neirong-youjiantou");
var dian3=document.querySelectorAll(".neirong1-bottom4 .nrlb3 .nrlb2");
neirong(yingyongnext,yingyongprev,yingyong,dian3);










