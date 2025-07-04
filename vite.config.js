/**
 * Vite Configuration for Ruby's Diner Website
 * 
 * This configuration file sets up the Vite build tool for development and production.
 * Vite provides fast development server with hot module replacement and optimized builds.
 */

export default {
  // Base public path when served in development or production
  // './' ensures relative paths work when deployed to subdirectories
  base: './',
  
  // Development server configuration
  server: {
    port: 3000, // Local development server port
    open: true  // Automatically open browser when server starts
  },
  
  // Production build configuration
  build: {
    outDir: 'dist',      // Output directory for built files
    assetsDir: 'assets'  // Directory for static assets within outDir
  }
};