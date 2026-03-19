// Initialize AOS (Animate on Scroll)
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Initialize Swiper
const workSlider = new Swiper('.work-slider', {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    breakpoints: {
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }
});

// Initialize Hero Slider
const heroSlider = new Swiper('.hero-swiper', {
    speed: 1500,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    }
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    });
});

// Mobile Navigation
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
let isNavOpen = false;

navToggle.addEventListener('click', () => {
    isNavOpen = !isNavOpen;
    
    // Animate hamburger to X
    const lines = navToggle.querySelectorAll('.line');
    if (isNavOpen) {
        lines[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
        lines[1].style.transform = 'rotate(-45deg)';
        
        // Show mobile menu
        navLinks.style.display = 'flex';
        navLinks.style.position = 'fixed';
        navLinks.style.top = '80px';
        navLinks.style.left = '0';
        navLinks.style.width = '100%';
        navLinks.style.height = 'calc(100vh - 80px)';
        navLinks.style.backgroundColor = 'var(--primary-black)';
        navLinks.style.flexDirection = 'column';
        navLinks.style.justifyContent = 'center';
        navLinks.style.alignItems = 'center';
        navLinks.style.gap = '2rem';
    } else {
        lines[0].style.transform = 'none';
        lines[1].style.transform = 'none';
        
        // Hide mobile menu
        navLinks.style.display = 'none';
    }
});

// Form Animation
const formGroups = document.querySelectorAll('.form-group');

formGroups.forEach(group => {
    const input = group.querySelector('input, textarea');
    const label = group.querySelector('label');

    input.addEventListener('focus', () => {
        label.style.color = 'var(--primary-white)';
    });

    input.addEventListener('blur', () => {
        if (!input.value) {
            label.style.color = 'var(--accent-gray)';
        }
    });
});

// Parallax Effect on Hero Section
const hero = document.querySelector('.hero');
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    hero.style.transform = `translateY(${scrolled * 0.5}px)`;
});

// Cursor Animation
const cursor = document.createElement('div');
cursor.className = 'custom-cursor';
document.body.appendChild(cursor);

const cursorDot = document.createElement('div');
cursorDot.className = 'cursor-dot';
document.body.appendChild(cursorDot);

document.addEventListener('mousemove', (e) => {
    cursor.style.cssText = cursorDot.style.cssText = `
        left: ${e.clientX}px;
        top: ${e.clientY}px;
    `;
});

// Add cursor styles
const style = document.createElement('style');
style.textContent = `
    .custom-cursor {
        width: 30px;
        height: 30px;
        border: 1px solid var(--primary-white);
        border-radius: 50%;
        position: fixed;
        pointer-events: none;
        transition: width 0.3s, height 0.3s;
        z-index: 9999;
        transform: translate(-50%, -50%);
    }

    .cursor-dot {
        width: 4px;
        height: 4px;
        background: var(--primary-white);
        border-radius: 50%;
        position: fixed;
        pointer-events: none;
        z-index: 9999;
        transform: translate(-50%, -50%);
    }

    a:hover ~ .custom-cursor {
        width: 50px;
        height: 50px;
        background: rgba(255, 255, 255, 0.1);
    }
`;
document.head.appendChild(style);

// Page Load Animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 1s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Navigation Scroll Effect
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
}); 