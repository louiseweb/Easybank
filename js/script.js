const hamburgerBtnOpen = document.getElementById('hamburger-btn-open');
const hamburgerBtnClose = document.getElementById('hamburger-btn-close');
const overlay = document.getElementById('overlay');
const navLinks = document.getElementById('nav-links');

hamburgerBtnOpen.addEventListener('click', function(){
        overlay.classList.remove('hide');
        hamburgerBtnOpen.classList.add('hide');
        hamburgerBtnClose.classList.remove('hide');
        navLinks.classList.remove('hide');
});

hamburgerBtnClose.addEventListener('click', function(){
    overlay.classList.add('hide');
    hamburgerBtnOpen.classList.remove('hide');
    hamburgerBtnClose.classList.add('hide');
    navLinks.classList.add('hide');
});