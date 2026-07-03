"use strict";

/* =========================================================
   ARJUN MENON PHOTOGRAPHY
   PREMIUM PORTFOLIO
   FILE: script.js
========================================================= */


/* =========================================================
   1. WEBSITE CONFIGURATION
========================================================= */

const CONFIG = {
    whatsappNumber: "919999999999",

    whatsappMessage:
        "Hi! I would like to check photography availability. My date, location and event details are:",

    heroInterval: 5000,

    mobileBreakpoint: 840,

    swipeThreshold: 45
};


/* =========================================================
   2. HERO IMAGES

   Replace these URLs with your real images.

   Example:
   "assets/images/hero/hero-1.webp"
========================================================= */

const heroImages = [
    "https://picsum.photos/seed/photography-hero-one/1800/1200",
    "https://picsum.photos/seed/photography-hero-two/1800/1200",
    "https://picsum.photos/seed/photography-hero-three/1800/1200",
    "https://picsum.photos/seed/photography-hero-four/1800/1200"
];


/* =========================================================
   3. GALLERY DATA

   category:
   wedding / portrait / travel / editorial

   size:
   normal / tall / wide
========================================================= */

const photos = [
    {
        src: "https://picsum.photos/seed/wedding-one/900/1100",
        full: "https://picsum.photos/seed/wedding-one/1500/1800",
        category: "wedding",
        label: "Getting Ready",
        exif: "50mm · f/1.8 · 1/250 · ISO 400",
        size: "tall",
        alt: "Bride getting ready before a wedding ceremony"
    },
    {
        src: "https://picsum.photos/seed/portrait-one/900/1100",
        full: "https://picsum.photos/seed/portrait-one/1500/1800",
        category: "portrait",
        label: "Studio Light",
        exif: "85mm · f/2.0 · 1/160 · ISO 200",
        size: "normal",
        alt: "Professional portrait photographed using studio lighting"
    },
    {
        src: "https://picsum.photos/seed/travel-one/1400/900",
        full: "https://picsum.photos/seed/travel-one/1800/1200",
        category: "travel",
        label: "Kanyakumari Coast",
        exif: "24mm · f/8 · 1/500 · ISO 100",
        size: "wide",
        alt: "Documentary photograph of the Kanyakumari coastline"
    },
    {
        src: "https://picsum.photos/seed/editorial-one/900/1100",
        full: "https://picsum.photos/seed/editorial-one/1500/1800",
        category: "editorial",
        label: "Founder Portrait",
        exif: "35mm · f/2.8 · 1/200 · ISO 320",
        size: "normal",
        alt: "Editorial founder portrait for a business campaign"
    },
    {
        src: "https://picsum.photos/seed/wedding-two/900/1100",
        full: "https://picsum.photos/seed/wedding-two/1500/1800",
        category: "wedding",
        label: "The Mandapam",
        exif: "35mm · f/2.2 · 1/320 · ISO 250",
        size: "normal",
        alt: "Traditional South Indian wedding ceremony at a mandapam"
    },
    {
        src: "https://picsum.photos/seed/portrait-two/900/1200",
        full: "https://picsum.photos/seed/portrait-two/1500/1900",
        category: "portrait",
        label: "Window Light",
        exif: "85mm · f/1.8 · 1/200 · ISO 160",
        size: "tall",
        alt: "Natural portrait photographed beside a window"
    },
    {
        src: "https://picsum.photos/seed/travel-two/900/1100",
        full: "https://picsum.photos/seed/travel-two/1500/1800",
        category: "travel",
        label: "Ooty Hills",
        exif: "24mm · f/9 · 1/400 · ISO 100",
        size: "normal",
        alt: "Travel landscape photograph of the Ooty hills"
    },
    {
        src: "https://picsum.photos/seed/wedding-three/1400/900",
        full: "https://picsum.photos/seed/wedding-three/1800/1200",
        category: "wedding",
        label: "First Look",
        exif: "50mm · f/2.0 · 1/200 · ISO 320",
        size: "wide",
        alt: "Couple seeing each other before their wedding ceremony"
    },
    {
        src: "https://picsum.photos/seed/editorial-two/900/1100",
        full: "https://picsum.photos/seed/editorial-two/1500/1800",
        category: "editorial",
        label: "Studio Vetri Lookbook",
        exif: "50mm · f/4 · 1/125 · ISO 200",
        size: "normal",
        alt: "Fashion lookbook photographed for Studio Vetri"
    },
    {
        src: "https://picsum.photos/seed/portrait-three/900/1100",
        full: "https://picsum.photos/seed/portrait-three/1500/1800",
        category: "portrait",
        label: "Rooftop Evening",
        exif: "85mm · f/2.2 · 1/250 · ISO 400",
        size: "normal",
        alt: "Outdoor portrait photographed on a rooftop during evening"
    },
    {
        src: "https://picsum.photos/seed/travel-three/900/1200",
        full: "https://picsum.photos/seed/travel-three/1500/1900",
        category: "travel",
        label: "Pondicherry Street",
        exif: "35mm · f/5.6 · 1/500 · ISO 200",
        size: "tall",
        alt: "Street photography from Pondicherry"
    },
    {
        src: "https://picsum.photos/seed/wedding-four/900/1100",
        full: "https://picsum.photos/seed/wedding-four/1500/1800",
        category: "wedding",
        label: "Reception",
        exif: "50mm · f/1.8 · 1/160 · ISO 800",
        size: "normal",
        alt: "Wedding reception photographed in low light"
    }
];


