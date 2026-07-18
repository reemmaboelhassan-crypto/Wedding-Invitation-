// Open Invitation
const openBtn = document.getElementById("openBtn");
const invitation = document.getElementById("invitation");

invitation.style.display = "none";

openBtn.addEventListener("click", () => {

    invitation.style.display = "block";

    invitation.animate([
        {
            opacity: 0,
            transform: "translateY(60px)"
        },
        {
            opacity: 1,
            transform: "translateY(0)"
        }
    ], {
        duration: 900,
        fill: "forwards",
        easing: "ease"
    });

    invitation.scrollIntoView({
        behavior: "smooth"
    });

    openBtn.style.display = "none";

});


// Countdown

const weddingDate = new Date("August 2, 2026 21:00:00").getTime();

function countdown(){

const now = new Date().getTime();

const distance = weddingDate - now;

const days = Math.floor(distance / (1000*60*60*24));

const hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));

const minutes = Math.floor((distance % (1000*60*60)) / (1000*60));

const seconds = Math.floor((distance % (1000*60)) / 1000);

document.getElementById("days").innerHTML = days;
document.getElementById("hours").innerHTML = hours;
document.getElementById("minutes").innerHTML = minutes;
document.getElementById("seconds").innerHTML = seconds;

if(distance < 0){

document.querySelector(".countdown").innerHTML =
"<h2 style='width:100%;text-align:center;'>🤍 Today is Our Wedding Day 🤍</h2>";

}

}

countdown();

setInterval(countdown,1000);


// Fade Animation

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.animate([

{
opacity:0,
transform:"translateY(50px)"
},

{
opacity:1,
transform:"translateY(0)"
}

],{

duration:900,
fill:"forwards"

});

}

});

});

document.querySelectorAll(".card,.countdown,.footer").forEach(el=>{

observer.observe(el);

});


// Background Movement

document.addEventListener("mousemove",(e)=>{

document.querySelector(".bg1").style.transform =
`translate(${e.clientX/70}px,${e.clientY/70}px)`;

document.querySelector(".bg2").style.transform =
`translate(${-e.clientX/70}px,${-e.clientY/70}px)`;

});
