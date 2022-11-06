class ScrollAnimations {
    GUI = {
        logo: document.querySelector('.logo img'),
        header: document.querySelector('header'),
        separator: document.querySelector('#separator-scroll'),
    };

    constructor() {
        this.addEvents();
    }

    addEvents() {
        window.addEventListener('scroll', this.progressBar);
        window.addEventListener('scroll', this.logo);
    }

    progressBar = () => {
        const winScroll =
            document.body.scrollTop || document.documentElement.scrollTop;
        const height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        this.GUI.separator.style.width = scrolled + '%';
    };

    logo = () => {
        if (
            document.body.scrollTop > 50 ||
            document.documentElement.scrollTop > 50
        ) {
            this.GUI.header.classList.add('header-scroll-animation');
            this.GUI.logo.classList.add('logo-scroll-animation');
        } else {
            this.GUI.header.classList.remove('header-scroll-animation');
            this.GUI.logo.classList.remove('logo-scroll-animation');
        }
    };
}

export { ScrollAnimations };
