const hamburguesaMenu = document.querySelector("#iconoMobile"),
    menu = document.querySelector(".header__nav--ulFlexContenedor");
    icono = document.querySelector(".fa-solid.fa-bars.fa-xl")

hamburguesaMenu.addEventListener('click', (e) => {
    menu.classList.toggle('jsMenu');
    icono.classList.toggle('fa-spin');
    //No se como hacer para que gire de nuevo al estar sin la clase por quitarle con el Toggle
    icono.classList.toggle('fa-inverse');
});

function recogerMenu() {
    menu.classList.toggle('jsMenu');
}