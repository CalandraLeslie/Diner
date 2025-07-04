/**
 * Ruby's Diner Reservation System
 * 
 * This module handles the table reservation functionality including:
 * - Form validation and submission
 * - Date restrictions (no past dates)
 * - Modal confirmation system
 * - Dynamic styling for reservation modals
 * - Form reset after successful booking
 * 
 * Note: This is a frontend-only implementation. In a real application,
 * the reservation data would be sent to a backend server for processing.
 */

/**
 * Initializes the reservation system
 * Sets up form handling, date validation, and modal system
 * 
 * @export - Available for import by other modules
 */
export function initializeReservationSystem() {
    // Get the reservation form element
    const reservationForm = document.getElementById('reservation-form');
    
    // Set minimum date to today to prevent booking in the past
    const dateInput = document.getElementById('date');
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0]; // Format as YYYY-MM-DD
    dateInput.min = formattedDate;
    
    /**
     * Handle reservation form submission
     * Processes form data and shows confirmation modal
     */
    reservationForm.addEventListener('submit', function(e) {
        // Prevent default form submission behavior
        e.preventDefault();
        
        // Extract form values from input fields
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;
        const guests = document.getElementById('guests').value;
        const occasion = document.getElementById('occasion').value;
        const specialRequests = document.getElementById('special-requests').value;
        
        // TODO: In a real application, send this data to a server
        // For now, we simulate a successful booking with a confirmation modal
        
        // Format the date for display in a user-friendly format
        const formattedDate = new Date(date).toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        
        /**
         * Create and display confirmation modal
         * Shows booking details and provides a way to close the modal
         */
        // Create the modal container element
        const modal = document.createElement('div');
        modal.className = 'reservation-modal';
        
        // Build the modal content with reservation details
        modal.innerHTML = `
            <div class="modal-content">
                <h3>Reservation Confirmed!</h3>
                <p>Thank you, ${name}!</p>
                <p>Your table for ${guests} has been booked for ${formattedDate} at ${time}.</p>
                <p>A confirmation email has been sent to ${email}.</p>
                <button id="close-modal" class="btn primary-btn">Close</button>
            </div>
        `;
        
        // Add the modal to the page DOM
        document.body.appendChild(modal);
        
        // Show modal with a smooth fade-in animation
        setTimeout(() => {
            modal.classList.add('show');
        }, 10); // Small delay ensures CSS transition works properly
        
        /**
         * Handle modal close functionality
         * Removes modal from DOM and resets the form
         */
        document.getElementById('close-modal').addEventListener('click', () => {
            // Hide modal with fade-out animation
            modal.classList.remove('show');
            
            // Remove modal from DOM after animation completes
            setTimeout(() => {
                document.body.removeChild(modal);
            }, 300); // Match the CSS transition duration
            
            // Reset the form to clear all input fields
            reservationForm.reset();
        });
        
        /**
         * Inject CSS styles for the modal if not already present
         * This ensures the modal has proper styling without requiring external CSS
         */
        // Only add styles once to avoid duplication
        if (!document.getElementById('modal-styles')) {
            const style = document.createElement('style');
            style.id = 'modal-styles';
            
            // Define complete modal styling
            style.textContent = `
                /* Modal overlay - covers entire screen with semi-transparent background */
                .reservation-modal {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(0, 0, 0, 0.7);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 2000; /* Ensure modal appears above all other content */
                    opacity: 0;
                    transition: opacity 0.3s ease;
                }
                
                /* Show state - makes modal visible */
                .reservation-modal.show {
                    opacity: 1;
                }
                
                /* Modal content box styling */
                .modal-content {
                    background-color: white;
                    padding: 2rem;
                    border-radius: 8px;
                    max-width: 500px;
                    text-align: center;
                    transform: translateY(20px);
                    transition: transform 0.3s ease;
                }
                
                /* Content animation when modal is shown */
                
                .reservation-modal.show .modal-content {
                    transform: translateY(0);
                .reservation-modal.show .modal-content {
                    transform: translateY(0);
                }
                
                /* Modal heading styling */
                .modal-content h3 {
                    color: var(--cherry-red);
                    margin-bottom: 1rem;
                }
                
                /* Modal paragraph spacing */
                .modal-content p {
                    margin-bottom: 1rem;
                }
                
                /* Close button spacing */
                #close-modal {
                    margin-top: 1rem;
                }
            `;
            
            // Add the styles to the document head
            document.head.appendChild(style);
        }
    });
}