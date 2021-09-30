const fs = require('fs');
const { resolve } = require('path');

//writing files
const writeFile = fileContent => {
    return new Promise((resolve,reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            //if there's an error, rejects the promise and send the error to the promise's .catch() method
            if (err) {
                reject(err);
                //return out of the function here to make sure the promise doesn't accidentally execute the resolve() function as well
                return;
            }

            //if everything went well, resolve the Promise and send the successful data to the '.then()' method
            resolve({
                ok: true,
                message: "File created!"
            });
        });
    });
};

//copying files
const copyFile = () => {
    return new Promise((resolve,reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err =>{
            if(err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: "Stylesheet successfully created!"
            });
        });
    });
};

module.exports= { writeFile, copyFile };