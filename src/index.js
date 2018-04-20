import {convertWhileStatement, convertAssignExpression, convertSingle} from './convert';
//import while_loop from '../input_examples/while_loop.json';
import while_loop from '../input_examples/while_loop.json';
import assign_expr from '../input_examples/assign_expr.json';
import for_loop from '../input_examples/for_loop.json';
import if_else from '../input_examples/if_else.json';
import expression from '../input_examples/expression.json';
import {getChartConfig} from './visualize'

//Trying to convert the output into a json file
/* var a=convertWhileStatement(while_loop);
   console.log(a);
 var callback = require('node-callback');
    var json=JSON.stringify(a);
    console.log(json);
    var fs=require("file-system");
    fs.writeFile('../examples_output/while_output.json', json, (err) => {
        if (err) {
            console.error(err);
            return;
        };
        console.log("File has been created");
    });*/
let output = convertSingle(while_loop);
//let output = while_loop;
var chart_config = getChartConfig(output);
console.log(JSON.stringify(chart_config, null,  2));
new Treant(chart_config);
