import {convertWhileStatement, convertAssignExpression} from './convert';
import while_loop from '../input_examples/while_loop.json';
import assign_expr from '../input_examples/assign_expr.json';
console.log(while_loop);
//const input_file = readFileSync("", "utf-8");
//const assign_input_file = readFileSync("./input_examples/assign_expr.json", "utf-8");

window.onload= () => {
    console.log("While loop input:");
    console.log(while_loop);

    var n = convertWhileStatement(while_loop);

    console.log("While loop output:");
    console.log(n);


    console.log("Assign input:");
    console.log(assign_expr);
    var as_n = convertAssignExpression(assign_expr);
    console.log("Assign output:");
    console.log(as_n);

}
