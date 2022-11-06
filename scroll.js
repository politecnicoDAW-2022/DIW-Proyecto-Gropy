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
        document.getElementById('separator-scroll').style.width =
            scrolled + '%';
    };

    logo = () => {
        if (
            document.body.scrollTop > 50 ||
            document.documentElement.scrollTop > 50
        ) {
            this.GUI.logo.style.paddingTop = '15px';
            this.GUI.logo.style.width = '70%';
            this.GUI.logo.style.marginLeft = '250px';
            this.GUI.logo.style.objectFit = 'cover';
            this.GUI.logo.style.objectPosition = '90px';
        } else {
            this.GUI.logo.style.paddingTop = '40px';
            this.GUI.logo.style.width = '100%';
            this.GUI.logo.style.marginLeft = '0px';
            this.GUI.logo.style.objectFit = '';
            this.GUI.logo.style.objectPosition = '';
        }
    };
}

export { ScrollAnimations };
