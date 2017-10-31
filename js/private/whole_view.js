/*data*/

var data_horizontal_water = {
  labels:["C21","C9","C5","C14","C10"],
datasets: [{
    label: '水',
    data: [895555, 519044, 471622, 469143, 462212],
    backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
    ],
    borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
    ],
    borderWidth: 1
}]
};

var data_horizontal_electric = {
  labels:["C21","C9","C5","C14","C10"],
datasets: [{
    label: '电',
    data: [800000, 656251, 454231, 321534, 212345],
    backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
    ],
    borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
    ],
    borderWidth: 1
}]
};


var  option={
        scales: {
            xAxes: [{
                ticks: {
                    min:0,
                }
            }]
        }
    };

$(document).ready(function(){
  var ctx = $("#horizontal_water");
  var type="horizontalBar";
  chart_init(ctx,type,data_horizontal_water,option);
});

$(".electric").on("click",function(){
  var ctx = $("#horizontal_electric");
  var type="horizontalBar";
  chart_init(ctx,type,data_horizontal_electric,option);
  ctx.css("display","block");
  $("#horizontal_water").css("display","none");
});

$(".water").on("click",function(){
  var ctx = $("#horizontal_water");
  var type="horizontalBar";
  chart_init(ctx,type,data_horizontal_water,option);
  ctx.css("display","block");
  $("#horizontal_electric").css("display","none");
});


var pie_chart = $("#pie_chart");
var myRingChart = new Chart(pie_chart, {
    type: "pie",
    data: {
        labels: ["水", "电"],
        datasets: [{
            backgroundColor: ["#059BFF", "#FFC233"],
            data: [100, 200]
        }, ],
        options: {
            cutoutPercentage: 60, //切掉的半径
            rotation: Math.PI * 0.5, //旋转角度
            animation: {
                animateScale: true
            }
        }
    }
});
