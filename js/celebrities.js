/**
 * Ruby's Diner Celebrity Visitors Showcase
 * 
 * This module manages the display of famous celebrities who have visited the diner.
 * Features include:
 * - Celebrity profile cards with photos, visit dates, and stories
 * - Automatic horizontal scrolling carousel
 * - Pause-on-hover functionality
 * - Fallback images for missing photos
 * - Authentic 1950s celebrity stories
 */

/**
 * Celebrity visitor data
 * Each entry contains name, visit date, image path, and a story about their visit
 */
const celebrities = [
    {
        name: "Marilyn Monroe",
        visitDate: "June 12, 1955",
        image: "./assets/images/marilyn.jpg",
        story: "Marilyn stopped by after filming 'The Seven Year Itch' and ordered a strawberry milkshake and fries."
    },
    {
        name: "Elvis Presley",
        visitDate: "August 3, 1956",
        image: "./assets/images/elvis.jpg",
        story: "The King visited just after releasing 'Heartbreak Hotel' and tried our peanut butter burger, which is now named after him!"
    },
    {
        name: "James Dean",
        visitDate: "March 15, 1955",
        image: "./assets/images/james-dean.jpg",
        story: "James became a regular during the filming of 'Rebel Without a Cause' and always ordered the Double Deluxe."
    },
    {
        name: "Buddy Holly",
        visitDate: "November 2, 1957",
        image: "./assets/images/buddy-holly.jpg",
        story: "Buddy visited with his band The Crickets after a local show and signed our jukebox that's still here today!"
    },
    {
        name: "Audrey Hepburn",
        visitDate: "September 22, 1954",
        image: "./assets/images/audrey.jpg",
        story: "Audrey visited during a break from filming and enjoyed our famous vanilla milkshake with extra cherries."
    }
];

/**
 * Loads and displays celebrity visitor profiles in a carousel format
 * Sets up automatic scrolling with hover pause functionality
 * 
 * @export - Available for import by other modules
 */
export function loadCelebrities() {
    // Get the container element for celebrity cards
    const celebrityContainer = document.querySelector('.celebrity-carousel');
    
    // Create and append a card for each celebrity
    celebrities.forEach(celebrity => {
        const celebrityCard = document.createElement('div');
        celebrityCard.className = 'celebrity-card';
        
        // Create fallback image URL for missing photos
        const fallbackImage = `https://placehold.co/400x500/e2e8f0/1e293b?text=${celebrity.name}`;
        
        // Build the celebrity card HTML structure
        celebrityCard.innerHTML = `
            <img src="${celebrity.image}" alt="${celebrity.name}" onerror="this.src='${fallbackImage}'">
            <div class="celebrity-info">
                <h3>${celebrity.name}</h3>
                <p class="visit-date">Visited on ${celebrity.visitDate}</p>
                <p>${celebrity.story}</p>
            </div>
        `;
        
        // Add the card to the carousel container
        celebrityContainer.appendChild(celebrityCard);
    });
    
    /**
     * Automatic carousel scrolling functionality
     * Creates a smooth left-to-right scrolling effect that reverses at the ends
     */
    // Variables to track scroll position and direction
    let scrollPosition = 0;
    let scrollDirection = 1; // 1 for scrolling right, -1 for scrolling left
    
    /**
     * Auto-scroll function that moves the carousel smoothly
     * Changes direction when reaching the start or end of the carousel
     */
    function autoScroll() {
        const carousel = document.querySelector('.celebrity-carousel');
        const maxScroll = carousel.scrollWidth - carousel.clientWidth;
        
        // Reverse direction when reaching the boundaries
        if (scrollPosition >= maxScroll) {
            scrollDirection = -1; // Start scrolling left
        } else if (scrollPosition <= 0) {
            scrollDirection = 1; // Start scrolling right
        }
        
        // Update scroll position and apply to carousel
        scrollPosition += scrollDirection;
        carousel.scrollLeft = scrollPosition;
    }
    
    /**
     * Initialize auto-scroll with hover pause functionality
     * Starts after a 2-second delay to let users see the initial state
     */
    setTimeout(() => {
        // Start the auto-scroll interval (30ms for smooth movement)
        let scrollInterval = setInterval(autoScroll, 30);
        
        // Get carousel element for hover event listeners
        const carousel = document.querySelector('.celebrity-carousel');
        
        // Pause auto-scroll when user hovers over the carousel
        carousel.addEventListener('mouseenter', () => {
            clearInterval(scrollInterval);
        });
        
        // Resume auto-scroll when user's mouse leaves the carousel
        carousel.addEventListener('mouseleave', () => {
            scrollInterval = setInterval(autoScroll, 30);
        });
    }, 2000); // 2-second delay before starting auto-scroll
}