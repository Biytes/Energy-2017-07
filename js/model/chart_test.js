var today_time = new Date();
var today_year=today_time.getFullYear();
//获取当前月
var today_month=today_time.getMonth()+1;
var today_date=today_time.getDate();



var  option={
        scales: {
            yAxes: [{
                ticks: {
                    min:0,
                }
            }]
        }
    };

function chart_init(ctx,type,data,option)                     //表初始化
{
  var myChart = new Chart(ctx, {
      type: type,
      data: data,
      options:option
  });
}

function recreate_chart_canvas(container,type)
{
  $("#"+type).remove();
  $(container).append('<canvas id='+type+' width="700" height="400"></canvas>');
}
/*一开始的时候是*/

function random(max, min) {
    if (typeof max !== 'number') {
        return Math.random();
    } else if (typeof min !== 'number') {
        min = 0;
    }
    return Math.random() * (max - min) + min;
}
function randomColor() {                                            //随机选取颜色
  var r = random(256) | 0,
      g = random(256) | 0,
      b = random(256) | 0;
    return 'rgb(' + r + ',' + g + ',' + b +  ')';
}

//var ctx=document.getElementById("pie").getContext("2d");
/*var myChart = new Chart(ctx1, {
    type: "pie",
    data: data1,
});*/
