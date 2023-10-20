const nav_icon = document.querySelector(".nav_icon")
const nav_list = document.querySelector(".nav_list")
const nav_close_icon = document.querySelector(".nav_close_icon")
const body = document.querySelector("body")

nav_icon.addEventListener("click", ()=>{
    nav_list.classList.toggle("nav_visible")
    body.style.overflow = "hidden"
})

nav_close_icon.addEventListener("click", ()=> {
    nav_list.classList.toggle("nav_visible")
    body.style.overflow = "visible"
})