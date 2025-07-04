# Ruby's 1950s Diner Website

A nostalgic, retro-themed website for Ruby's Diner featuring authentic 1950s styling, interactive menu system, reservation booking, and celebrity visitor showcase.

![Ruby's Diner](https://img.shields.io/badge/Ruby's%20Diner-1950s%20Style-red?style=for-the-badge)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?style=for-the-badge&logo=javascript)
![Vite](https://img.shields.io/badge/Vite-Build%20Tool-646CFF?style=for-the-badge&logo=vite)

## 🍔 Features

### Core Functionality
- **Interactive Menu System** - Tabbed navigation between categories (Burgers, Milkshakes, Sides, Desserts)
- **Reservation System** - Complete booking form with modal confirmation
- **Celebrity Showcase** - Auto-scrolling carousel of famous 1950s visitors
- **Customer Testimonials** - Star-rated reviews with customer photos
- **Smooth Animations** - Scroll-triggered effects and hover interactions
- **Responsive Design** - Works on desktop, tablet, and mobile devices

### Visual Effects
- **Parallax Scrolling** - Hero section background movement
- **Fade-in Animations** - Sections appear as you scroll
- **Hover Effects** - Interactive menu items and buttons
- **1950s Styling** - Authentic retro color scheme and typography

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. **Clone or download the project**
   ```bash
   cd Diner
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   - Navigate to `http://localhost:3000`
   - The site will automatically open in your default browser

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment.

## 📁 Project Structure

```
Diner/
├── index.html                 # Main HTML file
├── package.json              # Project dependencies
├── vite.config.js            # Vite build configuration
├── README.md                 # This file
│
├── js/                       # Main JavaScript modules
│   ├── main.js              # Application entry point
│   ├── menu.js              # Menu system logic
│   ├── reservations.js      # Reservation booking system
│   ├── celebrities.js       # Celebrity showcase carousel
│   ├── testimonials.js      # Customer reviews system
│   └── animations.js        # Scroll animations and effects
│
├── css/                      # Stylesheets
│   └── styles.css           # Main CSS file
│
├── src/                      # Alternative implementation
│   ├── main.js              # Alternative entry point
│   ├── styles.css           # Alternative styles
│   ├── create-favicon.js    # Favicon generation utility
│   └── generate-images.js   # Image generation utility
│
└── assets/                   # Static assets (created during build)
    └── images/              # Image files
```

## 🎨 Design Theme

The website captures the authentic 1950s American diner aesthetic:

- **Color Palette**: Cherry red (#c82032), cream whites, and classic checkerboard patterns
- **Typography**: Retro fonts including Pacifico for headings
- **Visual Elements**: Neon-style signs, vintage photography, chrome accents
- **Layout**: Classic diner booth seating inspiration

## ⚙️ Technical Details

### Built With
- **Vanilla JavaScript (ES6+)** - No frameworks, pure JavaScript
- **Vite** - Fast build tool and development server
- **CSS3** - Modern styling with animations and transitions
- **Font Awesome** - Icons for star ratings and UI elements
- **Google Fonts** - Authentic 1950s typography

### Key JavaScript Modules

#### main.js
- Application initialization and coordination
- Navigation system with smooth scrolling
- Active link highlighting based on scroll position

#### menu.js
- Dynamic menu loading with category tabs
- Fallback image handling for missing photos
- Responsive menu item cards

#### reservations.js
- Form validation and submission
- Modal confirmation system
- Date restrictions (no past dates)
- Dynamic CSS injection for modals

#### celebrities.js
- Auto-scrolling carousel functionality
- Hover pause/resume features
- Celebrity visitor profiles with stories

#### testimonials.js
- Star rating system (1-5 stars)
- Customer review cards
- Dynamic content generation

#### animations.js
- Intersection Observer for scroll animations
- Parallax effects for hero section
- Hover animations for interactive elements

## 🛠️ Development Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Generate placeholder images
node create-placeholders.js

# Download real images (if configured)
node download-images.cjs
```

## 🖼️ Image Management

The project includes utilities for managing images:

### Placeholder Generation
```bash
node create-placeholders.js
```
Creates SVG placeholder images for development when real images aren't available.

### Image Categories
- **Menu Items**: Food photography for burgers, shakes, sides, desserts
- **Staff Photos**: Employee headshots
- **Celebrity Images**: Historical photos of famous visitors
- **Diner Atmosphere**: Interior and ambiance photos

## 🎯 Browser Support

- **Modern Browsers**: Chrome, Firefox, Safari, Edge (latest versions)
- **Mobile Browsers**: iOS Safari, Chrome Mobile, Samsung Internet
- **Features Used**: ES6 modules, Intersection Observer, CSS Grid/Flexbox

## 📱 Responsive Design

The website is fully responsive with breakpoints for:
- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## 🎭 Performance Features

- **Lazy Loading**: Images load as needed
- **Optimized Animations**: Using CSS transforms for smooth performance
- **Efficient Scrolling**: Intersection Observer instead of scroll events
- **Minimal Dependencies**: Lightweight vanilla JavaScript approach

## 🔧 Customization

### Changing Colors
Update CSS custom properties in `css/styles.css`:
```css
:root {
  --cherry-red: #c82032;    /* Primary brand color */
  --cream-white: #f8f6f0;   /* Background color */
  /* Add your custom colors */
}
```

### Adding Menu Items
Edit the `menuData` object in `js/menu.js`:
```javascript
const menuData = {
  burgers: [
    {
      name: "Your New Burger",
      price: "$9.99",
      description: "Description here",
      image: "path/to/image.jpg"
    }
    // Add more items...
  ]
};
```

### Modifying Animations
Adjust animation settings in `js/animations.js`:
```javascript
const observerOptions = {
  threshold: 0.1,    // Trigger point (10% visible)
  rootMargin: '0px'  // Margin around trigger area
};
```

## 🚀 Deployment

### Static Hosting (Recommended)
1. Build the project: `npm run build`
2. Upload the `dist/` folder to your hosting provider
3. Configure your server to serve `index.html` for all routes

### Platforms
- **Netlify**: Drag and drop the `dist` folder
- **Vercel**: Connect your GitHub repository
- **GitHub Pages**: Use the `dist` folder as source
- **Traditional Hosting**: Upload `dist` contents via FTP

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes and test thoroughly
4. Commit with descriptive messages: `git commit -m "Add new feature"`
5. Push to your fork: `git push origin feature-name`
6. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🎉 Acknowledgments

- **Unsplash** - High-quality food photography
- **Font Awesome** - Icons and visual elements
- **Google Fonts** - Authentic 1950s typography
- **Wikimedia Commons** - Historical celebrity photos

## 📞 Support

For questions, issues, or feature requests:
- Create an issue in the repository
- Check existing documentation
- Review the code comments for implementation details

---

**Built with ❤️ and a touch of 1950s nostalgia**

*Step back in time at Ruby's Diner - where every meal is a memory!*
