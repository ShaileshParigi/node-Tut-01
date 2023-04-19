//npm -global command
//npm --version

//local dependency - Use it in particular project
//npm i <package Name>
//npm uninstall packageName

//Global Dependecy - use it in any project
// npm install -g <package name>

//package.json - manifest File(stores imp info about project)
/*Ways to do it
1. Manual approach - create package.json in root, create properties etc..)
2. npm install - step by step, press enter to skip
3. npm init -y - Everything default
*/

const _ = require('lodash');
const items = [1,[2,[3,[4]]]];

const newItems = _.flattenDeep(items);
console.log(newItems);
console.log("Hello People");