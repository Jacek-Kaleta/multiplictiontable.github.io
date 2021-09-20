var
    digit1 = 0;
digit2 = 0;
mulistr = '8 x 9 =';
inputstr = "";

function digits() {
    return String.fromCharCode(48 + digit1) + " x " +
        String.fromCharCode(48 + digit2) + " = ";
}
var rs;

function showResult() {
    rs.innerText = digits() + inputstr;
}

function processchar(char) {
    if (char == 'C') inputstr = "";
    else
    if (inputstr.length < 2)
        if (inputstr.length == 0 && char == '0');
        else
    if (char != 'OK') inputstr = inputstr + char;
    showResult();
    if (char == 'OK') {
        if (inputstr.length == 0) {
            document.getElementById(
                "result").style.color = "yellow";
            inputstr = digit1 * digit2;
            showResult();
        } else
        if (digit1 * digit2 == inputstr) document.getElementById("result").style.color = "green";
        else document.getElementById(
            "result").style.color = "red";
        setTimeout(newrandom, 700);
    }
}

function keypressed(event) {
    event.preventDefault();
    var char = event.which || event.keyCode;
    var c = '';
    if (char == 13) c = 'OK';
    else
    if (char == 8) c = 'C';
    else
    if (char == 27) c = 'C';
    else
    if (char >= 48 && char <= 57)
        c = String.fromCharCode(char);
    processchar(c);
}

function newrandom() {
    document.getElementById("result").style.color = "white";
    inputstr = "";
    initialize();
}

function initialize() {
    digit1 = Math.floor(Math.random() * 8 + 2);
    digit2 = Math.floor(Math.random() * 8 + 2);
    showResult();
}

window.onload = function() {
    initialize();

}

function clickon(event) {
    processchar(event.target.value)
}

var
    mobile = false;

function ready() {
    var butts = document.getElementsByClassName("inputs");
    for (var i = 0; i < butts.length; i++) {
        butts[i].addEventListener("click", clickon);
    }
    mobile = (navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i) != null);
    if (!mobile)
        document.getElementById('calc').style.display = "none";
    rs = document.getElementById("result");
}

document.addEventListener("DOMContentLoaded", ready);
