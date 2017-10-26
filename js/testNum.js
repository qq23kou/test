function Ck(event){
			if(localStorage.getItem("number") == null){
				Nc = 0;
				localStorage.setItem("number",Nc);
			}else{
				Nb = localStorage.getItem("number");
				localStorage.removeItem("number");
				Nb++;
				localStorage.setItem("number",Nb);
				// document.location.href='http://551o6s.ren/eXH8C4';
			}
	}
	// localStorage.removeItem("number");