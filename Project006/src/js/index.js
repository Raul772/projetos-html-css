let display = document.getElementById('display-numbers');

function display_1(){

    if (display.innerHTML == '0') display.innerHTML = '1';
    else
    display.innerHTML += '1';
}
function display_2(){

    if (display.innerHTML == '0') display.innerHTML = '2';
    else
    display.innerHTML += '2';
}
function display_3(){

    if (display.innerHTML == '0') display.innerHTML = '3';
    else
    display.innerHTML += '3';
}
function display_4(){

    if (display.innerHTML == '0') display.innerHTML = '4';
    else
    display.innerHTML += '4';
}
function display_5(){

    if (display.innerHTML == '0') display.innerHTML = '5';
    else
    display.innerHTML += '5';
}
function display_6(){

    if (display.innerHTML == '0') display.innerHTML = '6';
    else
    display.innerHTML += '6';
}
function display_7(){

    if (display.innerHTML == '0') display.innerHTML = '7';
    else
    display.innerHTML += '7';
}
function display_8(){

    if (display.innerHTML == '0') display.innerHTML = '8';
    else
    display.innerHTML += '8';
}
function display_9(){

    if (display.innerHTML == '0') display.innerHTML = '9';
    else
    display.innerHTML += '9';
}
function display_del(){

    if (display.innerHTML.length == 1) 
    display.innerHTML = '0';

    if (display.innerHTML != '0' && display.innerHTML.length != 1)
    display.innerHTML = display.innerHTML.slice(0, (display.innerHTML.length - 1));
}
function display_minus(){
}