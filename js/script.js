const hamburgerBtn = document.getElementById('hamburger-btn');
const overlay = document.getElementById('overlay');
const navLinks = document.getElementById('nav-links');
const body = document.getElementById('body');

hamburgerBtn.addEventListener('click', function(){
    hamburgerBtn.classList.toggle('close');
    overlay.classList.toggle('show');
    navLinks.classList.toggle('show');
    body.classList.toggle('no-scroll');
});