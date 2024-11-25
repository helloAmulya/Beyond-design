const menuButton = document.querySelector('.menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-nav-item');

menuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('open'); 
});
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('translate-x-[100%]');
    });
});

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const sections = document.querySelectorAll('.section-to-animate');
sections.forEach(section => {
    observer.observe(section);
});
