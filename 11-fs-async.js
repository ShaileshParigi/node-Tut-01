const {readFile,writeFile} = require('fs');
/*Async is faster than sync and it does not crash app when multiple users 
tries to access or write the data*/

console.log('Start');

readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    const first = result;

    readFile('./content/second.txt','utf8',(err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        const second = result;

        writeFile('./content/result-async.txt',`Here is the result: ${first}, ${second}`,(err,result)=>{
            if(err){
                console.log(err);
                return;
            }
            console.log('Done with the task');
        })
    })
})
console.log('Starting Next task');
//Here it is starting the next task before the first task completes