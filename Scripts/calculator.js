var append = (msg) => {
    var div = document.getElementById("screen");
    div.style.color = "rgba(156, 87, 147, 0.9)";
    div.value += msg;
}
var backSpace = () => {
    var div = document.getElementById("screen");
    var arr = Array.from(div.innerHTML);
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
                div.style.transition = "display 3s";
                div.style.display = "block";
                div = document.getElementById("container");
                div.style.transition = "3s";
                div.style.margin = "80px auto 20px 0";
                menuOpen = 1;
            } else {
                var div = document.getElementById("menu");
                div.style.display = "none";
                div = document.getElementById("container");
                div.style.margin = "80px auto";
                menuOpen = 0;
            }
    }  
//calculation part   
let num1="";
let op='';
let snum2="";
let num2="";
function calculate(){
    let isFound=false;
    let statement = document.getElementById('screen').value;
    for(let i in statement){
        if(statement.charAt(i)=='*'||statement.charAt(i)=='/'||statement.charAt(i)=='+'||statement.charAt(i)=='-'){
            isFound=true;
            num1=statement.slice(0,i);
            op = statement.charAt(i);
            snum2=statement.slice(i);
            num2=snum2.slice(1);
            break;
        }
        
    }
    if(isFound){
        n1=parseFloat(num1);
        n2=parseFloat(num2);
    }
    switch(op)
    {
        case '*':
            document.getElementById('screen').value = " ="+(n1*n2);
            setCookie(num1.concat(" * ",num2),(n1*n2),1);
            break;
        case '/':
            document.getElementById('screen').value = " ="+(n1/n2);
            setCookie(num1.concat(" / ",num2),(n1/n2),1);
            break;    
        case '-':
           document.getElementById('screen').value = " ="+(n1-n2);
           setCookie(num1.concat(" - ",num2),(n1-n2),1);
            break; 
        case '+':
            document.getElementById('screen').value = " ="+(n1+n2);
            setCookie(num1.concat(" + ",num2),(n1+n2),1);
            break;
        default:
            document.getElementById('screen').value = " Syntax Error!";
    }
}
var i=0;// if it is even it displays history and if it is odd it hides the history
function getHistory(){
    if(i%2==0){
        document.getElementById('history').innerHTML = getCookies();
    }
    else hideHistory();
    i++;
}
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));// this lasts for 1 day only
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookies(){
    var cookies = document.cookie.split(';');
    var ret = '';
    for(var i = 1; i <= cookies.length; i++){
    ret += cookies[i - 1] + "<br>";
    }
    return ret;
}
function clearCookie(){
    // var cookies = document.cookie.split(';');
    // for(var i = 1; i <= cookies.length; i++){
    //     document.cookie = cookies[i]+"=;expires=" + new Date(0).toUTCString();
    //     cookies.innerHTML = document.cookie;
    // }
}
function hideHistory(){
    document.location.reload();
}