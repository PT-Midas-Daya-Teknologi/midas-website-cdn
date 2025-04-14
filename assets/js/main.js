!(function () {
    "use strict";
    const e = document.querySelector("#preloader");
    e &&
        window.addEventListener("load", () => {
            e.remove();
        });
    let t = document.querySelector(".scroll-top");
    document.getElementById("video-hero"),
        document.getElementById("video-hero-container");
    function o() {
        t &&
            (window.scrollY > 100
                ? t.classList.add("active")
                : t.classList.remove("active"));
    }
    function n() {
        const e = document.querySelector("body"),
            t = document.querySelector("#header");
        (t.classList.contains("scroll-up-sticky") ||
            t.classList.contains("sticky-top") ||
            t.classList.contains("fixed-top")) &&
            (window.scrollY > 100
                ? e.classList.add("scrolled")
                : e.classList.remove("scrolled"));
    }
    t.addEventListener("click", (e) => {
        e.preventDefault(), window.scrollTo({ top: 0, behavior: "smooth" });
    }),
        window.addEventListener("load", o),
        document.addEventListener("scroll", o),
        document.addEventListener("scroll", n),
        window.addEventListener("load", n);
    let i = 0;
    window.addEventListener("scroll", function () {
        const e = document.querySelector("#header");
        if (!e.classList.contains("scroll-up-sticky")) return;
        let t = window.pageYOffset || document.documentElement.scrollTop;
        t > i && t > e.offsetHeight
            ? (e.style.setProperty("position", "sticky", "important"),
                (e.style.top = `-${e.offsetHeight + 50}px`))
            : t > e.offsetHeight
                ? (e.style.setProperty("position", "sticky", "important"),
                    (e.style.top = "0"))
                : (e.style.removeProperty("top"), e.style.removeProperty("position")),
            (i = t);
    });
    const c = document.querySelector(".mobile-nav-toggle");
    function s() {
        document.querySelector("body").classList.toggle("mobile-nav-active"),
            c.classList.toggle("bi-list"),
            c.classList.toggle("bi-x");
    }
    c.addEventListener("click", s),
        document.querySelectorAll("#navmenu a").forEach((e) => {
            e.addEventListener("click", () => {
                document.querySelector(".mobile-nav-active") && s();
            });
        }),
        document.querySelectorAll(".navmenu .has-dropdown i").forEach((e) => {
            e.addEventListener("click", function (e) {
                document.querySelector(".mobile-nav-active") &&
                    (e.preventDefault(),
                        this.parentNode.classList.toggle("active"),
                        this.parentNode.nextElementSibling.classList.toggle(
                            "dropdown-active"
                        ),
                        e.stopImmediatePropagation());
            });
        }),
        window.addEventListener("load", function (e) {
            window.location.hash &&
                document.querySelector(window.location.hash) &&
                setTimeout(() => {
                    let e = document.querySelector(window.location.hash),
                        t = getComputedStyle(e).scrollMarginTop;
                    window.scrollTo({
                        top: e.offsetTop - parseInt(t),
                        behavior: "smooth",
                    });
                }, 100);
        }),
        document
            .querySelectorAll(".faq-item h3, .faq-item .faq-toggle")
            .forEach((e) => {
                e.addEventListener("click", () => {
                    e.parentNode.classList.toggle("faq-active");
                });
            }),
        window.addEventListener("load", function () {
            document.querySelectorAll(".swiper").forEach(function (e) {
                let t = JSON.parse(e.querySelector(".swiper-config").innerHTML.trim());
                new Swiper(e, t);
            });
        }),
        document.addEventListener("DOMContentLoaded", function () {
            const e = document.querySelectorAll(".about");
            let t = -1,
                o = window.pageYOffset || document.documentElement.scrollTop;
            function n(o) {
                "down" === o && t < e.length - 1 ? t++ : "up" === o && t > 0 && t--,
                    e.forEach((e, o) => {
                        e.classList.remove("fade-up", "fade-out"),
                            o === t
                                ? e.classList.add("fade-up")
                                : o < t && e.classList.add("fade-out");
                    });
            }
            window.addEventListener("scroll", function () {
                n(
                    (function () {
                        const e = window.pageYOffset || document.documentElement.scrollTop,
                            t = e > o ? "down" : "up";
                        return (o = e <= 0 ? 0 : e), t;
                    })()
                );
            }),
                n("down");
        }),
        window.addEventListener("load", function () {
            AOS.init({ duration: 700, easing: "ease-in-out", once: !1, mirror: !0 });
        });

    // Highlight the active section in the nav menu
    document.addEventListener('DOMContentLoaded', () => {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('#navmenu a');

        window.addEventListener('scroll', () => {
            let current = '';

            // Check each section's position
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                if (pageYOffset >= sectionTop - sectionHeight / 3) {
                    current = section.getAttribute('id');
                }
            });

            // Remove and add 'active' class to links
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });
    });
})();