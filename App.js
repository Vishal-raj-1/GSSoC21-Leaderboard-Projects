console.clear();
const Data = require("./Data.json");
console.log("Hello!");
console.log("Total Projects: " + Object.keys(Data).length);
console.log(Data[Object.keys(Data)[0]][0]);
