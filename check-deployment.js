const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Define paths
const outDir = path.join(__dirname, 'out');
const chunksDir = path.join(outDir, '_next', 'static', 'chunks');

// Expected files in the root of out/
const expectedRootFiles = [
  'CNAME',
  'apple_touch_icon.png',
  'area.png',
  'facebook_logo.png',
  'farm_john_mole.jpg',
  'farm_moles.jpg',
  'farm_son.jpg',
  'favicon.ico',
  'Instagram_icon.png',
  'linked-in.jpg',
  'logo.png',
  'moleintrap.jpg',
  'moles_collage.jpg',
  'rat1.jpg',
  'tube-icon.jpg',
  'waspnest.jpg',
  'index.html',
];

// Expected directories
const expectedDirs = [
  path.join(outDir, '_next'),
  path.join(outDir, 'privacy-policy'),
  path.join(outDir, 'terms-conditions'),
];

// Function to check if a file exists
function checkFileExists(filePath, description) {
  if (fs.existsSync(filePath)) {
    console.log(`✅ ${description} exists: ${filePath}`);
    return true;
  } else {
    console.error(`❌ ${description} is missing: ${filePath}`);
    return false;
  }
}

// Function to check JavaScript chunks
function checkJavaScriptChunks() {
  const staticDir = path.join(outDir, '_next', 'static');
  if (!fs.existsSync(staticDir)) {
    console.error('❌ Static directory not found: out/_next/static/');
    return false;
  }

  if (!fs.existsSync(chunksDir)) {
    console.error('❌ Chunks directory not found: out/_next/static/chunks/');
    console.error('ℹ️ This indicates an issue with the Next.js static export.');
    console.error('ℹ️ Try the following steps:');
    console.error('  1. Clean the out/ directory: rmdir /S /Q out');
    console.error('  2. Rebuild the site: npm run build');
    console.error('  3. Check the build output for errors.');
    console.error('  4. Verify Next.js version compatibility with static exports.');
    return false;
  }

  // Dynamically get all JavaScript chunks
  const chunks = fs.readdirSync(chunksDir).filter(file => file.endsWith('.js'));

  if (chunks.length === 0) {
    console.error('❌ No JavaScript chunks found in out/_next/static/chunks/.');
    return false;
  }

  console.log('\n🔍 Checking JavaScript chunks in out/_next/static/chunks/...');
  chunks.forEach(chunk => checkFileExists(path.join(chunksDir, chunk), `JavaScript chunk ${chunk}`));
  return true;
}

// Function to redeploy to gh-pages
function redeploy() {
  console.log('🚀 Redeploying to gh-pages...');
  try {
    // Skip rmdir if the directory doesn't exist to avoid errors
    if (fs.existsSync('out_temp')) {
      execSync('rmdir /S /Q out_temp', { stdio: 'inherit' });
    }
    execSync('mkdir out_temp', { stdio: 'inherit' });
    execSync('xcopy out\\* out_temp /E /H /C /I', { stdio: 'inherit' });
    execSync('npx gh-pages -d out_temp', { stdio: 'inherit' });
    console.log('✅ Successfully redeployed to gh-pages');
  } catch (error) {
    console.error('❌ Error during redeployment:', error.message);
    throw error;
  }
}

// Main function to run the checks
function runChecks() {
  console.log('=== Starting Deployment Check ===\n');

  // Check root files
  console.log('🔍 Checking root files...');
  expectedRootFiles.forEach(file => checkFileExists(path.join(outDir, file), `Root file ${file}`));

  // Check directories
  console.log('\n🔍 Checking directories...');
  expectedDirs.forEach(dir => checkFileExists(dir, `Directory ${path.basename(dir)}`));

  // Check JavaScript chunks
  console.log('\n🔍 Checking JavaScript chunks...');
  const chunksExist = checkJavaScriptChunks();
  if (!chunksExist) {
    console.error('❌ Cannot proceed with deployment due to missing JavaScript chunks.');
    return;
  }

  // Redeploy
  console.log('\n🔍 All checks passed. Proceeding with redeployment...');
  redeploy();

  console.log('\n=== Deployment Check Complete ===');
  console.log('🌐 Please visit https://www.welshmolecatcher.co.uk/ to verify the site.');
}

// Run the checks and handle errors
try {
  runChecks();
} catch (error) {
  console.error('❌ An error occurred during the deployment check:', error.message);
  process.exit(1);
}