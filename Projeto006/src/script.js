const slides = document.getElementById("slides");
const slide = document.querySelectorAll("#slides div");

let id = 0;

function slide_1(){ id = 0; slideshow();}
function slide_2(){ id = 1; slideshow();}

function slideshow(){
    
    if(id > slide.length - 1) id = 0;

    slides.style.transform = `translateY(${(-id * 150)}px)`;

    id++;

}

setInterval(slideshow, 10000);


