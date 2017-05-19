class Draw{
    constructor(cobj,option){
        //option{}
        this.cobj=cobj;
        this.color=option.color;
        this.width=option.width;
        this.style=option.style;
        
    }
    init(){
        this.cobj.strokeStyle=this.color;
        this.cobj.fillStyle=this.color;
        this.cobj.lineWidth=this.width;
    }
    rect(ox,oy,mx,my){
        this.init();
        // this.cobj.strokeRect(ox,oy,mx-ox,my-oy);
        
        this.cobj.beginPath();
        this.cobj.rect(ox,oy,mx-ox,my-oy);
        this.cobj[this.style]();
    }
    line(ox,oy,mx,my){
        this.init();
        this.cobj.beginPath();
        this.cobj.moveTo(ox,oy);
        this.cobj.lineTo(mx,my);
        this.cobj.stroke();
    }
    //简单的画圆方式
    circleOut(ox,oy,mx,my){
        this.init();
        this.cobj.save();
        this.cobj.translate(ox,oy);
        this.cobj.beginPath();
        var r=Math.sqrt(Math.pow(mx-ox,2)+Math.pow(my-oy,2))/2;
        this.cobj.arc((mx-ox)/2,(my-oy)/2,r,0,Math.PI*2);
        this.cobj[this.style]();
        this.cobj.restore();
    }
    circleIn(ox,oy,mx,my){
        this.init();
        this.cobj.save();
        this.cobj.translate(ox,oy);
        this.cobj.beginPath();
        //横向差值和纵向差值比较，使用差值小的
        var r=Math.abs(mx-ox)>Math.abs(my-oy)?Math.abs(my-oy)/2:Math.abs(mx-ox)/2;
        this.cobj.arc(mx>ox?r:-r,my>oy?r:-r,r,0,Math.PI*2);
        this.cobj[this.style]();
        this.cobj.restore();
    }
    //中心圆
    circleCenter(ox,oy,mx,my){
        this.init();
        this.cobj.save();
        // this.cobj.translate(ox,oy);
        this.cobj.beginPath();
        var r=Math.sqrt(Math.pow(mx-ox,2)+Math.pow(my-oy,2));
        this.cobj.arc(ox,oy,r,0,Math.PI*2);
        this.cobj[this.style]();
        this.cobj.restore();
    }
    //绘制多边形
    poly(ox,oy,mx,my,s){
        this.init();
        this.cobj.save();
        this.cobj.translate(ox,oy);
        this.cobj.rotate(Math.PI/2);     //先旋转90度，保证起始边在下边切平行
        var angle=Math.PI/s;
        var r=Math.sqrt(Math.pow(mx-ox,2)+Math.pow(my-oy,2))/2;
        var x=Math.cos(angle)*r;
        var y=Math.sin(angle)*r;
        this.cobj.beginPath();
        this.cobj.moveTo(x,y);
        for(let i=0;i<s;i++){
            this.cobj.lineTo(x,-y);
            this.cobj.rotate(-angle*2);
        }
        this.cobj[this.style]();
        this.cobj.restore();
    }
    //铅笔函数
    pen(ox,oy,mx,my){
        this.init();
        this.cobj.lineTo(mx,my);
        this.cobj.stroke();
    }
    eraser(ox,oy,mx,my){
        this.cobj.clearRect(mx,my,10,10);
    }
}
