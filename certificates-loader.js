// Certificates loader module
// This file dynamically loads all certificates from assets2/certf/ folder

export function getCertificates() {
    // Use Vite's import.meta.glob to dynamically import all images
    const modules = import.meta.glob('/assets2/certf/*.{jpg,jpeg,png,gif,webp,JPG,JPEG,PNG,GIF,WEBP}', {
        eager: true,
        as: 'url'
    });

    return Object.entries(modules).map(([path, url]) => {
        const fileName = path.split('/').pop().split('.')[0];
        return {
            path: url,
            fileName: fileName,
            displayName: fileName.replace(/-|_/g, ' ')
        };
    });
}
