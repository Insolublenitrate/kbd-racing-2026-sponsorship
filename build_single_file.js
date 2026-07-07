const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

function encodeImageToDataUri(filePath) {
    const ext = path.extname(filePath).toLowerCase();
    let mimeType = 'image/jpeg';
    if (ext === '.png') mimeType = 'image/png';
    else if (ext === '.gif') mimeType = 'image/gif';
    else if (ext === '.svg') mimeType = 'image/svg+xml';
    
    const data = fs.readFileSync(filePath);
    const base64 = data.toString('base64');
    return `data:${mimeType};base64,${base64}`;
}

function buildSingleFile() {
    console.log('Building single file presentation...');
    let html = fs.readFileSync('index.html', 'utf8');
    const css = fs.readFileSync('styles.css', 'utf8');
    const js = fs.readFileSync('app.js', 'utf8');

    // Replace CSS
    html = html.replace('<link rel="stylesheet" href="styles.css">', `<style>\n${css}\n</style>`);
    
    // Replace JS
    html = html.replace('<script src="app.js"></script>', `<script>\n${js}\n</script>`);

    // Find and replace all image references
    // Background images in style="background-image: url('assets/...')"
    // And in CSS if there are any
    const regex = /(?:url\(['"]?assets\/([^'"\)]+)['"]?\))/g;
    
    let match;
    const imagesToReplace = new Set();
    while ((match = regex.exec(html)) !== null) {
        imagesToReplace.add(match[1]);
    }
    
    // Also check CSS for background-images (which is now embedded in HTML)
    while ((match = regex.exec(html)) !== null) {
        imagesToReplace.add(match[1]);
    }
    
    // Manually parse all instances
    let modifiedHtml = html;
    
    const filesInAssets = fs.readdirSync('assets');
    for (const file of filesInAssets) {
        try {
            const filePath = path.join('assets', file);
            // Some file names might be URL encoded in the HTML like %20
            const uriEncoded = encodeURI(file);
            const dataUri = encodeImageToDataUri(filePath);
            
            // Replace literal file name
            modifiedHtml = modifiedHtml.split(`url('assets/${file}')`).join(`url('${dataUri}')`);
            modifiedHtml = modifiedHtml.split(`url("assets/${file}")`).join(`url("${dataUri}")`);
            modifiedHtml = modifiedHtml.split(`url(assets/${file})`).join(`url(${dataUri})`);
            
            // Replace URI encoded file name
            modifiedHtml = modifiedHtml.split(`url('assets/${uriEncoded}')`).join(`url('${dataUri}')`);
            modifiedHtml = modifiedHtml.split(`url("assets/${uriEncoded}")`).join(`url("${dataUri}")`);
            modifiedHtml = modifiedHtml.split(`url(assets/${uriEncoded})`).join(`url(${dataUri})`);
            
        } catch (e) {
            console.error('Error processing', file, e);
        }
    }

    const outputPath = 'KBD_Racing_2026_Sponsorship_Deck.html';
    fs.writeFileSync(outputPath, modifiedHtml);
    console.log(`Successfully built ${outputPath}`);
}

buildSingleFile();
