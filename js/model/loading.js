loading_animate=function(){
  $(".wrapper").css("display","none");
  $("#all_information hr").css("display","none");
  $("#loading-container").css("display","block");
  setTimeout(function(){
    $("#loading-container").css("display","none");
    $(".wrapper").css("display","block");
    $("#all_information hr").css("display","block");
  },800);
};
