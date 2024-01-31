const nav = document.getElementById("nav-menu");
const menu = document.getElementById("container-nav");


window.addEventListener("scroll",()=>{
    menu.classList.toggle("abajo",window.scrollY>0);
    if (window.scrollY>0) {
        nav.style.top = "90px";
    }else{
        nav.style.top = "131px";
    }
})


function abrir() {
    nav.classList.toggle("nav-menu-active");
}


