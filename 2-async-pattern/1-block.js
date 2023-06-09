const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('Home Page');
        return;
    }
    if(req.url==='/about'){
        //Blocking Code
        for(let i=0;i<1000;i++){
            for(let j=0;j<1000;j++){
                console.log(`${i} ${j}`); //This block code leads to delay in all requests.
            }
        }
        res.end('About Page');
        return;
    }
    res.end('Error Page');
});
server.listen(5000,()=>{
    console.log('Server Listening to port: 5000...');
})