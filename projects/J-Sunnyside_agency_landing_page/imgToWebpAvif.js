const path = require('path');
const sharp = require('sharp');

const inputFiles = ['src/assets/images/desktop/image-header.jpg', 'src/assets/images/desktop/image-graphic-design.jpg', 'src/assets/images/desktop/image-photography.jpg', 'src/assets/images/mobile/image-header.jpg', 'src/assets/images/mobile/image-graphic-design.jpg', 'src/assets/images/mobile/image-photography.jpg'];

Promise.all(inputFiles.map(async inputFile => {
  const inputName = path.parse(inputFile).name;
  const inputDirectory = path.parse(inputFile).dir;

  await sharp(inputFile)
    .toFormat('webp')
    .toFile(`${inputDirectory}/${inputName}.webp`);

  await sharp(inputFile)
    .toFormat('avif')
    .toFile(`${inputDirectory}/${inputName}.avif`);
})).then(() => {
  console.log("Conversion complete");
}).catch(err => {
  console.error("An error occurred:", err);
});