var readFileSync = require("fs").readFileSync;
var path = require("path");
//import {convertWhileStatement} from "./convert";
var convertWhileStatement = require(path.resolve(__dirname, 'convert.js')).convertWhileStatement;
//var jsonToTreemodel = require("./convert-data.js").jsonToTreemodel;

const input_file = readFileSync("./input_examples/while_loop.json", "utf-8");
const input = JSON.parse(input_file);
console.log("Read input:");
console.log(input);
//console.log("TreeModel:");
//console.log(jsonToTreemodel(JSON.parse(input)));

var n = convertWhileStatement(input);

console.log("\nOutput(long form):");
console.log(JSON.stringify(n, null, 4));

console.log("\nOutput(short form):");
console.log(n);

//  console.log(n.statements[0].body);
