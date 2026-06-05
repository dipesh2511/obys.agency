// Custom Cursor
const cursor = document.querySelector("#following-cursor");

document.addEventListener("mousemove", (e) => {
    gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        delay: 0.1,
        ease: "power2.out"
    });
});

// Initialize Shery Magnet Effect
Shery.makeMagnet("#nav-links h5");

// Cursor Scale on Hover
document.querySelectorAll("#nav-links h5").forEach((link) => {
    link.addEventListener("mouseenter", () => {
        gsap.to(cursor, {
            scale: 1.5,
            delay: 0.1,
            duration: 0.2,
            ease: "elastic.out(1, 0.5)"
        });
    });

    link.addEventListener("mouseleave", () => {
        gsap.to(cursor, {
            scale: 1,
            delay: 0.1,
            duration: 0.2,
            ease: "elastic.out(1, 0.5)"
        });
    });
});