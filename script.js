// Sticky Menu
const nav = document.getElementsByTagName("nav")[0];
const topOfNav = nav.offsetTop;

console.log(nav);

window.onscroll = () => {
    if (window.scrollY >= topOfNav) {
        nav.classList.add("fixed-nav");
    } else {
        nav.classList.remove("fixed-nav");
    }
}
