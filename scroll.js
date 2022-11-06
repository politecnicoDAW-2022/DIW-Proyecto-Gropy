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
            this.GUI.header.classList.replace(
                'header-scroll-animation-off',
                'header-scroll-animation-on'
            );
            this.GUI.logo.classList.replace(
                'logo-scroll-animation-off',
                'logo-scroll-animation-on'
            );
        } else {
            this.GUI.header.classList.replace(
                'header-scroll-animation-on',
                'header-scroll-animation-off'
            );
            this.GUI.logo.classList.replace(
                'logo-scroll-animation-on',
                'logo-scroll-animation-off'
            );
        }
    };
}

export { ScrollAnimations };
