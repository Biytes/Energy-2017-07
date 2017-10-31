//SOME JS FOR SETTING THE DEMO VALUES
$(document).ready(function(){
  $(".progress_back").each(function(){
    var percentage=$(this).find("span").text().split("/");
    percentage=percentage[0]/percentage[1];
    percentage=Math.round(percentage*100);
    $(this).find(".progress_bar").css("width",percentage+"%");
    $(this).prev("b").text(percentage+"%");
  });
});
