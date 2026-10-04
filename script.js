/* =====================================================
   DRAFTER MUDA
   WEBSITE JAVASCRIPT
===================================================== */


/* =====================================================
   CONFIGURATION
===================================================== */


/*
    CHANGE THIS TO YOUR REAL WHATSAPP NUMBER.

    Example:

    012-3456789

    becomes:

    60123456789

    Do not include +, spaces or hyphens.
*/

const WHATSAPP_NUMBER = "60162870126";


/* =====================================================
   MOBILE MENU
===================================================== */

const menuToggle =
    document.getElementById("menuToggle");

const nav =
    document.getElementById("nav");


menuToggle.addEventListener(
    "click",
    function () {

        const isOpen =
            nav.classList.toggle("active");

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen
        );

    }
);


/* Close mobile menu when link is clicked */

const navLinks =
    document.querySelectorAll(".nav a");


navLinks.forEach(
    function (link) {

        link.addEventListener(
            "click",
            function () {

                nav.classList.remove("active");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }
        );

    }
);


/* =====================================================
   CURRENT YEAR
===================================================== */

const year =
    document.getElementById("year");


year.textContent =
    new Date().getFullYear();


/* =====================================================
   IMAGE LIGHTBOX
===================================================== */

const lightbox =
    document.getElementById("lightbox");

const lightboxImage =
    document.getElementById("lightboxImage");

const lightboxTitle =
    document.getElementById("lightboxTitle");

const lightboxClose =
    document.getElementById("lightboxClose");


/*
    Portfolio images AND feedback images
    use the same lightbox.
*/

const galleryButtons =
    document.querySelectorAll(
        ".portfolio-image, .feedback-image"
    );


galleryButtons.forEach(
    function (button) {

        button.addEventListener(
            "click",
            function () {

                const image =
                    button.dataset.image;

                const title =
                    button.dataset.title || "";


                lightboxImage.src =
                    image;

                lightboxImage.alt =
                    title;

                lightboxTitle.textContent =
                    title;


                lightbox.classList.add(
                    "active"
                );


                lightbox.setAttribute(
                    "aria-hidden",
                    "false"
                );


                document.body.classList.add(
                    "no-scroll"
                );

            }
        );

    }
);


/* Close lightbox */

function closeLightbox() {

    lightbox.classList.remove(
        "active"
    );

    lightbox.setAttribute(
        "aria-hidden",
        "true"
    );

    lightboxImage.src = "";

    document.body.classList.remove(
        "no-scroll"
    );

}


lightboxClose.addEventListener(
    "click",
    closeLightbox
);


/* Close by clicking outside image */

lightbox.addEventListener(
    "click",
    function (event) {

        if (
            event.target === lightbox
        ) {

            closeLightbox();

        }

    }
);


/* Close with ESC key */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape" &&
            lightbox.classList.contains("active")
        ) {

            closeLightbox();

        }

    }
);


/* =====================================================
   CONTACT FORM → WHATSAPP
===================================================== */

const contactForm =
    document.getElementById(
        "contactForm"
    );


contactForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const name =
            document.getElementById(
                "name"
            ).value.trim();


        const contact =
            document.getElementById(
                "contactInfo"
            ).value.trim();


        const service =
            document.getElementById(
                "service"
            ).value;


        const message =
            document.getElementById(
                "message"
            ).value.trim();


        /* Basic validation */

        if (
            !name ||
            !contact ||
            !service ||
            !message
        ) {

            alert(
                "Please complete all required fields."
            );

            return;

        }


        /* Create WhatsApp message */

        const text =
            `Hello Drafter Muda,\n\n` +

            `Name: ${name}\n` +

            `Contact: ${contact}\n` +

            `Service: ${service}\n\n` +

            `Project Details:\n` +

            `${message}`;


        /* Encode message */

        const encodedMessage =
            encodeURIComponent(text);


        /* WhatsApp URL */

        const whatsappURL =
            `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;


        /* Open WhatsApp */

        window.open(
            whatsappURL,
            "_blank"
        );

    }
);


/* =====================================================
   SMOOTH SCROLL
===================================================== */

document.querySelectorAll(
    'a[href^="#"]'
).forEach(
    function (anchor) {

        anchor.addEventListener(
            "click",
            function (event) {

                const targetId =
                    this.getAttribute("href");


                if (
                    targetId === "#"
                ) {

                    return;

                }


                const target =
                    document.querySelector(
                        targetId
                    );


                if (target) {

                    event.preventDefault();


                    target.scrollIntoView({
                        behavior: "smooth"
                    });

                }

            }
        );

    }
);
