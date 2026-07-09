/* ==========================================================
   THE PET HEAVEN
   Premium Mobile JavaScript v3.1
   Part 1
========================================================== */

"use strict";

/* ==========================================================
   Helpers
========================================================== */

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

/* ==========================================================
   Loader
========================================================== */

window.addEventListener("load", () => {

    const loader = $("#loader");

    if (!loader) return;

    setTimeout(() => {

        loader.classList.add("hide");

        setTimeout(() => {
            loader.remove();
        }, 500);

    }, 800);

});

/* ==========================================================
   Mobile Menu
========================================================== */

const menuBtn = $(".menu-btn");
const mobileMenu = $(".mobile-menu");

if (menuBtn && mobileMenu) {

    menuBtn.addEventListener("click", () => {

        mobileMenu.classList.toggle("active");

    });

}

/* ==========================================================
   Close Menu On Link Click
========================================================== */

if (mobileMenu) {

    $$(".mobile-menu a").forEach(link => {

        link.addEventListener("click", () => {

            mobileMenu.classList.remove("active");

        });

    });

}

/* ==========================================================
   Smooth Scroll
========================================================== */

$$('a[href^="#"]').forEach(link => {

    link.addEventListener("click", (e) => {

        const href = link.getAttribute("href");

        if (!href || href === "#") return;

        const target = document.querySelector(href);

        if (target) {

            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});

/* ==========================================================
   Console
========================================================== */

console.log(
    "%c🐾 THE PET HEAVEN v3 Loaded",
    "color:#ff4f87;font-size:16px;font-weight:bold"
); 
/* ==========================================================
   Scroll Progress Bar
========================================================== */

const progressBar = $("#scrollProgress");

window.addEventListener("scroll", () => {

    if (!progressBar) return;

    const totalHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const progress =
        totalHeight > 0
            ? (window.scrollY / totalHeight) * 100
            : 0;

    progressBar.style.width = progress + "%";

});

/* ==========================================================
   Back To Top
========================================================== */

const topBtn = $("#topBtn");

window.addEventListener("scroll", () => {

    if (!topBtn) return;

    if (window.scrollY > 400) {

        topBtn.style.opacity = "1";
        topBtn.style.visibility = "visible";

    } else {

        topBtn.style.opacity = "0";
        topBtn.style.visibility = "hidden";

    }

});

if (topBtn) {

    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,
            behavior: "smooth"

        });

    });

}

/* ==========================================================
   Bottom Navigation Active
========================================================== */

const sections = $$("section");
const bottomLinks = $$(".bottom-nav a");

if (sections.length && bottomLinks.length) {

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const top = section.offsetTop - 120;

            if (window.scrollY >= top) {

                current = section.id;

            }

        });

        bottomLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    });

}

/* ==========================================================
   Header Shadow
========================================================== */

const header = $(".header");

window.addEventListener("scroll", () => {

    if (!header) return;

    if (window.scrollY > 40) {

        header.style.boxShadow =
            "0 15px 35px rgba(0,0,0,.12)";

    } else {

        header.style.boxShadow =
            "0 8px 20px rgba(0,0,0,.06)";

    }

});

/* ==========================================================
   Fade Reveal Animation
========================================================== */

const revealItems = $$(
    ".service-card,.gallery-item,.testimonial-card,.contact-card,.feature-card,.info-card,.stat-card"
);

if ("IntersectionObserver" in window && revealItems.length) {

    const revealObserver = new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.animate([

                        {
                            opacity: 0,
                            transform: "translateY(40px)"
                        },

                        {
                            opacity: 1,
                            transform: "translateY(0)"
                        }

                    ], {

                        duration: 700,
                        easing: "ease",
                        fill: "forwards"

                    });

                    revealObserver.unobserve(entry.target);

                }

            });

        },

        {

            threshold: 0.15

        }

    );

    revealItems.forEach(item => {

        revealObserver.observe(item);

    });

}

/* ==========================================================
   Console
========================================================== */

console.log(
    "%c✨ Scroll Effects Loaded",
    "color:#00aa55;font-size:15px;font-weight:bold"
);
/* ==========================================================
   Premium Gallery Lightbox
========================================================== */

const lightbox = $("#lightbox");
const lightboxImage = $("#lightboxImage");
const closeLightbox = $(".lightbox-close");
const prevImage = $(".lightbox-prev");
const nextImage = $(".lightbox-next");

const galleryImages = [...$$(".gallery-item img")];

let currentImage = 0;

/* ==========================================================
   Open Lightbox
========================================================== */

function openLightbox(index){

    if(!lightbox || !lightboxImage) return;
    if(!galleryImages.length) return;

    currentImage = index;

    lightboxImage.src = galleryImages[currentImage].src;

    lightbox.classList.add("active");

    document.body.style.overflow = "hidden";

}

galleryImages.forEach((img,index)=>{

    img.addEventListener("click",()=>{

        openLightbox(index);

    });

});

/* ==========================================================
   Close
========================================================== */

function hideLightbox(){

    if(!lightbox) return;

    lightbox.classList.remove("active");

    document.body.style.overflow = "";

}

if(closeLightbox){

    closeLightbox.addEventListener("click",hideLightbox);

}

/* ==========================================================
   Next Image
========================================================== */

function showNext(){

    if(!galleryImages.length) return;

    currentImage++;

    if(currentImage >= galleryImages.length){

        currentImage = 0;

    }

    lightboxImage.src = galleryImages[currentImage].src;

}

/* ==========================================================
   Previous Image
========================================================== */

function showPrevious(){

    if(!galleryImages.length) return;

    currentImage--;

    if(currentImage < 0){

        currentImage = galleryImages.length - 1;

    }

    lightboxImage.src = galleryImages[currentImage].src;

}

if(nextImage){

    nextImage.addEventListener("click",(e)=>{

        e.stopPropagation();

        showNext();

    });

}

if(prevImage){

    prevImage.addEventListener("click",(e)=>{

        e.stopPropagation();

        showPrevious();

    });

}

/* ==========================================================
   Close Outside Image
========================================================== */

if(lightbox){

    lightbox.addEventListener("click",(e)=>{

        if(e.target === lightbox){

            hideLightbox();

        }

    });

}

/* ==========================================================
   Keyboard Support
========================================================== */

document.addEventListener("keydown",(e)=>{

    if(!lightbox) return;

    if(!lightbox.classList.contains("active")) return;

    switch(e.key){

        case "Escape":
            hideLightbox();
            break;

        case "ArrowRight":
            showNext();
            break;

        case "ArrowLeft":
            showPrevious();
            break;

    }

});

/* ==========================================================
   Swipe Support (Mobile)
========================================================== */

let startX = 0;

if(lightbox){

    lightbox.addEventListener("touchstart",(e)=>{

        startX = e.changedTouches[0].clientX;

    });

    lightbox.addEventListener("touchend",(e)=>{

        const endX = e.changedTouches[0].clientX;

        if(startX - endX > 50){

            showNext();

        }

        if(endX - startX > 50){

            showPrevious();

        }

    });

}

/* ==========================================================
   Console
========================================================== */

console.log(
"%c🖼 Premium Gallery Loaded",
"color:#ff4f87;font-size:15px;font-weight:bold"
);
