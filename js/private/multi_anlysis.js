var option = {

};
function date_multi_random_data(number) {
    var data = [];
    for (i = 0; i < number; i++) {
        data[i] = Math.random() * 2000;
    }
    return data;
}

var data_water_year = {
    labels: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月", ],
    datasets: [{
        label: "Electric",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: date_multi_random_data(12),
        spanGaps: false,
    }, {
        label: "Water",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(93, 111, 111, 0.4)",
        borderColor: "rgba(118, 131, 131, 1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(118, 131, 131, 1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(118, 131, 131, 1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: date_multi_random_data(12),
        spanGaps: false,
    }]
};
var data_electric_year = {
    labels: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月", ],
    datasets: [{
        label: "Electric",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: date_multi_random_data(12),
        spanGaps: false,
    }, {
        label: "Water",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(93, 111, 111, 0.4)",
        borderColor: "rgba(118, 131, 131, 1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(118, 131, 131, 1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(118, 131, 131, 1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: date_multi_random_data(12),
        spanGaps: false,
    }]
};

var label_month = [];
var electric_month_data = [],
    water_month_data = [];
for (var i = 0; i < 31; i++) {
    label_month[i] = i + 1;
}
for (var i = 0; i < today_date; i++) {
    electric_month_data[i] = parseInt(Math.random() * 1000);
}
for (var i = 0; i < today_date; i++) {
    water_month_data[i] = parseInt(Math.random() * 1000);
}


var data_water_month = {
    labels: label_month,
    datasets: [{
        label: "Electric",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: electric_month_data,
        spanGaps: false,
    }, {
        label: "Water",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(93, 111, 111, 0.4)",
        borderColor: "rgba(118, 131, 131, 1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(118, 131, 131, 1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(118, 131, 131, 1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: water_month_data,
        spanGaps: false,
    }]
};
for (var i = 0; i < today_date; i++) {
    electric_month_data[i] = parseInt(Math.random() * 1000);
}
for (var i = 0; i < today_date; i++) {
    water_month_data[i] = parseInt(Math.random() * 1000);
}
var data_electric_month = {
    labels: label_month,
    datasets: [{
        label: "Electric",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: electric_month_data,
        spanGaps: false,
    }, {
        label: "Water",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(93, 111, 111, 0.4)",
        borderColor: "rgba(118, 131, 131, 1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(118, 131, 131, 1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(118, 131, 131, 1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: water_month_data,
        spanGaps: false,
    }]
};
var electric_day_data = [],
    water_day_data = [];
for (var i = 0; i < today_date; i++) {
    electric_day_data[i] = parseInt(Math.random() * 1000);
}
for (var i = 0; i < today_date; i++) {
    water_day_data[i] = parseInt(Math.random() * 1000);
}
var label_day = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];

var data_water_day = {
    labels: label_day,
    datasets: [{
        label: "Electric",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: date_multi_random_data(24),
        spanGaps: false,
    }, {
        label: "Water",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(93, 111, 111, 0.4)",
        borderColor: "rgba(118, 131, 131, 1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(118, 131, 131, 1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(118, 131, 131, 1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: date_multi_random_data(24),
        spanGaps: false,
    }]
};
var data_electric_day = {
    labels: label_day,
    datasets: [{
        label: "Electric",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: electric_day_data,
        spanGaps: false,
    }, {
        label: "Water",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(93, 111, 111, 0.4)",
        borderColor: "rgba(118, 131, 131, 1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(118, 131, 131, 1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(118, 131, 131, 1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: water_day_data,
        spanGaps: false,
    }]
};
for (var i = 0; i < today_date; i++) {
    electric_day_data[i] = parseInt(Math.random() * 1000);
}
for (var i = 0; i < today_date; i++) {
    water_day_data[i] = parseInt(Math.random() * 1000);
}
/*test数据*/


/*测试span功能*/

