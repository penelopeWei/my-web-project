 oRed = document.getElementById("red");
 oGreen = document.getElementById("green");
 oBlue = document.getElementById("blue");
 oPink = document.getElementById("pink");
 oOrange = document.getElementById("black");
 oNav = document.getElementById("nav");
 oImpcolor = document.getElementsByClassName("impcolor"); //重要字体的颜色
                                                          //
 oNav.style.background = getCookie("backgroundColor"); //设置导航栏背景颜色
                                                    
function changeColor(backgroundColor,liBlackground,time){
     oNav.style.background = backgroundColor; //设置导航栏背景颜色
     setCookie("backgroundColor", backgroundColor, time);
     setCookie("liBlackground",liBlackground, time);
     location.replace(location.href); //设置导航栏 li背景颜色
}

 oRed.onclick = function() {
    changeColor( "#FF0000","#B22222",1);
 }

 oGreen.onclick = function() {
    changeColor( "#32CD32","#00CD66",1);

 }
 oBlue.onclick = function() {
    changeColor( "#4682B4","#5F9EA0",1);

 }
 oPink.onclick = function() {
    changeColor( "#F08080","#FFB6C1",1);

 }
 oOrange.onclick = function() {
    changeColor( "#FF4500","#FF7F50",1);
    
 }
 fontColor();

 function fontColor() {//设置文字的颜色
     for (var i = 0; i < oImpcolor.length; i++) {
         oImpcolor[i].style.color = getCookie("backgroundColor");
     }
 }

 function mouseover(x) {//鼠标划过时改变文字的颜色和li的背景色
     children = x.getElementsByTagName("a");
     var i = 0;
     for (i = 0; i < children.length; i++) {
         children[i].style.color = "#fff";
     }
     x.style.background = getCookie("liBlackground");
 }

 function mouseout(x) {//鼠标划过时恢复文字的颜色和li的背景色
     children = x.getElementsByTagName("a");
     var i = 0;
     for (i = 0; i < children.length; i++) {
         children[i].style.color = "#444";
     }
     x.style.background = getCookie("backgroundColor");
 }

 function setCookie(name, value, iTime) {   //设置cookie
     var oDate = new Date();
     //设置cookie过期时间  
     oDate.setDate(oDate.getDate() + iTime);
     document.cookie = name + '=' + value + ';expires=' + oDate.toGMTString();
 }

 function getCookie(name) {   //获取cookie

     //cookie中的数据都是以分号加空格区分开  
     var arr = document.cookie.split("; ");
     for (var i = 0; i < arr.length; i++) {
         if (arr[i].split("=")[0] == name) {
             return arr[i].split("=")[1];
         }
     }
     //未找到对应的cookie则返回空字符串  
     return '';
 }
