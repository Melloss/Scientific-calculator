function set(data){
    document.getElementById('textbox').value+=data;
}
function cls(){
    document.getElementById('textbox').value="";
}
let num1="";
let op='';
let snum2="";
let num2="";
function calculate(){
    let isFound=false;
    let statement = document.getElementById('textbox').value;
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
            document.getElementById('textbox').value = " ="+(n1*n2);
            setCookie(num1.concat(" * ",num2),(n1*n2),1);
            break;
        case '/':
            document.getElementById('textbox').value = " ="+(n1/n2);
            setCookie(num1.concat(" / ",num2),(n1/n2),1);
            break;    
        case '-':
           document.getElementById('textbox').value = " ="+(n1-n2);
           setCookie(num1.concat(" - ",num2),(n1-n2),1);
            break; 
        case '+':
            document.getElementById('textbod').value = " ="+(n1+n2);
            setCookie(num1.concat(" + ",num2),(n1+n2),1);
            break;
        default:
            document.getElementById('textbod').value = " Syntax Error!";
    }
}
function getHistory(){
    document.getElementById('history').innerHTML = getCookies();
}
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
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