/* =========================================================
   4. DOM REFERENCES
========================================================= */

const body = document.body;

const siteHeader =
    document.getElementById("siteHeader");

const navToggle =
    document.getElementById("navToggle");

const mainNav =
    document.getElementById("mainNav");

const heroSlidesContainer =
    document.getElementById("heroSlides");

const galleryGrid =
    document.getElementById("galleryGrid");

const filterButtons =
    document.querySelectorAll(".filter-btn");

const lightbox =
    document.getElementById("lightbox");

const lightboxImage =
    document.getElementById("lbImage");

const lightboxCaption =
    document.getElementById("lightboxCaption");

const lightboxClose =
    document.getElementById("lbClose");

const lightboxPrevious =
    document.getElementById("lbPrev");

const lightboxNext =
    document.getElementById("lbNext");

const lightboxContent =
    lightbox?.querySelector(".lightbox-content");

const faqQuestions =
    document.querySelectorAll(".faq-question");

const reducedMotionQuery =
    window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    );


/* =========================================================
   5. CURRENT YEAR
========================================================= */

function updateCurrentYear() {
    const yearElement =
        document.getElementById("year");

    if (!yearElement) {
        return;
    }

    yearElement.textContent =
        String(new Date().getFullYear());
}


/* =========================================================
   6. WHATSAPP LINKS
========================================================= */

function createWhatsAppURL() {
    const cleanNumber =
        CONFIG.whatsappNumber.replace(/\D/g, "");

    const encodedMessage =
        encodeURIComponent(
            CONFIG.whatsappMessage
        );

    return (
        `https://wa.me/${cleanNumber}` +
        `?text=${encodedMessage}`
    );
}


function updateWhatsAppLinks() {
    const whatsappLinks =
        document.querySelectorAll(
            "[data-whatsapp]"
        );

    const whatsappURL =
        createWhatsAppURL();

    whatsappLinks.forEach((link) => {
        link.href = whatsappURL;
    });
}


/* =========================================================
   7. MOBILE NAVIGATION
========================================================= */

function isNavigationOpen() {
    return Boolean(
        mainNav?.classList.contains("open")
    );
}


function openNavigation() {
    if (
        !navToggle ||
        !mainNav ||
        !siteHeader
    ) {
        return;
    }

    navToggle.classList.add("active");
    mainNav.classList.add("open");
    siteHeader.classList.add("menu-active");

    navToggle.setAttribute(
        "aria-expanded",
        "true"
    );

    navToggle.setAttribute(
        "aria-label",
        "Close navigation menu"
    );
}


function closeNavigation({
    returnFocus = false
} = {}) {
    if (
        !navToggle ||
        !mainNav ||
        !siteHeader
    ) {
        return;
    }

    const wasOpen = isNavigationOpen();

    navToggle.classList.remove("active");
    mainNav.classList.remove("open");
    siteHeader.classList.remove("menu-active");

    navToggle.setAttribute(
        "aria-expanded",
        "false"
    );

    navToggle.setAttribute(
        "aria-label",
        "Open navigation menu"
    );

    if (
        returnFocus &&
        wasOpen
    ) {
        navToggle.focus();
    }
}


function toggleNavigation() {
    if (isNavigationOpen()) {
        closeNavigation();
    } else {
        openNavigation();
    }
}


