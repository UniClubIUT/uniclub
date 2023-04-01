// sticky navigation //
const header = document.querySelector("header.header");
let scrollHeight;

document.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
        header.classList.add("hide");
    } else {
        header.classList.remove("hide");
        header.classList.remove("fixed");
    }

    
    if ((window.scrollY < scrollHeight) && window.scrollY > 0) {
        header.classList.add("fixed");
        header.classList.remove("hide");
    }
    
    scrollHeight = window.scrollY;
});