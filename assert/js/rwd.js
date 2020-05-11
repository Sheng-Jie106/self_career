function widt(){
    document.getElementById("main").style.display="none";
}
//調整article,section長度
window.onresize=function(){
    wid();
}
function wid(){
    var wid=window.screen.width;
    if(wid>992){
        var art=document.getElementsByTagName("article");
        var sec=document.getElementsByTagName("section");
        var arth=art.item(0).offsetHeight;
        var sech=sec.item(0).offsetHeight;
        var a=arth>sech?arth:sech;
        if(arth>sech)
            sec.item(0).style.height=a+"px";
        else
            art.item(0).style.height=a+"px";
    }
}