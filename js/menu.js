/**
 * Ruby's Diner Menu System
 * 
 * This module manages the dynamic menu display with categorized items.
 * Features include:
 * - Tabbed navigation between menu categories (burgers, milkshakes, sides, desserts)
 * - Dynamic content loading with fallback images
 * - Responsive menu item cards with pricing and descriptions
 * - Error handling for missing images
 */

/**
 * Menu data structure containing all food items organized by category
 * Each item includes: name, price, description, and image path
 */
const menuData = {
    // Burger menu items - featuring classic and specialty burgers
    burgers: [
        {
            name: "Classic Cheeseburger",
            price: "$8.99",
            description: "Our signature beef patty topped with American cheese, lettuce, tomato, and special sauce.",
            image: "./assets/images/classic-burger.jpg"
        },
        {
            name: "Double Deluxe",
            price: "$12.99",
            description: "Two beef patties stacked with cheese, bacon, onion rings, and BBQ sauce.",
            image: "./assets/images/double-deluxe.jpg"
        },
        {
            name: "The Elvis",
            price: "$10.99",
            description: "Beef patty topped with peanut butter, bacon, and fried banana. The King's favorite!",
            image: "./assets/images/elvis-burger.jpg"
        },
        {
            name: "Veggie Delight",
            price: "$9.99",
            description: "House-made veggie patty with avocado, sprouts, and chipotle mayo.",
            image: "./assets/images/veggie-burger.jpg"
        }
    ],
    // Milkshake menu items - classic flavors and specialty combinations
    milkshakes: [
        {
            name: "Vanilla Dream",
            price: "$5.99",
            description: "Classic vanilla milkshake topped with whipped cream and a cherry.",
            image: "./assets/images/vanilla-shake.jpg"
        },
        {
            name: "Chocolate Malt",
            price: "$6.99",
            description: "Rich chocolate milkshake with malt powder and chocolate shavings.",
            image: "./assets/images/chocolate-malt.jpg"
        },
        {
            name: "Strawberry Fields",
            price: "$6.99",
            description: "Fresh strawberry milkshake with real strawberry chunks.",
            image: "./assets/images/strawberry-shake.jpg"
        },
        {
            name: "Peanut Butter Blast",
            price: "$7.99",
            description: "Creamy peanut butter milkshake with chocolate and crushed peanuts.",
            image: "./assets/images/pb-shake.jpg"
        }
    ],
    // Side dishes - appetizers and accompaniments
    sides: [
        {
            name: "Crispy Fries",
            price: "$3.99",
            description: "Golden crispy fries seasoned with our secret blend of spices.",
            image: "./assets/images/fries.jpg"
        },
        {
            name: "Onion Rings",
            price: "$4.99",
            description: "Thick-cut onions fried in a crispy beer batter.",
            image: "./assets/images/onion-rings.jpg"
        },
        {
            name: "Coleslaw",
            price: "$2.99",
            description: "House-made coleslaw with a tangy dressing.",
            image: "./assets/images/coleslaw.jpg"
        },
        {
            name: "Chili Cheese Fries",
            price: "$5.99",
            description: "Crispy fries topped with beef chili and cheese sauce.",
            image: "./assets/images/chili-fries.jpg"
        }
    ],
    // Dessert menu items - sweet treats and classic diner desserts
    desserts: [
        {
            name: "Apple Pie",
            price: "$4.99",
            description: "Traditional apple pie with a scoop of vanilla ice cream.",
            image: "./assets/images/apple-pie.jpg"
        },
        {
            name: "Banana Split",
            price: "$7.99",
            description: "Classic banana split with three flavors of ice cream and toppings.",
            image: "./assets/images/banana-split.jpg"
        },
        {
            name: "Chocolate Brownie",
            price: "$5.99",
            description: "Warm chocolate brownie topped with ice cream and hot fudge.",
            image: "./assets/images/brownie.jpg"
        },
        {
            name: "Root Beer Float",
            price: "$4.99",
            description: "Creamy vanilla ice cream with old-fashioned root beer.",
            image: "./assets/images/float.jpg"
        }
    ]
};

/**
 * Main function to initialize the menu system
 * Sets up tab navigation and displays the default menu category
 * 
 * @export - Available for import by other modules
 */
export function loadMenuItems() {
    // Get DOM elements for menu container and tab buttons
    const menuItemsContainer = document.querySelector('.menu-items');
    const tabButtons = document.querySelectorAll('.tab-btn');
    
    // Display the default category (burgers) when page loads
    displayMenuCategory('burgers');
    
    // Set up event listeners for tab navigation
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active state from all tab buttons
            tabButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active state to the clicked button
            button.classList.add('active');
            
            // Get the category from the button's data attribute and display it
            const category = button.dataset.category;
            displayMenuCategory(category);
        });
    });
    
    /**
     * Internal function to display menu items for a specific category
     * Clears existing items and populates with new category items
     * 
     * @param {string} category - The menu category to display (burgers, milkshakes, etc.)
     */
    function displayMenuCategory(category) {
        // Clear the current menu items from the container
        menuItemsContainer.innerHTML = '';
        
        // Get items for the selected category (fallback to empty array if category not found)
        const items = menuData[category] || [];
        
        // Create and append DOM elements for each menu item
        items.forEach(item => {
            // Create the main container for each menu item
            const menuItem = document.createElement('div');
            menuItem.className = 'menu-item';
            
            // Create fallback image URL in case the main image fails to load
            const fallbackImage = `https://placehold.co/400x300/e2e8f0/1e293b?text=${item.name}`;
            
            // Build the HTML structure for the menu item
            menuItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}" onerror="this.src='${fallbackImage}'">
                <div class="menu-item-info">
                    <div class="menu-item-title">
                        <h3>${item.name}</h3>
                        <span class="menu-item-price">${item.price}</span>
                    </div>
                    <p>${item.description}</p>
                </div>
            `;
            
            // Add the completed menu item to the container
            menuItemsContainer.appendChild(menuItem);
        });
    }
}