// Menu data
const menuData = {
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

// Function to load menu items
export function loadMenuItems() {
    const menuItemsContainer = document.querySelector('.menu-items');
    const tabButtons = document.querySelectorAll('.tab-btn');
    
    // First, display the default category (burgers)
    displayMenuCategory('burgers');
    
    // Add event listeners to tab buttons
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            tabButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Display the corresponding menu category
            const category = button.dataset.category;
            displayMenuCategory(category);
        });
    });
    
    // Function to display menu items for a category
    function displayMenuCategory(category) {
        // Clear current menu items
        menuItemsContainer.innerHTML = '';
        
        // Get items for the selected category
        const items = menuData[category] || [];
        
        // Create and append menu item elements
        items.forEach(item => {
            const menuItem = document.createElement('div');
            menuItem.className = 'menu-item';
            
            const fallbackImage = `https://placehold.co/400x300/e2e8f0/1e293b?text=${item.name}`;
            
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
            
            menuItemsContainer.appendChild(menuItem);
        });
    }
}