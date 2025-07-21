const fs = require('fs');
const path = require('path');

// --- Configuration ---
// The directory where your source topic JSON files are stored.
const sourceDir = 'content';
// The public file your app will fetch.
const targetFile = 'public/data/content.json';


// 1. Read the topic ID from the environment variable
const topicId = process.env.APP_CONFIG_ID;
if (!topicId) {
  console.error('❌ Error: APP_CONFIG_ID environment variable not set.');
  console.error('   Example: APP_CONFIG_ID=godel_theorems node build.js');
  process.exit(1);
}

// 2. Define source and target paths
const sourcePath = path.join(__dirname, sourceDir, `${topicId}.json`);
const targetPath = path.join(__dirname, targetFile);

// 3. Check if the source file exists
if (!fs.existsSync(sourcePath)) {
  console.error(`❌ Error: Source file not found for topic ID '${topicId}'.`);
  console.error(`   Looked for: ${sourcePath}`);
  process.exit(1);
}

// 4. Copy the file
try {
  // Ensure the target directory exists
  fs.mkdirSync(path.dirname(targetPath), { recursive: true });
  // Copy the selected content file, overwriting the target
  fs.copyFileSync(sourcePath, targetPath);
  console.log(`✅ Successfully built app with '${topicId}' configuration.`);
  console.log(`   Source: ${sourceDir}/${topicId}.json`);
  console.log(`   Target: ${targetFile}`);

} catch (err) {
  console.error(`❌ Error building app for configuration '${topicId}':`, err);
  process.exit(1);
}