import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Paths
const certificatesDir = path.join(__dirname, 'public', 'certificates');
const assets2CertDir = path.join(__dirname, 'assets2', 'certf');
const manifestPath = path.join(__dirname, 'public', 'certificates-manifest.json');

function getCertificateFiles(dir) {
    try {
        if (!fs.existsSync(dir)) {
            return [];
        }
        const files = fs.readdirSync(dir);
        return files.filter(file => /\.(jpg|jpeg|png|gif|webp)$/i.test(file));
    } catch (error) {
        console.error(`Error reading directory ${dir}:`, error);
        return [];
    }
}

// Get certificates from both directories
let certificates = getCertificateFiles(certificatesDir);

// If public/certificates is empty, copy from assets2/certf
if (certificates.length === 0 && fs.existsSync(assets2CertDir)) {
    console.log('Copying certificates from assets2/certf to public/certificates...');
    const assets2Certs = getCertificateFiles(assets2CertDir);

    // Create public/certificates if it doesn't exist
    if (!fs.existsSync(certificatesDir)) {
        fs.mkdirSync(certificatesDir, { recursive: true });
    }

    // Copy files
    assets2Certs.forEach(file => {
        const src = path.join(assets2CertDir, file);
        const dest = path.join(certificatesDir, file);
        fs.copyFileSync(src, dest);
        console.log(`Copied: ${file}`);
    });

    certificates = assets2Certs;
}

// Generate manifest
const manifest = {
    certificates: certificates,
    generated: new Date().toISOString()
};

// Write manifest
fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
console.log(`\n✅ Generated manifest with ${certificates.length} certificates`);
console.log(`📄 Manifest saved to: ${manifestPath}`);
