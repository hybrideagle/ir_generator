import {convertWhileStatement, convertAssignExpression, convertAll} from './convert';
//import while_loop from '../input_examples/while_loop.json';
import while_loop from '../input_examples/while_loop.json';
import assign_expr from '../input_examples/assign_expr.json';
import for_loop from '../input_examples/for_loop.json';
import if_else from '../input_examples/if_else.json';
import do_while from '../input_examples/do_while.json';
import expression from '../input_examples/expression.json';
import {convertNodeObject} from './convertIC';
import {cleanUp} from './intercleanup';
//import {readFileSync} from 'fs';
var fs = require('fs');
let input = fs.readFileSync(0);


let input_obj = JSON.parse(input);
let output = convertAll(input_obj);
let cleanInter = cleanUp(output);
let icout = convertNodeObject(cleanInter);
console.log(icout);
