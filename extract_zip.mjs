import AdmZip from 'adm-zip';
import fs from 'fs';

const zip = new AdmZip('attached_assets/SS PLATE  MAMTA STEEL TRADERS_1760464723821.zip');

// List contents
const zipEntries = zip.getEntries();
console.log('ZIP Contents:');
zipEntries.forEach((entry) => {
  console.log(entry.entryName);
});

// Extract to a temp directory first
zip.extractAllTo('/tmp/extracted_images', true);
console.log('\nExtracted to /tmp/extracted_images');
