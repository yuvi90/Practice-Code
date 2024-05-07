const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".menu");
    const links = document.querySelectorAll(".links li");
    
    burger.addEventListener("click", () => {
        //Toggle Nav
        nav.classList.toggle("nav-active");

        //Burger Animation
        burger.classList.toggle("toggle");

        //Animate Links
        links.forEach((link, index) => {
            if (link.style.animation)
            {
                link.style.animation = "";
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.3}s`;
            }
        });
    });

}

navSlide();