/*
var label_year = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月", ];
var label_month = [];
var electric_month_data = [],
    water_month_data = [];
for (var i = 0; i < 31; i++) {
    label_month[i] = i + 1 ;
}
for (var i = 0; i < today_date; i++) {
    electric_month_data[i] = parseInt(Math.random() * 1000);
}
for (var i = 0; i < today_date; i++) {
    water_month_data[i] = parseInt(Math.random() * 1000);
}


var electric_day_data = [],
    water_day_data = [];
for (var i = 0; i < today_date; i++) {
    electric_day_data[i] = parseInt(Math.random() * 1000);
}
for (var i = 0; i < today_date; i++) {
    water_day_data[i] = parseInt(Math.random() * 1000);
}
var label_day = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];


var color1=randomColor();
var color2=randomColor();
var color3=randomColor();

$('#tree_view ul li span').on('click', function(){
            var number;
            if ($("#date_day").is(":hidden") === false) {
                number = 24;
                label = label_day;
            } else if ($("#date_month").is(":hidden") === false) {
                number = today_time.getDate();
                label = label_month;
            } else {
                number = 12;
                label = label_year;
            }
            var data = {
                labels: label,
                datasets: [{
                    label: "C21",
                    data: date_multi_random_data(number),
                    borderWidth: 1,
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: color1,
                    borderColor: color1,
                    borderCapStyle: "butt",
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: "miter",
                    pointBorderColor: color1,
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: color1,
                    pointHoverBorderColor: color1,
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                }, {
                    label: "C9",
                    data: date_multi_random_data(number),
                    borderWidth: 1,
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: color2,
                    borderColor: color2,
                    borderCapStyle: "butt",
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: "miter",
                    pointBorderColor: color2,
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: color2,
                    pointHoverBorderColor: color2,
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                }, {
                    label: "C10",
                    data: date_multi_random_data(number),
                    borderWidth: 1,
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: color3,
                    borderColor: color3,
                    borderCapStyle: "butt",
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: "miter",
                    pointBorderColor: color3,
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: color3,
                    pointHoverBorderColor:color3,
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                }],
            };

            if ($(".active_button").hasClass("bar")) {
                type = "bar";
                recreate_chart_canvas(container,type);
                var ctx1 = $("#bar");
                chart_init(ctx1,type,data,option);
                $("#bar").css("display", "block");
                $("#line").css("display", "none");
            } else if($(".active_button").hasClass("line")){
                type = "line";
                recreate_chart_canvas(container, type);
                var ctx1 = $("#line");
                chart_init(ctx1,type,data,option);
                $("#line").css("display", "block");
                $("#bar").css("display", "none");
            }
        });
*/
var pie_chart_data = [];
for (var i = 0; i < 3; i++) {
    pie_chart_data[i] = parseInt(Math.random() * 2000);
}
var pie_chart = $("#doughnut");
var myRingChart = new Chart(pie_chart, {
    type: "doughnut",
    data: {
        labels: ["水", "电", "气"],
        datasets: [{
            backgroundColor: [randomColor(), randomColor(), randomColor()],
            data: pie_chart_data
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

var pie_chart_data = [];
for (var i = 0; i < 3; i++) {
    pie_chart_data[i] = parseInt(Math.random() * 2000);
}
var pie_chart = $("#doughnut2");
var myRingChart = new Chart(pie_chart, {
    type: "doughnut",
    data: {
        labels: ["水", "电", "气"],
        datasets: [{
            backgroundColor: [randomColor(), randomColor(), randomColor()],
            data: pie_chart_data
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




















function building_change_style(){
  $("#date_day").fadeIn(500);
  $(".wrapper").css("marginTop", "5px");
  $("#date_day input,#date_month select,#date_year select").css("height","40px");
  $("#date_day input,#date_month select,#date_year select").css("font-size","16px");
  $("#date_day  i").css("font-size","16px");
  $("#date_day  i").css("height","40px");
  $("#date_day  i").css("line-height","42px");
  $("#date_day").css("marginTop","20px");
  $("#date_year,#date_month").css("marginTop","5px");
}

function time_change_style(){
  $("#date_day").fadeIn(500);
  $(".wrapper").css("marginTop", "30px");
  $("#date_day input,#date_month select,#date_year select").css("height","25px");
  $("#date_day input,#date_month select,#date_year select").css("font-size","12px");
  $("#date_day2 input,#date_month2 select,#date_year2 select").css("height","25px");
  $("#date_day2 input,#date_month2 select,#date_year2 select").css("font-size","12px");
  $("#date_day3 input,#date_month3 select,#date_year3 select").css("height","25px");
  $("#date_day3 input,#date_month3 select,#date_year3 select").css("font-size","12px");
  $("#date_day  i").css("font-size","12px");
  $("#date_day  i").css("height","25px");
  $("#date_day  i").css("line-height","27px");
  $("#date_day2  i").css("font-size","12px");
  $("#date_day2  i").css("height","25px");
  $("#date_day2  i").css("line-height","27px");
  $("#date_day3  i").css("font-size","12px");
  $("#date_day3  i").css("height","25px");
  $("#date_day3  i").css("line-height","27px");
  $("#date_year,#date_month").css("marginTop","0px");
  $("#date_day").css("marginTop","2px");
  $("#date_day2,#date_day3").css("marginTop","0px");
  $("#date_day,#date_day2,#date_day3").css("marginBottom","3px");
}
/*table1*/


building_init();
/*#type #date_type #chart_type tabbed*/
function building_init() {
  remove_all_button();
  building_change_style();
  $("#tree_view").css("display", "none");
  $(".tree_view_multi").fadeIn(500);
  $("#time").css("display","none");
  $("#building").fadeIn(500);
    var container = $("#building .chart_container"); //装表的div
    var today_time = new Date();
    var today_year = today_time.getFullYear();
    //获取当前月
    var today_month = today_time.getMonth() + 1;
    $("#date_month select:first-child option:contains('" + today_year + "')").attr("selected", "selected"); /*让月和年的select 变成今天的*/
    $("#date_month select:last-child option:eq('" + today_month + "')").attr("selected", "selected");
    $("#date_year select option:contains('" + today_year + "')").attr("selected", "selected");
    $("#date_day2,#date_day3").css("display","none");
    $("#date_month2,#date_month3").css("display","none");
    $("#date_year2,#date_year3").css("display","none");
    var type = "line";
    $(".line").addClass("active_button");
    $(".day").addClass("active_button");
    show_date_container("_day");
    $(".electric").addClass("active_button");
    recreate_chart_canvas(container, type);
    var ctx1 = $("#line");
    $("#building #line").css("display","block");
    $("#building #bar").css("display","none");
    chart_init(ctx1, type, data_electric_day, option);
}
function decide_page() { //判断哪一页是打开的
    if ($(".time").hasClass("tabbed_active")) {
        return "time";
    } else {
        return "building";
    }
}

function decide_data_type() { //判断水电
      if($(".electric").hasClass("active_button"))
      {
        return "_electric";
      }
      else
      {
        return "_water";
      }
}

function decide_chart_type() { //判断表的形式  bar ,line data_chart
    if ($(".bar").hasClass("active_button")) {
        return "bar";
    } else if ($(".line").hasClass("active_button")) {
        return "line";
    } else {
        return "data_chart"; //"#"+building .chart_container + .Doughnut
    }
}

function decide_data_date_type() { //判断小时，日，还是月的数据label
    if ($(".day").hasClass("active_button")) {
        return "_day";
    } else if ($(".month").hasClass("active_button")) {
        return "_month";
    } else {
        return "_year";
    }
}

function table_init_judge(table_ID) {
    if ($("#" + table_ID).hasClass("no-footer")) {
        return 1;
    } else {
        return 0;
    }
}
function page_chart_hide(page){
  if(page=="building")
  {
    $("#"+page + " #line").css("display","none");
    $("#"+page + " #bar").css("display","none");
  }
  else
  {
    $("#"+page + " #line2").css("display","none");
    $("#"+page + " #bar2").css("display","none");
  }
}
function hide_table(table_ID, page) {
    if (table_init_judge(table_ID)) {
        $("#"+table_ID).css("display","none");
        $("#" + table_ID + "_wrapper").css("display", "none");
                //对于初始化过的，只要+_wrapper就行
    } else {
      $("#"+table_ID).css("display","none");

    }
}

function initiated_table_show(table_ID, page) //初始化了的表的显示
{
    hide_all_table(page);
    loading_animate();
    $("#" + table_ID ).css("display","block");
    $("#" + table_ID + "_wrapper").fadeIn(1100);
}

function hide_all_table(page) //隐藏当前页面所有的表
{
    hide_table( page + "_water_day");
    hide_table( page + "_water_month");
    hide_table( page + "_water_year");
    hide_table( page + "_electric_day");
    hide_table( page + "_electric_month");
    hide_table( page + "_electric_year");
}
function show_date_container(date_type)
{
  $(".date_day_container").css("display","none");
  $(".date_month_container").css("display","none");
  $(".date_year_container").css("display","none");
  $(".date"+date_type+"_container").fadeIn(300);
}
function choose_data(data_type,date_type)
{

}
function remove_all_button()
{
  $("#type .chart_button").removeClass("active_button");
  $("#chart_type .chart_button").removeClass("active_button");
  $("#date_type .chart_button").removeClass("active_button");
};

/*building*/
$("#type .chart_button").on("click", function() {
    var page = decide_page(); //page   building   time
    var date_type = decide_data_date_type(); //日 月 年
    var chart_type = decide_chart_type(); //bar line 数据表
    var data_type;
    if($(this).hasClass("water")) data_type="_water";
    else data_type="_electric";
    var container = "#"+page + " .chart_container";
    var data_type_id=data_type.substr(1);
    var data="data";        //client_name 对应的数据
    console.log(page);
    console.log(date_type);
    console.log(chart_type);
    console.log(data_type_id);
    console.log(container);
    if (page == "building") {
        if ($(this).hasClass("active_button")) //判断是否点在同一个按钮
        {
            $(".page").css("display", "none");
            $("#" + page).fadeIn(300);
            //可以刷新一下     刷新的方法没写
        }
        else {
            $("#type .chart_button").removeClass("active_button");
            $(this).addClass("active_button");
            if (chart_type != "data_chart") {
                data = eval(data+data_type+date_type);
                $("#" + page + " .row").css("display", "none");
                $("#" + page + " .chart_container").css("display","block");
                $( "#" + page + " .Doughnut").css("display","block");
                page_chart_hide(page);
                $("#" + page + " .chart_container"+" #"+chart_type).css("display","block");
                recreate_chart_canvas(container,chart_type);
                var ctx1 = $("#" + chart_type);
                chart_init(ctx1, chart_type, data, option);
            } else {
                $("#" + page + " .chart_container", "#" + page + " .Doughnut").css("display", "none");
                $("#" + page + " .row").fadeIn(300);
                table_ID = page + data_type +date_type;
                console.log(table_ID);
                if (!table_init_judge(table_ID)) {
                    hide_all_table(page);
                    $("#" + table_ID).fadeIn(200);
                    console.log("#"+table_ID);
                    init_table(table_ID);
                } else {
                    initiated_table_show(table_ID, page);
                }
            }
        }
    }
    else
    {
      //TIME页面
      if ($(this).hasClass("active_button")) //判断是否点在同一个按钮
      {
          $(".page").css("display", "none");
          $("#" + page).fadeIn(300);
          //可以刷新一下     刷新的方法没写
      }
      else {
          $("#type .chart_button").removeClass("active_button");
          $(this).addClass("active_button");
          if (chart_type != "data_chart") {
                  var chart_type_ID=chart_type+"2";
              data = eval(data+data_type+date_type);
              $("#" + page + " .row").css("display", "none");
              $("#" + page + " .chart_container").css("display","block");
              $( "#" + page + " .Doughnut").css("display","block");
              page_chart_hide(page);
              $("#" + page + " .chart_container"+" #"+chart_type_ID).css("display","block");
              recreate_chart_canvas(container,chart_type_ID);
              var ctx1 = $("#" + chart_type_ID);
              chart_init(ctx1, chart_type, data, option);
          } else {
              $("#" + page + " .chart_container", "#" + page + " .Doughnut").css("display", "none");
              $("#" + page + " .row").fadeIn(300);
              table_ID = page + data_type +date_type;
              console.log(table_ID);
              if (!table_init_judge(table_ID)) {
                  hide_all_table(page);
                  $("#" + table_ID).fadeIn(200);
                  console.log("#"+table_ID);
                  init_table(table_ID);
              } else {
                  initiated_table_show(table_ID, page);
              }
          }
      }
    }
});
$("#chart_type .chart_button").on("click",function(){
  var page = decide_page(); //page   building   time
  var date_type = decide_data_date_type(); //日 月 年
  var chart_type;
  if($(this).hasClass("bar")) chart_type="bar";
  else if($(this).hasClass("line")) chart_type="line";
  else chart_type="data_chart";       //bar line 数据表
  var data_type = decide_data_type(); //水电
  var container = "#"+page + " .chart_container";
  var data_type_id=data_type.substr(1);
  var data="data";        //client_name 对应的数据
  console.log(page);
  console.log(date_type);
  console.log(chart_type);
  console.log(data_type_id);
  console.log(container);
  if (page == "building") {
      if ($(this).hasClass("active_button")) //判断是否点在同一个按钮
      {
          $(".page").css("display", "none");
          $("#" + page).fadeIn(300);
          //可以刷新一下     刷新的方法没写
      }
      else {
          $("#chart_type .chart_button").removeClass("active_button");
          $(this).addClass("active_button");
          if (chart_type != "data_chart") {
              //hide_all_table(page);
              data = eval(data+data_type+date_type);
              $("#" + page + " .row").css("display", "none");
              $("#" + page + " .chart_container").css("display","block");
              $( "#" + page + " .Doughnut").css("display","block");
              page_chart_hide(page);
              $("#" + page + " .chart_container"+" #"+chart_type).css("display","block");
              recreate_chart_canvas(container,chart_type);
              var ctx1 = $("#" + chart_type);
              chart_init(ctx1, chart_type, data, option);
          } else {
              $("#" + page + " .chart_container").css("display", "none");
              $("#" + page + " .Doughnut").css("display","none");
              $("#" + page + " .row").fadeIn(100);
              table_ID = page + data_type +date_type;
              if (!table_init_judge(table_ID)) {
                  hide_all_table(page);
                  $("#" + table_ID).fadeIn(200);
                  init_table(table_ID);
              } else {
                  initiated_table_show(table_ID, page);
              }
          }
      }
  }
  else
  {
    //TIME页面
    if ($(this).hasClass("active_button")) //判断是否点在同一个按钮
    {
        $(".page").css("display", "none");
        $("#" + page).fadeIn(300);
        //可以刷新一下     刷新的方法没写
    }
    else {
      $("#chart_type .chart_button").removeClass("active_button");
      $(this).addClass("active_button");
      if (chart_type != "data_chart") {
          var chart_type_ID=chart_type+"2";
          data = eval(data+data_type+date_type);
          $("#" + page + " .row").css("display", "none");
          $("#" + page + " .chart_container").css("display","block");
          $( "#" + page + " .Doughnut").css("display","block");
          page_chart_hide(page);
          $("#" + page + " .chart_container"+" #"+chart_type_ID).css("display","block");
          recreate_chart_canvas(container,chart_type_ID);
          var ctx1 = $("#" + chart_type_ID);
          chart_init(ctx1, chart_type, data, option);
        } else {
            $("#" + page + " .chart_container").css("display", "none");
            $("#" + page + " .Doughnut").css("display","none");
            $("#" + page + " .row").fadeIn(100);
            table_ID = page + data_type +date_type;
            if (!table_init_judge(table_ID)) {
                hide_all_table(page);
                console.log(table_ID);
                $("#" + table_ID).fadeIn(200);
                console.log()
                init_table(table_ID);
            } else {
                initiated_table_show(table_ID, page);
            }
        }
    }
  }
});
$("#date_type .chart_button").on("click",function(){
  var page = decide_page(); //page   building   time
  var date_type;
  if($(this).hasClass("day")) date_type="_day";
  else if($(this).hasClass("month")) date_type="_month";
  else date_type="_year";                                                     //日 月 年
  var chart_type = decide_chart_type();
  var data_type = decide_data_type(); //水电
  var container = "#"+page + " .chart_container";
  var data_type_id=data_type.substr(1);
  var data="data";        //client_name 对应的数据
  if (page == "building") {
      if ($(this).hasClass("active_button")) //判断是否点在同一个按钮
      {
          $(".page").css("display", "none");
          show_date_container(date_type);
          $("#" + page).fadeIn(300);
          //可以刷新一下     刷新的方法没写
      }
      else {
          show_date_container(date_type);
          $("#date_type .chart_button").removeClass("active_button");
          $(this).addClass("active_button");
          if (chart_type != "data_chart") {
              //hide_all_table(page);
              data = eval(data+data_type+date_type);
              console.log(data); //
              $("#" + page + " .row").css("display", "none");
              $("#" + page + " .chart_container").css("display","block");
              $( "#" + page + " .Doughnut").css("display","block");
              page_chart_hide(page);
              $("#" + page + " .chart_container"+" #"+chart_type).css("display","block");
              recreate_chart_canvas(container,chart_type);
              var ctx1 = $("#" + chart_type);
              chart_init(ctx1, chart_type, data, option);
          } else {
            console.log("dsad");
              $("#" + page + " .chart_container").css("display", "none");
              $("#" + page + " .Doughnut").css("display","none");
              $("#" + page + " .row").fadeIn(100);
              table_ID = page + data_type +date_type;
              if (!table_init_judge(table_ID)) {
                  hide_all_table(page);
                  $("#" + table_ID).fadeIn(200);
                  init_table(table_ID);
              } else {
                  initiated_table_show(table_ID, page);
              }
          }
      }
  }
  else
  {
    //TIME页面

    if ($(this).hasClass("active_button")) //判断是否点在同一个按钮
    {
        $(".page").css("display", "none");
        show_date_container(date_type);
        $("#" + page).fadeIn(300);
        //可以刷新一下     刷新的方法没写
    }
    else {
        show_date_container(date_type);
        $("#date_type .chart_button").removeClass("active_button");
        $(this).addClass("active_button");
        if (chart_type != "data_chart") {
              var chart_type_ID=chart_type+"2";
          data = eval(data+data_type+date_type);
          $("#" + page + " .row").css("display", "none");
          $("#" + page + " .chart_container").css("display","block");
          $( "#" + page + " .Doughnut").css("display","block");
          page_chart_hide(page);
          $("#" + page + " .chart_container"+" #"+chart_type_ID).css("display","block");
          recreate_chart_canvas(container,chart_type_ID);
          var ctx1 = $("#" + chart_type_ID);
          chart_init(ctx1, chart_type, data, option);
        } else {
          console.log("dsad");
            $("#" + page + " .chart_container").css("display", "none");
            $("#" + page + " .Doughnut").css("display","none");
            $("#" + page + " .row").fadeIn(100);
            table_ID = page + data_type +date_type;
            if (!table_init_judge(table_ID)) {
                hide_all_table(page);
                $("#" + table_ID).fadeIn(200);
                init_table(table_ID);
            } else {
                initiated_table_show(table_ID, page);
            }
        }
    }

  }
});



function time_init() {
  remove_all_button();
  time_change_style();
  $(".tree_view_multi").css("display", "none");
  $("#tree_view").fadeIn(500);
  $("#building").css("display","none");
  $("#time").fadeIn(500);

  var today_time = new Date();
  var today_year = today_time.getFullYear();
  //获取当前月
  var today_month = today_time.getMonth() + 1;
  $("#date_month select:first-child option:contains('" + today_year + "')").attr("selected", "selected"); /*让月和年的select 变成今天的*/
  $("#date_month select:last-child option:eq('" + today_month + "')").attr("selected", "selected");
  $("#date_year select option:contains('" + today_year + "')").attr("selected", "selected");
  $("#date_month2 select:first-child option:contains('" + today_year + "')").attr("selected", "selected"); /*让月和年的select 变成今天的*/
  $("#date_month2 select:last-child option:eq('" + today_month + "')").attr("selected", "selected");
  $("#date_year2 select option:contains('" + today_year + "')").attr("selected", "selected");
  $("#date_month3 select:first-child option:contains('" + today_year + "')").attr("selected", "selected"); /*让月和年的select 变成今天的*/
  $("#date_month3 select:last-child option:eq('" + today_month + "')").attr("selected", "selected");
  $("#date_year3 select option:contains('" + today_year + "')").attr("selected", "selected");
  $("#date_day2,#date_day3").css("display","block");
  $("#date_month2,#date_month3").css("display","block");
  $("#date_year2,#date_year3").css("display","block");
    var container = $("#time .chart_container"); //装表的div
    var type = "line";
    $(".line").addClass("active_button");
    $(".day").addClass("active_button");
    show_date_container("_day");
    $(".electric").addClass("active_button");
    $("#time #line2").css("display","block");
    $("#time #bar2").css("display","none");
    $(".electric").addClass("active_button");
    recreate_chart_canvas(container, type+"2");
    var ctx1 = $("#line2");
    chart_init(ctx1, type, data_electric_year, option);
}
/*button*/
$(".building").on("click",function(){
  building_init();
});

$(".time").on("click",function(){
  time_init();
});

$(".wrapper").on("click", "tr td", function() {
    console.log($(this).attr("class"));
    $(".wrapper tr td").removeClass("td_overflow");
    $(".wrapper tr td").css("overflow", "hidden");
    $(this).addClass("td_overflow");
    $(this).css("overflow", "visible");
    event.stopPropagation();
});





















/*Calendar 初始化*/


var monthNames = {
    0: "January",
    1: "February",
    2: "March",
    3: "April",
    4: "May",
    5: "June",
    6: "July",
    7: "August",
    8: "September",
    9: "October",
    10: "November",
    11: "December"
};

function Cal() {
    this.date = {};
    this.markup = {};
    this.date.today = new Date();
    this.date.today = new Date(this.date.today.getUTCFullYear(), this.date.today.getUTCMonth(), this.date.today.getUTCDate());
    this.date.browse = new Date();
    this.markup.row = "row1";
    this.markup.cell = "cell";
    this.markup.inactive = "g";
    this.markup.currentMonth = "mn";
    this.markup.slctd = "slctd"; //
    this.markup.today = "today";
    this.markup.dayArea = "dayArea";
    this.elementTag = 'calendar';
    this.targetInput = '#inquire_date';
    this.init = false;
    this.buildDOM();
    this.selectDate(this.date.today.getFullYear(), this.date.today.getMonth(), this.date.today.getDate());
    this.constructDayArea();
    this.updateInput(this.date.today.getFullYear(), this.date.today.getMonth(), this.date.today.getDate());


    t = this;

    function a_bind_method(t) {
        $("#date_day .calendar").on('click', "#date_day .next-month", function() {
            t.setMonthNext();
        });
        $("#date_day .calendar").on('click', "#date_day .prev-month", function() { //上个月
            t.setMonthPrev();
        });
        $("#date_day .calendar").on('click', "#date_day .next-year", function() { //下一年
            t.setYearNext();
        });
        $("#date_day .calendar").on('click', "#date_day .prev-year", function() { //上一年
            t.setYearPrev();
        });

        $("#date_day .calendar").on('click', "#date_day .jump-to-next-month", function() { //下个月
            t.setMonthNext();
        });
        $("#date_day .calendar").on('click', "#date_day .jump-to-previous-month", function() { //上个月
            t.setMonthPrev();
        });

        $("#date_day .calendar").on('click', "#date_day .mn", function() {
            d = t.selectDate(t.date.browse.getUTCFullYear(), t.date.browse.getUTCMonth(), $(this).html());
            t.hide(300);
        });

        $("#date_day .calendar").on('click', "#date_day .title", function() {
            a.date.browse = new Date(a.date.today.getTime());
            console.log(a.date.browse);
        });
    }
}
Cal.prototype.wd = function(wd) {
    if (wd == 0) return 7
    return wd
}
Cal.prototype.buildDOM = function() {
    html = "<div class='clear " + this.elementTag + "'>\n<div class='view'>\n<div class='head'>\n<div class='title'><span class='m'></span> <span class='y'></span></div>\n</div>\n";
    html += "<div class='row1 th'>\n<div class='C'>M</div>\n<div class='C'>T</div>\n<div class='C'>W</div>\n<div class='C'>T</div>\n<div class='C'>F</div>\n<div class='C'>S</div>\n<div class='C'>S</div>\n</div>\n<div class='" + this.markup.dayArea +
        "'>\n";
    html +=
        "</div>\n\n<div class='row1 nav'>\n\n<i class='btn prev prev-year fa fa-fast-backward'></i>\n<i class='btn prev prev-month fa fa-play fa-flip-horizontal'></i>\n<i class='btn next next-month fa fa-play'></i>\n<i class='btn next next-year fa fa-fast-forward'></i>\n</div>\n</div>\n</div>\n";
    $(html).insertAfter(this.targetInput);
    $(this.targetInput).css('cursor', 'pointer');
    this.hide(0);
}
Cal.prototype.constructDayArea = function(flipDirection) {
    newViewContent = "";
    wd = this.wd(this.date.browse.getUTCDay());
    d = this.date.browse.getUTCDate();
    m = this.date.browse.getUTCMonth();
    y = this.date.browse.getUTCFullYear();

    monthBgnDate = new Date(y, m, 1);
    monthBgn = monthBgnDate.getTime();
    monthEndDate = new Date(this.getMonthNext().getTime() - 1000 * 60 * 60 * 24);
    monthEnd = monthEndDate.getTime();

    monthBgnWd = this.wd(monthBgnDate.getUTCDay());
    itrBgn = monthBgnDate.getTime() - (monthBgnWd - 1) * 1000 * 60 * 60 * 24;
    /*itrEnd = monthEnd;
    i = 0;
    while(this.wd(new Date(itrEnd).getUTCDay())!=7) {
        itrEnd += 1000*60*60*24;
        i = i+1;
        if(i>10) break;
    }*/



    i = 1;
    n = 0;
    dayItr = itrBgn;
    newViewContent += "<div class='" + this.markup.row + "'>\n";
    while (n < 42) {
        cls = new Array("C", this.markup.cell);
        if (dayItr <= monthBgn) cls.push(this.markup.inactive, "jump-to-previous-month");
        else if (dayItr >= monthEnd + 1000 * 60 * 60 * 36) cls.push(this.markup.inactive, "jump-to-next-month");
        else cls.push(this.markup.currentMonth);
        if (dayItr == this.date.slctd.getTime()) cls.push(this.markup.slctd);
        if (dayItr == this.date.today.getTime()) cls.push(this.markup.today);
        //if (dayItr == this.date.slctd.getTime() + 1000 * 60 * 60 * 24) cls.push(this.markup.slctd);
        //if (dayItr == this.date.today.getTime() + 1000 * 60 * 60 * 24) cls.push(this.markup.today);

        date = new Date(dayItr);
        newViewContent += "<div class='" + cls.join(" ") + "'>" + date.getUTCDate() + "</div>\n";
        i += 1;
        if (i > 7) {
            i = 1;
            newViewContent += "</div>\n<div class='" + this.markup.row + "'>\n";
        }
        n += 1;
        dayItr = dayItr + 1000 * 60 * 60 * 24;
    }
    newViewContent += "</div>\n";


    this.changePage(newViewContent, flipDirection);
    $('.' + this.elementTag + ' .title .m').html(monthNames[m]);
    $('.' + this.elementTag + ' .title .y').html(y);
    return newViewContent;
}
Cal.prototype.changePage = function(newPageContent, flipDirection) {

    multiplier = -1;
    mark = "-";
    if (flipDirection) {
        multiplier = 1;
        mark = "+";
    }
    oldPage = $('.' + this.elementTag + ' .' + this.markup.dayArea + ' .mArea');
    newPage = $("<div class='mArea'></div>").css('left', (-1 * multiplier * 224) + 'px').html(newPageContent);
    $('.' + this.elementTag + ' .' + this.markup.dayArea).append(newPage);

    $('.mArea').stop(1, 1).animate({
        left: mark + "=224px"
    }, 300, function() {
        oldPage.remove();
    });
}
Cal.prototype.selectDate = function(y, m, d) {
    this.date.slctd = new Date(y, m, d);
    this.updateInput(y, m, d); //更新时间
    this.constructDayArea(false);
    return this.date.slctd;
}
Cal.prototype.updateInput = function(y, m, d) {
    if (m == '') m = '';
    else m = monthNames[m];
    $(this.targetInput).val(y + " " + m + " " + d);
}
Cal.prototype.getMonthNext = function() {
    m = this.date.browse.getUTCMonth();
    y = this.date.browse.getUTCFullYear();
    if (m + 1 > 11) return new Date(y + 1, 0);
    else return new Date(y, m + 1);
}
Cal.prototype.getMonthPrev = function() {
    m = this.date.browse.getUTCMonth();
    y = this.date.browse.getUTCFullYear();
    if (m - 1 < 0) return new Date(y - 1, 11);
    else return new Date(y, m - 1);
}
Cal.prototype.setMonthNext = function() {
    m = this.date.browse.getUTCMonth();
    y = this.date.browse.getUTCFullYear();
    if (m + 1 > 11) {
        this.date.browse.setUTCFullYear(y + 1);
        this.date.browse.setUTCMonth(0);
    } else {
        this.date.browse.setUTCMonth(m + 1);
    }
    this.constructDayArea(false);
    console.log("6"); //下个月
}
Cal.prototype.setMonthPrev = function() {
    m = this.date.browse.getUTCMonth();
    y = this.date.browse.getUTCFullYear();
    if (m - 1 < 0) {
        this.date.browse.setUTCFullYear(y - 1);
        this.date.browse.setUTCMonth(11);
    } else {
        this.date.browse.setUTCMonth(m - 1);
    }
    this.constructDayArea(true);
}
Cal.prototype.setYearNext = function() {
    y = this.date.browse.getUTCFullYear();
    this.date.browse.setUTCFullYear(y + 1);
    this.constructDayArea(false);
}
Cal.prototype.setYearPrev = function() {
    y = this.date.browse.getUTCFullYear();
    this.date.browse.setUTCFullYear(y - 1);
    this.constructDayArea(true);
}
Cal.prototype.hide = function(duration) {
    $("#date_day" + ' .' + this.elementTag + ' .view').slideUp(duration);
}
Cal.prototype.show = function(duration) {
    t = this;
    t.init = true;
    $("#date_day" + ' .' + this.elementTag + ' .view').slideDown(duration, function() {
        t.init = false;
    });
}

function Cal2() {
    this.date = {};
    this.markup = {};
    this.date.today = new Date();
    this.date.today = new Date(this.date.today.getUTCFullYear(), this.date.today.getUTCMonth(), this.date.today.getUTCDate());
    this.date.browse = new Date();
    this.markup.row = "row1";
    this.markup.cell = "cell";
    this.markup.inactive = "g";
    this.markup.currentMonth = "mn";
    this.markup.slctd = "slctd"; //
    this.markup.today = "today";
    this.markup.dayArea = "dayArea";
    this.elementTag = 'calendar';
    this.targetInput = '#inquire_date2';
    this.init = false;
    this.buildDOM();
    this.selectDate(this.date.today.getFullYear(), this.date.today.getMonth(), this.date.today.getDate() -1);
    this.constructDayArea();
    this.updateInput(this.date.today.getFullYear(), this.date.today.getMonth(), this.date.today.getDate() -1);


    t = this;

    function b_bind_method(t) {
        $("#date_day2 .calendar").on('click', "#date_day2 .next-month", function() {
            console.log("6"); //下个月
            t.setMonthNext();
        });
        $("#date_day2 .calendar").on('click', "#date_day2 .prev-month", function() { //上个月
            t.setMonthPrev();
        });
        $("#date_day2 .calendar").on('click', "#date_day2 .next-year", function() { //下一年
            t.setYearNext();
        });
        $("#date_day2 .calendar").on('click', "#date_day2 .prev-year", function() { //上一年
            t.setYearPrev();
        });

        $("#date_day2 .calendar").on('click', "#date_day2 .jump-to-next-month", function() { //下个月
            t.setMonthNext();
        });
        $("#date_day2 .calendar").on('click', "#date_day2 .jump-to-previous-month", function() { //上个月
            t.setMonthPrev();
        });

        $("#date_day2 .calendar").on('click', "#date_day2 .mn", function() {
            d = t.selectDate(t.date.browse.getUTCFullYear(), t.date.browse.getUTCMonth(), $(this).html());
            t.hide(300);
        });

        $("#date_day2 .calendar").on('click', "#date_day2 .title", function() {
            a.date.browse = new Date(a.date.today.getTime());
            console.log(a.date.browse);
        });
    }
}
Cal2.prototype.wd = function(wd) {
    if (wd == 0) return 7
    return wd
}
Cal2.prototype.buildDOM = function() {
    html = "<div class='clear " + this.elementTag + "'>\n<div class='view'>\n<div class='head'>\n<div class='title'><span class='m'></span> <span class='y'></span></div>\n</div>\n";
    html += "<div class='row1 th'>\n<div class='C'>M</div>\n<div class='C'>T</div>\n<div class='C'>W</div>\n<div class='C'>T</div>\n<div class='C'>F</div>\n<div class='C'>S</div>\n<div class='C'>S</div>\n</div>\n<div class='" + this.markup.dayArea +
        "'>\n";
    html +=
        "</div>\n\n<div class='row1 nav'>\n\n<i class='btn prev prev-year fa fa-fast-backward'></i>\n<i class='btn prev prev-month fa fa-play fa-flip-horizontal'></i>\n<i class='btn next next-month fa fa-play'></i>\n<i class='btn next next-year fa fa-fast-forward'></i>\n</div>\n</div>\n</div>\n";
    $(html).insertAfter(this.targetInput);
    $(this.targetInput).css('cursor', 'pointer');
    this.hide(0);
}
Cal2.prototype.constructDayArea = function(flipDirection) {
    newViewContent = "";
    wd = this.wd(this.date.browse.getUTCDay());
    d = this.date.browse.getUTCDate();
    m = this.date.browse.getUTCMonth();
    y = this.date.browse.getUTCFullYear();

    monthBgnDate = new Date(y, m, 1);
    monthBgn = monthBgnDate.getTime();
    monthEndDate = new Date(this.getMonthNext().getTime() - 1000 * 60 * 60 * 24);
    monthEnd = monthEndDate.getTime();

    monthBgnWd = this.wd(monthBgnDate.getUTCDay());
    itrBgn = monthBgnDate.getTime() - (monthBgnWd - 1) * 1000 * 60 * 60 * 24;
    /*itrEnd = monthEnd;
    i = 0;
    while(this.wd(new Date(itrEnd).getUTCDay())!=7) {
        itrEnd += 1000*60*60*24;
        i = i+1;
        if(i>10) break;
    }*/



    i = 1;
    n = 0;
    dayItr = itrBgn;
    newViewContent += "<div class='" + this.markup.row + "'>\n";
    while (n < 42) {
        cls = new Array("C", this.markup.cell);
        if (dayItr <= monthBgn) cls.push(this.markup.inactive, "jump-to-previous-month");
        else if (dayItr >= monthEnd + 1000 * 60 * 60 * 36) cls.push(this.markup.inactive, "jump-to-next-month");
        else cls.push(this.markup.currentMonth);
        if (dayItr == this.date.slctd.getTime()) cls.push(this.markup.slctd);
        if (dayItr == this.date.today.getTime()) cls.push(this.markup.today);
        //if (dayItr == this.date.slctd.getTime() + 1000 * 60 * 60 * 24) cls.push(this.markup.slctd);
        //if (dayItr == this.date.today.getTime() + 1000 * 60 * 60 * 24) cls.push(this.markup.today);

        date = new Date(dayItr);
        newViewContent += "<div class='" + cls.join(" ") + "'>" + date.getUTCDate() + "</div>\n";
        i += 1;
        if (i > 7) {
            i = 1;
            newViewContent += "</div>\n<div class='" + this.markup.row + "'>\n";
        }
        n += 1;
        dayItr = dayItr + 1000 * 60 * 60 * 24;
    }
    newViewContent += "</div>\n";


    this.changePage(newViewContent, flipDirection);
    $('.' + this.elementTag + ' .title .m').html(monthNames[m]);
    $('.' + this.elementTag + ' .title .y').html(y);
    return newViewContent;
}
Cal2.prototype.changePage = function(newPageContent, flipDirection) {

    multiplier = -1;
    mark = "-";
    if (flipDirection) {
        multiplier = 1;
        mark = "+";
    }
    oldPage = $('.' + this.elementTag + ' .' + this.markup.dayArea + ' .mArea');
    newPage = $("<div class='mArea'></div>").css('left', (-1 * multiplier * 224) + 'px').html(newPageContent);
    $('.' + this.elementTag + ' .' + this.markup.dayArea).append(newPage);

    $('.mArea').stop(1, 1).animate({
        left: mark + "=224px"
    }, 300, function() {
        oldPage.remove();
    });
}
Cal2.prototype.selectDate = function(y, m, d) {
    this.date.slctd = new Date(y, m, d);
    this.updateInput(y, m, d); //更新时间
    this.constructDayArea(false);
    return this.date.slctd;
}
Cal2.prototype.updateInput = function(y, m, d) {
    if (m == '') m = '';
    else m = monthNames[m];
    $(this.targetInput).val(y + " " + m + " " + d);
}
Cal2.prototype.getMonthNext = function() {
    m = this.date.browse.getUTCMonth();
    y = this.date.browse.getUTCFullYear();
    if (m + 1 > 11) return new Date(y + 1, 0);
    else return new Date(y, m + 1);
}
Cal2.prototype.getMonthPrev = function() {
    m = this.date.browse.getUTCMonth();
    y = this.date.browse.getUTCFullYear();
    if (m - 1 < 0) return new Date(y - 1, 11);
    else return new Date(y, m - 1);
}
Cal2.prototype.setMonthNext = function() {
    m = this.date.browse.getUTCMonth();
    y = this.date.browse.getUTCFullYear();
    if (m + 1 > 11) {
        this.date.browse.setUTCFullYear(y + 1);
        this.date.browse.setUTCMonth(0);
    } else {
        this.date.browse.setUTCMonth(m + 1);
    }
    this.constructDayArea(false);
}
Cal2.prototype.setMonthPrev = function() {
    m = this.date.browse.getUTCMonth();
    y = this.date.browse.getUTCFullYear();
    if (m - 1 < 0) {
        this.date.browse.setUTCFullYear(y - 1);
        this.date.browse.setUTCMonth(11);
    } else {
        this.date.browse.setUTCMonth(m - 1);
    }
    this.constructDayArea(true);
}
Cal2.prototype.setYearNext = function() {
    y = this.date.browse.getUTCFullYear();
    this.date.browse.setUTCFullYear(y + 1);
    this.constructDayArea(false);
}
Cal2.prototype.setYearPrev = function() {
    y = this.date.browse.getUTCFullYear();
    this.date.browse.setUTCFullYear(y - 1);
    this.constructDayArea(true);
}
Cal2.prototype.hide = function(duration) {
    $("#date_day2" + ' .' + this.elementTag + ' .view').slideUp(duration);
}
Cal2.prototype.show = function(duration) {
    t = this;
    t.init = true;
    $("#date_day2" + ' .' + this.elementTag + ' .view').slideDown(duration, function() {
        t.init = false;
    });
}


function Cal3() {
    this.date = {};
    this.markup = {};
    this.date.today = new Date();
    this.date.today = new Date(this.date.today.getUTCFullYear(), this.date.today.getUTCMonth(), this.date.today.getUTCDate());
    this.date.browse = new Date();
    this.markup.row = "row1";
    this.markup.cell = "cell";
    this.markup.inactive = "g";
    this.markup.currentMonth = "mn";
    this.markup.slctd = "slctd"; //
    this.markup.today = "today";
    this.markup.dayArea = "dayArea";
    this.elementTag = 'calendar';
    this.targetInput = '#inquire_date3';
    this.init = false;
    this.buildDOM();
    this.selectDate(this.date.today.getFullYear(), this.date.today.getMonth(), this.date.today.getDate()-2);
    this.constructDayArea();
    this.updateInput(this.date.today.getFullYear(), this.date.today.getMonth(), this.date.today.getDate()-2);


    t = this;
    $(document).ready(function() {

        $('.' + t.elementTag).on('click', '.next-month', function() { //下个月
            t.setMonthNext();
        });
        $('.' + t.elementTag).on('click', '.prev-month', function() { //上个月
            t.setMonthPrev();
        });
        $('.' + t.elementTag).on('click', '.next-year', function() { //下一年
            t.setYearNext();
        });
        $('.' + t.elementTag).on('click', '.prev-year', function() { //上一年
            t.setYearPrev();
        });

        $('.' + t.elementTag).on('click', '.jump-to-next-month', function() { //下个月
            t.setMonthNext();
        });
        $('.' + t.elementTag).on('click', '.jump-to-previous-month', function() { //上个月
            t.setMonthPrev();
        });

        $('.' + t.elementTag).on('click', '.' + t.markup.currentMonth, function() {
            d = t.selectDate(t.date.browse.getUTCFullYear(), t.date.browse.getUTCMonth(), $(this).html());
            t.hide(300);
        });

        $('.' + t.elementTag).on('click', '.title', function() {
            t.date.browse = new Date(t.date.today.getTime());
            console.log(t.date.browse);
        });

    });


}
Cal3.prototype.wd = function(wd) {
    if (wd == 0) return 7
    return wd
}
Cal3.prototype.buildDOM = function() {
    html = "<div class='clear " + this.elementTag + "'>\n<div class='view'>\n<div class='head'>\n<div class='title'><span class='m'></span> <span class='y'></span></div>\n</div>\n";
    html += "<div class='row1 th'>\n<div class='C'>M</div>\n<div class='C'>T</div>\n<div class='C'>W</div>\n<div class='C'>T</div>\n<div class='C'>F</div>\n<div class='C'>S</div>\n<div class='C'>S</div>\n</div>\n<div class='" + this.markup.dayArea +
        "'>\n";
    html +=
        "</div>\n\n<div class='row1 nav'>\n\n<i class='btn prev prev-year fa fa-fast-backward'></i>\n<i class='btn prev prev-month fa fa-play fa-flip-horizontal'></i>\n<i class='btn next next-month fa fa-play'></i>\n<i class='btn next next-year fa fa-fast-forward'></i>\n</div>\n</div>\n</div>\n";
    $(html).insertAfter(this.targetInput);
    $(this.targetInput).css('cursor', 'pointer');
    this.hide(0);
}
Cal3.prototype.constructDayArea = function(flipDirection) {
    newViewContent = "";
    wd = this.wd(this.date.browse.getUTCDay());
    d = this.date.browse.getUTCDate();
    m = this.date.browse.getUTCMonth();
    y = this.date.browse.getUTCFullYear();

    monthBgnDate = new Date(y, m, 1);
    monthBgn = monthBgnDate.getTime();
    monthEndDate = new Date(this.getMonthNext().getTime() - 1000 * 60 * 60 * 24);
    monthEnd = monthEndDate.getTime();

    monthBgnWd = this.wd(monthBgnDate.getUTCDay());
    itrBgn = monthBgnDate.getTime() - (monthBgnWd - 1) * 1000 * 60 * 60 * 24;
    /*itrEnd = monthEnd;
    i = 0;
    while(this.wd(new Date(itrEnd).getUTCDay())!=7) {
        itrEnd += 1000*60*60*24;
        i = i+1;
        if(i>10) break;
    }*/



    i = 1;
    n = 0;
    dayItr = itrBgn;
    newViewContent += "<div class='" + this.markup.row + "'>\n";
    while (n < 42) {
        cls = new Array("C", this.markup.cell);
        if (dayItr <= monthBgn) cls.push(this.markup.inactive, "jump-to-previous-month");
        else if (dayItr >= monthEnd + 1000 * 60 * 60 * 36) cls.push(this.markup.inactive, "jump-to-next-month");
        else cls.push(this.markup.currentMonth);
        if (dayItr == this.date.slctd.getTime()) cls.push(this.markup.slctd);
        if (dayItr == this.date.today.getTime()) cls.push(this.markup.today);
        //if (dayItr == this.date.slctd.getTime() + 1000 * 60 * 60 * 24) cls.push(this.markup.slctd);
        //if (dayItr == this.date.today.getTime() + 1000 * 60 * 60 * 24) cls.push(this.markup.today);

        date = new Date(dayItr);
        newViewContent += "<div class='" + cls.join(" ") + "'>" + date.getUTCDate() + "</div>\n";
        i += 1;
        if (i > 7) {
            i = 1;
            newViewContent += "</div>\n<div class='" + this.markup.row + "'>\n";
        }
        n += 1;
        dayItr = dayItr + 1000 * 60 * 60 * 24;
    }
    newViewContent += "</div>\n";


    this.changePage(newViewContent, flipDirection);
    $('.' + this.elementTag + ' .title .m').html(monthNames[m]);
    $('.' + this.elementTag + ' .title .y').html(y);
    return newViewContent;
}
Cal3.prototype.changePage = function(newPageContent, flipDirection) {

    multiplier = -1;
    mark = "-";
    if (flipDirection) {
        multiplier = 1;
        mark = "+";
    }
    oldPage = $('.' + this.elementTag + ' .' + this.markup.dayArea + ' .mArea');
    newPage = $("<div class='mArea'></div>").css('left', (-1 * multiplier * 224) + 'px').html(newPageContent);
    $('.' + this.elementTag + ' .' + this.markup.dayArea).append(newPage);

    $('.mArea').stop(1, 1).animate({
        left: mark + "=224px"
    }, 300, function() {
        oldPage.remove();
    });
}
Cal3.prototype.selectDate = function(y, m, d) {
    this.date.slctd = new Date(y, m, d);
    this.updateInput(y, m, d); //更新时间
    this.constructDayArea(false);
    return this.date.slctd;
}
Cal3.prototype.updateInput = function(y, m, d) {
    if (m == '') m = '';
    else m = monthNames[m];
    $(this.targetInput).val(y + " " + m + " " + d);
}
Cal3.prototype.getMonthNext = function() {
    m = this.date.browse.getUTCMonth();
    y = this.date.browse.getUTCFullYear();
    if (m + 1 > 11) return new Date(y + 1, 0);
    else return new Date(y, m + 1);
}
Cal3.prototype.getMonthPrev = function() {
    m = this.date.browse.getUTCMonth();
    y = this.date.browse.getUTCFullYear();
    if (m - 1 < 0) return new Date(y - 1, 11);
    else return new Date(y, m - 1);
}
Cal3.prototype.setMonthNext = function() {
    m = this.date.browse.getUTCMonth();
    y = this.date.browse.getUTCFullYear();
    if (m + 1 > 11) {
        this.date.browse.setUTCFullYear(y + 1);
        this.date.browse.setUTCMonth(0);
    } else {
        this.date.browse.setUTCMonth(m + 1);
    }
    this.constructDayArea(false);
}
Cal3.prototype.setMonthPrev = function() {
    m = this.date.browse.getUTCMonth();
    y = this.date.browse.getUTCFullYear();
    if (m - 1 < 0) {
        this.date.browse.setUTCFullYear(y - 1);
        this.date.browse.setUTCMonth(11);
    } else {
        this.date.browse.setUTCMonth(m - 1);
    }
    this.constructDayArea(true);
}
Cal3.prototype.setYearNext = function() {
    y = this.date.browse.getUTCFullYear();
    this.date.browse.setUTCFullYear(y + 1);
    this.constructDayArea(false);
}
Cal3.prototype.setYearPrev = function() {
    y = this.date.browse.getUTCFullYear();
    this.date.browse.setUTCFullYear(y - 1);
    this.constructDayArea(true);
}
Cal3.prototype.hide = function(duration) {
    $("#date_day3" + ' .' + this.elementTag + ' .view').slideUp(duration);
}
Cal3.prototype.show = function(duration) {
    t = this;
    t.init = true;
    $("#date_day3" + ' .' + this.elementTag + ' .view').slideDown(duration, function() {
        t.init = false;
    });
}
$(document).ready(function() {
    $(a.targetInput).click(function() {
        a.show(100);
    });
    $(a.targetInput).focus(function() {
        $(this).blur();
    });
    $(b.targetInput).click(function() {
        b.show(100);
    });
    $(b.targetInput).focus(function() {
        $(this).blur();
    });
    $(c.targetInput).focus(function() {
        $(this).blur();
    });
    $(c.targetInput).click(function() {
        c.show(100);
    });
});
var c = new Cal3();
var a = new Cal();
var b = new Cal2();
$(document).click(function(ms) {
    ea = $("#date_day" + ' .' + t.elementTag + ' .view');
    eb = $("#date_day2" + ' .' + t.elementTag + ' .view');
    ec = $("#date_day3" + ' .' + t.elementTag + ' .view');
    eao = ea.offset();
    ebo = eb.offset();
    eco = ec.offset();
    if (ms.pageX < eao.left || ms.pageX > eao.left + ea.width() || ms.pageY < eao.top || ms.pageY > eao.top + ea.height()) {
        if (!a.init) a.hide(300);
    }
    if (ms.pageX < ebo.left || ms.pageX > ebo.left + eb.width() || ms.pageY < ebo.top || ms.pageY > ebo.top + eb.height()) {
        if (!b.init) b.hide(300);
    }
    if (ms.pageX < eco.left || ms.pageX > eco.left + ec.width() || ms.pageY < eco.top || ms.pageY > eco.top + ec.height()) {
        if (!c.init) c.hide(300);
    }
});
