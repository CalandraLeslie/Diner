/**
 * Placeholder Image Generator for Ruby's Diner Website
 * 
 * This utility script creates placeholder SVG images for development purposes.
 * It generates images for various categories: menu items, staff, celebrities, and general diner images.
 * The placeholders help with layout development before actual images are available.
 * 
 * Usage: node create-placeholders.js
 */

const fs = require('fs');
const path = require('path');

// Base directory where all images will be stored
const baseDir = path.join(__dirname, 'public', 'images');

/**
 * Create directory structure for organized image storage
 * Categories help organize different types of images
 */
const categories = ['menu', 'staff', 'celebrities', 'defaults', ''];
categories.forEach(category => {
  const dir = path.join(baseDir, category);
  if (!fs.existsSync(dir)) {
    // Create directories recursively if they don't exist
    fs.mkdirSync(dir, { recursive: true });
  }
});

/**
 * Define all images needed for the website
 * Each entry specifies the category and filename
 */
const images = [
  // Menu category images - food items for the diner menu
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
  
  // Staff category images - diner employees
  { category: 'staff', name: 'betty.jpg' },
  { category: 'staff', name: 'frank.jpg' },
  { category: 'staff', name: 'peggy.jpg' },
  { category: 'staff', name: 'tommy.jpg' },
  
  // Celebrity category images - famous visitors
  { category: 'celebrities', name: 'elvis.jpg' },
  { category: 'celebrities', name: 'marilyn.jpg' },
  { category: 'celebrities', name: 'james.jpg' },
  { category: 'celebrities', name: 'buddy.jpg' },
  
  // Default fallback images
  { category: 'defaults', name: 'default-food.jpg' },
  { category: 'defaults', name: 'default-staff.jpg' },
  { category: 'defaults', name: 'default-celebrity.jpg' },
  
  // Root level images - main diner photos
  { category: '', name: 'diner-hero.jpg' },
  { category: '', name: 'booth.jpg' },
  { category: '', name: 'jukebox.jpg' }
];

/**
 * Generate placeholder images for all defined image entries
 * Creates simple SVG files with the filename as text
 */
images.forEach(({ category, name }) => {
  const filePath = path.join(baseDir, category, name);
  
  // Skip if file already exists to avoid overwriting
  if (fs.existsSync(filePath)) {
    console.log(`File already exists: ${filePath}`);
    return;
  }
  
  // Create a simple SVG placeholder with consistent dimensions
  const width = 400;
  const height = 300;
  const svg = `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="#f5f5f5" />
    <text x="50%" y="50%" font-family="Arial" font-size="24" fill="#c82032" text-anchor="middle">${name}</text>
  </svg>`;
  
  // Write the SVG content to file
  fs.writeFileSync(filePath, svg);
  console.log(`Created placeholder: ${filePath}`);
});

console.log('All placeholders created!');