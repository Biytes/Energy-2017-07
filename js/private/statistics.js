//statistics.html



var today_time = new Date();
var today_year=today_time.getFullYear();
//获取当前月
var today_month=today_time.getMonth()+1;
var today_date=today_time.getDate();

var  option={

    };

var data_year = {
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
        data: [65, 59, 80, 81, 56, 55, 40, 200, 170, 100, 150, 100],
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
        data: [20, 70, 80, 60, 40, 30, 100, 150, 160, 190, 150, 140],
        spanGaps: false,
    }]
};

var label_year=["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];
var label_month=[];
var electric_month_data=[],water_month_data=[];
for(var i=0;i<31;i++)
{
  label_month[i]=i+1;
}
for(var i=0;i<today_date;i++)
{
  electric_month_data[i]=parseInt(Math.random()*1000);
}
for(var i=0;i<today_date;i++)
{
  water_month_data[i]=parseInt(Math.random()*1000);
}


var data_month= {
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
var electric_day_data=[],water_day_data=[];
for(var i=0;i<today_date;i++)
{
  electric_day_data[i]=parseInt(Math.random()*1000);
}
for(var i=0;i<today_date;i++)
{
  water_day_data[i]=parseInt(Math.random()*1000);
}
var label_day=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];

var data_day = {
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


var container=$(".chart_container");         //装表的div

$(document).ready(function(){
  var type = "line";
  var ctx1 = $("#line");
  $(".line").addClass("active_button");
  $(".year").addClass("active_button");
  chart_init(ctx1,type,data_year,option);
});
/*$("#date_month").css("display","block");
$("#date_year").css("display","none");
$("#date_day").css("display","none");*/

$(".bar").click(function() {
  $("#chart_type .chart_button").removeClass("active_button");
  $(this).addClass("active_button");
    type = "bar";
    recreate_chart_canvas(container,type);
    var ctx1 = $("#bar");
    var data;
    if($("#date_day").is(":hidden")=== false)
    {
      data=data_day;
    }
    else if($("#date_month").is(":hidden")=== false)
    {
      data=data_month;
    }
    else{
      data=data_year;
    }
    chart_init(ctx1,type,data,option);
    $("#bar").css("display", "block");
    $("#line").css("display", "none");

});

$("#chart_type .line").click(function() {
  $(".chart_button").removeClass("active_button");
  $(this).addClass("active_button");
  type = "line";
  recreate_chart_canvas(container,type);
    var ctx1 = $("#line");
    var data;
    if($("#date_day").is(":hidden")=== false)
    {
      data=data_day;
    }
    else if($("#date_month").is(":hidden")=== false)
    {
      data=data_month;
    }
    else{
      data=data_year;
    }
  chart_init(ctx1,type,data,option);
    $("#bar").css("display", "none");
    $("#line").css("display", "block");
});


var pie_chart_data=[];
for(var i=0;i<3;i++)
{
  pie_chart_data[i]=parseInt(Math.random()*2000);
}

var pie_chart = $("#doughnut");
var myRingChart = new Chart(pie_chart, {
    type: "doughnut",
    data: {
        labels: ["水", "电", "气"],
        datasets: [{
            backgroundColor: ["#059BFF", "#FFC233", "#FF3D67"],
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


$(document).ready(function(){
  $("#date_month select:first-child option:contains('"+today_year+"')").attr("selected","selected");
  $("#date_month select:last-child option:eq('"+today_month+"')").attr("selected","selected");
  $("#date_year select option:contains('"+today_year+"')").attr("selected","selected");
});


$("#date_type .hour").on("click",function(){
  $(".year,.month,.hour").removeClass("active_button");
  $("#date_month").css("display","none");
  $("#date_year").css("display","none");
  $(".hour").addClass("active_button");
  $("#date_day").fadeIn(400);
  var tpye;
  if($(".active_button").hasClass("bar"))
  {
    type="bar";
    recreate_chart_canvas(container,type);
    var ctx1 = $("#bar");
    chart_init(ctx1,type,data_day,option);
    $("#bar").css("display", "block");
    $("#line").css("display", "none");
  }
  else{
    type="line";
    recreate_chart_canvas(container,type);
    var ctx1 = $("#line");
    chart_init(ctx1,type,data_day,option);
    $("#line").css("display", "block");
    $("#bar").css("display", "none");
  }

});


$("#date_type .month").on("click",function(){
  $(".year,.month,.hour").removeClass("active_button");
  $("#date_month").fadeIn(400);
  $(".month").addClass("active_button");
  $("#date_year").css("display","none");
  $("#date_day").css("display","none");
  var tpye;
  if($(".active_button").hasClass("bar"))
  {
    type="bar";
    recreate_chart_canvas(container,type);
    var ctx1 = $("#bar");
    chart_init(ctx1,type,data_month,option);
    $("#bar").css("display", "block");
    $("#line").css("display", "none");
  }
  else
  {
    type="line";
    recreate_chart_canvas(container,type);
    var ctx1 = $("#line");
    chart_init(ctx1,type,data_month,option);
    $("#line").css("display", "block");
    $("#bar").css("display", "none");
  }
});

$("#date_type .year").on("click",function(){
  $(".year,.month,.hour").removeClass("active_button");
  $("#date_month").css("display","none");
  $("#date_year").fadeIn(400);
  $(".year").addClass("active_button");
  $("#date_day").css("display","none");
  var tpye;
  if($(".active_button").hasClass("bar"))
  {
    type="bar";
    recreate_chart_canvas(container,type);
    var ctx1 = $("#bar");
    chart_init(ctx1,type,data_year,option);
    $("#bar").css("display", "block");
    $("#line").css("display", "none");
  }
  else{
    type="line";
    recreate_chart_canvas(container,type);
    var ctx1 = $("#line");
    chart_init(ctx1,type,data_year,option);
    $("#line").css("display", "block");
    $("#bar").css("display", "none");
  }
});


function random_data(number){
  var a=[];
  for(var i=0;i<number;i++)
  {
    a[i]=Math.random()*1000;
  }
  return a;
}

function create_random_chart_data(date_type){
  if(date_type=="hour")
  {
    label=label_day;            /*选择是否是今天*/
  }
  else if(date_type=="month")
  {
    label=label_month;             /*选择是否是这个月*/
  }
  else{
    label=label_year;
  }
  var number;
  if(date_type=="hour")
  {
    number=24;            /*选择是否是今天*/
  }
  else if(date_type=="month")
  {
    number=31;             /*选择是否是这个月*/
  }
  else{
    number=12;
  }
  var data= {
     labels: label,
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
         data: random_data(number),
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
         data: random_data(number),
         spanGaps: false,
     }]
  };
  return data;
}


function decide_date_type(){
  if($(".active_button").hasClass("hour"))
  {
    return "hour";
  }
  else if($(".active_button").hasClass("month"))
  {
    return "month";
  }
  else{
    return "year";
  }
}


function decide_chart_type(){
  if($(".active_button").hasClass("bar"))
  {
    return "bar";
  }
  else
  {
    return "line";
  }
}



$("#tree_view span").on("click",function(){
  var date_type=decide_date_type();
  var type=decide_chart_type();
  recreate_chart_canvas(container,type);
  var ctx1=$("#"+type);
  var data=create_random_chart_data(date_type);
  chart_init(ctx1,type,data,option);
});














/*处理calendar的数据*/









/*Calendar*/


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
    this.markup.row = "row";
    this.markup.cell = "cell";
    this.markup.inactive = "g";
    this.markup.currentMonth = "mn";
    this.markup.slctd = "slctd";                                  //
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
    $(document).ready(function() {
        $(document).click(function(ms) {
            e = $('.' + t.elementTag + ' .view');
            eco = e.offset();
            if (ms.pageX < eco.left || ms.pageX > eco.left + e.width() || ms.pageY < eco.top || ms.pageY > eco.top + e.height()) {
                if (!t.init) t.hide(300);
            }
        });
        $('.' + t.elementTag).on('click', '.next-month', function() {                           //下个月
            t.setMonthNext();
        });
        $('.' + t.elementTag).on('click', '.prev-month', function() {                           //上个月
            t.setMonthPrev();
        });
        $('.' + t.elementTag).on('click', '.next-year', function() {                            //下一年
            t.setYearNext();
        });
        $('.' + t.elementTag).on('click', '.prev-year', function() {                            //上一年
            t.setYearPrev();
        });

        $('.' + t.elementTag).on('click', '.jump-to-next-month', function() {                   //下个月
            t.setMonthNext();
        });
        $('.' + t.elementTag).on('click', '.jump-to-previous-month', function() {               //上个月
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

        $(t.targetInput).focus(function() {
            t.show(100);
            $(this).blur();
        });

    });


}
Cal.prototype.wd = function(wd) {
    if (wd == 0) return 7
    return wd
}
Cal.prototype.buildDOM = function() {
    html = "<div class='clear " + this.elementTag + "'>\n<div class='view'>\n<div class='head'>\n<div class='title'><span class='m'></span> <span class='y'></span></div>\n</div>\n";
    html += "<div class='row th'>\n<div class='C'>M</div>\n<div class='C'>T</div>\n<div class='C'>W</div>\n<div class='C'>T</div>\n<div class='C'>F</div>\n<div class='C'>S</div>\n<div class='C'>S</div>\n</div>\n<div class='" + this.markup.dayArea +
        "'>\n";
    html +=
        "</div>\n\n<div class='row nav'>\n\n<i class='btn prev prev-year fa fa-fast-backward'></i>\n<i class='btn prev prev-month fa fa-play fa-flip-horizontal'></i>\n<i class='btn next next-month fa fa-play'></i>\n<i class='btn next next-year fa fa-fast-forward'></i>\n</div>\n</div>\n</div>\n";
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
        this.updateInput(y, m, d);                              //更新时间
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
        $('.' + this.elementTag + ' .view').slideUp(duration);
    }
    Cal.prototype.show = function(duration) {
        t = this;
        t.init = true;
        $('.' + this.elementTag + ' .view').slideDown(duration, function() {
            t.init = false;
        });
    }

    var c = new Cal();
