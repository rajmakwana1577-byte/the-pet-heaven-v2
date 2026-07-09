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
