setInterval(function(){ 
    
    if(window.innerWidth <= 600){
        document.querySelector(".text").innerHTML = '<span class="hour">00</span><br><span class="blink-dots">:</span><br><span class="minutes">00</span><br><span class="blink-dots">:</span><br><span class="seconds">00</span><br><span class="period">AM</span>'
    }
});