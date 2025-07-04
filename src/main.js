/**
 * Ruby's 1950s Diner - Alternative Main Entry Point
 * 
 * This is an alternative implementation of the main application file.
 * It appears to be a more comprehensive version that includes:
 * - Direct image URL handling
 * - Canvas-based placeholder generation
 * - Complete menu data with real image URLs
 * - Embedded styling and functionality
 * 
 * Note: This file is referenced in index.html but may be part of a different build setup.
 */

/**
 * Creates a default placeholder image using HTML5 Canvas
 * Used as fallback when remote images fail to load
 * 
 * @param {string} name - Text to display on the placeholder image
 * @returns {Image} - Image element with error handling
 */
function createDefaultImage(name) {
  const img = new Image();
  
  // Handle image loading errors by generating a canvas placeholder
  img.onerror = function() {
    // Create a canvas element for drawing the placeholder
    const canvas = document.createElement('canvas');
    canvas.width = 300;
    canvas.height = 200;
    const ctx = canvas.getContext('2d');
    
    // Fill background with light gray
    ctx.fillStyle = '#f5f5f5';
    ctx.fillRect(0, 0, 300, 200);
    
    // Add centered text with diner branding color
    ctx.fillStyle = '#c82032';
    ctx.font = 'bold 24px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(name, 150, 100);
    
    // Convert canvas to data URL for use as image source
    const dataUrl = canvas.toDataURL('image/jpeg');
    
    return dataUrl;
  };
  
  return img;
}

/**
 * Fallback image URLs from Unsplash for different content types
 * These are used when specific images are not available
 */
const defaultImages = {
  food: "https://images.unsplash.com/photo-1562059390-a761a084768e?w=500&auto=format&fit=crop",
  staff: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop",
  celebrity: "https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?w=500&auto=format&fit=crop"
};

// Import the main stylesheet for the application
import './styles.css';

/**
 * Complete menu data with direct image URLs from Unsplash
 * This implementation uses real food photography instead of placeholder images
 */
