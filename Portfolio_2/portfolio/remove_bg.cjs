const Jimp = require('jimp');

async function processLogo() {
    try {
        let jimpLib = Jimp;
        if (Jimp && Jimp.Jimp) {
             jimpLib = Jimp.Jimp;
        } else if (Jimp && Jimp.default) {
             jimpLib = Jimp.default;
        }

        const image = await jimpLib.read('src/assets/logo.png');
        
        image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
            const red = this.bitmap.data[idx];
            const green = this.bitmap.data[idx + 1];
            const blue = this.bitmap.data[idx + 2];
            
            // If the pixel is very light (white-ish)
            if (red > 230 && green > 230 && blue > 230) {
                this.bitmap.data[idx + 3] = 0; // set alpha to fully transparent
            }
        });
        
        image.write('src/assets/logo.png', () => {
             console.log('Logo background removed successfully!');
        });
    } catch (error) {
        console.error('Error processing image:', error);
    }
}

processLogo();
