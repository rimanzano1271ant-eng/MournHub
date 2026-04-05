/* CURSOR TRAIL */
document.addEventListener("mousemove", function(e) {
    let dot = document.createElement("div");
    dot.style.position = "fixed";
    dot.style.left = e.pageX + "px";
    dot.style.top = e.pageY + "px";
    dot.style.width = "5px";
    dot.style.height = "5px";
    dot.style.background = "#ffA500";
    dot.style.borderRadius = "50%";
    dot.style.pointerEvents = "none";

    document.body.appendChild(dot);

    setTimeout(() => dot.remove(), 300);
});

/* SCROLL ANIMATION */
const faders = document.querySelectorAll('.fade-in');

function showOnScroll() {
    faders.forEach(el => {
        const rect = el.getBoundingClientRect().top;
        if (rect < window.innerHeight - 50) {
            el.classList.add("visible");
        }
    });
}

window.addEventListener("scroll", showOnScroll);
window.addEventListener("load", showOnScroll);