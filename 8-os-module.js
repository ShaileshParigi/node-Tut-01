const os = require('os'); //We donot require ./

//info about current user
const user = os.userInfo();
console.log(user);

//Method returns the system up time in seconds
console.log(`The system uptime is ${os.uptime()} seconds`);

const currentOS = {
    name :os.type(),
    release : os.release(),
    totalMemory : os.totalmem(),
    freeMemory :os.freemem()
}
console.log(currentOS);