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
/* ==========================================================
   WhatsApp Booking Form
========================================================== */

const bookingForm = $("#bookingForm");
const toast = $("#toast");

if (bookingForm) {

    bookingForm.addEventListener("submit", (e) => {

        e.preventDefault();

        const ownerInput = bookingForm.querySelector('input[placeholder="Owner Name"]');
        const petInput = bookingForm.querySelector('input[placeholder="Pet Name"]');
        const mobileInput = bookingForm.querySelector('input[placeholder="Mobile Number"]');
        const serviceInput = bookingForm.querySelector("select");
        const dateInput = bookingForm.querySelector('input[type="date"]');
        const timeInput = bookingForm.querySelector('input[type="time"]');
        const detailsInput = bookingForm.querySelector("textarea");

        const owner = ownerInput ? ownerInput.value.trim() : "";
        const pet = petInput ? petInput.value.trim() : "";
        const mobile = mobileInput ? mobileInput.value.trim() : "";
        const service = serviceInput ? serviceInput.value : "";
        const date = dateInput ? dateInput.value : "";
        const time = timeInput ? timeInput.value : "";
        const details = detailsInput ? detailsInput.value.trim() : "";

        if (!owner) {
            alert("Please enter Owner Name");
            return;
        }

        if (!pet) {
            alert("Please enter Pet Name");
            return;
        }

        if (mobile.length < 10) {
            alert("Please enter valid Mobile Number");
            return;
        }

        if (!service) {
            alert("Please select Service");
            return;
        }

        const message =
`🐾 *THE PET HEAVEN*

📅 *New Appointment*

👤 Owner : ${owner}

🐶 Pet : ${pet}

📱 Mobile : ${mobile}

✂ Service : ${service}

📆 Date : ${date}

🕒 Time : ${time}

📝 Details : ${details}

Thank You ❤️`;

        window.open(
            "https://wa.me/919510108013?text=" +
            encodeURIComponent(message),
            "_blank"
        );

        if (toast) {

            toast.classList.add("show");

            setTimeout(() => {

                toast.classList.remove("show");

            }, 3000);

        }

        bookingForm.reset();

    });

}

/* ==========================================================
   Input Animation
========================================================== */

$$(".booking-form input, .booking-form textarea, .booking-form select")

.forEach(input => {

    input.addEventListener("focus", () => {

        if (input.parentElement) {

            input.parentElement.style.transform = "scale(1.02)";

        }

    });

    input.addEventListener("blur", () => {

        if (input.parentElement) {

            input.parentElement.style.transform = "scale(1)";

        }

    });

});

/* ==========================================================
   Button Ripple Effect
========================================================== */

$$("button").forEach(button => {

    button.style.position = "relative";
    button.style.overflow = "hidden";

    button.addEventListener("click", (e) => {

        const ripple = document.createElement("span");

        const size = Math.max(
            button.clientWidth,
            button.clientHeight
        );

        const rect = button.getBoundingClientRect();

        ripple.style.width = size + "px";
        ripple.style.height = size + "px";

        ripple.style.left =
            (e.clientX - rect.left - size / 2) + "px";

        ripple.style.top =
            (e.clientY - rect.top - size / 2) + "px";

        ripple.style.position = "absolute";
        ripple.style.borderRadius = "50%";
        ripple.style.background = "rgba(255,255,255,.35)";
        ripple.style.transform = "scale(0)";
        ripple.style.animation = "ripple .6s linear";
        ripple.style.pointerEvents = "none";

        button.appendChild(ripple);

        setTimeout(() => {

            ripple.remove();

        }, 600);

    });

});

/* ==========================================================
   Console
========================================================== */

console.log(
    "%c📅 Booking System Loaded",
    "color:#25D366;font-size:15px;font-weight:bold"
);
/* ==========================================================
   Animated Counter
========================================================== */

const counters = document.querySelectorAll(".counter");

if ("IntersectionObserver" in window && counters.length) {

    const counterObserver = new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) return;

                const counter = entry.target;
                const target = Number(counter.dataset.target || 0);

                let current = 0;

                const speed = Math.max(1, target / 120);

                function update() {

                    current += speed;

                    if (current < target) {

                        counter.textContent = Math.floor(current);

                        requestAnimationFrame(update);

                    } else {

                        counter.textContent = target.toLocaleString();

                    }

                }

                update();

                counterObserver.unobserve(counter);

            });

        },

        {

            threshold: .5

        }

    );

    counters.forEach(counter => {

        counterObserver.observe(counter);

    });

}

/* ==========================================================
   Floating Animation
========================================================== */

