/**
 * Ruby's Diner Animation System
 * 
 * This module handles all visual animations and effects for the website.
 * Features include:
 * - Scroll-triggered fade-in animations for sections
 * - Hover effects for menu items
 * - Parallax scrolling effect for the hero section
 * - CSS-based transitions and transforms
 * - Intersection Observer API for performance-optimized scroll detection
 */

/**
 * Initializes all animation systems
 * Sets up scroll observers, parallax effects, and hover animations
 * 
 * @export - Available for import by other modules
 */
export function initAnimations() {
    /**
     * Configure Intersection Observer for scroll-triggered animations
     * This provides better performance than traditional scroll event listeners
     */
    const observerOptions = {
        root: null, // Use the viewport as the root
        rootMargin: '0px', // No margin around the root
        threshold: 0.1 // Trigger when 10% of the element is visible
    };
    
    /**
     * Create intersection observer to handle scroll animations
     * Adds 'animate' class when elements come into view
     */
    const observer = new IntersectionObserver((entries) => {
        // Process each element that has entered or left the viewport
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add animation class when element becomes visible
                entry.target.classList.add('animate');
                // Stop observing this element once animated (one-time animation)
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    /**
     * Set up elements for scroll animations
     * Adds animation-ready class and registers elements with the observer
     */
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        // Add class that sets initial hidden state
        section.classList.add('animation-ready');
        // Register element for intersection observation
        observer.observe(section);
    });
    
    /**
     * Inject CSS animation styles into the document
     * Includes fade-in animations, hover effects, and parallax styling
     */
    const animationStyles = document.createElement('style');
    animationStyles.innerHTML = `
        /* Initial state for elements before they're animated */
        .animation-ready {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.8s ease, transform 0.8s ease;
        }
        
        /* Final state when animation is triggered */
        .animate {
            opacity: 1;
            transform: translateY(0);
        }
        
        /* Menu item hover animations */
        .menu-item {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .menu-item:hover {
            transform: translateY(-10px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
        }
        
        /* Hero section styling for parallax effect */
        .hero {
            position: relative;
            overflow: hidden;
        }
        
        /* Overlay effect for hero section */
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
    // Add styles to document head
    document.head.appendChild(animationStyles);
    
    /**
     * Parallax scrolling effect for the hero section
     * Creates a subtle background movement effect as the user scrolls
     */
    window.addEventListener('scroll', () => {
        const hero = document.querySelector('.hero');
        const scrollPosition = window.pageYOffset;
        
        // Apply parallax effect by moving background slower than scroll
        if (hero) {
            hero.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
        }
    });
    
    /**
     * Add staggered animation delays to menu items
     * Creates a cascading effect when menu items animate in
     */
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach((item, index) => {
        // Stagger animations by 0.1 seconds per item
        item.style.animationDelay = `${index * 0.1}s`;
    });
}