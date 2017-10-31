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
    function a_bind_method(t) {
        $("#date_hour .calendar").on('click', "#date_hour .next-month", function() {
            t.setMonthNext();
        });
        $("#date_hour .calendar").on('click', "#date_hour .prev-month", function() { //上个月
            t.setMonthPrev();
        });
        $("#date_hour .calendar").on('click', "#date_hour .next-year", function() { //下一年
            t.setYearNext();
        });
        $("#date_hour .calendar").on('click', "#date_hour .prev-year", function() { //上一年
            t.setYearPrev();
        });

        $("#date_hour .calendar").on('click', "#date_hour .jump-to-next-month", function() { //下个月
            t.setMonthNext();
        });
        $("#date_hour .calendar").on('click', "#date_hour .jump-to-previous-month", function() { //上个月
            t.setMonthPrev();
        });

        $("#date_hour .calendar").on('click', "#date_hour .mn", function() {
            d = t.selectDate(t.date.browse.getUTCFullYear(), t.date.browse.getUTCMonth(), $(this).html());
            t.hide(300);
        });

        $("#date_hour .calendar").on('click', "#date_hour .title", function() {
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
    $("#date_hour" +' .' + this.elementTag + ' .view').slideUp(duration);
}
Cal.prototype.show = function(duration) {
    t = this;
    t.init = true;
    $("#date_hour" + ' .' + this.elementTag + ' .view').slideDown(duration, function() {
        t.init = false;
    });
}
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

function Cal2() {
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
    this.targetInput = '#inquire_date2';
    this.init = false;
    this.buildDOM();
    this.selectDate(this.date.today.getFullYear(), this.date.today.getMonth(), this.date.today.getDate()+1);
    this.constructDayArea();
    this.updateInput(this.date.today.getFullYear(), this.date.today.getMonth(), this.date.today.getDate()+1);


    t = this;
    function b_bind_method(t) {
        $("#date_hour2 .calendar").on('click', "#date_hour2 .next-month", function() {
            console.log("6"); //下个月
            t.setMonthNext();
        });
        $("#date_hour2 .calendar").on('click', "#date_hour2 .prev-month", function() { //上个月
            t.setMonthPrev();
        });
        $("#date_hour2 .calendar").on('click', "#date_hour2 .next-year", function() { //下一年
            t.setYearNext();
        });
        $("#date_hour2 .calendar").on('click', "#date_hour2 .prev-year", function() { //上一年
            t.setYearPrev();
        });

        $("#date_hour2 .calendar").on('click', "#date_hour2 .jump-to-next-month", function() { //下个月
            t.setMonthNext();
        });
        $("#date_hour2 .calendar").on('click', "#date_hour2 .jump-to-previous-month", function() { //上个月
            t.setMonthPrev();
        });

        $("#date_hour2 .calendar").on('click', "#date_hour2 .mn", function() {
            d = t.selectDate(t.date.browse.getUTCFullYear(), t.date.browse.getUTCMonth(), $(this).html());
            t.hide(300);
        });

        $("#date_hour2 .calendar").on('click', "#date_hour2 .title", function() {
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
    html += "<div class='row th'>\n<div class='C'>M</div>\n<div class='C'>T</div>\n<div class='C'>W</div>\n<div class='C'>T</div>\n<div class='C'>F</div>\n<div class='C'>S</div>\n<div class='C'>S</div>\n</div>\n<div class='" + this.markup.dayArea +
        "'>\n";
    html +=
        "</div>\n\n<div class='row nav'>\n\n<i class='btn prev prev-year fa fa-fast-backward'></i>\n<i class='btn prev prev-month fa fa-play fa-flip-horizontal'></i>\n<i class='btn next next-month fa fa-play'></i>\n<i class='btn next next-year fa fa-fast-forward'></i>\n</div>\n</div>\n</div>\n";
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
    this.updateInput(y, m, d);                              //更新时间
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
    $("#date_hour2" +' .' + this.elementTag + ' .view').slideUp(duration);
}
Cal2.prototype.show = function(duration) {
    t = this;
    t.init = true;
    $("#date_hour2" + ' .' + this.elementTag + ' .view').slideDown(duration, function() {
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
function Cal3() {
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
    this.targetInput = '#inquire_date3';
    this.init = false;
    this.buildDOM();
    this.selectDate(this.date.today.getFullYear(), this.date.today.getMonth(), this.date.today.getDate());
    this.constructDayArea();
    this.updateInput(this.date.today.getFullYear(), this.date.today.getMonth(), this.date.today.getDate());


    t = this;
    $(document).ready(function() {

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

    });


}
Cal3.prototype.wd = function(wd) {
    if (wd == 0) return 7
    return wd
}
Cal3.prototype.buildDOM = function() {
    html = "<div class='clear " + this.elementTag + "'>\n<div class='view'>\n<div class='head'>\n<div class='title'><span class='m'></span> <span class='y'></span></div>\n</div>\n";
    html += "<div class='row th'>\n<div class='C'>M</div>\n<div class='C'>T</div>\n<div class='C'>W</div>\n<div class='C'>T</div>\n<div class='C'>F</div>\n<div class='C'>S</div>\n<div class='C'>S</div>\n</div>\n<div class='" + this.markup.dayArea +
        "'>\n";
    html +=
        "</div>\n\n<div class='row nav'>\n\n<i class='btn prev prev-year fa fa-fast-backward'></i>\n<i class='btn prev prev-month fa fa-play fa-flip-horizontal'></i>\n<i class='btn next next-month fa fa-play'></i>\n<i class='btn next next-year fa fa-fast-forward'></i>\n</div>\n</div>\n</div>\n";
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
    this.updateInput(y, m, d);                              //更新时间
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
    $("#date_hour3" +' .' + this.elementTag + ' .view').slideUp(duration);
}
Cal3.prototype.show = function(duration) {
    t = this;
    t.init = true;
    $("#date_hour3" +' .' + this.elementTag + ' .view').slideDown(duration, function() {
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
    ea = $("#date_hour" + ' .' + t.elementTag + ' .view');
    eb = $("#date_hour2" + ' .' + t.elementTag + ' .view');
    ec = $("#date_hour3" + ' .' + t.elementTag + ' .view');
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
