// Animation functions
export function initAnimations() {
    // Add intersection observer for scroll animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Elements to animate
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        // Add animation-ready class
        section.classList.add('animation-ready');
        observer.observe(section);
    });
    
    // Add animation styles
    const animationStyles = document.createElement('style');
    animationStyles.innerHTML = `
        .animation-ready {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.8s ease, transform 0.8s ease;
        }
        
        .animate {
            opacity: 1;
            transform: translateY(0);
        }
        
        .menu-item {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .menu-item:hover {
            transform: translateY(-10px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
        }
        
        .hero {
            position: relative;
            overflow: hidden;
        }
        
        .hero::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(45deg, var(--cherry-red), transparent);
            opacity: 0.3;
            mix-blend-mode: overlay;
        }
    `;
    document.head.appendChild(animationStyles);
    
    // Add parallax effect to the hero section
    window.addEventListener('scroll', () => {
        const hero = document.querySelector('.hero');
        const scrollPosition = window.pageYOffset;
        
        if (hero) {
            hero.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
        }
    });
    
    // Add some subtle animations to the menu items
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
    });
}