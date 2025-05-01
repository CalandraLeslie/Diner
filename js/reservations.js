// Reservation system
export function initializeReservationSystem() {
    const reservationForm = document.getElementById('reservation-form');
    
    // Set minimum date to today
    const dateInput = document.getElementById('date');
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0];
    dateInput.min = formattedDate;
    
    // Handle form submission
    reservationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;
        const guests = document.getElementById('guests').value;
        const occasion = document.getElementById('occasion').value;
        const specialRequests = document.getElementById('special-requests').value;
        
        // In a real application, you would send this data to a server
        // For now, we'll simulate a successful booking
        
        // Create confirmation message
        const formattedDate = new Date(date).toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        
        // Create modal for confirmation
        const modal = document.createElement('div');
        modal.className = 'reservation-modal';
        
        modal.innerHTML = `
            <div class="modal-content">
                <h3>Reservation Confirmed!</h3>
                <p>Thank you, ${name}!</p>
                <p>Your table for ${guests} has been booked for ${formattedDate} at ${time}.</p>
                <p>A confirmation email has been sent to ${email}.</p>
                <button id="close-modal" class="btn primary-btn">Close</button>
            </div>
        `;
        
        // Add modal to the page
        document.body.appendChild(modal);
        
        // Show modal with animation
        setTimeout(() => {
            modal.classList.add('show');
        }, 10);
        
        // Add event listener to close button
        document.getElementById('close-modal').addEventListener('click', () => {
            modal.classList.remove('show');
            setTimeout(() => {
                document.body.removeChild(modal);
            }, 300);
            
            // Reset form
            reservationForm.reset();
        });
        
        // Add CSS for the modal to the page
        if (!document.getElementById('modal-styles')) {
            const style = document.createElement('style');
            style.id = 'modal-styles';
            style.textContent = `
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
                    z-index: 2000;
                    opacity: 0;
                    transition: opacity 0.3s ease;
                }
                
                .reservation-modal.show {
                    opacity: 1;
                }
                
                .modal-content {
                    background-color: white;
                    padding: 2rem;
                    border-radius: 8px;
                    max-width: 500px;
                    text-align: center;
                    transform: translateY(20px);
                    transition: transform 0.3s ease;
                }
                
                .reservation-modal.show .modal-content {
                    transform: translateY(0);
                }
                
                .modal-content h3 {
                    color: var(--cherry-red);
                    margin-bottom: 1rem;
                }
                
                .modal-content p {
                    margin-bottom: 1rem;
                }
                
                #close-modal {
                    margin-top: 1rem;
                }
            `;
            document.head.appendChild(style);
        }
    });
}