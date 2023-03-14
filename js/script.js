let scrollBar = document.querySelector('.scroll-bar');

window.onscroll = () =>{
    scrollIndicator();
}

function scrollIndicator(){
    let maxHeight = window.document.body.scrollHeight - window.innerHeight;
    let percentage = ((window.scrollY) / maxHeight) * 100;
    scrollBar.style.width = percentage + '%';
}

/*const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})

window.addEventListener("load", () => {
    if(document.body.classList.contains("dark"))
    {
        dayNight.querySelector("i").classList.add("fa-moon");
    }
    else
    {
        dayNight.querySelector("i").classList.add("fa-sun");
    }
})*/


function lightMode() {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
    
    if(document.body.classList.contains("dark"))
    {
        localStorage.setItem("portfolio_theme", "dark");
    }
    else
    {
        localStorage.setItem("portfolio_theme", "light");
    }
}

const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", lightMode)

let theme = localStorage.getItem("portfolio_theme");
if (theme == "light") {
    lightMode();
}