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
