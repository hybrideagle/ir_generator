import assert from "assert";
import {path} from 'path';
import {GenLabel, genTemp} from "./utils";

/**
 *  Coverts a simplified node to a IC
 *  @param   node The node to convert(JS object)
 *  @return       An array of nodes repesenting the simplified construct
 */

function convertNodeIC(node) {
    var generatedIC = "";
    // console.log(node.type);
    switch (node.type) {
        case 'Identifier':
            generatedIC = node.name;
            break;
        case 'Literal':
            generatedIC = node.value;
            break;
        case 'EmptyStatement':
            generatedIC = '.....';
            break;
        case 'SingleAssignmentExpression':
            generatedIC = convertNodeIC(node.target) + '=' + convertNodeIC(node.operand1);
            break;
        case 'LabeledStatement':
            if (!node.inherited) {
                generatedIC = node.label + ": ";
            }
            generatedIC += '\n\t';
            generatedIC += convertNodeIC(node.body);
            // console.log("DEBUG:", generatedIC);
            break;
        case 'SingleAssignmentExpression':
            generatedIC = node.target + " = " + node.operand1;
            break;
        case 'UnaryExpression':
            generatedIC = convertNodeIC(node.argument) + node.operator;
            break;
        case 'Sequence':
            var tempIC = node.statements.map(entry => convertNodeIC(entry));
            var i;
            for (i = 0; i < tempIC.length; i++) {
                // console.log("DEBUG:", tempIC[i]);
                generatedIC += tempIC[i];
                // console.log("DEBUG GEN:", generatedIC);
                generatedIC += '\n';
            }
            break;;
        case 'SequenceExpression':
            var tempIC = node.statements.map(entry => convertNodeIC(entry));
            var i;
            for (i = 0; i < tempIC.length; i++) {
                // console.log("DEBUG:", tempIC[i]);
                generatedIC += tempIC[i];
                // console.log("DEBUG GEN:", generatedIC);
                generatedIC += '\n';
            }
            break;
        case 'ExpressionStatement':
            generatedIC += convertNodeIC(node.expression);
            break;
        case 'GotoStatement':
            generatedIC = "goto " + node.label;
            break;;
        case 'IfGotoStatement':
            generatedIC = "if " + convertNodeIC(node.test) + " goto " + node.label;
            break;
        case 'BinaryExpression':
            generatedIC = convertNodeIC(node.left) + " " + node.operator + " " + convertNodeIC(node.right);
            break;
        case 'LogicalExpression':
            generatedIC = convertNodeIC(node.left) + " " + node.operator + " " + convertNodeIC(node.right);
            break;
        default:
            console.log("DEBUG: ", node);
            generatedIC = "Unsupported";
            break;
    }
    return generatedIC;
}

export function convertNodeObject(node) {
    return convertNodeIC(node);
}
