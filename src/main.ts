import {readFileSync} from "fs";
import {jsonToTreemodel} from "./convert-data"

const input = readFileSync("./input_examples/while_loop.json", "utf-8");
console.log("Read input:");
console.log(JSON.parse(input));
console.log("TreeModel:");
console.log(jsonToTreemodel(JSON.parse(input)));