document.querySelectorAll(
".service-card,.testimonial-card,.gallery-item"
).forEach((card,index)=>{

    card.animate(

        [

            {transform:"translateY(0)"},

            {transform:"translateY(-6px)"},

            {transform:"translateY(0)"}

        ],

        {

            duration:3500+(index*250),

            iterations:Infinity,

            easing:"ease-in-out"

        }

    );

});

/* ==========================================================
   Hero Image Parallax
========================================================== */

const heroParallaxImage = document.querySelector(".hero-image img");

window.addEventListener("scroll",()=>{

    if(!heroParallaxImage) return;

    const y = window.scrollY * .15;

    heroParallaxImage.style.transform =

    `translateY(${y}px) scale(1.02)`;

});

/* ==========================================================
   Count Up Badge
========================================================== */

document.querySelectorAll(".count-badge").forEach((badge,index)=>{

    let value = 0;

    const max = Number(badge.dataset.count || 100);

    const timer = setInterval(()=>{

        value++;

        badge.textContent = value;

        if(value>=max){

            clearInterval(timer);

        }

    },20+(index*5));

});

/* ==========================================================
   Pulse Animation
========================================================== */

document.querySelectorAll(
".book-btn,.floating-whatsapp"
).forEach(btn=>{

    setInterval(()=>{

        btn.animate(

            [

                {transform:"scale(1)"},

                {transform:"scale(1.08)"},

                {transform:"scale(1)"}

            ],

            {

                duration:900

            }

        );

    },5000);

});

/* ==========================================================
   Lazy Image Fade
========================================================== */

const lazyFadeImages = document.querySelectorAll("img");

if("IntersectionObserver" in window){

    const imageObserver = new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.style.opacity="1";

                entry.target.style.transition="opacity .6s ease";

                imageObserver.unobserve(entry.target);

            }

        });

    });

    lazyFadeImages.forEach(img=>{

        img.style.opacity=".2";

        imageObserver.observe(img);

    });

}

/* ==========================================================
   Console
========================================================== */

console.log(
"%c📊 Counter & Animations Loaded",
"color:#ff9800;font-size:15px;font-weight:bold"
);
/* ==========================================================
   PWA Install Prompt
========================================================== */

let deferredPrompt = null;

const installPopup = document.querySelector(".install-popup");
const installBtn = document.querySelector("#installBtn");

window.addEventListener("beforeinstallprompt", (e) => {

    e.preventDefault();

    deferredPrompt = e;

    if (installPopup) {

        installPopup.style.display = "flex";

    }

});

if (installBtn) {

    installBtn.addEventListener("click", async () => {

        if (!deferredPrompt) return;

        deferredPrompt.prompt();

        await deferredPrompt.userChoice;

        deferredPrompt = null;

        if (installPopup) {

            installPopup.style.display = "none";

        }

    });

}

/* ==========================================================
   Close Install Popup
========================================================== */

const closeInstall = document.querySelector(".install-close");

if (closeInstall) {

    closeInstall.addEventListener("click", () => {

        if (installPopup) {

            installPopup.style.display = "none";

        }

    });

}

/* ==========================================================
   Online / Offline Status
========================================================== */

function showToast(message) {

    const toast = document.querySelector("#toast");

    if (!toast) return;

    toast.textContent = message;

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    }, 3000);

}

window.addEventListener("online", () => {

    showToast("🌐 Internet Connected");

});

window.addEventListener("offline", () => {

    showToast("📴 No Internet Connection");

});

/* ==========================================================
   Page Visibility
========================================================== */

document.addEventListener("visibilitychange", () => {

    console.log(
        document.hidden
            ? "⏸ Page Hidden"
            : "▶ Page Active"
    );

});

/* ==========================================================
   Performance Timer
========================================================== */

window.addEventListener("load", () => {

    console.log(
        "⚡ Loaded in",
        performance.now().toFixed(0),
        "ms"
    );

});

/* ==========================================================
   Disable Image Drag & Right Click
========================================================== */

document.querySelectorAll("img").forEach(img => {

    img.setAttribute("draggable", "false");

    img.addEventListener("contextmenu", e => {

        e.preventDefault();

    });

});

/* ==========================================================
   Auto Close Mobile Menu
========================================================== */

document.querySelectorAll(".mobile-menu a").forEach(link => {

    link.addEventListener("click", () => {

        const menu = document.querySelector(".mobile-menu");

        if (menu) {

            menu.classList.remove("active");

        }

    });

});

/* ==========================================================
   Console
========================================================== */

console.log(
"%c📲 PWA Features Loaded",
"color:#2196f3;font-size:15px;font-weight:bold"
);
/* ==========================================================
   Premium Cursor Effect
========================================================== */

const cursor = document.querySelector(".custom-cursor");

if (cursor) {

    document.addEventListener("mousemove", (e) => {

        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";

    });

}

