function check()
{
	//alert("test");
	if(document.getElementById("id").value=="")
	{
			alert("ID를 입력하시오");
			document.getElementById("id").focus();
			return;
	}else{
		if(validateID() != false)
		{
				if(document.getElementById("pwd1").value==""){
						alert("비밀번호를 입력하시오");
						document.getElementById("pwd1").focus();
						return;
				}
				if(document.getElementById("pwd2").value==""){
					alert("비밀번호를 한번 더 입력하시오");
					document.getElementById("pwd2").focus();
					return;
				}
				if(document.getElementById("pwd1").value
	 					                       !=document.getElementById("pwd2").value){
					alert("비밀번호가 일치하지 않습니다\n다시 입력하시오");
					document.getElementById("pwd1").value="";
					document.getElementById("pwd2").value="";
					document.getElementById("pwd1").focus();
					return;
				}
		}else{
			return;
		} // end if  (validateID)
	}	
	frm.submit();   // result.html로 이동
}
//유효성검사(정규표현식)-------------------------------------------------------------
function validateID()
{
	var objID=document.getElementById("id");
	var objRegex = new RegExp(/^[a-zA-Z0-9]{4,12}$/);   
	                             // 정규표현식   ^  : 시작
	                             //               $ :  끝
	var bResult = objRegex.test(objID.value);
	//alert(bResult);      //true  or  false
	
	if(!bResult){
		alert("ID는 4자에서 12자 사이의 영문 대/소문자와 숫자로만 입력해야 합니다");
		objID.value="";
		objID.focus();		
	}
	return bResult;
}










