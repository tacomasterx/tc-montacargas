const mobileNavCtrl = () => {
    const headerBtn = document.querySelector('.header__bars');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav__link');

    // State
    let isMobileNavOpen = false;

    // Handlers
    const toggleMobileMenu = () => {
        isMobileNavOpen = !isMobileNavOpen;                                               
        if (isMobileNavOpen) {
            mobileNav.style.display = 'flex';
            document.body.style.overflowY = 'hidden';                                               
        } else {
            mobileNav.style.display = 'none';
            document.body.style.overflowY = 'auto';
        }
    };

    const toggleScroll = () => {
        isMobileNavOpen = false;
        mobileNav.style.display = 'none';
        document.body.style.overflowY = 'auto';                                                                           
    }
    
    // Events
    headerBtn.addEventListener('click', () => toggleMobileMenu());

    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => toggleScroll());
    });
};

export default mobileNavCtrl;
