const https = require('https');
const fs = require('fs');
const path = require('path');

// Configuration
const baseDir = path.join(__dirname, 'retro-diner-website', 'assets', 'images');
const imageSets = {
  menu: {
    dir: 'menu',
    images: [
      { name: 'burger1.jpg', url: 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?q=80&w=1115&auto=format&fit=crop' },
      { name: 'burger2.jpg', url: 'https://images.unsplash.com/photo-1550317138-10000687a72b?q=80&w=1020&auto=format&fit=crop' },
      { name: 'burger3.jpg', url: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=999&auto=format&fit=crop' },
      { name: 'burger4.jpg', url: 'https://images.unsplash.com/photo-1625937286074-9ca519d5d9f2?q=80&w=1032&auto=format&fit=crop' },
      { name: 'shake1.jpg', url: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?q=80&w=1035&auto=format&fit=crop' },
      { name: 'shake2.jpg', url: 'https://images.unsplash.com/photo-1577805947697-89e18249d767?q=80&w=1246&auto=format&fit=crop' },
      { name: 'shake3.jpg', url: 'https://images.unsplash.com/photo-1541658016709-82535e94bc69?q=80&w=1169&auto=format&fit=crop' },
      { name: 'shake4.jpg', url: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=987&auto=format&fit=crop' },
      { name: 'sides1.jpg', url: 'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?q=80&w=1025&auto=format&fit=crop' },
      { name: 'sides2.jpg', url: 'https://images.unsplash.com/photo-1639024471283-03518883512d?q=80&w=1170&auto=format&fit=crop' },
      { name: 'sides3.jpg', url: 'https://images.unsplash.com/photo-1639024428331-7caaf2ef2eb9?q=80&w=1170&auto=format&fit=crop' },
      { name: 'sides4.jpg', url: 'https://images.unsplash.com/photo-1680011481632-b615b76fb3ae?q=80&w=1170&auto=format&fit=crop' },
      { name: 'dessert1.jpg', url: 'https://images.unsplash.com/photo-1551024601-35740a5a1690?q=80&w=1163&auto=format&fit=crop' },
      { name: 'dessert2.jpg', url: 'https://images.unsplash.com/photo-1623595119708-26b1f7500cca?q=80&w=1074&auto=format&fit=crop' },
      { name: 'dessert3.jpg', url: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=1054&auto=format&fit=crop' },
      { name: 'dessert4.jpg', url: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=1257&auto=format&fit=crop' },
    ]
  },
  staff: {
    dir: 'staff',
    images: [
      { name: 'betty.jpg', url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=987&auto=format&fit=crop' },
      { name: 'frank.jpg', url: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=1180&auto=format&fit=crop' },
      { name: 'peggy.jpg', url: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1061&auto=format&fit=crop' },
      { name: 'tommy.jpg', url: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=987&auto=format&fit=crop' }
    ]
  },
  celebrities: {
    dir: 'celebrities',
    images: [
      // Using public domain celebrity images
      { name: 'elvis.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Elvis_Presley_promoting_Jailhouse_Rock.jpg' },
      { name: 'marilyn.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/0/0a/Marilyn_Monroe_in_1952.jpg' },
      { name: 'james.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/James_Dean_in_East_of_Eden_trailer_2.jpg/800px-James_Dean_in_East_of_Eden_trailer_2.jpg' },
      { name: 'buddy.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Buddy_Holly_Brunswick_Records.jpg/800px-Buddy_Holly_Brunswick_Records.jpg' }
    ]
  },
  diner: {
    dir: '',
    images: [
      { name: 'diner-hero.jpg', url: 'https://images.unsplash.com/photo-1529417305485-480f579e7578?q=80&w=1169&auto=format&fit=crop' },
      { name: 'diner-history.jpg', url: 'https://images.unsplash.com/photo-1548172711-1795aa156d28?q=80&w=1171&auto=format&fit=crop' },
      { name: 'booth.jpg', url: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1170&auto=format&fit=crop' },
      { name: 'jukebox.jpg', url: 'https://images.unsplash.com/photo-1590244443979-cb85445f6bbe?q=80&w=987&auto=format&fit=crop' }
    ]
  },
  defaults: {
    dir: 'defaults',
    images: [
      { name: 'default-food.jpg', url: 'https://images.unsplash.com/photo-1562059392-096cd2fb9c22?q=80&w=1219&auto=format&fit=crop' },
      { name: 'default-staff.jpg', url: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1170&auto=format&fit=crop' },
      { name: 'default-celebrity.jpg', url: 'https://images.unsplash.com/photo-1559564099-8a1858aea5d2?q=80&w=1170&auto=format&fit=crop' }
    ]
  }
};

// Create directories if they don't exist
for (const [category, data] of Object.entries(imageSets)) {
  const dirPath = path.join(baseDir, data.dir);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`Created directory: ${dirPath}`);
  }
}

// Download images
let completedDownloads = 0;
let totalDownloads = 0;

// Count total number of images to download
for (const category of Object.values(imageSets)) {
  totalDownloads += category.images.length;
}

console.log(`Starting download of ${totalDownloads} images...`);

// Process each image set
for (const [category, data] of Object.entries(imageSets)) {
  for (const image of data.images) {
    const filePath = path.join(baseDir, data.dir, image.name);
    
    // Skip if file exists
    if (fs.existsSync(filePath)) {
      console.log(`File already exists, skipping: ${filePath}`);
      completedDownloads++;
      if (completedDownloads === totalDownloads) {
        console.log('All images downloaded or already exist.');
      }
      continue;
    }
    
    // Download the file
    const file = fs.createWriteStream(filePath);
    https.get(image.url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded: ${filePath}`);
        completedDownloads++;
        if (completedDownloads === totalDownloads) {
          console.log('All images downloaded successfully!');
        }
      });
    }).on('error', (err) => {
      fs.unlink(filePath, () => {}); // Delete the file if there was an error
      console.error(`Error downloading ${image.name}: ${err.message}`);
    });
  }
}