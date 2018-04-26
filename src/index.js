import {convertWhileStatement, convertAssignExpression, convertAll} from './convert';
//import while_loop from '../input_examples/while_loop.json';
import while_loop from '../input_examples/while_loop.json';
import assign_expr from '../input_examples/assign_expr.json';
import for_loop from '../input_examples/for_loop.json';
import if_else from '../input_examples/if_else.json';
import do_while from '../input_examples/do_while.json';
import expression from '../input_examples/expression.json';
import {getChartConfig, getIntermediateChartConfig} from './visualize';
import {convertNodeObject} from './convertIC';
import {cleanUp} from './intercleanup';
import {cleanupGenerators} from './utils.js';

function display(input_obj){
    cleanupGenerators();
    $("#basic-example").innerHTML = "";
    $("#output").innerHTML = "";
    $("#icg-pane").innerHTML = "";
    let output = convertAll(input_obj);
    // console.log(JSON.stringify(output, null, 2))
    let cleanInter = cleanUp(output);
    console.log(JSON.stringify(cleanInter, null, 2))
    let icout = convertNodeObject(cleanInter);
    console.log(icout);
    //let output = while_loop;
    var chart_config = getChartConfig(input_obj);
    new Treant(chart_config);
    console.log("output");
    console.log(output);
    var ir_chart_config = getIntermediateChartConfig(output);
    new Treant(ir_chart_config);

    document.getElementById('icg-pane').innerText = icout;
    document.getElementById('icg-pane').setAttribute("align","center");
}
display(do_while);

$("#for").on('click', () => display(for_loop));
$("#while").on('click', () => display(while_loop));
$("#do_while").on('click', () => display(do_while));
$("#if_else").on('click', () => display(if_else));
$("#expression").on('click', () => display(expression));
$("#assign_expr").on('click', () => display(assign_expr));
