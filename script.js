document.addEventListener("DOMContentLoaded", () => {
    
    // 0. PRELOADER LOGIC
    // Listens for the entire page (images, CSS) to finish loading
    window.addEventListener('load', () => {
        const preloader = document.getElementById('preloader');
        // Add a slight delay so the animation can be appreciated before fading
        setTimeout(() => {
            preloader.classList.add('loaded');
        }, 1200); 
    });

    // 1. MOBILE MENU
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('nav-links');
    const navItems = document.querySelectorAll('.nav-links li a');

    // Toggle menu when clicking the hamburger icon
    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenu.classList.toggle('is-active');
    });

    // Loop through each link and close the menu when clicked
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileMenu.classList.remove('is-active');
        });
    });

    // 2. SCROLL EFFECTS
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        window.scrollY > 50 ? navbar.classList.add('scrolled') : navbar.classList.remove('scrolled');
    });

    // 3. REVEAL OBSERVER
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); 
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
});