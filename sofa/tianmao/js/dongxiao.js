//品牌
var divs = document.querySelectorAll(".pinpai1");
var masks = document.querySelectorAll(".zhegai");
Array.from(divs).forEach(function(v, i) {
	v.onmouseover = function() {
		masks[i].style.opacity = "0.8";
	}
	v.onmouseout = function() {
		masks[i].style.opacity = "0";
	}
});

//直播
var btns1 = document.querySelectorAll(".pinpaileftm");
var cons1 = document.querySelectorAll(".pinpailefttop");
var container1 = document.querySelector(".pinpaileft");
var masksZhibos = document.querySelectorAll(".blackb");
var btnPlays = document.querySelectorAll(".pinpaileftm .bofang");
var inner1 = document.querySelector(".pinpaileftm1 .inner");
var btnleft = document.querySelector(".pinpaileftm1 .ljt");
var btnright = document.querySelector(".pinpaileftm1 .rjt");
masksZhibos[0].style.display = "block";
btnPlays[0].style.display = "block";
Array.from(btns1).forEach(function(elements, index) {
	elements.onmouseover = function() {
		num = index;
		for(var i = 0; i < btns1.length; i++) {
			btns1[i].style.color = "#000";
			cons1[i].style.display = "none";
			masksZhibos[i].style.display = "none";
			btnPlays[i].style.display = "none";
			btnPlays[i].style.animation = "none"

		}
		this.style.color = "red";
		cons1[index].style.display = "block";
		masksZhibos[index].style.display = "block";
		btnPlays[index].style.display = "block";
		btnPlays[index].style.animation = "xianshi1 0.5s linear forwards"

	}
});
btnright.onclick = function() {
	inner1.style.marginLeft = -488 + "px";
	this.style.display = "none";
	btnleft.style.display = "block";
};
btnleft.onclick = function() {
	inner1.style.marginLeft = 0;
	this.style.display = "none";
	btnright.style.display = "block";
};
var num = 0;

function move1() {
	num++;
	if(num == btns1.length) {
		num = 0;
		inner1.style.marginLeft = 0;
		btnright.style.display = "block";
		btnleft.style.display = "none";

	}
	if(num >= 3) {
		inner1.style.marginLeft = -488 + "px";
		btnright.style.display = "none";
		btnleft.style.display = "block";
	}

	for(var i = 0; i < btns1.length; i++) {
		btns1[i].style.color = "#000";
		cons1[i].style.display = "none";
		masksZhibos[i].style.display = "none";
		btnPlays[i].style.display = "none";
		btnPlays[i].style.animation = "none"
	}
	btns1[num].style.color = "red";
	cons1[num].style.display = "block";
	masksZhibos[num].style.display = "block";
	btnPlays[num].style.display = "block";
	btnPlays[num].style.animation = "xianshi1 0.5s linear forwards"

}

var t1 = setInterval(move1, 2000);
container1.onmouseover = function() {
	clearInterval(t1);
}
container1.onmouseout = function() {
	t1 = setInterval(move1, 2000);
}


//直播预告
var inner = document.querySelector(".pinpaileftboBox .inner");
var container11 = document.querySelector(".pinpaileftbo");
var numberY = 0;

function movey() {
	numberY++;
	if(numberY == 3) {
		numberY = 0;
	}
	inner.style.marginTop = -62 * numberY + "px";
}
var t3 = setInterval(movey, 3000);
container11.onmousemove = function() {
	clearInterval(t3);
}
container11.onmouseout = function() {
	t3 = setInterval(movey, 3000);
}

var title1 = document.querySelectorAll(".title1.sj");
var sublist = document.querySelectorAll(".title1 .sublist");
Array.from(title1).forEach(function(ele, index) {
	ele.onmouseover = function() {
		sublist[index].style.display = "block";
	}
	ele.onmouseout = function() {
		sublist[index].style.display = "none";
	}
});
