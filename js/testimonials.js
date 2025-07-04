/**
 * Ruby's Diner Customer Testimonials System
 * 
 * This module manages the display of customer reviews and testimonials.
 * Features include:
 * - Customer review cards with photos, names, and dates
 * - Star rating system (1-5 stars with filled/empty states)
 * - Fallback images for customer photos
 * - Responsive review card layout
 * - Font Awesome icons for star ratings
 */

/**
 * Customer testimonial data
 * Each review contains: name, date, rating (1-5), customer image, and review text
 */
const testimonials = [
    {
        name: "Sarah Johnson",
        date: "April 15, 2025",
        rating: 5,
        image: "./assets/images/reviewer1.jpg",
        text: "Ruby's Diner is a blast from the past! The atmosphere is authentic 1950s and the food is to die for. The Elvis burger is my absolute favorite!"
    },
    {
        name: "Mike Thompson",
        date: "March 22, 2025",
        rating: 5,
        image: "./assets/images/reviewer2.jpg",
        text: "I've been coming here since I was a kid, and the quality has never changed. Best milkshakes in town, hands down. The staff makes you feel like family."
    },
    {
        name: "Emily Rodriguez",
        date: "February 10, 2025",
        rating: 4,
        image: "./assets/images/reviewer3.jpg",
        text: "Great nostalgic atmosphere and the burgers are amazing! I would give 5 stars but my onion rings were a bit cold. Still a fantastic place to visit!"
    },
    {
        name: "David Chen",
        date: "January 30, 2025",
        rating: 5,
        image: "./assets/images/reviewer4.jpg",
        text: "Took my grandparents here and they said it was just like the diners they used to go to in the 50s! The jukebox works and they have all the classics."
    },
    {
        name: "Olivia Wilson",
        date: "December 12, 2024",
        rating: 5,
        image: "./assets/images/reviewer5.jpg",
        text: "The banana split is exactly how I remember it from my childhood. Perfect place for a family dinner or a fun date night!"
    },
    {
        name: "James Miller",
        date: "November 5, 2024",
        rating: 4,
        image: "./assets/images/reviewer6.jpg",
        text: "Love the 1950s vibe and the food is great. Service can be a bit slow during peak hours, but the staff is always friendly and apologetic."
    }
];

/**
 * Loads and displays customer testimonials with star ratings
 * Creates review cards with customer information and star-based ratings
 * 
 * @export - Available for import by other modules
 */
export function loadTestimonials() {
    // Get the container element for review cards
    const testimonialsContainer = document.querySelector('.reviews-container');
    
    // Create and append a card for each customer review
    testimonials.forEach(review => {
        const reviewCard = document.createElement('div');
        reviewCard.className = 'review-card';
        
        // Create fallback image using the customer's first initial
        const fallbackImage = `https://placehold.co/100x100/e2e8f0/1e293b?text=${review.name.charAt(0)}`;
        
        /**
         * Generate star rating display using Font Awesome icons
         * Creates filled stars for the rating and empty stars for the remainder
         */
        let stars = '';
        for (let i = 0; i < 5; i++) {
            if (i < review.rating) {
                // Filled star for ratings within the customer's score
                stars += '<i class="fas fa-star"></i>';
            } else {
                // Empty star for remaining positions
                stars += '<i class="far fa-star"></i>';
            }
        }
        
        // Build the review card HTML structure
        reviewCard.innerHTML = `
            <div class="review-header">
                <img src="${review.image}" alt="${review.name}" class="reviewer-image" onerror="this.src='${fallbackImage}'">
                <div class="reviewer-info">
                    <h4>${review.name}</h4>
                    <span class="review-date">${review.date}</span>
                </div>
            </div>
            <div class="review-stars">${stars}</div>
            <p>${review.text}</p>
        `;
        
        // Add the completed review card to the container
        testimonialsContainer.appendChild(reviewCard);
    });
}