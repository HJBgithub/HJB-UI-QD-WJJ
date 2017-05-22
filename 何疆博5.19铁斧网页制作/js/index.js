$(function(){
	// 首页轮播图开始
	var banner = document.querySelectorAll('.banner div');
	var btn = $('.btn');
	for(var i=0;i<banner.length;i++){
		banner[i].style.left="1920px";
	}
	banner[0].style.left="0";
	btn[0].style.background="#c77c51";
	var now = 0;
	var next = 0;
	function move(type){
		if(type=="r"){
			next++;
			if(next>banner.length-1){
				next=0;
			}
		}else if(type=="l"){
			next--;
			if(next<0){
				next=banner.length-1;
			}
		}
		banner[next].style.left="1920px";
		animate(banner[now],{left:-1920},1,Tween.Linear);
		animate(banner[next],{left:0},1,Tween.Linear);
		for(var j=0;j<btn.length;j++){
			btn[j].style.background="#f7f7f7";
		}
		btn[next].style.background="#c77c51";
		now=next;
	}
	var t=setInterval(function(){
		move('r');
	},40000);
	var Banner=$('.Banner')[0];
	Banner.onmouseover=function(){
		clearInterval(t);
	}
	Banner.onmouseout=function(){
		t=setInterval(function(){
			move('r');
		},3000);
	}
	for(var i=0;i<btn.length;i++){
		btn[i].index=i;
		btn[i].onmouseover=function(){
			for(var j=0;j<btn.length;j++){
				banner[j].style.left="1920px";
				btn[j].style.background="#f7f7f7";
			}
			banner[this.index].style.left="0";
			this.style.background="#c77c51";
			now=this.index;
			next=this.index;
		}
	}
	var leftbtn = $('.leftbtn')[0];
	var rightbtn = $('.rightbtn')[0];
	leftbtn.onclick=function(){
		move('l');
	}
	rightbtn.onclick=function(){
		move('r');
	}
	// 首页轮播图结束
	
    

})