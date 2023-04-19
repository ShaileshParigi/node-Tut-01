const {readFile,writeFile} = require('fs').promises;

//Const util = require('util');
//Const readFilePromise = util.promisify(readFile);
//Const writeFilePromise  =  util.promisify(writeFile);

const start = async () =>{
    try{
        const first = await readFile('./content/first.txt','utf8');
        const second = await readFile('./content/second.txt','utf8');
        await writeFile('./content/result-await.txt',`THIS IS AWESOME : ${first} , ${second}`,{flag:'a'});
        console.log(first,second);
    }catch(error){
        console.log(error);
    }
}

start();