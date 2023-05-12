let menuBtn = document.querySelector("#menu-bar")
let navBar = document.querySelector(".header")

menuBtn.onclick = () => {
    menuBtn.classList.toggle("fa-times")
    navBar.classList.toggle("active")
}

window.onscroll = () => {
    menuBtn.classList.remove("fa-times")
    navBar.classList.remove("active")

}