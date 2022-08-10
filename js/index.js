// Hamburger Animations
(function () {
    var burger = document.querySelector('.burger-container'),
        header = document.querySelector('.menu-container');

    burger.onclick = function () {
        header.classList.toggle('menu-opened');
    }
}());