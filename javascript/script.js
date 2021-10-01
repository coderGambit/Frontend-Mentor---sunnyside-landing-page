let menuLinks = document.getElementById('links');
let hamburgerMenuButton = document.getElementById('hamburgerMenuButton');
hamburgerMenuButton.addEventListener('click', () =>{
    menuLinks.classList.toggle('menuOpened');
});