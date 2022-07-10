//todo  Viết chương trình nhập vào ngày, tháng, năm (Giả sử nhập đúng, không cần kiểm tra hợp lệ).Tìm ngày, tháng, năm của ngày tiếp theo. Tương tự tìm ngày tháng năm của ngày trước đó.

/**
 * ?Khối 1: input
 * curDay, curMonth, curYear
 *
 * ?Khối 2:
 * B1: Khai báo và lấy giá trị của biến nhập từ form
 * B2:
 * tomorrowDay = curDay
 * tomorrowMonth = curMonth
 * tomorrowYear = curYear
 * *Kiểm tra nếu curDay = 31
 *      tomorrowDay = 1;
 *      *Nếu là tháng 12 curMonth == 12
 *          tomorrowMonth = 1
 *          tomorrowYear = curYear + 1
 *          *Ngược lại
 *          => tomorrowMonth = curMonth + 1
 * *Ngược lại nếu là ngày 30 các tháng 4,6,9,11
 *      tomorrowDay = 1
 *      tomorrowMonth = curMonth + 1
 * *Ngược lại kiểm tra nếu năm nhuận(curYear%4 == 0 && curYear %100!=0) => 28/2 -> 29/2
 *      ?Ngược lại nếu năm không nhuận => 28/2 => 1/3
 * *Ngược lại
 *      tomorrowDay = curDay + 1
 *
 * *Kiểm tra nếu là ngày 1/1
 *      yesterdayDay = 31
 *      yesterdayMonth = 12
 *      yesterdayYear = curYear + 1
 * *Kiểm tra nếu là ngày 1 các tháng 2,4,6,9,11
 *      yesterdayDay = 31
 *      yesterdayMonth = curMonth - 1
 *      *Ngược lại
 *          yesterdayDay = 30
 *          yesterdayMonth = curMonth - 1
 * *Kiếm tra nếu là năm nhuận và ngày hiện tại là 1/3
 *          yesterdayDay = 29
 *          yesterdayMonth = curMonth - 1
 *      *Ngược lại nếu là năm không nhuận và ngày 1/3
 *          yesterdayDay = 28
 *          yesterdayMonth = curMonth - 1
 * *Ngược lại
 *      yesterdayDay -= 1;
 *
 * B3: Thông báo kết quả ra màn hình
 *
 * ?Khối 3: output
 * tomorrow, yesterday
 *
 */

function isLeapYear(curYear) {
    return curYear % 4 == 0 && curYear % 100 != 0 ? 1 : 0;
}

function isSmallMonth(curMonth) {
    return curMonth == 4 || curMonth == 6 || curMonth == 9 || curMonth == 11
        ? 1
        : 0;
}

function isSmallMonthFully(curMonth) {
    return curMonth == 2 ||
        curMonth == 4 ||
        curMonth == 6 ||
        curMonth == 8 ||
        curMonth == 9 ||
        curMonth == 11
        ? 1
        : 0;
}

function tomorrow(curDay, curMonth, curYear) {
    var tomorrowDay = curDay;
    var tomorrowMonth = curMonth;
    var tomorrowYear = curYear;
    if (curDay == 31) {
        tomorrowDay = 1;
        if (curMonth == 12) {
            tomorrowMonth = 1;
            tomorrowYear = curYear + 1;
        } else {
            tomorrowMonth = curMonth + 1;
        }
    } else if (isSmallMonth(curMonth) && curDay == 30) {
        tomorrowDay = 1;
        tomorrowMonth = curMonth + 1;
    } else if (curMonth == 2) {
        if (curDay == 28) {
            if (isLeapYear(curYear)) {
                tomorrowDay = 29;
            } else {
                tomorrowDay = 1;
                tomorrowMonth = 3;
            }
        } else if (curDay > 28) {
            tomorrowDay = 1;
            tomorrowMonth = 3;
        }
    } else {
        tomorrowDay = curDay + 1;
    }
    return tomorrowDay + "/" + tomorrowMonth + "/" + tomorrowYear;
}

