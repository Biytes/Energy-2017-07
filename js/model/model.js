
$("#user_icon").on("mouseenter",function(){
  $("#user_launch").toggle();
  $("#user_icon i").css("color","#FFFFFF")
});
$("#user_icon").on("mouseleave",function(){
  $("#user_launch").toggle();
  $("#user_icon i").css("color","#999")
});
$("#user_launch").on("mouseenter",function(){
  $("#user_launch").css("display","block");
  $("#user_icon i").css("color","#FFFFFF")
});
$("#user_launch").on("mouseleave",function(){
  $("#user_launch").css("display","none");
  $("#user_icon i").css("color","#999")
});



/*数据加载*/

$("loading_container").css("display","block");
$("#all_information").addClass("loading_center");
$("#all_information .wrapper").ready(function(){
  $("#loading_container").css("display","none")
  $("#all_information").removeClass("loading_center");
});
