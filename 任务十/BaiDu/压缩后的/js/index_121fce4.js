function changIcon(i){i&&$(".mine-title-icon>em").css(i.css("display").indexOf("block")>=0?{top:"3px",left:0,border:"5px dashed transparent","border-top":"5px solid #666"}:{top:0,left:"3px","border-top":"5px dashed transparent","border-left":"5px solid #666"})}$(document).ready(function(){$(".more").hover(function(){$(this).find("#box").css("display","block")},function(){$(this).find("#box").css("display","none")}),$(".s-mod-weather").hover(function(){$(".weather-detail").slideDown()},function(){$(".weather-detail").slideUp()}),$(".s-mblock-title").hover(function(){$(this).children(".s-setbar").show()},function(){$(this).children(".s-setbar").hide()}),$(".s-block-container").on("click",function(){$(this).children(".s-mblock-content").css("display").indexOf("none")>=0?($(this).children(".s-mblock-content").css("display","block"),changIcon($(this).children(".s-mblock-content"))):($(this).children(".s-mblock-content").css("display","none"),changIcon($(this).children(".s-mblock-content")))})}),$(function(){var i=$("div.tab ul li");i.click(function(){$(this).addClass("menu-selected").siblings().removeClass("menu-selected");var o=i.index(this);$("div.tab_box > div").eq(o).show().siblings().hide()})}),$(function(){var i=$("div.title-tab ul li");i.click(function(){$(this).addClass("title-selected").siblings().removeClass("title-selected");var o=i.index(this);$("div.bg-tabBox > div").eq(o).show().siblings().hide()})});var bgImg=localStorage.getItem("bgImg");bgImg&&($("body").css("background",bgImg),$("body").css("background-size","100%"),$(".content").children(".logo").attr("src","img/logo_white.png"));var i=1;$(".skin").click(function(){$(".skin-wrapper").animate({height:"309px"},500)}),$(".back-top").click(function(){$(".skin-wrapper").animate({height:"0px"},500)}),$(".hot-box img").hover(function(){i=$(this).index(),$(".bg-preview").css("background","url(img/bg"+i+".jpg) no-repeat"),$(".bg-preview").css("background-size","104%")}),$(".hot-box img").click(function(){$("body").css("background","url(img/bg"+i+".jpg) no-repeat"),$("body").css("background-size","107%"),$(".content").children(".logo").attr("src","img/logo_white.png"),localStorage.setItem("bgImg","url(img/bg"+i+".jpg) no-repeat")}),$(".game-box img").hover(function(){i=$(this).index(),$(".bg-preview").css("background","url(img/bg"+(i+12)+"s.jpg) no-repeat"),$(".bg-preview").css("background-size","104%")}),$(".game-box img").click(function(){$("body").css("background","url(img/bg"+(i+12)+".jpg) no-repeat"),$("body").css("background-size","107%"),$(".content").children(".logo").attr("src","img/logo_white.png"),localStorage.setItem("bgImg","url(img/bg"+(i+12)+".jpg) no-repeat")}),$(document).ready(function(){0==$(this).scrollTop()&&$(".top").hide(),$(window).scroll(function(){0==$(this).scrollTop()&&$(".top").hide(),0!=$(this).scrollTop()&&$(".top").show()}),$(".top").click(function(){$("html,body").animate({scrollTop:"0px"})})});