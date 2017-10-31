


$('#tree_view ul li span').on('click',function(){
  $('#tree_view ul li span').removeClass("tree_onclick");
  $(this).addClass("tree_onclick");
  var name;
  if($(this).next().children().length>0 )
  {
    name=$(this).text();
    $("#all_information h4:first-child span").css("font-size","15.5px");
  }
  else{
    name=$(this).parent().parent().prev("span").text()+"--"+ $(this).text();
    $("#all_information h4:first-child span").css("font-size","13px");
  }
  $("#all_information h4:first-child span").text(name);

  event.stopPropagation();

  /*数据加载*/

  //对this做的事情
   //this的ID
});
/*$("#search_building input").bind('input propertychange',function(){
alert("dddddd");
});*/



/* keyup search事件*/
$("#search_building input").keyup(function(){
  var include=$("#search_building input").val();
  if($("#tree_view").css("display")=="block")
  {
    var span=$('#tree_view li span');
    if($("#search_building input").val()==="")
    {
      span.css("display","block");
      console.log(span.prev());
      span.prev().css("display","block");
    }
    else{
      var not=span.not("span:contains('"+include+"')");
      var filter=span.filter("span:contains('"+include+"')");
      not.css("display","none");
      not.prev().css("display","none");
      filter.css("display","block");
      filter.prev().css("display","block");
    }
  }
  else if($(".tree_view_multi").css("display")=="block")
  {
    var label=$('.tree_view_multi li label[for]');
    if($("#search_building input").val()==="")
    {
      console.log(label);
      console.log(label.prev());
      label.css("display","inline-block");
      label.prev().css("display","inline-block");
    }
    else{
      var not=label.not("label[for]:contains('"+include+"')");
      var filter=label.filter("label[for]:contains('"+include+"')");
      console.log(not);
      console.log(filter);
      not.css("display","none");
      not.prev().css("display","none");
      filter.css("display","inline-block");
      filter.prev().css("display","inline-block");
    }
  }
});








/*$(document).ready(function(){
  $('.tree_view input[type="checkbox"]').each(function(i){
    var length=$('.tree_view input[type="checkbox"]').next("ul").eq(i).find("span").length;
    var height;
    height=length*21+"px";
    $('.tree_view input[type="checkbox"]').next("ul").eq(i).css("height",height);
    console.log(length);
    console.log(height);
    console.log($('.tree_view input[type="checkbox"]').next("ul").eq(i).height());
  });

/*$('.tree_view input[type="checkbox"]').click(function(){
  var logo=$(this).next('label'),
  height=$(this).nextAll("ul").height();
  if(height==0+"px"){

  }
  console.log(height);
})
});
/*$('.tree_view input[type="checkbox"]').click(function(){
  var tree=$(this).nextAll("ul");
  tree.slideToggle(600);
});
/*     上下滑动画
$('.tree_view ul li input[type="checkbox"]').click(function(){
    if($(this).prop("checked")==true)
    {
      $(this).nextAll("ul").eq(0).animate({
        height:'0px'
      },2000);
    }
    else if($(this).prop("checked")==false){
      $(this).nextAll("ul").eq(0).animate({
        height:auto,
      },2000);
    }

})
*/
