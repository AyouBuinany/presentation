var navbar = document.querySelector("nav");
window.addEventListener("scroll",stikyNav);
function stikyNav(){
    if(window.pageYOffset > 100){
        navbar.classList.add("navcolor");
    }else 
        navbar.classList.remove("navcolor");
    }