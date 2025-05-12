// Elementos principales
const audio = document.getElementById("audioPlayer");
const loader = document.getElementById("preloader");
const emptyArea = document.getElementById("emptyarea");
const mobileTogglemenu = document.getElementById("mobiletogglemenu");
const mybutton = document.getElementById("backtotopbutton");
const Pupils = document.getElementsByClassName("footer-pupil");
const pupilsArr = Array.from(Pupils);

// Configuración de sonido y modo visual
function settingToggle() {
    document.getElementById("setting-container").classList.toggle("settingactivate");
    document.getElementById("visualmodetogglebuttoncontainer").classList.toggle("visualmodeshow");
    document.getElementById("soundtogglebuttoncontainer").classList.toggle("soundmodeshow");
}

function playPause() {
    const soundSwitch = document.getElementById("switchforsound").checked;
    soundSwitch ? audio.play() : audio.pause();
}

function visualMode() {
    document.body.classList.toggle("light-mode");
    document.querySelectorAll(".needtobeinvert").forEach(e => {
        e.classList.toggle("invertapplied");
    });
}

// Preloader y bienvenida
window.addEventListener("load", () => {
    loader.style.display = "none";
    document.querySelector(".hey").classList.add("popup");
});

// Menú hamburguesa
function hamburgerMenu() {
    document.body.classList.toggle("stopscrolling");
    mobileTogglemenu.classList.toggle("show-toggle-menu");
    document.getElementById("burger-bar1").classList.toggle("hamburger-animation1");
    document.getElementById("burger-bar2").classList.toggle("hamburger-animation2");
    document.getElementById("burger-bar3").classList.toggle("hamburger-animation3");
}

function hideMenuByLi() {
    document.body.classList.toggle("stopscrolling");
    mobileTogglemenu.classList.remove("show-toggle-menu");
    document.getElementById("burger-bar1").classList.remove("hamburger-animation1");
    document.getElementById("burger-bar2").classList.remove("hamburger-animation2");
    document.getElementById("burger-bar3").classList.remove("hamburger-animation3");
}

// Navegación activa en scroll
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".navbar .navbar-tabs .navbar-tabs-ul li");
const mobilenavLi = document.querySelectorAll(".mobiletogglemenu .mobile-navbar-tabs-ul li");

window.addEventListener("scroll", () => {
    let currentSectionId = "";
    sections.forEach(section => {
        const offsetTop = section.offsetTop;
        if (pageYOffset >= offsetTop - 200) {
            currentSectionId = section.getAttribute("id");
        }
    });

    mobilenavLi.forEach(li => {
        li.classList.remove("activeThismobiletab");
        if (li.classList.contains(currentSectionId)) {
            li.classList.add("activeThismobiletab");
        }
    });

    navLi.forEach(li => {
        li.classList.remove("activeThistab");
        if (li.classList.contains(currentSectionId)) {
            li.classList.add("activeThistab");
        }
    });
});

// Botón volver arriba
function scrollFunction() {
    const shouldShow = document.body.scrollTop > 400 || document.documentElement.scrollTop > 400;
    mybutton.style.display = shouldShow ? "block" : "none";
}

function scrollToTopFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

window.onscroll = scrollFunction;

// Bloquear clic derecho sobre imágenes
document.addEventListener("contextmenu", (e) => {
    if (e.target.nodeName === "IMG") e.preventDefault();
}, false);

// Movimiento de pupilas
let pupilStartPoint = -10;
let pupilRangeX = 20;
let pupilRangeY = 15;
let mouseXStartPoint = 0;
let mouseXEndPoint = window.innerWidth;
let mouseXRange = mouseXEndPoint - mouseXStartPoint;
let mouseYEndPoint = window.innerHeight;

function mouseMove(e) {
    const fracXValue = (e.clientX - mouseXStartPoint) / mouseXRange;
    const fracYValue = e.clientY / mouseYEndPoint;

    const translateX = pupilStartPoint + fracXValue * pupilRangeX;
    const translateY = pupilStartPoint + fracYValue * pupilRangeY;

    pupilsArr.forEach(pupil => {
        pupil.style.transform = `translate(${translateX}px, ${translateY}px)`;
    });
}

function windowResize() {
    mouseXEndPoint = window.innerWidth;
    mouseYEndPoint = window.innerHeight;
    mouseXRange = mouseXEndPoint - mouseXStartPoint;
}

window.addEventListener("mousemove", mouseMove);
window.addEventListener("resize", windowResize);

// Firma del desarrollador
console.log(
    "%c Designed and Developed by Vinod Jangid ",
    "background-image: linear-gradient(90deg,#8000ff,#6bc5f8); color: white; font-weight: 900; font-size: 1rem; padding: 20px;"
);