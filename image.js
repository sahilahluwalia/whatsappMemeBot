var Jimp = require("jimp");
const path = require('path');
const fs = require('fs');
var fileName = 'Me irl___$me_irl';
var imageCaption = 'Image';
var loadedImage;
const caption= fileName.split('___$')[0]
console.log(caption)

// Jimp.read(fileName)
//     .then(function (image) {
//         loadedImage = image;
//         return Jimp.loadFont(Jimp.FONT_SANS_16_BLACK);
//     })
//     .then(function (font) {
//         loadedImage.print(font, 10, 10, caption)
//                    .write(fileName);
//     })
//     .catch(function (err) {
//         console.error(err);
//     });


const directoryPath = path.join(__dirname, 'new');
fs.readdir(directoryPath, function  (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    //listing all files using forEach
    files.forEach(function  (file) {
        const caption= file.split('___$')[0]

        Jimp.read(directoryPath+'/'+file)
    .then(function (image) {
        loadedImage = image;
        // console.log(image)
        return Jimp.loadFont(Jimp.FONT_SANS_32_BLACK);
    })
    .then(function (font) {
        loadedImage.print(font, 20, 20, caption)
                   .write('converted/'+file);
    })
    .catch(function (err) {
        console.error(err);
    });
    });
});