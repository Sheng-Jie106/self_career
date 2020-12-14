window.onload=function(){
	wid(); // 計算寬度
	widt();// 計算寬度
	//fir();//信從上到下透明而出
	//window.setTimeout(sec,2000);//標題出現
	//thir();//透明消失
	four();//主體取消none
	window.setTimeout(fif,500);//主體出現
	window.setTimeout(six,650);//能力值
}
function fir(){
	var mail=document.getElementById("mail");
	var aside=document.getElementById("aside");
	mail.style.opacity=1;
	aside.style.top=200+"px";
}
function sec(){
	var h3=document.getElementById("h3");
	h3.style.opacity=1;
}
function thir(){
	var mail=document.getElementById("mail");
	var aside=document.getElementById("aside");
	var h3=document.getElementById("h3");
	h3.style.opacity=0;
	mail.style.opacity=0;
	aside.style.top=150+"px";
}
function four(){
	var main=document.getElementById("main");
	var aside=document.getElementById("aside");
	aside.style.display="none";
	main.style.display="block";
}
function fif(){
	var main=document.getElementById("main");
	main.style.opacity=1;
}