// Simple script to create a favicon
const fs = require('fs');
const https = require('https');
const path = require('path');

const faviconPath = path.join(__dirname, '../public/favicon.png');
const url = 'https://placehold.co/64x64/c82032/ffffff?text=R';

const file = fs.createWriteStream(faviconPath);
https.get(url, response => {
  response.pipe(file);
  file.on('finish', () => {
    file.close();
    console.log(`Generated favicon at: ${faviconPath}`);
  });
}).on('error', err => {
  fs.unlink(faviconPath, () => {});
  console.error(`Error generating favicon: ${err.message}`);
});