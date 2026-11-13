const header = document.querySelector(".header");
const menuButton = document.querySelector("#menuButton");
const nav = document.querySelector("#nav");

const modal = document.querySelector("#contactModal");
const contactButton = document.querySelector("#contactButton");
const modalClose = document.querySelector("#modalClose");
const modalOverlay = document.querySelector("#modalOverlay");

const contactForm = document.querySelector("#contactForm");
const formMessage = document.querySelector("#formMessage");

const cursorGlow = document.querySelector(".cursor-glow");


/* HEADER */

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});


/* MOBILE MENU */

menuButton.addEventListener("click", () => {
    nav.classList.toggle("active");
});

document.querySelectorAll(".nav a").forEach(link => {

    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });

});


/* SCROLL ANIMATION */

const revealElements =
    document.querySelectorAll(".reveal");

const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );

revealElements.forEach(element => {
    observer.observe(element);
});


/* CONTACT MODAL */

function openModal() {

    modal.classList.add("active");

    document.body.style.overflow = "hidden";

}

function closeModal() {

    modal.classList.remove("active");

    document.body.style.overflow = "";

}

contactButton.addEventListener("click", openModal);

modalClose.addEventListener("click", closeModal);

modalOverlay.addEventListener("click", closeModal);


document.addEventListener("keydown", event => {

    if (event.key === "Escape") {
        closeModal();
    }

});


/* DEMO FORM */

contactForm.addEventListener("submit", event => {

    event.preventDefault();

    formMessage.textContent =
        "Thanks! This demo form works correctly.";

    contactForm.reset();

});


/* MOUSE GLOW */

document.addEventListener("mousemove", event => {

    cursorGlow.style.left =
        `${event.clientX}px`;

    cursorGlow.style.top =
        `${event.clientY}px`;

});


/* SUBTLE PROJECT PARALLAX */

const projects =
    document.querySelectorAll(".project-image");

projects.forEach(project => {

    project.addEventListener("mousemove", event => {

        const rect =
            project.getBoundingClientRect();

        const x =
            event.clientX - rect.left;

        const y =
            event.clientY - rect.top;

        const rotateY =
            ((x / rect.width) - 0.5) * 2;

        const rotateX =
            ((y / rect.height) - 0.5) * -2;

        project.style.transform =
            `perspective(1000px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             scale(.99)`;

    });


    project.addEventListener("mouseleave", () => {

        project.style.transform = "";

    });

});