function initializeNavigation() {
    if (
        !navToggle ||
        !mainNav ||
        !siteHeader
    ) {
        return;
    }

    navToggle.addEventListener(
        "click",
        toggleNavigation
    );

    mainNav
        .querySelectorAll("a")
        .forEach((link) => {
            link.addEventListener(
                "click",
                () => {
                    closeNavigation();
                }
            );
        });

    document.addEventListener(
        "click",
        (event) => {
            if (!isNavigationOpen()) {
                return;
            }

            if (
                siteHeader.contains(
                    event.target
                )
            ) {
                return;
            }

            closeNavigation();
        }
    );

    window.addEventListener(
        "resize",
        () => {
            if (
                window.innerWidth >
                CONFIG.mobileBreakpoint
            ) {
                closeNavigation();
            }
        }
    );
}


/* =========================================================
   8. HEADER SCROLL EFFECT
========================================================= */

let headerScrollTicking = false;


function updateHeaderBackground() {
    if (!siteHeader) {
        return;
    }

    siteHeader.classList.toggle(
        "scrolled",
        window.scrollY > 32
    );
}


function handleHeaderScroll() {
    if (headerScrollTicking) {
        return;
    }

    headerScrollTicking = true;

    window.requestAnimationFrame(() => {
        updateHeaderBackground();
        headerScrollTicking = false;
    });
}


function initializeHeaderScroll() {
    if (!siteHeader) {
        return;
    }

    window.addEventListener(
        "scroll",
        handleHeaderScroll,
        {
            passive: true
        }
    );

    updateHeaderBackground();
}


/* =========================================================
   9. HERO SLIDESHOW
========================================================= */

let heroSlides = [];
let currentHeroIndex = 0;
let heroTimer = null;


function createHeroSlides() {
    if (!heroSlidesContainer) {
        return;
    }

    heroSlidesContainer.replaceChildren();

    const fragment =
        document.createDocumentFragment();

    heroImages.forEach(
        (imageURL, index) => {
            const slide =
                document.createElement("div");

            slide.className =
                index === 0
                    ? "hero-slide active"
                    : "hero-slide";

            slide.style.backgroundImage =
                `url("${imageURL}")`;

            fragment.appendChild(slide);
        }
    );

    heroSlidesContainer.appendChild(fragment);

    heroSlides = Array.from(
        heroSlidesContainer.querySelectorAll(
            ".hero-slide"
        )
    );
}


function showHeroSlide(index) {
    if (heroSlides.length === 0) {
        return;
    }

    heroSlides[currentHeroIndex]
        ?.classList.remove("active");

    currentHeroIndex =
        (index + heroSlides.length) %
        heroSlides.length;

    heroSlides[currentHeroIndex]
        ?.classList.add("active");
}


function stopHeroSlideshow() {
    if (heroTimer === null) {
        return;
    }

    window.clearInterval(heroTimer);
    heroTimer = null;
}


function startHeroSlideshow() {
    stopHeroSlideshow();

    if (
        heroSlides.length <= 1 ||
        reducedMotionQuery.matches ||
        document.hidden
    ) {
        return;
    }

    heroTimer = window.setInterval(() => {
        showHeroSlide(
            currentHeroIndex + 1
        );
    }, CONFIG.heroInterval);
}


function initializeHeroSlideshow() {
    createHeroSlides();
    startHeroSlideshow();

    document.addEventListener(
        "visibilitychange",
        () => {
            if (document.hidden) {
                stopHeroSlideshow();
            } else {
                startHeroSlideshow();
            }
        }
    );

    reducedMotionQuery.addEventListener?.(
        "change",
        () => {
            startHeroSlideshow();
        }
    );
}


/* =========================================================
   10. CAPTION CREATION
========================================================= */

function createCaptionContent(
    container,
    photo
) {
    container.replaceChildren();

    const category =
        document.createElement("span");

    category.className =
        "gallery-category";

    category.textContent =
        photo.category.toUpperCase();

    container.appendChild(category);

    container.appendChild(
        document.createTextNode(
            ` · ${photo.label}`
        )
    );

    container.appendChild(
        document.createElement("br")
    );

    container.appendChild(
        document.createTextNode(
            photo.exif
        )
    );
}


/* =========================================================
   11. GALLERY RENDERING
========================================================= */

function markGalleryImageLoaded(
    item,
    image
) {
    item.classList.add("image-loaded");
    item.classList.remove("image-error");

    image.setAttribute(
        "data-loaded",
        "true"
    );
}


