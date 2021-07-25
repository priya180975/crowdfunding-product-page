let body=document.querySelector("body");
let menu=document.querySelector("#menu1");
let backBtn=document.querySelector("#back-btn");
let main=document.querySelector("#main");
let backthis=document.querySelector("#modal-selection");
let radiobtn=document.querySelectorAll("input[name='back']");
let continuebtn=document.querySelectorAll(".continue");
let thanks=document.querySelector(".back1");
let gotit=document.querySelector("#gotit");
let selectreward=document.querySelectorAll(".reward");
let bookmark=document.querySelector("#bookmark");
let bookmarkmain=document.querySelector(".bmrk");

console.log(thanks)
menu.addEventListener("click",showMenu);
backBtn.addEventListener("click",backtoProject);
radiobtn.forEach(a=>a.addEventListener('change',radiochange));
continuebtn.forEach(a=>a.addEventListener('click',done));
gotit.addEventListener("click",gotitfun);
bookmarkmain.addEventListener("click",bookmarked);

selectreward.forEach(a=>a.addEventListener("click",display))

if(window.innerWidth>700){
    console.log("more")
    document.querySelector("#top-btn").style.justifyContent="space-around";
    bookmark.children[1].classList.remove("blocked");
}
else{
    console.log(bookmark);
    bookmark.children[1].classList.add("blocked")
}

function showMenu(){
    document.querySelector(".menu-bar").classList.toggle("blocked");
    
    let menuImg=document.querySelector("#menu-img");
    menuImg.src.includes("images/icon-hamburger.svg")
    ?menuImg.src="images/icon-close-menu.svg"
    :menuImg.src="images/icon-hamburger.svg"

    main.classList.toggle("main-noclick");
}

function backtoProject(){
    backthis.classList.toggle("blocked");
    main.classList.toggle("main-noclick"); 
    let closeBtn=document.querySelector("#close");
    closeBtn.addEventListener("click",backtoProject);
}


function radiochange(event){
    let parent=event.target.parentElement.parentElement.parentElement.parentElement;
    let radioBlocks=document.querySelectorAll(".radioBlocks");
    let elementhiddenBlock=document.getElementById(event.target.id+"-hidden");
    let hiddenBlocks=document.querySelectorAll(".hidden-block-small");

    console.log(hiddenBlocks)

    radioBlocks.forEach(
        a=>a.classList.contains("selected")
        ?a.classList.remove("selected")
        :a
    )

    radioBlocks.forEach(
    a=>a==parent
        ?a.classList.add("selected") 
            ?a
            :elementhiddenBlock!=null
                ?elementhiddenBlock.classList.remove("blocked")
                :a
        :hiddenBlocks.forEach(
            a=>a!=elementhiddenBlock
                ?a.classList.add("blocked")
                :a
        )
    )
}

function display(e){
    let id=e.target.id;
    let el=document.getElementById(id+"-hidden");
    let hide=document.querySelectorAll(".hide1");
    hide.forEach(a=>a.classList.contains("blocked")?a:a.classList.add("blocked"));
    el.classList.remove("blocked");
}

function done(e)
{
    console.log(e.target);
    backthis.classList.add("blocked");
    thanks.classList.remove("blocked");
    body.style.overflow="hidden";
    main.classList.add("main-noclick"); 

    if(window.innerWidth>700){
        document.documentElement.scrollTop = 450;
    }
    else{
        document.documentElement.scrollTop = 30;
    }
}

function gotitfun(){
    body.style.overflow="scroll";
    thanks.classList.add("blocked");
    main.classList.toggle("main-noclick"); 
}

function bookmarked(){
    bookmark.children[0].src.includes("icon-bookmark.svg")
    ?bookmark.children[0].src="images/icon-bookmark-selected.svg"
    :bookmark.children[0].src="images/icon-bookmark.svg"
    bookmark.children[1].classList.toggle("green-font");
}

