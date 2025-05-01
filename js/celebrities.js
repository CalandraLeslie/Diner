// Celebrity data
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

export function loadCelebrities() {
    const celebrityContainer = document.querySelector('.celebrity-carousel');
    
    celebrities.forEach(celebrity => {
        const celebrityCard = document.createElement('div');
        celebrityCard.className = 'celebrity-card';
        
        const fallbackImage = `https://placehold.co/400x500/e2e8f0/1e293b?text=${celebrity.name}`;
        
        celebrityCard.innerHTML = `
            <img src="${celebrity.image}" alt="${celebrity.name}" onerror="this.src='${fallbackImage}'">
            <div class="celebrity-info">
                <h3>${celebrity.name}</h3>
                <p class="visit-date">Visited on ${celebrity.visitDate}</p>
                <p>${celebrity.story}</p>
            </div>
        `;
        
        celebrityContainer.appendChild(celebrityCard);
    });
    
    // Add automatic scrolling for the carousel
    let scrollPosition = 0;
    let scrollDirection = 1; // 1 for right, -1 for left
    
    function autoScroll() {
        const carousel = document.querySelector('.celebrity-carousel');
        const maxScroll = carousel.scrollWidth - carousel.clientWidth;
        
        // Change direction when reaching ends
        if (scrollPosition >= maxScroll) {
            scrollDirection = -1;
        } else if (scrollPosition <= 0) {
            scrollDirection = 1;
        }
        
        scrollPosition += scrollDirection;
        carousel.scrollLeft = scrollPosition;
    }
    
    // Start auto-scroll after a delay
    setTimeout(() => {
        // Set interval for auto-scroll (slower speed)
        const scrollInterval = setInterval(autoScroll, 30);
        
        // Pause auto-scroll when hovering over the carousel
        const carousel = document.querySelector('.celebrity-carousel');
        carousel.addEventListener('mouseenter', () => {
            clearInterval(scrollInterval);
        });
        
        // Resume auto-scroll when mouse leaves
        carousel.addEventListener('mouseleave', () => {
            scrollInterval = setInterval(autoScroll, 30);
        });
    }, 2000);
}