const menuItems = {
  // Burger menu items with high-quality food photography
  burgers: [
    { name: "Classic Cheeseburger", price: "$8.99", description: "1/3 lb beef patty with American cheese, lettuce, tomato, and our secret sauce", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop" },
    { name: "The Elvis", price: "$10.99", description: "1/2 lb beef patty with peanut butter, bacon, and banana on a brioche bun", image: "https://images.unsplash.com/photo-1550317138-10000687a72b?w=500&auto=format&fit=crop" },
    { name: "Double Deluxe", price: "$12.99", description: "Two 1/4 lb patties with double cheese, special sauce, and all the fixings", image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=500&auto=format&fit=crop" },
    { name: "Veggie Supreme", price: "$9.99", description: "House-made black bean patty with avocado, sprouts, and chipotle mayo", image: "https://images.unsplash.com/photo-1520072959219-c595dc870360?w=500&auto=format&fit=crop" }
  ],
  shakes: [
    { name: "Classic Vanilla", price: "$5.99", description: "Hand-spun vanilla shake with whipped cream and a cherry", image: "https://www.foodandwine.com/thmb/aYv9IwIyM4EKLL0o7W1CUSfjXzU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Vanilla-Milkshake-FT-MAG-RECIPE-0325-4ad53abc27a74f7687e510cc17d28d1d.jpg" },
    { name: "Chocolate Malt", price: "$6.49", description: "Rich chocolate shake with malt powder and chocolate shavings", image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500&auto=format&fit=crop" },
    { name: "Strawberry Dream", price: "$6.49", description: "Fresh strawberry shake with real strawberry pieces", image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=500&auto=format&fit=crop" },
    { name: "Peanut Butter Blast", price: "$7.49", description: "Creamy peanut butter and chocolate shake with crushed peanuts", image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500&auto=format&fit=crop" }
  ],
  sides: [
    { name: "Classic Fries", price: "$3.99", description: "Crispy golden fries with our secret seasoning", image: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=500&auto=format&fit=crop" },
    { name: "Onion Rings", price: "$4.99", description: "Beer-battered onion rings with dipping sauce", image: "https://images.unsplash.com/photo-1639024471283-03518883512d?w=500&auto=format&fit=crop" },
    { name: "Chili Cheese Fries", price: "$6.49", description: "Fries topped with our house-made chili and melted cheese", image: "https://staticcookist.akamaized.net/wp-content/uploads/sites/22/2021/08/chili-cheese-fries.jpg?im=AspectCrop=(16,9);Resize,width=742;" },
    { name: "Coleslaw", price: "$2.99", description: "Creamy classic slaw made fresh daily", image: "https://www.marthastewart.com/thmb/tMn2vgNT4mbpdbeoZokzunNPHmQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/MSL-1118954-Simple-Coleslaw-step1-0823-cb5768b1eeee420baa788b1f387016fc.jpg" }
  ],
  desserts: [
    { name: "Apple Pie", price: "$4.99", description: "Home-made apple pie with ice cream", image: "https://cakesbymk.com/wp-content/uploads/2024/11/Template-Size-for-Blog-5.jpg" },
    { name: "Banana Split", price: "$7.99", description: "Classic split with three ice cream flavors and toppings", image: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Banana_split_1.jpg" },
    { name: "Sundae", price: "$5.99", description: "Hot fudge sundae with whipped cream and a cherry", image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500&auto=format&fit=crop" },
    { name: "Root Beer Float", price: "$4.99", description: "Creamy vanilla ice cream in old-fashioned root beer", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMQpBkv183DOZ_eCIa-1dSiPszlE6obzGnUw&s" }
  ]
};

// Staff members with direct image URLs
const staffMembers = [
  { name: "Betty Johnson", position: "Head Waitress", description: "Been serving smiles since 1989", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop" },
  { name: "Frank Miller", position: "Chef", description: "Master of the grill for over 20 years", image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=500&auto=format&fit=crop" },
  { name: "Peggy Wilson", position: "Manager", description: "Keeping Ruby's running smooth since 1995", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop" },
  { name: "Tommy Rodriguez", position: "Soda Jerk", description: "Makes the best shakes in town", image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=500&auto=format&fit=crop" }
];

// Celebrity visitors with direct image URLs (using public domain images)
const celebrities = [
  { name: "Elvis Presley", year: "1956", description: "Visited after a show and loved our peanut butter burger!", image: "https://images.photowall.com/products/79541/jailhouse-rock-elvis-presley-2.jpg?h=699&q=85" },
  { name: "Marilyn Monroe", year: "1955", description: "Stopped in for a strawberry shake after filming", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Marilyn_Monroe_in_1952.jpg/800px-Marilyn_Monroe_in_1952.jpg" },
  { name: "James Dean", year: "1954", description: "Was a regular when filming nearby", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/James_Dean_-_publicity_-_early.JPG/250px-James_Dean_-_publicity_-_early.JPG" },
  { name: "Buddy Holly", year: "1957", description: "Played an impromptu set on our jukebox", image: "https://www.tshaonline.org/images/handbook/entries/HH/holley-charles-hardin.jpg" }
];

// Testimonials
const testimonials = [
  { name: "Sarah J.", stars: 5, text: "Best milkshakes in town! The atmosphere takes me back to my childhood." },
  { name: "Mike T.", stars: 5, text: "The burgers are amazing - juicy and cooked to perfection every time!" },
  { name: "Emily R.", stars: 4, text: "Great food and service. The jukebox selection is fantastic!" },
  { name: "David W.", stars: 5, text: "My family has been coming here for three generations. Still amazing!" }
];

// Add this function to your code
function checkImageExists(url, callback) {
  const img = new Image();
  img.onload = function() { callback(true); };
  img.onerror = function() { callback(false); };
  img.src = url;
}

// Use this to debug image paths
function debugImagePaths() {
  console.log('Debugging image paths...');
  
  // Check burger images
  menuItems.burgers.forEach((item, index) => {
    checkImageExists(item.image, (exists) => {
      console.log(`Burger ${index+1} image (${item.image}): ${exists ? 'Found ✓' : 'Not found ✗'}`);
    });
  });
  
  // Check hero image
  checkImageExists(`images/diner-hero.jpg`, (exists) => {
    console.log(`Hero image: ${exists ? 'Found ✓' : 'Not found ✗'}`);
  });
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
  initializeApp();
  debugImagePaths(); // Add this line to debug
});

function initializeApp() {
  const app = document.getElementById('app');
  
  // Build the main structure with corrected image paths
  app.innerHTML = `
    <div class="diner-wrapper">
      <!-- Header with navigation -->
      <header class="diner-header">
        <div class="header-container">
          <div class="logo-container">
            <div class="neon-sign">
              <h1>Ruby's Diner</h1>
              <p class="tagline">Est. 1952</p>
            </div>
          </div>
          <nav class="main-nav">
            <ul>
              <li><a href="#home" class="active">Home</a></li>
              <li><a href="#menu">Menu</a></li>
              <li><a href="#reservations">Reservations</a></li>
              <li><a href="#staff">Our Staff</a></li>
              <li><a href="#celebrities">Famous Visitors</a></li>
              <li><a href="#about">About Us</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <!-- Main content -->
      <main>
        <!-- Hero Section -->
        <section id="home" class="hero-section" style="background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1542739674-b449a8938b59?w=1200&auto=format&fit=crop')">
          <div class="hero-content">
            <h2>Step Back in Time</h2>
            <p>Experience the authentic taste and atmosphere of the 1950s</p>
            <div class="cta-buttons">
              <a href="#menu" class="btn primary-btn">View Our Menu</a>
              <a href="#reservations" class="btn accent-btn">Book a Table</a>
            </div>
          </div>
        </section>

        <!-- Menu Section -->
        <section id="menu" class="menu-section">
          <div class="section-container">
            <div class="section-header">
              <h2>Our Menu</h2>
              <p>All items made fresh to order</p>
            </div>
            
            <div class="menu-tabs">
              <button class="tab-btn active" data-category="burgers">Burgers</button>
              <button class="tab-btn" data-category="shakes">Milkshakes</button>
              <button class="tab-btn" data-category="sides">Sides</button>
              <button class="tab-btn" data-category="desserts">Desserts</button>
            </div>
            
            <div class="menu-items-container">
              <!-- Menu items will be rendered here -->
            </div>
          </div>
        </section>

        <!-- Reservation Section -->
        <section id="reservations" class="reservations-section">
          <div class="section-container">
            <div class="section-header">
              <h2>Book Your Table</h2>
              <p>Reserve your booth at Ruby's</p>
            </div>
            
            <div class="reservation-container">
              <div class="reservation-image">
                <img src="https://images.unsplash.com/photo-1555992336-fb0d29498b13?w=800&auto=format&fit=crop" alt="Ruby's 1950s Diner booth" />
              </div>
              
              <div class="reservation-form-container">
                <form id="reservation-form" class="reservation-form">
                  <div class="form-row">
                    <div class="form-group">
                      <label for="name">Your Name</label>
                      <input type="text" id="name" name="name" required>
                    </div>
                    <div class="form-group">
                      <label for="email">Email Address</label>
                      <input type="email" id="email" name="email" required>
                    </div>
                  </div>
                  
                  <div class="form-row">
                    <div class="form-group">
                      <label for="date">Date</label>
                      <input type="date" id="date" name="date" required>
                    </div>
                    <div class="form-group">
                      <label for="time">Time</label>
                      <input type="time" id="time" name="time" required>
                    </div>
                  </div>
                  
                  <div class="form-row">
                    <div class="form-group">
                      <label for="guests">Number of Guests</label>
                      <select id="guests" name="guests" required>
                        <option value="">Select</option>
                        <option value="1">1 person</option>
                        <option value="2">2 people</option>
                        <option value="3">3 people</option>
                        <option value="4">4 people</option>
                        <option value="5">5 people</option>
                        <option value="6+">6+ people</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <label for="booth">Preferred Seating</label>
                      <select id="booth" name="booth">
                        <option value="any">No preference</option>
                        <option value="booth">Booth</option>
                        <option value="counter">Counter</option>
                        <option value="patio">Patio</option>
                      </select>
                    </div>
                  </div>
                  
                  <div class="form-group">
                    <label for="special-requests">Special Requests</label>
                    <textarea id="special-requests" name="special-requests" rows="3"></textarea>
                  </div>
                  
                  <button type="submit" class="btn primary-btn">Book My Table</button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <!-- Staff Section -->
        <section id="staff" class="staff-section">
          <div class="section-container">
            <div class="section-header">
              <h2>Meet Our Staff</h2>
              <p>The friendly faces of Ruby's</p>
            </div>
            
            <div class="staff-container">
              <!-- Staff will be rendered here -->
            </div>
          </div>
        </section>

        <!-- Celebrity Visitors Section -->
        <section id="celebrities" class="celebrities-section">
          <div class="section-container">
            <div class="section-header">
              <h2>Famous Visitors</h2>
              <p>Stars who've dined at Ruby's</p>
            </div>
            
            <div class="celebrities-container">
              <!-- Celebrities will be rendered here -->
            </div>
          </div>
        </section>

        <!-- About Section with Testimonials -->
        <section id="about" class="about-section">
          <div class="section-container">
            <div class="section-header">
              <h2>About Ruby's Diner</h2>
              <p>A cornerstone of the community since 1952</p>
            </div>
            
            <div class="about-content">
              <div class="about-story">
                <h3>Our Story</h3>
                <p>Ruby's Diner first opened its chrome-plated doors in 1952, founded by Ruby and Joe Thompson after their honeymoon trip across Route 66. What started as a small roadside diner quickly became a local institution.</p>
                <p>For over 70 years, we've been serving up authentic American classics made with the same recipes that Ruby perfected all those years ago.</p>
                <p>Our classic jukebox still plays original 45s, our booths are upholstered in genuine vintage vinyl, and our milkshakes are still made the old-fashioned way.</p>
                <p>Whether you're a longtime regular or a first-time visitor, we welcome you to experience a true slice of Americana at Ruby's.</p>
                
                <div class="diner-hours">
                  <h4>Hours of Operation</h4>
                  <ul>
                    <li><span>Monday - Thursday:</span> 11:00 AM - 9:00 PM</li>
                    <li><span>Friday - Saturday:</span> 11:00 AM - 11:00 PM</li>
                    <li><span>Sunday:</span> 10:00 AM - 8:00 PM</li>
                  </ul>
                </div>
              </div>
              
              <div class="testimonials">
                <h3>What Our Customers Say</h3>
                <div class="testimonials-container">
                  <!-- Testimonials will be rendered here -->
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <!-- Footer -->
      <footer class="diner-footer">
        <div class="footer-container">
          <div class="footer-info">
            <div class="footer-logo">Ruby's Diner</div>
            <address>
              123 Main Street, Anytown, USA<br>
              Phone: (555) 123-4567<br>
              Email: info@rubysdiner.com
            </address>
          </div>
          
          <div class="footer-nav">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#menu">Menu</a></li>
              <li><a href="#reservations">Reservations</a></li>
              <li><a href="#about">About Us</a></li>
            </ul>
          </div>
          
          <div class="footer-social">
            <h4>Connect With Us</h4>
            <div class="social-icons">
              <a href="#" aria-label="Facebook"><i class="fab fa-facebook"></i></a>
              <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
              <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
            </div>
          </div>
        </div>
        
        <div class="footer-bottom">
          <p>&copy; 2025 Ruby's Diner. All rights reserved.</p>
        </div>
      </footer>
    </div>
  `;
  
  // Initialize all components
  initMenu();
  initReservationSystem();
  initStaffSection();
  initCelebritiesSection();
  initTestimonials();
  initNavigation();
}

// Initialize the menu system
function initMenu() {
  const menuContainer = document.querySelector('.menu-items-container');
  const tabButtons = document.querySelectorAll('.tab-btn');
  
  // Default to showing burgers
  renderMenuItems('burgers');
  
  // Add click handlers to tab buttons
  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Update active tab
      tabButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      
      // Render the selected menu category
      renderMenuItems(button.dataset.category);
    });
  });
  
  // Function to render menu items for a category
  function renderMenuItems(category) {
    const items = menuItems[category];
    
    // Animation: fade out current items
    menuContainer.classList.add('fade-out');
    
    // After fade out, update content
    setTimeout(() => {
      // Generate HTML for menu items
      let menuHTML = '';
      
      items.forEach(item => {
        menuHTML += `
          <div class="menu-item">
            <div class="menu-item-image">
              <img src="${item.image}" alt="${item.name}" onerror="this.src='${defaultImages.food}'">
            </div>
            <div class="menu-item-info">
              <div class="menu-item-header">
                <h3>${item.name}</h3>
                <div class="menu-item-price">${item.price}</div>
              </div>
              <p>${item.description}</p>
            </div>
          </div>
        `;
      });
      
      menuContainer.innerHTML = menuHTML;
      
      // Animation: fade in new items
      menuContainer.classList.remove('fade-out');
      menuContainer.classList.add('fade-in');
      
      // Remove animation classes after animation completes
      setTimeout(() => {
        menuContainer.classList.remove('fade-in');
      }, 500);
    }, 300);
  }
}

// Initialize the reservation system
function initReservationSystem() {
  const form = document.getElementById('reservation-form');
  
  // Set minimum date to today
  const dateInput = document.getElementById('date');
  const today = new Date();
  const formattedDate = today.toISOString().split('T')[0];
  dateInput.min = formattedDate;
  
  // Handle form submission
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const guests = document.getElementById('guests').value;
    const booth = document.getElementById('booth').value;
    const specialRequests = document.getElementById('special-requests').value;
    
    // Create a modal to show confirmation
    showReservationConfirmation(name, date, time, guests);
    
    // Reset the form
    form.reset();
  });
  
  function showReservationConfirmation(name, date, time, guests) {
    // Create modal element
    const modal = document.createElement('div');
    modal.className = 'modal reservation-confirmation';
    
    // Format date for display
    const formattedDate = new Date(date).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    
    // Set modal content
    modal.innerHTML = `
      <div class="modal-content">
        <div class="modal-header">
          <h3>Reservation Confirmed!</h3>
          <button class="close-modal">&times;</button>
        </div>
        <div class="modal-body">
          <div class="confirmation-icon">
            <i class="fas fa-check-circle"></i>
          </div>
          <p>Thanks, <strong>${name}</strong>! Your table is booked.</p>
          <div class="confirmation-details">
            <p><i class="far fa-calendar"></i> <strong>Date:</strong> ${formattedDate}</p>
            <p><i class="far fa-clock"></i> <strong>Time:</strong> ${time}</p>
            <p><i class="fas fa-users"></i> <strong>Party Size:</strong> ${guests} ${guests === '1' ? 'person' : 'people'}</p>
          </div>
          <p>We've sent a confirmation email with these details.</p>
        </div>
        <div class="modal-footer">
          <button class="btn primary-btn close-button">OK, Got It!</button>
        </div>
      </div>
    `;
    
    // Add modal to page
    document.body.appendChild(modal);
    
    // Prevent page scrolling while modal is open
    document.body.style.overflow = 'hidden';
    
    // Add event listeners for closing
    modal.querySelector('.close-modal').addEventListener('click', closeModal);
    modal.querySelector('.close-button').addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
    
    function closeModal() {
      modal.classList.add('fade-out');
      setTimeout(() => {
        document.body.removeChild(modal);
        document.body.style.overflow = '';
      }, 300);
    }
    
    // Animation: fade in
    setTimeout(() => {
      modal.classList.add('visible');
    }, 10);
  }
}

// Initialize staff section
function initStaffSection() {
  const staffContainer = document.querySelector('.staff-container');
  
  let staffHTML = '';
  staffMembers.forEach(staff => {
    staffHTML += `
      <div class="staff-card">
        <div class="staff-image">
          <img src="${staff.image}" alt="${staff.name}" onerror="this.src='${defaultImages.staff}'">
        </div>
        <div class="staff-info">
          <h3>${staff.name}</h3>
          <div class="staff-position">${staff.position}</div>
          <p>${staff.description}</p>
        </div>
      </div>
    `;
  });
  
  staffContainer.innerHTML = staffHTML;
}

// Initialize celebrities section
function initCelebritiesSection() {
  const celebritiesContainer = document.querySelector('.celebrities-container');
  
  let celebritiesHTML = '';
  celebrities.forEach(celeb => {
    celebritiesHTML += `
      <div class="celebrity-card">
        <div class="celebrity-image">
          <img src="${celeb.image}" alt="${celeb.name}" onerror="this.src='${defaultImages.celebrity}'">
        </div>
        <div class="celebrity-info">
          <h3>${celeb.name}</h3>
          <div class="celebrity-year">Visited in ${celeb.year}</div>
          <p>${celeb.description}</p>
        </div>
      </div>
    `;
  });
  
  celebritiesContainer.innerHTML = celebritiesHTML;
}

// Initialize testimonials
function initTestimonials() {
  const testimonialsContainer = document.querySelector('.testimonials-container');
  
  let testimonialsHTML = '';
  testimonials.forEach(testimonial => {
    // Create stars based on rating
    let stars = '';
    for (let i = 0; i < 5; i++) {
      if (i < testimonial.stars) {
        stars += '<i class="fas fa-star"></i>';
      } else {
        stars += '<i class="far fa-star"></i>';
      }
    }
    
    testimonialsHTML += `
      <div class="testimonial-card">
        <div class="testimonial-stars">${stars}</div>
        <blockquote>"${testimonial.text}"</blockquote>
        <div class="testimonial-author">- ${testimonial.name}</div>
      </div>
    `;
  });
  
  testimonialsContainer.innerHTML = testimonialsHTML;
}

// Initialize navigation
function initNavigation() {
  const navLinks = document.querySelectorAll('.main-nav a');
  
  // Handle smooth scrolling
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      
      // Get the target section
      const target = document.querySelector(link.getAttribute('href'));
      
      // Scroll to target
      window.scrollTo({
        top: target.offsetTop - 80, // Offset for header height
        behavior: 'smooth'
      });
      
      // Update active link
      navLinks.forEach(link => link.classList.remove('active'));
      link.classList.add('active');
    });
  });
  
  // Update active link on scroll
  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    
    // Get all sections
    const sections = document.querySelectorAll('section');
    
    // Find the current section
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        // Get the corresponding nav link
        const id = section.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });
}