import { loadMenuItems } from './menu.js';
import { initializeReservationSystem } from './reservations.js';
import { loadCelebrities } from './celebrities.js';
import { loadTestimonials } from './testimonials.js';
import { initAnimations } from './animations.js';

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('Ruby\'s Diner website initialized!');
    
    // Initialize menu system
    loadMenuItems();
    
    // Initialize reservation system
    initializeReservationSystem();
    
    // Load celebrity profiles
    loadCelebrities();
    
    // Load customer testimonials/reviews
    loadTestimonials();
    
    // Initialize animations
    initAnimations();
    
    // Set up navigation highlighting
    setupNavigation();
});

// Function to handle smooth scrolling and navigation highlighting
function setupNavigation() {
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links
            navLinks.forEach(link => link.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Smooth scroll to section
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
    
    // Update active link based on scroll position
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}