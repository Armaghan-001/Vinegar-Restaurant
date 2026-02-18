// 2. NAVBAR TRANSPARENCY LOGICy
// NAVBAR SCROLL EFFECT
const nav = document.getElementById('mainNav');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.classList.add('nav-scrolled');
    } else {
        nav.classList.remove('nav-scrolled');
    }
});
// 3. MOVING DOT (MAGNETIC DOT) LOGIC
const navItems = document.querySelectorAll('.navbar-nav .nav-item');
const dot = document.querySelector('.nav-dot');

function moveDot(element) {
    if(!dot) return; // Agar dot nahi mila to error na aaye
    const itemWidth = element.offsetWidth;
    const itemLeft = element.offsetLeft;

    // Dot ko item ke center mein lane ki calculation
    const dotPos = itemLeft + (itemWidth / 2) - 4; 

    dot.style.transform = `translateX(${dotPos}px)`;
    dot.style.opacity = "1";
}

// Mouse movement par dot ko hilana
navItems.forEach(item => {
    item.addEventListener('mouseenter', () => moveDot(item));
});

// Jab mouse navbar se bahar jaye to pehle link (Home) par wapas jaye
const navBarUl = document.querySelector('.navbar-nav');
if(navBarUl) {
    navBarUl.addEventListener('mouseleave', () => {
        moveDot(navItems[0]);
    });
}

// Page load hote hi dot ko Home par set karna
document.addEventListener('DOMContentLoaded', () => {
    if(navItems.length > 0) {
        setTimeout(() => moveDot(navItems[0]), 100); // Thora delay taake width sahi calculate ho
    }
});

function scrollManual(distance) {
    const scroller = document.getElementById('topScroller');
    if (scroller) {
        scroller.scrollBy({
            left: distance,
            behavior: 'smooth'
        });
    }
}