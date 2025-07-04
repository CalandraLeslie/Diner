/**
 * Ruby's Diner Website - Main Application Entry Point
 * 
 * This module serves as the main entry point for the Ruby's Diner website.
 * It coordinates the initialization of all website components including:
 * - Menu system with tabbed navigation
 * - Reservation booking system
 * - Celebrity visitor showcase
 * - Customer testimonials
 * - Scroll animations and effects
 * - Navigation highlighting
 */

// Import all module functions
import { loadMenuItems } from './menu.js';
import { initializeReservationSystem } from './reservations.js';
import { loadCelebrities } from './celebrities.js';
import { loadTestimonials } from './testimonials.js';
import { initAnimations } from './animations.js';

/**
 * Main initialization function that runs when the DOM is fully loaded
 * Ensures all website components are properly initialized in the correct order
 */
document.addEventListener('DOMContentLoaded', () => {
    console.log('Ruby\'s Diner website initialized!');
    
    // Initialize the dynamic menu system with category tabs
    loadMenuItems();
    
    // Set up the reservation booking form and modal system
    initializeReservationSystem();
    
    // Load and display celebrity visitor profiles with carousel
    loadCelebrities();
    
    // Load and display customer testimonials with star ratings
    loadTestimonials();
    
    // Initialize scroll animations and visual effects
    initAnimations();
    
    // Set up smooth scrolling navigation with active link highlighting
    setupNavigation();
});

/**
 * Sets up the navigation system with smooth scrolling and active link highlighting
 * 
 * Features:
 * - Smooth scrolling to sections when navigation links are clicked
 * - Active state management for navigation links
 * - Automatic highlighting based on scroll position
 * - Prevents default link behavior to enable smooth scrolling
 */
function setupNavigation() {
    // Get all navigation links in the header
    const navLinks = document.querySelectorAll('nav a');
    
    // Add click event listeners to each navigation link
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Prevent default anchor link behavior
            e.preventDefault();
            
            // Remove active class from all navigation links
            navLinks.forEach(link => link.classList.remove('active'));
            
            // Add active class to the clicked link
            this.classList.add('active');
            
            // Get the target section ID from the href attribute
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            // Smooth scroll to the target section
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
    
    /**
     * Update active navigation link based on current scroll position
     * This provides visual feedback about which section is currently in view
     */
    window.addEventListener('scroll', () => {
        let current = '';
        // Get all main sections on the page
        const sections = document.querySelectorAll('section');
        
        // Check which section is currently in the viewport
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            // Consider a section "active" if we're within 200px of its top
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        // Update navigation link highlighting based on current section
        navLinks.forEach(link => {
            // Remove active class from all links
            link.classList.remove('active');
            
            // Add active class to the link that matches the current section
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}