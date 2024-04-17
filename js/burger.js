// const burger = document.querySelector('.burger');
// const lines = document.querySelectorAll('.burger__line');

// function toggleBurger() {
//     lines.forEach((line) => line.classList.toggle('active'));
// }

// burger.addEventListener('click', toggleBurger);


// function navbarTogglerClick() {
//     navbarToggler.classList.toggle("open-navbar-toggler");
//     navbarMenu.classList.toggle("open");
//   }
var animBurger = gsap.timeline({
    onStart:
        OpenClose,
    onReverseComplete: OpenClose,
    paused: true,
});
function OpenClose() {
    document.querySelector('.menu').classList.toggle('menu-open')
}


animBurger
    .from(".menu__top", {
        duration: 0.5,
        y: 40,
        opacity: 0,
    })
    .from(".menu__nav", {
        duration: 0.5,
        opacity: 0,
        y: 40,
    })
    .from(".sub-menu", {
        duration: 0.3,
        opacity: 0,
        y: 40,
    }, "-=0.2")
    .from(".social", {
        duration: 0.3,
        opacity: 0,
        y: 40,
    }, "-=0.2")
    .from(".menu", {
        duration: 1,
        opacity: 0,
    }, "-=1");





document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.burger').forEach(function (burger) {
        burger.addEventListener('click', function () {
            box = document.querySelector('.menu')
            if (!box.classList.contains('menu-open')) {
                animBurger.play();
            }
            else {
                animBurger.reverse();
            }

        })
    })

})