window.onload = function(){
	var time = document.getElementsByClassName("time")[0];
		var a = new Date();
			var tb = a.getHours();
			var tc = a.getMinutes();
			var td = a.getSeconds();
			time.innerHTML = "现在是"+tb+"点"+tc+"分钟"+td+"秒";
	var tt = setInterval(function(){
		var a = new Date();
		var tb = a.getHours();
		var tc = a.getMinutes();
		var td = a.getSeconds();
		time.innerHTML = "现在是"+tb+"点"+tc+"分钟"+td+"秒";
	},1000)
}