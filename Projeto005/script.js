let hours = document.querySelector(".hour");
let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");
let period = document.querySelector(".period");
let blinking_dots = document.getElementsByClassName("blink-dots");

let date;
let newHours;
let newMinutes;
let newSeconds;

const clock = setInterval(function updateTime(){
    date = new Date();
    newHours = date.getHours();
    newMinutes = date.getMinutes().toString().padStart(2, "0");
    newSeconds = date.getSeconds().toString().padStart(2, "0");

    
    minutes.innerHTML = newMinutes;
    seconds.innerHTML = newSeconds;

    if(newHours >= 12){
        period.innerHTML = "PM";
        hours.innerHTML = (newHours - 12).toString().padStart(2, "0");
    }else{
        period.innerHTML = "AM";
        hours.innerHTML = (newHours).toString().padStart(2, "0");
    }

    if(blinking_dots[0].style.visibility == "visible") { 
        blinking_dots[0].style.visibility = "hidden";
        blinking_dots[1].style.visibility = "hidden";
    } else {
        blinking_dots[0].style.visibility = "visible";
        blinking_dots[1].style.visibility = "visible";
    }

}, 1000);