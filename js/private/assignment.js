/*tabbed*/
$(".tabbed ul li").on("click",function(){
  var tabbed_class=$(this).attr("class");                              //获取this 对应的tabbed的ID
  var table_type,table_ID;
    if($(".active_button").hasClass("year"))                     //判断当前表的类型
    {
      table_type="_year";
    }
    else
    {
      table_type="_month";
    }
  $(".wrapper .row").css("display","none");                        //让所有的ROW 表消失，然后再选择需要出现的表
  if($(this).hasClass("tabbed_active"))                        //判断同时点击一个tabbed
  {
    tabbed_class=tabbed_class.substr(0,6);
    $("#"+tabbed_class).fadeIn(1000);                      //fresh刷新一下;
  }
  else{
    table_ID=tabbed_class+table_type;
    if($("#"+table_ID).hasClass("no-footer"))
    {
      /*把其他同页面的表都消失*/
      $("#"+tabbed_class+"_year").css("display","none");
      $("#"+tabbed_class+"_month").css("display","none");
      $("#"+tabbed_class+"_year_wrapper").css("display","none");
      $("#"+tabbed_class+"_month_wrapper").css("display","none");
      loading_animate();
      $("#"+table_ID+"_wrapper").css("display","block");
      $("#"+tabbed_class+table_type).fadeIn(200);
      $("#"+tabbed_class).fadeIn(200);
    }
    else
    {
      $("#"+tabbed_class+"_year").css("display","none");
      $("#"+tabbed_class+"_month").css("display","none");
      $("#"+tabbed_class+"_year_wrapper").css("display","none");
      $("#"+tabbed_class+"_month_wrapper").css("display","none");
      init_table(table_ID);
      loading_animate();
      $("#"+tabbed_class).fadeIn(1000);                     /*选择哪个row显示*/
      $("#"+table_ID+"_wrapper").fadeIn(200);
      $("#"+table_ID).fadeIn(200);
    }
  }
});
var today_time = new Date();
var today_year=today_time.getFullYear();
//获取当前月
var today_month=today_time.getMonth()+1;


/*assignment_table*/
$(document).ready(function() {
  init_table("table1_year");
  $("#date_month select:first-child option:contains('"+today_year+"')").attr("selected","selected");
  $("#date_month select:last-child option:eq('"+today_month+"')").attr("selected","selected");
  $("#date_year select option:contains('"+today_year+"')").attr("selected","selected");
});

$(".wrapper").on("click","tr td",function(){
  console.log($(this).attr("class"));
  $(".wrapper tr td").removeClass("td_overflow");
  $(".wrapper tr td").css("overflow","hidden");
  $(this).addClass("td_overflow");
  $(this).css("overflow","visible");
  event.stopPropagation();
});

/*init_table("table2_month");
$("#table2_year_wrapper").css("display","none");
$("#table2_month").css("display","block");
$("#table2_month_wrapper").fadeIn(200);*/



$(".year").on("click",function(){
  if($(this).hasClass("active_button")){
    //执行类型变换
  }
  else{
    $(".table_button").removeClass("active_button");
    $(this).addClass("active_button");
    var tabbed_class=$(".tabbed_active").attr("class");
    var block_row=tabbed_class.substr(0,6);                           //选择display:block的row的ID
    var table_ID=block_row+"_year";
    if($("#"+block_row+"_month").hasClass("no-footer"))                //判断要消失的表是否被初始化
    {
      $("#"+block_row+"_month").css("display","none");
      $("#"+block_row+"_month_wrapper").css("display","none");
    }
    if($("#"+table_ID).hasClass("no-footer")){                           //判断当前表是否被初始化
      loading_animate();
      $("#"+table_ID).fadeIn(200);
      $("#"+table_ID+"_wrapper").fadeIn(200);
    }
    else{
      init_table(table_ID);                                        //初始化表
      loading_animate();
      $("#"+table_ID).fadeIn(200);
      $("#"+table_ID+"_wrapper").fadeIn(200);
    }
  }
});
$(".month").on("click",function(){
  if($(this).hasClass("active_button")){
    //执行类型变换
  }
  else{
    $(".table_button").removeClass("active_button");
    $(this).addClass("active_button");
    var tabbed_class=$(".tabbed_active").attr("class");
    var block_row=tabbed_class.substr(0,6);                          //选择display:block的row的ID
    var table_ID=block_row+"_month";
    if($("#"+block_row+"_year").hasClass("no-footer"))                //判断要消失的表是否被初始化
    {
      $("#"+block_row+"_year").css("display","none");
      $("#"+block_row+"_year_wrapper").css("display","none");
    }
    if($("#"+table_ID).hasClass("no-footer")){                           //判断当前表是否被初始化
      loading_animate();
      $("#"+table_ID).fadeIn(200);
      $("#"+table_ID+"_wrapper").fadeIn(200);
    }
    else{
      init_table(table_ID);                      //初始化表
      loading_animate();
      $("#"+table_ID).fadeIn(200);
      $("#"+table_ID+"_wrapper").fadeIn(200);
    }
  }
});

/*控制表的button 和 select*/

$(".table_type_button .month").on("click",function(){
    $("#date_year").css("display","none");
  $("#date_month").css("display","block");
});

$(".table_type_button .year").on("click",function(){
  $("#date_month").css("display","none");
  $("#date_year").css("display","block");
});


/*loading动画*/
