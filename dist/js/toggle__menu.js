const headerNav = document.querySelector(".header__nav");
const toggleMenu = document.querySelector(".toggle__menu");
const backDrop = document.querySelector(".backdrop");
const body = document.querySelector("body");

window.addEventListener("scroll", () => {
    if (window.scrollY >= 100 && !headerNav.classList.contains("open") && !toggleMenu.classList.contains("open")) {
        headerNav.classList.add("open");
    } else if (window.scrollY < 100 && !toggleMenu.classList.contains("open")) {
        headerNav.classList.remove("open");
    }
});

toggleMenu.addEventListener("click", () => {
    const isOpen = headerNav.classList.toggle("open");
    toggleMenu.classList.toggle("open");
    backDrop.classList.toggle("open");

    body.style.overflow = isOpen ? "hidden" : "";

    if (isOpen) {
        headerNav.style.display = "block";
        backDrop.style.display = "block";
    } else {
        headerNav.style.display = "none";
        backDrop.style.display = "none";
    }
});
