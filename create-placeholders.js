const fs = require('fs');
const path = require('path');

// Base directory for images
const baseDir = path.join(__dirname, 'public', 'images');

// Create directories if they don't exist
const categories = ['menu', 'staff', 'celebrities', 'defaults', ''];
categories.forEach(category => {
  const dir = path.join(baseDir, category);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Sample image data
const images = [
  // Menu images
  { category: 'menu', name: 'burger1.jpg' },
  { category: 'menu', name: 'burger2.jpg' },
  { category: 'menu', name: 'burger3.jpg' },
  { category: 'menu', name: 'burger4.jpg' },
  { category: 'menu', name: 'shake1.jpg' },
  { category: 'menu', name: 'shake2.jpg' },
  { category: 'menu', name: 'shake3.jpg' },
  { category: 'menu', name: 'shake4.jpg' },
  { category: 'menu', name: 'sides1.jpg' },
  { category: 'menu', name: 'sides2.jpg' },
  { category: 'menu', name: 'sides3.jpg' },
  { category: 'menu', name: 'sides4.jpg' },
  { category: 'menu', name: 'dessert1.jpg' },
  { category: 'menu', name: 'dessert2.jpg' },
  { category: 'menu', name: 'dessert3.jpg' },
  { category: 'menu', name: 'dessert4.jpg' },
  
  // Staff images
  { category: 'staff', name: 'betty.jpg' },
  { category: 'staff', name: 'frank.jpg' },
  { category: 'staff', name: 'peggy.jpg' },
  { category: 'staff', name: 'tommy.jpg' },
  
  // Celebrity images
  { category: 'celebrities', name: 'elvis.jpg' },
  { category: 'celebrities', name: 'marilyn.jpg' },
  { category: 'celebrities', name: 'james.jpg' },
  { category: 'celebrities', name: 'buddy.jpg' },
  
  // Default images
  { category: 'defaults', name: 'default-food.jpg' },
  { category: 'defaults', name: 'default-staff.jpg' },
  { category: 'defaults', name: 'default-celebrity.jpg' },
  
  // Root images
  { category: '', name: 'diner-hero.jpg' },
  { category: '', name: 'booth.jpg' },
  { category: '', name: 'jukebox.jpg' }
];

// Create placeholder images
images.forEach(({ category, name }) => {
  const filePath = path.join(baseDir, category, name);
  
  // Skip if file exists
  if (fs.existsSync(filePath)) {
    console.log(`File already exists: ${filePath}`);
    return;
  }
  
  // Create a simple SVG as a placeholder
  const width = 400;
  const height = 300;
  const svg = `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="#f5f5f5" />
    <text x="50%" y="50%" font-family="Arial" font-size="24" fill="#c82032" text-anchor="middle">${name}</text>
  </svg>`;
  
  fs.writeFileSync(filePath, svg);
  console.log(`Created placeholder: ${filePath}`);
});

console.log('All placeholders created!');