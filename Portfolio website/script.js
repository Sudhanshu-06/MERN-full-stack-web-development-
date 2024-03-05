let dayNight = document.querySelector(".dayNight");
let banner = document.querySelector(".banner");

dayNight.addEventListener("click",()=>{
    banner.classList.toggle("night");
})

let typingEffet = new Typed("#text",{
    strings:["DropXOut","Fortend Developer","fullStack Developer"],
    loop:true,
    typeSpeed:100,
    backSpeed:50,
    backDelay:1000
})