var hash = JSON.parse(require("fs").readFileSync("hash.json"));
var read = require("fs").readFileSync("index.hash").toString();
var convert = read.split("#");
var converted = convert.map(x => hash[x]).join("");

console.log(converted);