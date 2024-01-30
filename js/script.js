window.addEventListener("scroll",()=>{
    const menu = document.getElementById("container-nav");
    menu.classList.toggle("abajo",window.scrollY>0)
})


function abrir() {
    const nav = document.getElementById("nav-menu");
    nav.classList.toggle("nav-menu-active");
}


