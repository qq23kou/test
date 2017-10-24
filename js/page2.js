
	function fn(){
		var input_t = document.getElementsByClassName("page2_text")[0].value;
		if(input_t == ""){
			alert("您还没有输入任何文字");
		}else{
			document.location.href='rule.html';
		}
	}