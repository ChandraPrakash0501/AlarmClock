let navBar = document.getElementById("Navbar");
let menuButton = document.getElementById("Menu");
menuButton.addEventListener('click', () => {
    navBar.classList.toggle("hideNav");
    menuButton.classList.toggle("fa-xmark");
})