// Certificates loader module
// This file dynamically loads all certificates

export function getCertificates() {
    try {
        // Try to load from assets2/certf/ folder (development and build)
        const modulesAssets = import.meta.glob('/assets2/certf/*.{jpg,jpeg,png,gif,webp,JPG,JPEG,PNG,GIF,WEBP}', {
            eager: true,
            query: '?url',
            import: 'default'
        });

        if (Object.keys(modulesAssets).length > 0) {
            return Object.entries(modulesAssets).map(([path, url]) => {
                const fileName = path.split('/').pop();
                const displayName = fileName.split('.')[0].replace(/-|_/g, ' ');
                return {
                    path: url,
                    fileName: fileName,
                    displayName: displayName
                };
            });
        }
    } catch (error) {
        console.log('assets2/certf not found, trying public folder');
    }

    // Fallback: return empty array and let the page handle fetching from public folder
    return [];
}

// Function to fetch certificates list from public folder (for production)
export async function getCertificatesFromPublic() {
    try {
        // Fetch manifest with all certificate file names
        const response = await fetch('/certificates-manifest.json');
        if (response.ok) {
            const data = await response.json();
            return data.certificates.map(fileName => {
                // Properly encode the file name for URL (handles spaces and special characters)
                const encodedFileName = encodeURIComponent(fileName);
                const displayName = fileName.split('.')[0].replace(/-|_/g, ' ');

                return {
                    path: `/certificates/${encodedFileName}`,
                    fileName: fileName,
                    displayName: displayName
                };
            });
        }
    } catch (error) {
        console.error('Error fetching manifest:', error);
    }

    // No certificates available - return empty array
    return [];
}
