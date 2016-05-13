window.onload=function(){
	var picul=document.getElementById("pic");
	var picli=picul.getElementsByTagName("li");
	var picimg=picul.getElementsByTagName("img");
	var left=document.getElementById("con_left");
	var right=document.getElementById("con_right");
	var pagination=document.getElementById("pagination");
	var spans=pagination.getElementsByTagName("span");
	var num=0;
// ****************手动轮播图
	picul.style.width=picli[0].offsetWidth*picli.length+"px";

	for (var i = 0; i < spans.length; i++) {
		spans[i].index=i;
		spans[i].onclick=function(){
			for (var i = 0; i < spans.length; i++) {
				spans[i].className='';
			}
			num=this.index;
			this.className="span";
			picul.style.left=-picli[0].offsetWidth*this.index+"px";
		}
	}

	function fn(){
		for (var i = 0; i < spans.length; i++) {
				spans[i].className='';
			}
		spans[num].className="span";
		picul.style.left=-picli[0].offsetWidth*num+"px";
	}

	right.onclick=function(){
		num++;

		if (num>spans.length-1) {
			num=spans.length-1;
		}
		fn();
	}
	
	left.onclick=function(){
		num--;
		if (num<0) {
			num=0;
		}
		fn();

	}
// ***************轮播图点击宝箱
// var arr=["img/d1.png","img/d2.png","img/d3.png","img/d1.png","img/d2.png","img/d3.png","img/d4.png","img/d5.png","img/d6.png"]
// var arr2=["img/b1.png","img/b2.png","img/b3.png","img/b4.png","img/b5.png","img/b6.png","img/b7.png","img/b8.png","img/b9.png"]
for (var i = 0; i < picimg.length; i++) {

	picimg[i].index=i;

	picimg[i].onclick=function(e){
		var ev=e||window.event;
		for (var i = 0; i < picimg.length; i++) {
			picimg[i].src=picimg[i].src.replace("gif","png")
		}

		this.src=this.src.replace("png","gif")
		ev.cancelBubble=true;

		// for (var i = 0; i < picimg.length; i++) {
		// 	picimg[i].setAttrbute("src",arr2[i]);
		// }
		
	}
}
document.onclick=function(){
		for (var i = 0; i < picimg.length; i++) {
			picimg[i].src=picimg[i].src.replace("gif","png")
		}
//		alert("b")
	}

	
		
}//http://i4.buimg.com/2ed4c41619adf74f.png