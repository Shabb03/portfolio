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

const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    document.body.classList.toggle("transition");
    lightMode();
});

let theme = localStorage.getItem("portfolio_theme");
if (theme == "light") {
    document.body.classList.add("transition");
    lightMode();
}

function toggleNavbar() {
    document.getElementById("navbarBasicExample").classList.toggle("is-active");
}