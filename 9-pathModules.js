const path = require('path');
console.log(path.sep); // Provides specific seperator for the operating system 

const filePath = path.join('\content','subfolder','test.txt');
console.log(filePath); //Gives path from started specific directory

const base = path.basename(filePath);
console.log(base);//Provides just test.txt as it is a base file

const absPath = path.resolve(__dirname,'content','subfolder','test.txt');
console.log(absPath); //Provides entire path from root folder 