function yesterday(curDay, curMonth, curYear) {
    var yesterdayDay = curDay;
    var yesterdayMonth = curMonth;
    var yesterdayYear = curYear;
    if (curDay == 1) {
        if (curMonth == 1) {
            yesterdayDay = 31;
            yesterdayMonth = 12;
            yesterdayYear -= 1;
        } else if (isSmallMonthFully(curMonth)) {
            yesterdayDay = 31;
            yesterdayMonth = curMonth - 1;
        } else if (curMonth == 3) {
            yesterdayMonth = 2;
            if (isLeapYear(curYear)) {
                yesterdayDay = 29;
            } else {
                yesterdayDay = 28;
            }
        } else {
            console.log("true");
            yesterdayDay = 30;
            yesterdayMonth = curMonth - 1;
        }
    } else {
        yesterdayDay -= 1;
    }
    return yesterdayDay + "/" + yesterdayMonth + "/" + yesterdayYear;
}

function showResult() {
    var curDay = Number(document.getElementById("ipDay").value);
    var curMonth = Number(document.getElementById("ipMonth").value);
    var curYear = Number(document.getElementById("ipYear").value);
    document.getElementById("txtTomorrow").innerHTML =
        "Ngày tiếp theo: " + tomorrow(curDay, curMonth, curYear);
    document.getElementById("txtYesterday").innerHTML =
        "Ngày trước đó: " + yesterday(curDay, curMonth, curYear);
}

document.getElementById("btnCalDate").onclick = showResult;

// todo Viết chương trình nhập vào tháng, năm. Cho biết tháng đó có bao nhiêu ngày.
/**
 * ?Khối 1: input
 * month, year
 *
 * ?Khối 2: progress
 * B1: Khai báo biến và gán giá trị cho biến được nhập từ form
 * B2:
 * *Nếu month = 4 || month = 6 || month = 9 || month = 11
 *       totalDay = 30
 * *Ngược lại nếu month = 2
 *      *Nếu là năm nhuận
 *           totalDay = 29
 *      *Ngược lại
 *           totalDay = 28
 * *Ngược lại
 *      totalDay = 31
 *
 * ?Khối 3: output
 * totalDay
 *
 */

function showTotalDay() {
    var month = document.getElementById("ipMonth2").value;
    var year = document.getElementById("ipYear2").value;
    var totalDay = 0;
    if (month == 2) {
        if (isLeapYear(year)) {
            totalDay = 29;
        } else {
            totalDay = 28;
        }
    } else if (isSmallMonth(month)) {
        totalDay = 30;
    } else {
        totalDay = 31;
    }
    document.getElementById("txtTotalDay").innerHTML =
        "Tháng " + month + " năm " + year + " có " + totalDay + " ngày";
}
document.getElementById("btnShowTotalDay").onclick = showTotalDay;

// todo Viết chương trình nhập vào số nguyên có 3 chữ số. In ra cách đọc nó.
/**
 *? Khối 1: input
 * number, num1, num2, num3
 *
 *? Khối 2: progress
 * B1: Khai báo biến và gán giá trị cho biến
 * B2: Lấy giá trị input của form vào biến number
 * B3:
 *      num3 = number%10
 *      num2 = number/10%10
 *      num1 = Math.trunc(number/100)
 * *Nếu num1 == 0
 *      *Nếu num2 == 0
 *          text(num3)
 *      *Ngược lại
 *          *Nếu num2 == 1
 *              *Nếu num3 == 0
 *                  => "mười"
 *              *Ngược lại
 *                  => "mười " + text(num3)
 *          *Ngược lại nếu num2 != 1
 *              *Nếu num3 == 0
 *                  => text(num2) + " mươi"
 *              *Nếu num3 == 1
 *                  => text(num2) + " mươi mốt"
 *              *Ngược lại
 *                  => text(num2) + " mươi " + text(num3)
 * *Ngược lại
 *      *Nếu num2 == 0
 *          text(num1) + " trăm lẻ " + text(num3);
 *      *Ngược lại
 *          text(num1) + " trăm " + hàng chục và đơn vị (temp)
 *          *Nếu num2 == 1
 *              *Nếu num3 == 0
 *                  => "mười"
 *              *Ngược lại
 *                  => "mười " + text(num3)
 *          *Ngược lại nếu num2 != 1
 *              *Nếu num3 == 0
 *                  => text(num2) + " mươi"
 *              *Nếu num3 == 1
 *                  => text(num2) + " mươi mốt"
 *              *Ngược lại
 *                  => text(num2) + " mươi " + text(num3)
 *
 *? Khối 3: output
 * textNumber
 *
 */

