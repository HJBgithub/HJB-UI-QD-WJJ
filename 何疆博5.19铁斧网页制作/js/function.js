// //获取元素的文本
function getText (obj,value){
	if (value == underfined){
		if(obj.innerText){
			return obj.innerText;
		}else{
			return obj.textContent;
		}
		return obj.innerText;
	}else{
    	obj.innerText=value;
	}
}
// //通过类名获取元素
function getClass(sel,obj){
	var obj = obj||document;
	if(obj.getElementsByClassName){
		return obj.getElementsByClassName(sel);
	}else{
		    var arr = [ ];
		    // #创建一个数组，该数组将要保存获取的元素
		    var all = documemt.getElementsByTagName("*");//(获取页面中所有的元素)
		    // #创建一个数组，该数组将要保存获取的元素
		    for(var i = 0; i < all.length; i++){//(遍历页面中所有的元素)
		    // #遍历所有的元素
		        var str = all [i].className;//(将满足条件的all数组中的元素赋值给新定义数组str)
		        // #获取每个元素的类名
		        if ( cheak (str,sel)){  //(因为数组中存在不止属性名相等还存在两个或更多属性名的情况，所以要在定义一个函数)
		        // #判断是否满足条件
		            arr.push(all[i]);
		        }
		    }
		    return arr;  //（在sel函数中返回值）
		}
}
		function check (sell,sel2){  
		    var newarr = str.split(" ");
		    // #将类名的字符串转化为数组
		    for (var i = 0; i < newarr.length; i++) {
		    // #将一个元素的每一个类名遍历 
		        if(newarr[i] == sel2){
	                return true;
	                // #当与传入的类名匹配时，返回真
   	            }
		    }
		    return false;
		  }
//获取元素的样式
function getStyle (obj,prop){
	if(obj.currentStyle==undefined){
		return window.getComputedStyle(obj,null)[prop];
	}else{
		return obj.currentStyle[prop];
	}
}



// $ 两个功能
// 1.执行 onload
// 2.花样获取元素
function $(sel,obj){
	var obj = obj||document;
	if(typeof sel == "function"){
		window.onload=function(){
			sel();
		}
	}else if(typeof sel == "string"){
		if (sel.charAt(0) == "."){
			return getClass(sel.slice(1),obj);
		}else if (sel.charAt(0) == "#"){
			return obj.getElementById(sel.slice(1));
		}else if (/^[a-z|1-6]{1,10}$/g.test(sel)){
			return obj.getElementsByTagName(sel);
		}else{
			console.error("非法输入");
		}
	}
}
// $(function(){
// 	var div = $("div");
// 	var box = $(".box");
//  	var one = $("#one");
// });