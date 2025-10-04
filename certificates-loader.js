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
                const fileName = path.split('/').pop().split('.')[0];
                return {
                    path: url,
                    fileName: fileName,
                    displayName: fileName.replace(/-|_/g, ' ')
                };
            });
        }
    } catch (error) {
        console.log('assets2/certf not found, trying public folder');
    }

    // Fallback: return empty array and let the page handle fetching from public folder
    return [];
}

// Function to fetch certificates list from public folder
export async function getCertificatesFromPublic() {
    try {
        // List of certificate files (you need to update this when adding new certificates)
        // Or fetch from a manifest.json file
        const response = await fetch('/certificates-manifest.json');
        if (response.ok) {
            const data = await response.json();
            return data.certificates.map(fileName => ({
                path: `/certificates/${fileName}`,
                fileName: fileName.split('.')[0],
                displayName: fileName.split('.')[0].replace(/-|_/g, ' ')
            }));
        }
    } catch (error) {
        console.log('No manifest found, using static list');
    }

    // Static fallback list - update this when you add new certificates
    const knownCertificates = [
        'Alura IA certificado.png',
        'Daxus Certificado.png',
        'Discover Certificado Rocketseat.png',
        'Engenharias de Prompt Rocketseat Certificado.png'
    ];

    return knownCertificates.map(fileName => ({
        path: `/certificates/${fileName}`,
        fileName: fileName.split('.')[0],
        displayName: fileName.split('.')[0].replace(/-|_/g, ' ')
    }));
}
