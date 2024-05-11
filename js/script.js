let scrollBar = document.querySelector('.scroll-bar');

window.onscroll = () => {
    scrollIndicator();
}

function scrollIndicator() {
    let maxHeight = window.document.body.scrollHeight - window.innerHeight;
    let percentage = ((window.scrollY) / maxHeight) * 100;
    scrollBar.style.width = percentage + '%';
}

function lightMode() {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("portfolio_theme", "dark");
    }
    else {
        localStorage.setItem("portfolio_theme", "light");
    }
}

/*
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", lightMode)

let theme = localStorage.getItem("portfolio_theme");
if (theme == "light") {
    lightMode();
}*/



const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    document.body.classList.toggle("transition"); // Add transition class
    lightMode(); // Delay lightMode function by 3 seconds
});

let theme = localStorage.getItem("portfolio_theme");
if (theme == "light") {
    document.body.classList.add("transition"); // Add transition class
    lightMode(); // Delay lightMode function by 3 seconds
}