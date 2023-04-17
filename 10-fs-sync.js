const {readFileSync,writeFileSync} = require('fs');//File system

/* const fs = require('fs');
    fs.readFileSync;
*/

//Reading File
console.log('start');
const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/second.txt','utf8');

//console.log(first,second);

//Writing into a new file
writeFileSync('./content/result-sync.txt', `Here is my the result : ${first}, ${second}`);
//A new result-sync.txt file will be created


//Appending the data to a file
writeFileSync('./content/result-sync.txt',`Here is my the result : ${first}, ${second}`,{flag:'a'});
//Here flag:'a' is used to append the data to a existing file

console.log('Done with the task');
console.log('Staring Next Task');



