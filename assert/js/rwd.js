//調整main-padding
// var main_padding=document.getElementsByTagName("main").item(0);
// var width=window.screen.width;
// if(width<992){
//     main_padding.style.padding="25px";
// }
function widt(){
    document.getElementById("main").style.display="none";
}
//調整article,section長度
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