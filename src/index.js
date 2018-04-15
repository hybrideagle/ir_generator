import {convertWhileStatement, convertAssignExpression} from './convert';
import while_loop from '../input_examples/while_loop.json';
import assign_expr from '../input_examples/assign_expr.json';
import {getChartConfig} from './visualize'


    var chart_config = getChartConfig(assign_expr);
    console.log(chart_config);
    new Treant(chart_config);
