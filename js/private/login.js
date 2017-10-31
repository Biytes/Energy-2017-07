$('.bt_login').on('click',function(){
  $('#login_box ,.block').fadeIn(1000);
  event.stopPropagation();
});

$('.block').on('click',function(){
  $('#login_box , .block').fadeOut(1000);
  event.stopPropagation();
});


$("body").keydown(function() {
    if (event.keyCode == "13") {//keyCode=13是回车键
      var username=$("#username").val(),
      password=$("#password").val();
      if((username=="ensave")&&(password=="ensave"))
      {
          location.href="whole_view.html";
      }
      else{
        alert("用户名或密码错误");
      }
    }
});
//判断是否登陆成功

$("#buttonlogintoregister").on("click",function(){
  var username=$("#username").val(),
  password=$("#password").val();
  if((username=="ensave")&&(password=="ensave"))
  {
      location.href="whole_view.html";
  }
  else{
    alert("用户名或密码错误");
  }
});
