window.addEventListener("load", init);

function init() {
    var setcall = setInterval(calender, 500);
    document.getElementById("calc1").addEventListener('click', calculatedmy);
    document.getElementById("reset1").addEventListener('click', clearcalcdmy);
    document.getElementById("calc2").addEventListener('click', calculateday);
    document.getElementById("reset2").addEventListener('click', clearcalcday);
    document.getElementById("calc3").addEventListener('click', calculateage);
    document.getElementById("reset3").addEventListener('click', clearcalcage);
}

function calender() {
    var today = new Date();
    var date = today.getDate();
    var month = today.getMonth() + 1;
    var year = today.getFullYear();
    var weekcount = today.getDay();
    var weekday;
    switch (weekcount) {
        case 0:
            weekday = "Sunday";
            break;
        case 1:
            weekday = "Monday";
            break;
        case 2:
            weekday = "Tuesday";
            break;
        case 3:
            weekday = "Wednesday";
            break;
        case 4:
            weekday = "Thursday";
            break;
        case 5:
            weekday = "Friday";
            break;
        case 6:
            weekday = "Saturday";
            break;
    }
    var hour = today.getHours();
    if (hour >= 5 && hour <= 9) {
        document.getElementById("container").className = "bg1";
    }
    if (hour >= 10 && hour <= 16) {
        document.getElementById("container").className = "bg2";
    }
    if (hour >= 17 && hour <= 20) {
        document.getElementById("container").className = "bg3";
    }
    if (hour >= 21 && hour <= 23 || hour >= 00 && hour <= 4) {
        document.getElementById("container").className = "bg4";
    }
    var minute = today.getMinutes();
    var second = today.getSeconds();
    document.getElementById("date").innerHTML = date;
    switch (month) {
        case 1:
            document.getElementById("month").innerHTML = "January";
            break;
        case 2:
            document.getElementById("month").innerHTML = "February";
            break;
        case 3:
            document.getElementById("month").innerHTML = "March";
            break;
        case 4:
            document.getElementById("month").innerHTML = "April";
            break;
        case 5:
            document.getElementById("month").innerHTML = "May";
            break;
        case 6:
            document.getElementById("month").innerHTML = "June";
            break;
        case 7:
            document.getElementById("month").innerHTML = "July";
            break;
        case 8:
            document.getElementById("month").innerHTML = "August";
            break;
        case 9:
            document.getElementById("month").innerHTML = "September";
            break;
        case 10:
            document.getElementById("month").innerHTML = "October";
            break;
        case 11:
            document.getElementById("month").innerHTML = "November";
            break;
        case 12:
            document.getElementById("month").innerHTML = "December";
            break;
    }
    document.getElementById("year").innerHTML = year;
    document.getElementById("weekday").innerHTML = "Day:  " + weekday;
    document.getElementById("hour").innerHTML = hour + " hours";
    document.getElementById("minute").innerHTML = minute + " minutes";
    document.getElementById("second").innerHTML = second + " seconds";
}

function calculateday() {
    var at = document.getElementById("getdate").value;
    var res = at.split("/");
    var year = parseInt(res[2]);
    var d = parseInt(res[0]);
    var m = parseInt(res[1]);
    var leapyears = parseInt(year / 4);
    var a = (year - leapyears) * 365 + leapyears * 366;
    console.log(a);
    if (m >= 2) a += 31;
    console.log(a);
    if (m >= 3 && year % 4 == 0 && year % 400 == 0) a += 29;
    else if (m >= 3) a += 28;
    if (m >= 4) a += 31;
    if (m >= 5) a += 30;
    if (m >= 6) a += 31;
    if (m >= 7) a += 30;
    if (m >= 8) a += 31;
    if (m >= 9) a += 31;
    if (m >= 10) a += 30;
    if (m >= 11) a += 31;
    if (m == 12) a += 30;
    a += d;
    var b = parseInt((a - 2) % 7);
    console.log(b);
    switch (b) {
        case 1:
            document.getElementById("result2").innerHTML = "MONDAY";
            break;
        case 2:
            document.getElementById("result2").innerHTML = "TUESDAY";
            break;
        case 3:
            document.getElementById("result2").innerHTML = "WEDNESDAY";
            break;
        case 4:
            document.getElementById("result2").innerHTML = "THURSDAY";
            break;
        case 5:
            document.getElementById("result2").innerHTML = "FRIDAY";
            break;
        case 6:
            document.getElementById("result2").innerHTML = "SATURDAY";
            break;
        case 0:
            document.getElementById("result2").innerHTML = "SUNDAY";
            break;
    }
}

function clearcalcday() {
    document.getElementById("getdate").value = "";
 00
 
 
 document.getElementById("result2").innerHTML = "";
}

function calculatedmy() {
    var nod = document.getElementById("nod").value;
    var year = parseInt(nod / 365);
    var leapyears = parseInt(year / 4);
    var months;
    var remainingdays = parseInt(nod % 365) - leapyears;
    if (remainingdays >= 334) {
        months = 11;
        remainingdays = remainingdays - 334;
    } else if (remainingdays >= 304) {
        months = 10;
        remainingdays = remainingdays - 304;
    } else if (remainingdays >= 273) {
        months = 9;
        remainingdays = remainingdays - 273;
    } else if (remainingdays >= 243) {
        months = 8;
        remainingdays = remainingdays - 243;
    } else if (remainingdays >= 212) {
        months = 7;
        remainingdays = remainingdays - 212;
    } else if (remainingdays >= 181) {
        months = 6;
        remainingdays = remainingdays - 181;
    } else if (remainingdays >= 151) {
        months = 5;
        remainingdays = remainingdays - 151;
    } else if (remainingdays >= 120) {
        months = 4;
        remainingdays = remainingdays - 120;
    } else if (remainingdays >= 90) {
        months = 3;
        remainingdays = remainingdays - 90;
    } else if (remainingdays >= 59) {
        months = 2;
        remainingdays = remainingdays - 59;
    } else if (remainingdays >= 31) {
        months = 1;
        remainingdays = remainingdays - 31;
    } else {
        months = 0;
    }
    var weeks = parseInt(remainingdays / 7);
    remainingdays = parseInt(remainingdays % 7);
    document.getElementById('result1').innerHTML = year + " years, " + months + " months, " + weeks + " weeks, " + remainingdays + " days.";
}

function clearcalcdmy() {
    document.getElementById("nod").value = "";
    document.getElementById("result1").innerHTML = "";
}

function calculateage() {
    var date1 = document.getElementById("getdate1").value;
    var date2 = document.getElementById("getdate2").value;
    var res1 = date1.split("-");
    var res2 = date2.split("-");
    var by = parseInt(res1[0]);
    var bm = parseInt(res1[1]);
    var bd = parseInt(res1[2]);
    var cy = parseInt(res2[0]);
    var cm = parseInt(res2[1]);
    var cd = parseInt(res2[2]);
    var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (bd > cd) {
        cd = cd + month[bm - 1];
        cm = cm - 1;
    }
    if (bm > cm) {
        cy = cy - 1;
        cm = cm + 12;
    }

    var calculated_date = cd - bd;
    var calculated_month = cm - bm;
    var calculated_year = cy - by;
    document.getElementById("result3").innerHTML = Math.abs(calculated_year) + " years, " + calculated_month + " months, " + calculated_date + " days.";
}

function clearcalcage() {
    document.getElementById("getdate1").value = "";
    document.getElementById("getdate2").value = "";
    document.getElementById("result3").innerHTML = "";
}