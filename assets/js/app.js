// --------------------------------------- Header Nav controller ---------------------------------------

const navMenu = document.getElementById('nav-menu');
const navBtn = document.getElementById('nav-toggle');
const closeNavBtn = document.getElementById('nav-close');

if (navBtn) {
    navBtn.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

if (closeNavBtn) {
    closeNavBtn.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

const navLink = document.querySelectorAll('.nav-link');

function linkAction() {
    navMenu.classList.remove('show-menu');
}

navLink.forEach(n => n.addEventListener('click', linkAction));

// --------------------------------------- Change projects visibility ---------------------------------------

// Variables with the div that contains the specific projects
const frontEndProjects = document.querySelector('.frontend-projects');
const pythonProjects = document.querySelector('.python-projects');
const cPlusPlusProjects = document.querySelector('.cplusplus-projects');
const swiftProjects = document.querySelector('.swift-projects');

// Buttons that show the specific project
const frontendBtn = document.getElementById('frontend-btn');
const pythonBtn = document.getElementById('python-btn');
const cPlusPlusBtn = document.getElementById('cplusplus-btn');
const swiftBtn = document.getElementById('swift-btn');

// Event to hide the rest of projects except frontend's
frontendBtn.addEventListener('click', () => {
    if (frontEndProjects.classList.contains('hide')) {
        frontEndProjects.classList.remove('hide');
    }

    if (pythonProjects.classList.contains('hide') == false) {
        pythonProjects.classList.add('hide');
    }
    if (cPlusPlusProjects.classList.contains('hide') == false) {
        cPlusPlusProjects.classList.add('hide');
    }
    if (swiftProjects.classList.contains('hide') == false) {
        swiftProjects.classList.add('hide');
    }
});

// Event to hide the rest of projects except python's
pythonBtn.addEventListener('click', () => {
    if (pythonProjects.classList.contains('hide')) {
        pythonProjects.classList.remove('hide');
    }

    if (frontEndProjects.classList.contains('hide') == false) {
        frontEndProjects.classList.add('hide');
    }
    if (cPlusPlusProjects.classList.contains('hide') == false) {
        cPlusPlusProjects.classList.add('hide');
    }
    if (swiftProjects.classList.contains('hide') == false) {
        swiftProjects.classList.add('hide');
    }

});

// Event to hide the rest of projects except c++'s
cPlusPlusBtn.addEventListener('click', () => {
    if (cPlusPlusProjects.classList.contains('hide')) {
        cPlusPlusProjects.classList.remove('hide');
    }

    if (pythonProjects.classList.contains('hide') == false) {
        pythonProjects.classList.add('hide');
    }
    if (frontEndProjects.classList.contains('hide') == false) {
        frontEndProjects.classList.add('hide');
    }
    if (swiftProjects.classList.contains('hide') == false) {
        swiftProjects.classList.add('hide');
    }
});

// Event to hide the rest of projects except swift's
swiftBtn.addEventListener('click', () => {
    if (swiftProjects.classList.contains('hide')) {
        swiftProjects.classList.remove('hide');
    }

    if (pythonProjects.classList.contains('hide') == false) {
        pythonProjects.classList.add('hide');
    }
    if (cPlusPlusProjects.classList.contains('hide') == false) {
        cPlusPlusProjects.classList.add('hide');
    }
    if (frontEndProjects.classList.contains('hide') == false) {
        frontEndProjects.classList.add('hide');
    }
});

// --------------------------------------- Portfolio Swipper ---------------------------------------

let swiper = new Swiper('.swiper', {
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,      
    },
    mousewheel: true,
    keyboard: true,
});