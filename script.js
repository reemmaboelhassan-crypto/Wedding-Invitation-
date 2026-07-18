// Loading Screen
window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("loader").style.opacity = "0";
        document.getElementById("loader").style.visibility = "hidden";
    }, 1800);
});

// Wedding Date
const weddingDate = new Date("August 2, 2026 21:00:00").getTime();

function updateCountdown() {

    const now = new Date().getTime();

    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60)) /
        1000
    );

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

    if (distance <= 0) {

        clearInterval(timer);

        document.getElementById("countdown").innerHTML = `
        <h2>Today is the Wedding Day 🤍</h2>
        `;
    }

}

updateCountdown();

const timer = setInterval(updateCountdown, 1000);

// Scroll Animation
const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll("section,.card").forEach(el => {

    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "all .8s ease";

    observer.observe(el);

});

// Floating Background Effect
document.addEventListener("mousemove", e => {

    document.body.style.backgroundPosition =
        `${e.clientX / 80}px ${e.clientY / 80}px`;

});
