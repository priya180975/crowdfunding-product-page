let menu=document.querySelector("#menu");
let backBtn=document.querySelector("#back-btn");

 let main=document.querySelector("#main");
// let body=document.querySelector("body");
// let container=document.querySelector("#container");

menu.addEventListener("click",showMenu);
backBtn.addEventListener("click",backtoProject);

function showMenu(){
    document.querySelector(".menu-bar").classList.toggle("blocked");
    
    let menuImg=document.querySelector("#menu-img");
    menuImg.src.includes("images/icon-hamburger.svg")
    ?menuImg.src="images/icon-close-menu.svg"
    :menuImg.src="images/icon-hamburger.svg"

    main.classList.toggle("main-noclick");
}

function backtoProject(){
    let backthis=document.querySelector(".backthis");
    backthis.classList.toggle("blocked");

    main.classList.toggle("main-noclick");
    backthis.style.opacity=1;
}
