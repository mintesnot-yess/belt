document.getElementById('menu-button').addEventListener('click', function () {
    var navMenu = document.getElementById('nav-menu');
    if (navMenu.classList.contains('hidden')) {
        navMenu.classList.remove('hidden');
    } else {
        navMenu.classList.add('hidden');
    }
});

function handleResize() {
    var navMenu = document.getElementById('nav-menu');
    if (window.innerWidth >= 768) {
        navMenu.classList.remove('hidden');
    } else {
        navMenu.classList.add('hidden');
    }
}

let currentDate = new Date().getFullYear();
document.querySelector('.year').innerHTML = currentDate;


// make it email function with form
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    var email = document.getElementById('email');
    var subject = document.getElementById('subject');
    var message = document.getElementById('message');


    if (email.value === '') {
        email.focus();
    } if (subject.value === '') {
        subject.focus();
    } if (message.value === '') {
        message.focus();
    } if (email.value && subject && message) {
        var mailto_link = 'mailto:mintesnotyess@gmail.com';
        mailto_link += '?subject=' + encodeURIComponent(subject.value);
        mailto_link += '&body=' + encodeURIComponent(message.value);
        window.open(mailto_link, '_blank');
    }


})

window.addEventListener('resize', handleResize);
window.addEventListener('load', handleResize);
var swiper = new Swiper(".mySwiper", {
    loop: true,
    autoplay: { delay: 3000, disableOnInteraction: false },
    pagination: { el: ".swiper-pagination", clickable: true },
    navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
});