function markGalleryImageError(item) {
    item.classList.add("image-error");
    item.classList.remove("image-loaded");
}


function createGalleryItem(
    photo,
    index
) {
    const item =
        document.createElement("article");

    const sizeClass =
        photo.size &&
        photo.size !== "normal"
            ? ` ${photo.size}`
            : "";

    item.className =
        `gallery-item${sizeClass}`;

    item.dataset.category =
        photo.category;

    item.dataset.index =
        String(index);

    item.tabIndex = 0;

    item.setAttribute(
        "role",
        "button"
    );

    item.setAttribute(
        "aria-label",
        `Open ${photo.label} photograph`
    );

    const image =
        document.createElement("img");

    image.alt = photo.alt;
    image.loading = "lazy";
    image.decoding = "async";

    image.addEventListener(
        "load",
        () => {
            markGalleryImageLoaded(
                item,
                image
            );
        },
        {
            once: true
        }
    );

    image.addEventListener(
        "error",
        () => {
            markGalleryImageError(item);
        },
        {
            once: true
        }
    );

    image.src = photo.src;

    /*
       Cached image ஏற்கனவே load ஆகியிருந்தால்
       load event miss ஆகாமல் handle செய்கிறது.
    */

    if (
        image.complete &&
        image.naturalWidth > 0
    ) {
        queueMicrotask(() => {
            markGalleryImageLoaded(
                item,
                image
            );
        });
    }

    const caption =
        document.createElement("div");

    caption.className =
        "gallery-caption";

    createCaptionContent(
        caption,
        photo
    );

    item.appendChild(image);
    item.appendChild(caption);

    item.addEventListener(
        "click",
        () => {
            openLightbox(index);
        }
    );

    item.addEventListener(
        "keydown",
        (event) => {
            if (
                event.key !== "Enter" &&
                event.key !== " "
            ) {
                return;
            }

            event.preventDefault();

            openLightbox(index);
        }
    );

    return item;
}


function renderGallery() {
    if (!galleryGrid) {
        return;
    }

    galleryGrid.replaceChildren();

    const fragment =
        document.createDocumentFragment();

    photos.forEach(
        (photo, index) => {
            fragment.appendChild(
                createGalleryItem(
                    photo,
                    index
                )
            );
        }
    );

    galleryGrid.appendChild(fragment);
}


/* =========================================================
   12. REVEAL OBSERVER
========================================================= */

let revealObserver = null;


function showAllRevealElements() {
    document
        .querySelectorAll(
            ".reveal, .gallery-item"
        )
        .forEach((element) => {
            element.classList.add("visible");
        });
}


function initializeRevealObserver() {
    if (
        reducedMotionQuery.matches ||
        !("IntersectionObserver" in window)
    ) {
        showAllRevealElements();
        return;
    }

    revealObserver =
        new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (
                        !entry.isIntersecting
                    ) {
                        return;
                    }

                    entry.target.classList.add(
                        "visible"
                    );

                    observer.unobserve(
                        entry.target
                    );
                });
            },
            {
                threshold: 0.08,

                rootMargin:
                    "0px 0px -30px 0px"
            }
        );

    document
        .querySelectorAll(
            ".reveal, .gallery-item"
        )
        .forEach((element) => {
            revealObserver.observe(element);
        });
}


/* =========================================================
   13. GALLERY FILTER
========================================================= */

let activeFilter = "all";


function getGalleryItems() {
    return Array.from(
        document.querySelectorAll(
            ".gallery-item"
        )
    );
}


function filterGallery(category) {
    activeFilter = category;

    getGalleryItems().forEach((item) => {
        const matchesCategory =
            category === "all" ||
            item.dataset.category === category;

        item.classList.toggle(
            "hidden-category",
            !matchesCategory
        );

        item.setAttribute(
            "aria-hidden",
            String(!matchesCategory)
        );

        if (matchesCategory) {
            item.classList.add("visible");
        }
    });
}


function initializeGalleryFilters() {
    filterButtons.forEach((button) => {
        const isActive =
            button.classList.contains(
                "active"
            );

        button.setAttribute(
            "aria-pressed",
            String(isActive)
        );

        button.addEventListener(
            "click",
            () => {
                filterButtons.forEach(
                    (item) => {
                        item.classList.remove(
                            "active"
                        );

                        item.setAttribute(
                            "aria-pressed",
                            "false"
                        );
                    }
                );

                button.classList.add("active");

                button.setAttribute(
                    "aria-pressed",
                    "true"
                );

                filterGallery(
                    button.dataset.filter ||
                    "all"
                );
            }
        );
    });
}