/* ==========================================================
   Button Hover Animation
========================================================== */

document.querySelectorAll(
".btn,.book-btn,.contact-btn"
).forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.animate([

            { transform: "scale(1)" },
            { transform: "scale(1.06)" },
            { transform: "scale(1)" }

        ], {

            duration: 300

        });

    });

});

/* ==========================================================
   Card Tilt Effect
========================================================== */

document.querySelectorAll(
".service-card,.gallery-item,.testimonial-card"
).forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateX = ((y / rect.height) - 0.5) * -10;
        const rotateY = ((x / rect.width) - 0.5) * 10;

        card.style.transform =
`perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-6px)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});

/* ==========================================================
   Floating Paw Effect
========================================================== */

function createPaw() {

    if (document.hidden) return;

    const paw = document.createElement("div");

    paw.innerHTML = "🐾";

    paw.style.position = "fixed";
    paw.style.left = Math.random() * window.innerWidth + "px";
    paw.style.bottom = "-40px";
    paw.style.fontSize = (18 + Math.random() * 20) + "px";
    paw.style.opacity = ".18";
    paw.style.pointerEvents = "none";
    paw.style.zIndex = "999";
    paw.style.transition = "6s linear";

    document.body.appendChild(paw);

    setTimeout(() => {

        paw.style.transform = "translateY(-110vh) rotate(360deg)";
        paw.style.opacity = "0";

    }, 100);

    setTimeout(() => {

        paw.remove();

    }, 6500);

}

setInterval(createPaw, 3500);

/* ==========================================================
   Success Confetti
========================================================== */

function successEffect() {

    for (let i = 0; i < 25; i++) {

        const dot = document.createElement("span");

        dot.style.position = "fixed";
        dot.style.left = (window.innerWidth / 2) + "px";
        dot.style.top = (window.innerHeight / 2) + "px";
        dot.style.width = "8px";
        dot.style.height = "8px";
        dot.style.borderRadius = "50%";
        dot.style.background =
`hsl(${Math.random() * 360},90%,60%)`;

        dot.style.pointerEvents = "none";
        dot.style.zIndex = "9999";

        document.body.appendChild(dot);

        const x = (Math.random() - 0.5) * 500;
        const y = (Math.random() - 0.5) * 500;

        dot.animate([

            {
                transform: "translate(0,0)",
                opacity: 1
            },

            {
                transform: `translate(${x}px,${y}px)`,
                opacity: 0
            }

        ], {

            duration: 1200,
            easing: "ease-out"

        });

        setTimeout(() => {

            dot.remove();

        }, 1200);

    }

}

/* ==========================================================
   Trigger Success Effect
========================================================== */

const bookingButton = document.querySelector(".book-btn");

if (bookingButton) {

    bookingButton.addEventListener("click", () => {

        setTimeout(successEffect, 300);

    });

}

/* ==========================================================
   Console
========================================================== */

console.log(
"%c✨ Premium Micro Animations Loaded",
"color:#9c27b0;font-size:15px;font-weight:bold"
);
/* ==========================================================
   Image Lazy Loading
========================================================== */

const lazyLoadImages = document.querySelectorAll("img");

if ("IntersectionObserver" in window && lazyLoadImages.length) {

    const lazyObserver = new IntersectionObserver(

        (entries, observer) => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) return;

                const img = entry.target;

                if (img.dataset.src) {

                    img.src = img.dataset.src;

                }

                img.classList.add("loaded");

                observer.unobserve(img);

            });

        },

        {

            rootMargin: "100px"

        }

    );

    lazyLoadImages.forEach(img => {

        lazyObserver.observe(img);

    });

}

/* ==========================================================
   Image Fade Animation
========================================================== */

document.querySelectorAll("img").forEach(img => {

    img.addEventListener("load", () => {

        img.style.opacity = "1";
        img.style.transform = "scale(1)";

    });

});

/* ==========================================================
   Preload Hero Image
========================================================== */

const heroPreloadImage = document.querySelector(".hero img");

if (heroPreloadImage) {

    const preload = new Image();

    preload.src = heroPreloadImage.src;

}

/* ==========================================================
   Auto Theme Detection
========================================================== */

const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

function detectTheme() {

    console.log(
        prefersDark.matches
            ? "🌙 Dark Mode Preferred"
            : "☀️ Light Mode Preferred"
    );

}

detectTheme();

prefersDark.addEventListener("change", detectTheme);

/* ==========================================================
   Visitor Session Counter
========================================================== */

let visits =
Number(sessionStorage.getItem("petHeavenVisit")) || 0;

visits++;

sessionStorage.setItem("petHeavenVisit", visits);

console.log("👤 Session Visit :", visits);

/* ==========================================================
   Save Scroll Position
========================================================== */

window.addEventListener("beforeunload", () => {

    sessionStorage.setItem(
        "scrollPosition",
        window.scrollY
    );

});

window.addEventListener("load", () => {

    const scroll =
        sessionStorage.getItem("scrollPosition");

    if (scroll) {

        window.scrollTo({

            top: Number(scroll)

        });

    }

});

/* ==========================================================
   Device Detection
========================================================== */

const isMobile =
/Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

console.log(
isMobile
? "📱 Mobile Device"
: "💻 Desktop Device"
);

/* ==========================================================
   Small Vibration
========================================================== */

document.querySelectorAll(".btn,.book-btn").forEach(btn => {

    btn.addEventListener("click", () => {

        if ("vibrate" in navigator) {

            navigator.vibrate(20);

        }

    });

});

/* ==========================================================
   Console
========================================================== */

console.log(
"%c🚀 Performance Optimizations Loaded",
"color:#ff5722;font-size:15px;font-weight:bold"
);
/* ==========================================================
   HERO AUTO SLIDER
========================================================== */

const heroSlides = document.querySelectorAll(".hero-slide");

let heroIndex = 0;

function heroSlider() {

    if (heroSlides.length <= 1) return;

    heroSlides.forEach(slide => {

        slide.classList.remove("active");

    });

    heroIndex++;

    if (heroIndex >= heroSlides.length) {

        heroIndex = 0;

    }

    heroSlides[heroIndex].classList.add("active");

}

if (heroSlides.length > 1) {

    setInterval(heroSlider, 5000);

}

/* ==========================================================
   Swipe Support
========================================================== */

let heroStartX = 0;

const heroSection = document.querySelector(".hero");

if (heroSection && heroSlides.length > 1) {

    heroSection.addEventListener("touchstart", (e) => {

        heroStartX = e.changedTouches[0].clientX;

    });

    heroSection.addEventListener("touchend", (e) => {

        const heroEndX = e.changedTouches[0].clientX;

        if (heroEndX - heroStartX > 60) {

            heroIndex--;

            if (heroIndex < 0) {

                heroIndex = heroSlides.length - 1;

            }

        }

        if (heroStartX - heroEndX > 60) {

            heroIndex++;

            if (heroIndex >= heroSlides.length) {

                heroIndex = 0;

            }

        }

        heroSlides.forEach(slide => {

            slide.classList.remove("active");

        });

        heroSlides[heroIndex].classList.add("active");

    });

}

/* ==========================================================
   Favorite Heart Animation
========================================================== */

document.querySelectorAll(".favorite-btn").forEach(btn => {

    btn.addEventListener("click", () => {

        btn.classList.toggle("liked");

        btn.animate(

            [
                { transform: "scale(1)" },
                { transform: "scale(1.35)" },
                { transform: "scale(1)" }
            ],

            {

                duration: 400

            }

        );

    });

});

/* ==========================================================
   Notification Bar
========================================================== */

function notify(message) {

    const note = document.createElement("div");

    note.className = "notification";

    note.textContent = message;

    document.body.appendChild(note);

    setTimeout(() => {

        note.classList.add("show");

    }, 50);

    setTimeout(() => {

        note.classList.remove("show");

        setTimeout(() => {

            note.remove();

        }, 300);

    }, 3000);

}

/* ==========================================================
   Welcome Notification
========================================================== */

window.addEventListener("load", () => {

    setTimeout(() => {

        notify("🐾 Welcome to THE PET HEAVEN");

    }, 1800);

});

/* ==========================================================
   Scroll Direction
========================================================== */

let lastScroll = 0;

window.addEventListener("scroll", () => {

    const current = window.scrollY;

    const nav = document.querySelector(".navbar");

    if (!nav) return;

    if (current > lastScroll && current > 150) {

        nav.style.transform = "translateY(-100%)";

    } else {

        nav.style.transform = "translateY(0)";

    }

    lastScroll = current;

});

/* ==========================================================
   Auto Highlight Buttons
========================================================== */

setInterval(() => {

    document.querySelectorAll(

        ".book-btn,.btn-primary"

    ).forEach(btn => {

        btn.animate(

            [

                { boxShadow: "0 0 0 rgba(255,79,135,.2)" },

                { boxShadow: "0 0 25px rgba(255,79,135,.55)" },

                { boxShadow: "0 0 0 rgba(255,79,135,.2)" }

            ],

            {

                duration: 1800

            }

        );

    });

}, 5000);

/* ==========================================================
   Console
========================================================== */

console.log(
    "%c🔥 Advanced UX Loaded",
    "color:#e91e63;font-size:15px;font-weight:bold"
);
