// --------------------------------------- Header Nav controller ---------------------------------------

const navMenu = document.getElementById("nav-menu");
const navBtn = document.getElementById("nav-toggle");
const closeNavBtn = document.getElementById("nav-close");

if (navBtn) {
  navBtn.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (closeNavBtn) {
  closeNavBtn.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

const navLink = document.querySelectorAll(".nav-link");

function linkAction() {
  navMenu.classList.remove("show-menu");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));

// --------------------------------------- Change projects visibility ---------------------------------------

// Variables with the div that contains the specific projects
const frontEndProjects = document.querySelector(".frontend-projects");
const pythonProjects = document.querySelector(".python-projects");
const cPlusPlusProjects = document.querySelector(".cplusplus-projects");
const swiftProjects = document.querySelector(".swift-projects");

// Buttons that show the specific project
const frontendBtn = document.getElementById("frontend-btn");
frontendBtn.classList.add("project-active-btn");
const pythonBtn = document.getElementById("python-btn");
const cPlusPlusBtn = document.getElementById("cplusplus-btn");
const swiftBtn = document.getElementById("swift-btn");

// Event to hide the rest of projects except frontend's
frontendBtn.addEventListener("click", () => {
  frontendBtn.classList.add("project-active-btn");
  if (frontEndProjects.classList.contains("hide")) {
    frontEndProjects.classList.remove("hide");
  }

  if (pythonProjects.classList.contains("hide") == false) {
    pythonProjects.classList.add("hide");
    pythonBtn.classList.remove("project-active-btn");
  }
  if (cPlusPlusProjects.classList.contains("hide") == false) {
    cPlusPlusProjects.classList.add("hide");
    cPlusPlusBtn.classList.remove("project-active-btn");
  }
  if (swiftProjects.classList.contains("hide") == false) {
    swiftProjects.classList.add("hide");
    swiftBtn.classList.remove("project-active-btn");
  }
});

// Event to hide the rest of projects except python's
pythonBtn.addEventListener("click", () => {
  pythonBtn.classList.add("project-active-btn");
  if (pythonProjects.classList.contains("hide")) {
    pythonProjects.classList.remove("hide");
  }

  if (frontEndProjects.classList.contains("hide") == false) {
    frontEndProjects.classList.add("hide");
    frontendBtn.classList.remove("project-active-btn");
  }
  if (cPlusPlusProjects.classList.contains("hide") == false) {
    cPlusPlusProjects.classList.add("hide");
    cPlusPlusBtn.classList.remove("project-active-btn");
  }
  if (swiftProjects.classList.contains("hide") == false) {
    swiftProjects.classList.add("hide");
    swiftBtn.classList.remove("project-active-btn");
  }
});

// Event to hide the rest of projects except c++'s
cPlusPlusBtn.addEventListener("click", () => {
  cPlusPlusBtn.classList.add("project-active-btn");
  if (cPlusPlusProjects.classList.contains("hide")) {
    cPlusPlusProjects.classList.remove("hide");
  }

  if (pythonProjects.classList.contains("hide") == false) {
    pythonProjects.classList.add("hide");
    pythonBtn.classList.remove("project-active-btn");
  }
  if (frontEndProjects.classList.contains("hide") == false) {
    frontEndProjects.classList.add("hide");
    frontendBtn.classList.remove("project-active-btn");
  }
  if (swiftProjects.classList.contains("hide") == false) {
    swiftProjects.classList.add("hide");
    swiftBtn.classList.remove("project-active-btn");
  }
});

// Event to hide the rest of projects except swift's
swiftBtn.addEventListener("click", () => {
  swiftBtn.classList.add("project-active-btn");
  if (swiftProjects.classList.contains("hide")) {
    swiftProjects.classList.remove("hide");
  }

  if (pythonProjects.classList.contains("hide") == false) {
    pythonProjects.classList.add("hide");
    pythonBtn.classList.remove("project-active-btn");
  }
  if (cPlusPlusProjects.classList.contains("hide") == false) {
    cPlusPlusProjects.classList.add("hide");
    cPlusPlusBtn.classList.remove("project-active-btn");
  }
  if (frontEndProjects.classList.contains("hide") == false) {
    frontEndProjects.classList.add("hide");
    frontendBtn.classList.remove("project-active-btn");
  }
});

// --------------------------------------- Portfolio Swipper ---------------------------------------

let swiper = new Swiper(".swiper", {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// --------------------------------------- Active link ---------------------------------------

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

// --------------------------------------- Contact EmailJS ---------------------------------------

const btn = document.getElementById("contact-submit-btn");

document.getElementById("form").addEventListener("submit", function (event) {    
    const inputName = document.getElementById('from_name');
    const inputEmail = document.getElementById('email_id');
    const inputMessage = document.getElementById('message');    
    event.preventDefault();

    btn.value = "Sending...";

    const serviceID = "default_service";
    const templateID = "template_vmt3w34";

    emailjs.sendForm(serviceID, templateID, this).then(
        () => {
        btn.value = "Send Email";        
        Swal.fire({
          title: 'Successful!',
          text: 'Message was sent correctly',
          icon: 'success',
          confirmButtonText: 'Ok'
        })
        },
        (err) => {
        btn.value = "Send Email";        
        Swal.fire({
          title: 'Error!',
          text: JSON.stringify(err),
          icon: 'warning',
          confirmButtonText: 'Ok'
        })
        }
    );
    inputName.value = "";
    inputEmail.value = "";
    inputMessage.value = "";
});

// --------------------------------------- Footer ---------------------------------------

const year = new Date().getFullYear();
const date = `&copy; Miguel Pedraza ${year}. All Rights Reserved.`;
document.getElementsByTagName("footer")[0].innerHTML = date;