/* =========================================================
   14. LIGHTBOX
========================================================= */

let currentPhotoIndex = 0;
let previousFocusedElement = null;

let touchStartX = 0;
let touchStartY = 0;


function isLightboxOpen() {
    return Boolean(
        lightbox?.classList.contains("open")
    );
}


function getVisiblePhotoIndexes() {
    return photos
        .map((photo, index) => {
            const isVisible =
                activeFilter === "all" ||
                photo.category ===
                    activeFilter;

            return isVisible
                ? index
                : null;
        })
        .filter(
            (index) => index !== null
        );
}


function preloadImage(url) {
    const image = new Image();
    image.src = url;
}


function preloadAdjacentPhotos() {
    const visibleIndexes =
        getVisiblePhotoIndexes();

    if (visibleIndexes.length <= 1) {
        return;
    }

    const currentPosition =
        visibleIndexes.indexOf(
            currentPhotoIndex
        );

    if (currentPosition === -1) {
        return;
    }

    const previousPosition =
        currentPosition === 0
            ? visibleIndexes.length - 1
            : currentPosition - 1;

    const nextPosition =
        currentPosition ===
        visibleIndexes.length - 1
            ? 0
            : currentPosition + 1;

    const previousIndex =
        visibleIndexes[previousPosition];

    const nextIndex =
        visibleIndexes[nextPosition];

    preloadImage(
        photos[previousIndex].full
    );

    preloadImage(
        photos[nextIndex].full
    );
}


function renderLightbox() {
    if (
        !lightboxImage ||
        !lightboxCaption
    ) {
        return;
    }

    const photo =
        photos[currentPhotoIndex];

    if (!photo) {
        return;
    }

    lightboxImage.src = photo.full;
    lightboxImage.alt = photo.alt;

    createCaptionContent(
        lightboxCaption,
        photo
    );

    preloadAdjacentPhotos();
}


function openLightbox(index) {
    if (
        !lightbox ||
        !lightboxClose
    ) {
        return;
    }

    const photo = photos[index];

    if (!photo) {
        return;
    }

    previousFocusedElement =
        document.activeElement;

    currentPhotoIndex = index;

    renderLightbox();

    lightbox.classList.add("open");

    body.classList.add(
        "lightbox-open"
    );

    lightbox.setAttribute(
        "aria-hidden",
        "false"
    );

    window.requestAnimationFrame(() => {
        lightboxClose.focus();
    });
}


function closeLightbox() {
    if (
        !lightbox ||
        !lightboxImage
    ) {
        return;
    }

    lightbox.classList.remove("open");

    body.classList.remove(
        "lightbox-open"
    );

    lightbox.setAttribute(
        "aria-hidden",
        "true"
    );

    lightboxImage.src = "";
    lightboxImage.alt = "";

    if (
        previousFocusedElement instanceof HTMLElement &&
        previousFocusedElement.isConnected
    ) {
        previousFocusedElement.focus();
    }

    previousFocusedElement = null;
}


function showPreviousPhoto() {
    const visibleIndexes =
        getVisiblePhotoIndexes();

    if (visibleIndexes.length === 0) {
        return;
    }

    const currentPosition =
        visibleIndexes.indexOf(
            currentPhotoIndex
        );

    const previousPosition =
        currentPosition <= 0
            ? visibleIndexes.length - 1
            : currentPosition - 1;

    currentPhotoIndex =
        visibleIndexes[previousPosition];

    renderLightbox();
}


function showNextPhoto() {
    const visibleIndexes =
        getVisiblePhotoIndexes();

    if (visibleIndexes.length === 0) {
        return;
    }

    const currentPosition =
        visibleIndexes.indexOf(
            currentPhotoIndex
        );

    const nextPosition =
        currentPosition === -1 ||
        currentPosition >=
            visibleIndexes.length - 1
            ? 0
            : currentPosition + 1;

    currentPhotoIndex =
        visibleIndexes[nextPosition];

    renderLightbox();
}