function toText(number) {
    switch (number) {
        case 1:
            return "một";

        case 2:
            return "hai";

        case 3:
            return "ba";

        case 4:
            return "bốn";

        case 5:
            return "năm";

        case 6:
            return "sáu";

        case 7:
            return "bảy";

        case 8:
            return "tám";

        case 9:
            return "chín";
    }
}

function textTwoChar(num1, num2) {
    if (num1 == 1) {
        if (num2 == 0) {
            return "mười";
        } else {
            return "mười " + toText(num2);
        }
    } else if (num1 != 0) {
        if (num2 == 0) {
            return toText(num1) + " mươi";
        } else if (num2 == 1) {
            return toText(num1) + " mươi mốt";
        } else {
            return toText(num1) + " mươi " + toText(num2);
        }
    }
}

function readNumber() {
    var number = document.getElementById("ipNumber").value;
    var num3 = number % 10;
    var num2 = Math.trunc((number / 10) % 10);
    var num1 = Math.trunc(number / 100);
    var result = "";
    if (number < 10) {
        result = toText(num3);
    } else if (number < 100) {
        result = textTwoChar(num2, num3);
    } else {
        if (num2 == 0) {
            if (num3 == 0) {
                result = toText(num1) + " trăm";
            } else {
                result = toText(num1) + " trăm lẻ " + toText(num3);
            }
        } else {
            result = toText(num1) + " trăm " + textTwoChar(num2, num3);
        }
    }
    document.getElementById("txtNumberResult").innerHTML = result;
}

document.getElementById("btnReadNumber").onclick = readNumber;

//todo Cho biết tên và tọa độ nhà của 3 sinh viên. Cho biết tọa độ của trường đại học. Viết chương trình in tên sinh viên xa trường nhất.
/**
 * Khối 1: input
 * st1Name, st2Name, st3Name
 * st1X, st1Y
 * st2X, st2Y
 * st3X, st3Y
 * schX, schY
 *
 * Khối 2: progress
 * B1: Khai báo và gán giá trị cho biến
 * B2: Lấy giá trị tên và tọa độ của sinh viên từ input của form
 * B3:
 * Lập công thức tính khoảng cách:
 * Math.sqrt(Math.pow((x-schX),2) + Math.pow((y-schY),2))
 * => d1, d2, d3 khoảng cách từ nhà đến trường của 3 sinh viên
 * max = d1, temp = 1
 * if(max < d2) => max = d2, temp = 2
 * if(max < d3) => max = d3, temp = 3
 * document.getElementById("ipSv"+ temp +"Y") tên sinh viên xa trường nhất
 * B4: Thông báo kết quả ra màn hình
 *
 * Khối 3: output
 * tên sinh viên xa trường nhất
 */

function calDistance(x, y) {
    var schX = document.getElementById("ipSchX").value;
    var schY = document.getElementById("ipSchY").value;
    return Math.sqrt(
        Math.pow(Math.abs(x - schX), 2) + Math.pow(Math.abs(y - schY), 2)
    );
}

function findFarthestStudent() {
    var st1X = document.getElementById("ipSv1X").value;
    var st1Y = document.getElementById("ipSv1Y").value;
    var st2X = document.getElementById("ipSv2X").value;
    var st2Y = document.getElementById("ipSv2Y").value;
    var st3X = document.getElementById("ipSv3X").value;
    var st3Y = document.getElementById("ipSv3Y").value;
    var d1 = calDistance(st1X, st1Y);
    var d2 = calDistance(st2X, st2Y);
    var d3 = calDistance(st3X, st3Y);
    console.log(calDistance(3, 3));
    var max = d1;
    var temp = 0;
    if (max < d2) {
        max = d2;
        temp = 2;
    }
    if (max < d3) {
        max = d3;
        temp = 3;
    }
    var result = document.getElementById("ipSv" + temp + "Name").value;
    document.getElementById("txtStudentNameResult").innerHTML =
        "Sinh viên " + result + "có nhà xa trường nhất: ";
}

document.getElementById("btnFind").onclick = findFarthestStudent;
