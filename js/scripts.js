console.log("Yo,welcome to my site!")

function menuToggle() {
    var x = document.getElementById('myNavtoggle'); 
    if (x.className === 'navtoggle') {
        x.className += ' responsive';
    } else {
        x.className = 'navtoggle';
    }
}


var loader = document.getElementById("preloader");
window.addEventListener("load", function(){
    loader.style.display = "none"
})

const fading = document.querySelectorAll(".fromnowhere");
const slideleft = document.querySelectorAll(".fromleft");
const slideright = document.querySelectorAll(".fromright");
const sliders = document.querySelectorAll(".slide-in");

const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -200px 0px"
};

const appearOnScroll = new IntersectionObserver
(function(entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    })
}, appearOptions);

fading.forEach(fader => {
    appearOnScroll.observe(fader);
});

sliders.forEach(slider => {
    appearOnScroll.observe(slider);
});

slideleft.forEach(slider => {
    appearOnScroll.observe(slider);
});

slideright.forEach(slider => {
    appearOnScroll.observe(slider);
});

function toggleDarkMode() {
    var element = document.body;
    element.classList.toggle("Dark-Mode");
 }
