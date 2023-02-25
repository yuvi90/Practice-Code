const btnHike = document.querySelector('.hike-exp');
const screenWidth = window.innerHeight;

// -->> First Method

window.addEventListener('scroll', () => {
    const hikeBtnPosition = btnHike.getBoundingClientRect();
    // console.log(hikeBtnPosition)
    // console.log(screenWidth)
    if (hikeBtnPosition.y < screenWidth / 2) {
        btnHike.style.color = 'red';
    }
    if (hikeBtnPosition.y > screenWidth / 2) {
        btnHike.style.color = 'yellow';
    }
});

// -->> Second Method

const btnFashion = document.querySelector('.fashion-exp');

let options = {
    threshold: 0.2,
}

let observer = new IntersectionObserver((entries) => {
    console.log(entries)
        if (entries[0].isIntersecting) {
            btnHike.style.background = 'yellow';
        }
        if (!entries[0].isIntersecting) {
            btnHike.style.background = 'red';
        }
}, options)

observer.observe(btnHike);
observer.observe(btnFashion);

// ---->> Third Method Scroll Magic Library

const controller = new ScrollMagic.Controller();

const exploreScene = new ScrollMagic.Scene({
    triggerElement: ".hike-exp",
    triggerHook: 0.5
})
    .addIndicators({ colorStart: "white", colorTrigger: "white" })
    .setClassToggle(".hike-exp", "active")
    .addTo(controller)