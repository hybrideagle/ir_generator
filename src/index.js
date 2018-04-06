var readFileSync = require("fs").readFileSync;
var path = require("path");
//import {convertWhileStatement} from "./convert";
var convertWhileStatement = require(path.resolve(__dirname, 'convert.js')).convertWhileStatement;
//var jsonToTreemodel = require("./convert-data.js").jsonToTreemodel;
var convertAssignExpression = require(path.resolve(__dirname, 'convert.js')).convertAssignExpression;
const input_file = readFileSync("./input_examples/while_loop.json", "utf-8");
const assign_input_file = readFileSync("./input_examples/assign_expr.json", "utf-8");
const input = JSON.parse(input_file);
const assign_input = JSON.parse(assign_input_file);
console.log("Read input:");
console.log(input);
//console.log("TreeModel:");
//console.log(jsonToTreemodel(JSON.parse(input)));

var n = convertWhileStatement(input);

console.log("\nOutput(long form):");
console.log(JSON.stringify(n, null, 4));

console.log("\nOutput(short form):");
console.log(n);

console.log("\n\nRead assign input:");
console.log(assign_input);
//console.log("TreeModel:");
//console.log(jsonToTreemodel(JSON.parse(input)));

var as_n = convertAssignExpression(assign_input);

console.log("\nOutput(long form):");
console.log(JSON.stringify(as_n, null, 4));

console.log("\nOutput(short form):");
console.log(as_n);

console.log(as_n.statements[0]);

//console.log(n.statements[0].body);
