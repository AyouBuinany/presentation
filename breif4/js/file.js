var navbar = document.querySelector("nav");
var listimg= document.getElementById("listImgs");
var backbtn = document.getElementById("backbtn");
var nextbtn = document.getElementById("nextbtn");
backbtn.addEventListener("click",backslid);
nextbtn.addEventListener("click",nextSlid);
window.addEventListener("scroll",stikyNav);
function backslid(){
    x = listimg.scrollLeft;
listimg.scrollLeft = x + 200;
console.log("backslid");
}
function nextSlid(){
x = listimg.scrollLeft;
listimg.scrollLeft = x -  200;
console.log(2);

}

function stikyNav(){
if(window.pageYOffset > 100){
    navbar.classList.add("navcolor");
}else 
    navbar.classList.remove("navcolor");
}