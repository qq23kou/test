
	function fn(){
		var input_t = document.getElementsByClassName("page2_text")[0].value;
		if(input_t == ""){
			alert("您还没有输入任何文字");
		}else{
			var text = document.getElementsByClassName("page2_text")[0].value;
			localStorage.removeItem("name");
			localStorage.setItem("name",text);
			document.location.href='rule.html';
		}
	}