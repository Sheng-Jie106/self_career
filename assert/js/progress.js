function a1(){
	var i=0;
	var a=document.getElementById("1");
	var aa=document.getElementById("11");
	var aaa=window.setInterval(function(){
	if(i>=17){
		window.clearInterval(aaa);
	}
	a.value=i;
	aa.innerHTML=i;
	i++;
},150);}
function b(){
	var i=0;
	var a=document.getElementById("2");
	var aa=document.getElementById("22");
	var aaa=window.setInterval(function(){
	if(i>=80){
		window.clearInterval(aaa);
	}
	a.value=i;
	aa.innerHTML=i;
	i++;
},50);}
function c(){
	var i=0;
	var a=document.getElementById("3");
	var aa=document.getElementById("33");
	var aaa=window.setInterval(function(){
	if(i>=84){
		window.clearInterval(aaa);
	}
	a.value=i;
	aa.innerHTML=i;
	i++;
},75);}
function d(){
	var i=0;
	var a=document.getElementById("4");
	var aa=document.getElementById("44");
	var aaa=window.setInterval(function(){
	if(i>=91){
		window.clearInterval(aaa);
	}
	a.value=i;
	aa.innerHTML=i;
	i++;
},60);}
function e(){
	var i=0;
	var a=document.getElementById("5");
	var aa=document.getElementById("55");
	var aaa=window.setInterval(function(){
	if(i>=82){
		window.clearInterval(aaa);
	}
	a.value=i;
	aa.innerHTML=i;
	i++;
},93);}
function six(){
	a1();b();c();d();e();
}