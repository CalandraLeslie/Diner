// Simple script to generate placeholder images for development
const fs = require('fs');
const https = require('https');
const path = require('path');

// Base directory for images
const baseDir = path.join(__dirname, '../public/images');

// Define image categories and filenames
const images = {
  menu: [
    'burger1.jpg', 'burger2.jpg', 'burger3.jpg', 'burger4.jpg',
    'shake1.jpg', 'shake2.jpg', 'shake3.jpg', 'shake4.jpg',
    'sides1.jpg', 'sides2.jpg', 'sides3.jpg', 'sides4.jpg',
    'dessert1.jpg', 'dessert2.jpg', 'dessert3.jpg', 'dessert4.jpg'
  ],
  staff: ['betty.jpg', 'frank.jpg', 'peggy.jpg', 'tommy.jpg'],
  celebrities: ['elvis.jpg', 'marilyn.jpg', 'james.jpg', 'buddy.jpg'],
  root: ['diner-hero.jpg', 'booth.jpg'],
  defaults: ['default-food.jpg', 'default-staff.jpg', 'default-celebrity.jpg']
};

// Generate placeholder images
function generatePlaceholderImage(category, filename) {
  const dir = category === 'root' ? baseDir : path.join(baseDir, category);
  const filePath = path.join(dir, filename);
  
  // Check if directory exists, create if it doesn't
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  
  // Generate themed placeholders with relevant text
  let text = filename.replace('.jpg', '');
  let bgColor, textColor;
  
  switch (category) {
    case 'menu':
      bgColor = 'f5f5dc'; // Beige
      textColor = 'c82032'; // Ruby red
      break;
    case 'staff':
      bgColor = 'e0f0e0'; // Light green
      textColor = '323232'; // Dark gray
      break;
    case 'celebrities':
      bgColor = 'f0e0e0'; // Light pink/sepia
      textColor = '323232'; // Dark gray
      break;
    case 'defaults':
      bgColor = 'dddddd'; // Light gray
      textColor = '323232'; // Dark gray
      break;
    default:
      bgColor = 'c82032'; // Ruby red
      textColor = 'ffffff'; // White
      break;
  }
  
  // Get dimensions appropriate for the type of image
  let width, height;
  if (filename.includes('hero')) {
    width = 1200;
    height = 600;
  } else if (category === 'celebrities' || category === 'staff') {
    width = 400;
    height = 600;
  } else {
    width = 400;
    height = 300;
  }
  
  const url = `https://placehold.co/${width}x${height}/${bgColor}/${textColor}?text=${text}`;
  
  // Download the placeholder image
  const file = fs.createWriteStream(filePath);
  https.get(url, response => {
    response.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log(`Generated: ${filePath}`);
    });
  }).on('error', err => {
    fs.unlink(filePath, () => {}); // Delete the file if there was an error
    console.error(`Error generating ${filePath}: ${err.message}`);
  });
}

// Generate all placeholder images
Object.entries(images).forEach(([category, files]) => {
  files.forEach(filename => {
    generatePlaceholderImage(category, filename);
  });
});

console.log('Starting image generation...');