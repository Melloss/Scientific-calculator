var append = (msg) => {
    var div = document.getElementById("screen");
    div.style.color = "rgba(156, 87, 147, 0.9)";
    div.value += msg;
}
var backSpace = () => {
    var div = document.getElementById("screen");
    var arr = Array.from(div.value);
    arr.pop();
    var str = arr.join("");
    div.value = str;
}
var clean = () => {
    var div = document.getElementById("screen");
    div.value = "";
}
var changeColor = () => {
    var div = document.getElementById("container");
    if (ele == 1) {
        div.style.backgroundColor = "rgba(255,255,255,.7)";
        div = document.getElementById("std");
        div.style.color = "rgb(39, 37, 37)";
        ele = 0;
    } else {
        div.style.backgroundColor = "rgb(39, 37, 37)";
        div = document.getElementById("std");
        div.style.color = "rgba(255,255,255,.7)";
        ele = 1;
    }
}
var ele = 1;
var menuOpen = 0;
var menu = () => {
        if (!menuOpen) {
            var div = document.getElementById("menu");
            div.classList.remove("hidden");
            div = document.getElementById("menubtn");
            div.style.transform = "rotate(90deg)";
            menuOpen = 1;
        } else {
            var div = document.getElementById("menu");
            div.classList.add("hidden");
            div = document.getElementById("menubtn");
            div.style.transform = "rotate(0deg)";
            menuOpen = 0;
        }
    }
    //calculation part   

function calculate() {
    let op1, op2, Sn1, Sn2, value, lastoperator, n1, n2, equation;
    let offset = 0,
        isfirst = true;
    equation = document.getElementById('screen').value;
    for (var k in equation) {
        if (equation.charAt(k) == '*' || equation.charAt(k) == '/' || equation.charAt(k) == '+' || equation.charAt(k) == '-' || equation.charAt(k) == '%') {
            lastoperator = equation.charAt(k);
        }
    }
    equation = equation + lastoperator;
    if (equation.charAt(0) == '=') {
        //This is used to calculate equation from answer
        equation = equation.substr(1, equation.length);
    }
    for (let i = 0; i < equation.length; i++) {
        if (equation.charAt(i) == '*' || equation.charAt(i) == '/' || equation.charAt(i) == '+' || equation.charAt(i) == '-' || equation.charAt(i) == '-' || equation.charAt(i) == '%') {
            op1 = equation.charAt(i);
            Sn1 = equation.substr(offset, (i - offset));
            n1 = parseFloat(Sn1);
            if (!isfirst) {
                if (op2 == '*') value = value * n1;
                else if (op2 == '+') value = value + n1;
                else if (op2 == '-') value = value - n1;
                else if (op2 == '/') value = value / n1;
                else if (op2 == '%') value = n1 % n2;
            }
            for (let j = i + 1; j < equation.length; j++) {
                if (equation.charAt(j) == '*' || equation.charAt(j) == '/' || equation.charAt(j) == '+' || equation.charAt(j) == '-' || equation.charAt(j) == '-' || equation.charAt(j) == '%') {
                    op2 = equation.charAt(j);
                    if (isfirst) {
                        Sn2 = equation.substr(i + 1, (j - i - 1));
                        n2 = parseFloat(Sn2);
                        if (op1 == '*') value = n1 * n2;
                        else if (op1 == '/') value = n1 / n2;
                        else if (op1 == '+') value = n1 + n2;
                        else if (op1 == '-') value = n1 - n2;
                        else if (op1 == '%') value = n1 % n2;
                        offset = j + 1;
                        i = j + 1;
                        isfirst = false;
                        break;
                    }
                    offset = i + 1;
                    i = i + 1;
                    break;
                }
            }
        }
    }
    document.getElementById('screen').value = "=" + (value);
    if (equation.charAt(0) == '=') {
        //if it is from answer it should remove the '=' sign
        setCookie(equation.substr(1, (equation.length - 1)), value, 1);
    } else setCookie(equation.substr(0, (equation.length - 1)), value, 1);
}
var i = 0;

function getHistory() {
    if (i % 2 == 0) {
        var div = document.getElementById('history');
        div.classList.remove("hidden");
        div.innerHTML = getCookies();
        var div = document.getElementById("histry");
        div.innerHTML = "Hide History";
        //document.getElementById('history').style.display = "block";
    } else hideHistory();
    i++;
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000)); // this lasts for 1 day only
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookies() {
    var cookies = document.cookie.split(';');
    var ret = '';
    for (var i = 1; i <= cookies.length; i++) {
        ret += cookies[i - 1] + "<br>";
    }
    return ret;
}

function clearCookie() {
    // var cookies = document.cookie.split(';');
    // for(var i = 1; i <= cookies.length; i++){
    //     document.cookie = cookies[i]+"=;expires=" + new Date(0).toUTCString();
    //     cookies.innerHTML = document.cookie;
    // }
}

function hideHistory() {
    document.getElementById('history').classList.add("hidden");
    document.getElementById('history').innerHTML = "";
    var div = document.getElementById("histry");
    div.innerHTML = "History";
}