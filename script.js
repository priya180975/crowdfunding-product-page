let menu=document.querySelector("#menu");
let main=document.querySelector("#main");
let body=document.querySelector("body");
let container=document.querySelector("#container");

menu.addEventListener("click",showMenu);

function showMenu(){
    document.querySelector(".menu-bar").classList.toggle("blocked");
    
    let menuImg=document.querySelector("#menu-img");
    menuImg.src.includes("images/icon-hamburger.svg")
    ?menuImg.src="images/icon-close-menu.svg"
    :menuImg.src="images/icon-hamburger.svg"

    // main.classList.toggle("main-noclick");
}

