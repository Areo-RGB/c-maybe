const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Log with timestamp
const log = (message) => {
  const timestamp = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');
  console.log(`[${timestamp}] ${message}`);
};

// Run build test
try {
  log('Starting build test...');
  
  // Run build
  log('Building project...');
  execSync('npm run build', { stdio: 'inherit' });
  
  log('Build successful! ✅');
  
  // Additional checks could be added here (e.g., checking bundle size)
  const buildDir = path.join(__dirname, '..', 'build');
  const stats = fs.statSync(buildDir);
  log(`Build directory size: ${Math.round(getDirSize(buildDir) / 1024 / 1024 * 100) / 100} MB`);

} catch (error) {
  log(`Build failed: ${error.message}`);
  process.exit(1);
}

// Helper function to get directory size
function getDirSize(dirPath) {
  let size = 0;
  const files = fs.readdirSync(dirPath);
  
  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      size += getDirSize(filePath);
    } else {
      size += stat.size;
    }
  }
  
  return size;
} 