var imagemin = require("imagemin"),    // The imagemin module.
  webp = require("imagemin-webp"),   // imagemin's WebP plugin.
  outputFolder = "./src/assets",            // Output folder
  PNGImages = "./src/assets/*.png";         // PNG images

imagemin([PNGImages], outputFolder, {
  plugins: [webp({
    lossless: true // Losslessly encode images
  })]
});
