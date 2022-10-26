window.onscroll = function () {
    scrollingAnimation();
};

function scrollingAnimation() {
    const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
    const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById('separator-scroll').style.width = scrolled + '%';
    console.log(separator);
}
