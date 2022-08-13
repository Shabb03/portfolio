let scrollBar = document.querySelector('.scroll-bar');

window.onscroll = () =>{
    scrollIndicator();
}

function scrollIndicator(){
    let maxHeight = window.document.body.scrollHeight - window.innerHeight;
    let percentage = ((window.scrollY) / maxHeight) * 100;
    scrollBar.style.width = percentage + '%';

}