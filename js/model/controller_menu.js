
var judge_controller=0;
var screen_width=document.body.clientWidth;                                  //获取当前设备的分辨率宽度

function control_menu_fadeIn(){                                       //control_menu出现的方法
  if(screen_width>1366)
  {
    if(judge_controller===0){
      $(".control_menu i#launch").fadeOut(500);
      $(".control_menu").animate({
          borderTopLeftRadius: 0,
          borderTopRightRadius: "8px",
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: "8px",
          WebkitBorderTopLeftRadius: 0,
          WebkitBorderTopRightRadius: "8px",
          WebkitBorderBottomLeftRadius: 0,
          WebkitBorderBottomRightRadius: "8px",
          MozBorderRadius: 0,
          width:"100px",
          height:"670px",
          top:"50%",
          marginTop:"-335px",
          left:0
        },1000);
        $(".control_menu").css("cursor","default");
        $(".control_menu .content").fadeIn(1000);
        $(".control_menu .content .icons").fadeIn(1000);
        $("#all_information hr").css("width","1020px");
    /*$(".circle").animate({
      borderRadius:0;
      width:"100px";
      height:"550px";
    },3000);*/
    judge_controller=1;
    }
  }
  else if(screen_width<=1366){
    if(judge_controller===0){
      $(".control_menu i#launch").fadeOut(500);
      $(".control_menu").animate({
          borderTopLeftRadius: 0,
          borderTopRightRadius: "8px",
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: "8px",
          WebkitBorderTopLeftRadius: 0,
          WebkitBorderTopRightRadius: "8px",
          WebkitBorderBottomLeftRadius: 0,
          WebkitBorderBottomRightRadius: "8px",
          MozBorderRadius: 0,
          width:"71px",
          height:"450px",
          top:"50%",
          marginTop:"-225px",
          left:0
        },1000);
        $(".control_menu").css("cursor","default");
        $(".control_menu .content").fadeIn(1000);
        $(".control_menu .content .icons").fadeIn(1000);
        $("#all_information hr").css("width","720px");
    /*$(".circle").animate({
      borderRadius:0;
      width:"100px";
      height:"550px";
    },3000);*/
    judge_controller=1;
    }
  }
}
function control_menu_shrink(){                                       //control_menu缩小的方法
  if(screen_width>1366)
  {
    if(judge_controller===1)
    {
      $(".control_menu .content").fadeOut(500);
      $(".control_menu .content .icons").fadeOut(500);
      $(".control_menu").animate({
          width:"50px",
          height:"50px",
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          borderBottomLeftRadius: 25,
          borderBottomRightRadius: 25,
          WebkitBorderTopLeftRadius: 25,
          WebkitBorderTopRightRadius: 25,
          WebkitBorderBottomLeftRadius: 25,
          WebkitBorderBottomRightRadius: 25,
          MozBorderRadius: 25,
          left:'30px'
        },1000);
      $(".control_menu i#launch").fadeIn(750);
      judge_controller=0;
      $(".control_menu").css("cursor","pointer");
    }
  }
  else if(screen_width<=1366)
  {
    if(judge_controller===1)
    {
      $(".control_menu .content").fadeOut(500);
      $(".control_menu .content .icons").fadeOut(500);
      $(".control_menu").animate({
          width:"50px",
          height:"50px",
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          borderBottomLeftRadius: 25,
          borderBottomRightRadius: 25,
          WebkitBorderTopLeftRadius: 25,
          WebkitBorderTopRightRadius: 25,
          WebkitBorderBottomLeftRadius: 25,
          WebkitBorderBottomRightRadius: 25,
          MozBorderRadius: 25,
          left:'20px'
        },1000);
      $(".control_menu i#launch").fadeIn(750);
      judge_controller=0;
      $(".control_menu").css("cursor","pointer");
    }
  }
}

$(document).ready(function(){
  control_menu_fadeIn();
});

$('#controller_shrink').on("click",function(event){
  control_menu_shrink();
  event.stopPropagation();
});


$(".control_menu").on("click",function(){
control_menu_fadeIn();
  event.stopPropagation();
});


/*hyper_link*/

$('.icons .icon i[id="assess"]').on("click",function(){
  location.href="statistics.html";
  event.stopPropagation();
});

$('.icons .icon i[id="assign"]').on("click",function(){
  location.href="assignment.html";
  event.stopPropagation();
});
$('.icons .icon i[id="equipment"]').on("click",function(){
  location.href="equipment.html";
  event.stopPropagation();
});

$('.icons .icon i[id="multi_anlysis"]').on("click",function(){
  location.href="multi_anlysis.html";
  event.stopPropagation();
});
