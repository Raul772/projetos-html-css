let hours = document.querySelector(".hour");
let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");
let period = document.querySelector(".period");

const clock = setInterval(function updateTime(){
    let date = new Date();
    let newHours = date.getHours();
    let newMinutes = date.getMinutes().toString().padStart(2, "0");
    let newSeconds = date.getSeconds().toString().padStart(2, "0");

    
    minutes.textContent = newMinutes;
    seconds.textContent = newSeconds;

    if(newHours >= 12){
        period.textContent = "PM";
        hours.textContent = (newHours - 12).toString().padStart(2, "0");
    }else{
        period.textContent = "AM";
        hours.textContent = (newHours).toString().padStart(2, "0");
    }
});