function trapLightboxFocus(event) {
    if (
        event.key !== "Tab" ||
        !lightbox
    ) {
        return;
    }

    const focusableElements =
        Array.from(
            lightbox.querySelectorAll(
                `
                button:not([disabled]),
                a[href],
                [tabindex]:not([tabindex="-1"])
                `
            )
        ).filter((element) => {
            return (
                element instanceof HTMLElement &&
                element.offsetParent !== null
            );
        });

    if (focusableElements.length === 0) {
        event.preventDefault();
        return;
    }

    const firstElement =
        focusableElements[0];

    const lastElement =
        focusableElements[
            focusableElements.length - 1
        ];

    if (
        event.shiftKey &&
        document.activeElement === firstElement
    ) {
        event.preventDefault();
        lastElement.focus();
        return;
    }

    if (
        !event.shiftKey &&
        document.activeElement === lastElement
    ) {
        event.preventDefault();
        firstElement.focus();
    }
}


function handleLightboxKeyboard(event) {
    if (!isLightboxOpen()) {
        return;
    }

    trapLightboxFocus(event);

    if (event.key === "Escape") {
        event.preventDefault();
        closeLightbox();
    }

    if (event.key === "ArrowLeft") {
        event.preventDefault();
        showPreviousPhoto();
    }

    if (event.key === "ArrowRight") {
        event.preventDefault();
        showNextPhoto();
    }
}


function handleLightboxTouchStart(event) {
    const touch =
        event.changedTouches[0];

    touchStartX = touch.clientX;
    touchStartY = touch.clientY;
}


function handleLightboxTouchEnd(event) {
    const touch =
        event.changedTouches[0];

    const distanceX =
        touch.clientX - touchStartX;

    const distanceY =
        touch.clientY - touchStartY;

    const isHorizontalSwipe =
        Math.abs(distanceX) >
        Math.abs(distanceY);

    if (
        !isHorizontalSwipe ||
        Math.abs(distanceX) <
            CONFIG.swipeThreshold
    ) {
        return;
    }

    if (distanceX > 0) {
        showPreviousPhoto();
    } else {
        showNextPhoto();
    }
}


function initializeLightbox() {
    if (
        !lightbox ||
        !lightboxClose ||
        !lightboxPrevious ||
        !lightboxNext
    ) {
        return;
    }

    lightboxClose.addEventListener(
        "click",
        closeLightbox
    );

    lightboxPrevious.addEventListener(
        "click",
        showPreviousPhoto
    );

    lightboxNext.addEventListener(
        "click",
        showNextPhoto
    );

    lightbox.addEventListener(
        "click",
        (event) => {
            if (event.target === lightbox) {
                closeLightbox();
            }
        }
    );

    lightboxContent?.addEventListener(
        "touchstart",
        handleLightboxTouchStart,
        {
            passive: true
        }
    );

    lightboxContent?.addEventListener(
        "touchend",
        handleLightboxTouchEnd,
        {
            passive: true
        }
    );

    document.addEventListener(
        "keydown",
        handleLightboxKeyboard
    );
}


/* =========================================================
   15. FAQ ACCORDION
========================================================= */

function closeAllFAQItems() {
    document
        .querySelectorAll(".faq-item")
        .forEach((item) => {
            item.classList.remove("open");

            const button =
                item.querySelector(
                    ".faq-question"
                );

            button?.setAttribute(
                "aria-expanded",
                "false"
            );
        });
}


function initializeFAQ() {
    faqQuestions.forEach((question) => {
        question.addEventListener(
            "click",
            () => {
                const currentItem =
                    question.closest(
                        ".faq-item"
                    );

                if (!currentItem) {
                    return;
                }

                const isOpen =
                    currentItem.classList.contains(
                        "open"
                    );

                closeAllFAQItems();

                if (isOpen) {
                    return;
                }

                currentItem.classList.add(
                    "open"
                );

                question.setAttribute(
                    "aria-expanded",
                    "true"
                );
            }
        );
    });
}


/* =========================================================
   16. GLOBAL ESCAPE KEY
========================================================= */

function initializeGlobalKeyboard() {
    document.addEventListener(
        "keydown",
        (event) => {
            if (
                event.key === "Escape" &&
                isNavigationOpen() &&
                !isLightboxOpen()
            ) {
                closeNavigation({
                    returnFocus: true
                });
            }
        }
    );
}


/* =========================================================
   17. INITIALIZE WEBSITE
========================================================= */

function initializeWebsite() {
    updateCurrentYear();

    updateWhatsAppLinks();

    initializeNavigation();

    initializeHeaderScroll();

    initializeHeroSlideshow();

    renderGallery();

    initializeGalleryFilters();

    initializeRevealObserver();

    initializeLightbox();

    initializeFAQ();

    initializeGlobalKeyboard();
}


initializeWebsite();
