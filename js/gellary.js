document.addEventListener('DOMContentLoaded', () => {
    // 1. Navbar Logic
    const navbar = document.getElementById('mainNav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('nav-scrolled');
        } else {
            navbar.classList.remove('nav-scrolled');
        }
    });

    // 2. Slider Logic Fix
    const slides = document.querySelectorAll('.slide');
    const dotsContainer = document.querySelector('.slider-dots');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentSlide = 0;
    let autoSlideInterval;

    function goToSlide(n) {
        slides[currentSlide].classList.remove('active');
        dots[currentSlide].classList.remove('active');
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }

    // Initialize Dots
    slides.forEach((_, i) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => {
            goToSlide(i);
            resetInterval();
        });
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.dot');

    // Click Events
    nextBtn.addEventListener('click', (e) => {
        e.preventDefault();
        goToSlide(currentSlide + 1);
        resetInterval();
    });

    prevBtn.addEventListener('click', (e) => {
        e.preventDefault();
        goToSlide(currentSlide - 1);
        resetInterval();
    });

    function startAutoSlide() {
        autoSlideInterval = setInterval(() => goToSlide(currentSlide + 1), 5000);
    }

    function resetInterval() {
        clearInterval(autoSlideInterval);
        startAutoSlide();
    }

    startAutoSlide();
});