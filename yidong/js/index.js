//banner特效
var box=document.querySelector(".bannerk");
var imgs=document.querySelectorAll(".lunbotu>li");
var btns=document.querySelectorAll(".lunbtn-item");
var leftjian=document.querySelector(".banner-jianzuo");
var rightjian=document.querySelector(".banner-jianyou");
var now=0;
var z=3;
var flag=true;  //控制点击
var t=setInterval(move,3000);
function move() {
    imgs[now].classList.add("leftOut");  //添加类名
    btns[now].classList.remove("active");
    now++;
    if(now==imgs.length){
        now=0;
    }
    imgs[now].classList.add("leftIn");
    btns[now].classList.add("active");
    imgs[now].style.zIndex=z++;
}
imgs.forEach(function (img) {
    img.addEventListener("animationend",function () {
        img.className="";
        flag=true;
    })
});
btns.forEach(function (btn,index) {
    btn.onclick=function () {
        if(now==index){
            return;
        }
        if(index>now){   //点击的是当前的后面,往左滑
            imgs[now].classList.add("leftOut");
            btns[now].classList.remove("active");
            imgs[index].classList.add("leftIn");
            btns[index].classList.add("active");
        }else{
            imgs[now].classList.add("rightOut");
            btns[now].classList.remove("active");
            imgs[index].classList.add("rightIn");
            btns[index].classList.add("active");
        }
        imgs[index].style.zIndex=z++;
        now=index;
    }
});
box.onmouseover=function () {
    clearInterval(t);
};
box.onmouseout=function () {
    t=setInterval(move,3000);
};
rightjian.onclick=function () {
    if(flag){
        flag=false;
        move();
    }
};

leftjian.onclick=function () {
    if(flag){
        flag=false;
        imgs[now].classList.add("rightOut");
        btns[now].classList.remove("active");

        now--;
        if(now==-1){
            now=imgs.length-1;
        }
        imgs[now].classList.add("rightIn");
        btns[now].classList.add("active");
        imgs[now].style.zIndex=z++;
    }
};



//banner下
(function () {
var box=document.querySelector(".lunbopartk");
var inner=document.querySelector(".luntuk");
var smallleft=document.querySelector(".lunjianzuo");
var smallright=document.querySelector(".lunjianyou");
var num=4;
var flag=true;
var tt=setInterval(move1,2000);
function move1() {
    inner.style.transition = "all 1s";
    //第二次轮回再加上过渡
    num++;
    inner.style.marginLeft=-295*num+"px";
    }
    inner.addEventListener("transitionend",function () {
        if(num==12) {
            inner.style.transition = "none";
            num = 4;
            inner.style.marginLeft=-295*num+"px";
        }else if(num==0){
            inner.style.transition = "none";
            num = 8;
            inner.style.marginLeft=-295*num+"px";
        }
        flag=true;
    });
    smallleft.onclick=function () {
        if(flag){
            flag=false;
            num-=2;
            move1();
        }
    };
    smallright.onclick=function () {
        if(flag){
            flag=false;
            move1();
        }
    };
    box.onmousemove=function () {
        clearInterval(tt);
    };
    box.onmouseout=function () {
        tt=setInterval(move1,2000);
    }
})();


//在线咨询
var kenav=document.querySelector(".zaixian");
var zixun=document.querySelectorAll(".zaixian>div");
zixun.forEach(function (v) {
    v.onmouseover=function () {
        v.style.left="-84px";
    };
    v.onmouseout=function () {
        v.style.left="-20px";
    };
});

//banner上导航
var oneitem=document.querySelectorAll(".nav-oth");
var secitem=document.querySelectorAll(".nav-oth-itemk");
oneitem.forEach(function (one,index) {
    one.onmouseover=function () {
        one.style.background="#F3F3F3";
        secitem[index].style.display="block";
    };
    one.onmouseout=function () {
        one.style.background="#E4E4E4";
        secitem[index].style.display="none";
    }
});

//小框
var smallbox=document.querySelector(".smalllun>ul");
var smallitem=document.querySelectorAll(".small-item");
var smallleft2=document.querySelector(".small-zuo");
var smallright2=document.querySelector(".small-you");
var nummun=0;
setInterval(small,5000);
function small() {
    smallbox.removeChild(smallitem[nummun]);
    smallbox.appendChild(smallitem[nummun]);
    nummun++;
    if(nummun==4){
        nummun=0;
    }
}
smallright2.onclick=function () {
    small();
};
smallleft2.onclick=function () {
    small();
};


//顶部
var phone=document.querySelector(".tmr-two>a");
var ewm=document.querySelector(".tmr-erweimw");
var man=document.querySelector(".tmr-one>a");
// var tubiao=document.querySelector(".tmr-two>img");

phone.onmouseover=function () {
    // phone.style.background="#fff";
    phone.style.background="url('img/top2-2.png') 10px center no-repeat #fff";
    ewm.style.display="block";

};
phone.onmouseout=function () {
    phone.style.background="url('img/top2.png') 10px center no-repeat";
    ewm.style.display="none";
};
man.onmouseover=function () {
    man.style.background="url('img/top1-2.png') 10px center no-repeat";
};
man.onmouseout=function () {
    man.style.background="url('img/top1.png') 10px center no-repeat";
};



