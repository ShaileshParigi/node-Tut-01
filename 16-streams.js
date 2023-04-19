const {createReadStream} = require('fs');

//Default 64kb
// highWaterMark - 90000
// encoding : utf8
// const stream = createReadStream('./content/big.txt',{highwatermark:90000},{encoding:'utf8'});

const stream = createReadStream('./content/big.txt');
stream.on('data',(result)=>{
    console.log(result);
});
stream.on('error',(err)=>{
    console.log(err);
})
