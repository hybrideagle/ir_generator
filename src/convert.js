import assert from "assert";
import {path} from 'path';
import {GenLabel, genTemp} from "./utils";

/**
 *  Coverts a node to a simplified series of nodes
 *  @param   node The node to convert(JS object)
 *  @return       An array of nodes repesenting the simplified construct
 */

 function convertIfElseStatement(node) {
    // console.log("Hello:",node.type)
    assert.ok(node.type == 'IfStatement', node.type, "invalid node type(IfStatement) expected");

     let ifGuard = {
         type: "LabeledStatement",
         body: {
             type: "IfGotoStatement",
             test: node.test,
             label: null
         },
         label: GenLabel(),
         inherited: false
     };
     let topGoto = {
         type: "GotoStatement",
         label: null
     }
     let body = {
         type: "LabeledStatement",
         label: GenLabel(),
         body: convertAll(node.consequent),
         inherited: false
     }

     let elseBody = {
         type: "LabeledStatement",
         label: GenLabel(),
         body: convertAll(node.alternative),
         inherited: false
     }
     ifGuard.body.label = body.label;
     topGoto.label = elseBody.label;

     let endGoto = {
         type: "GotoStatement",
         label: null
     }

     let ifelseExit = {
         type: 'LabeledStatement',
         label: GenLabel(),
         body: {
             type: "EmptyStatement"
         },
         inherited: false
     }
     endGoto.label = ifelseExit.label;

     return {
         type: "SequenceExpression",
         statements: [ifGuard, topGoto, body, endGoto, elseBody, endGoto, ifelseExit]
     }
 }

 export function convertForStatement(node) {

     assert.ok(node.type == 'ForStatement', node.type, "invalid node type(Assign expected)");

     let initial= {
           type:"SingleAssignmentExpression",
           target: node.init.left,
           operand1: node.init.right

     }
     let ifGuard = {
         type: "LabeledStatement",
         body: {
             type: "IfGotoStatement",
             test: node.test,
             label: null
         },
         label: GenLabel(),
         inherited: false
     };
     let topGoto = {
         type: "GotoStatement",
         label: null
     }
     let body = {
         type: "LabeledStatement",
         label: GenLabel(),
         body: convertAll(node.body),
         inherited: false
     }
     ifGuard.body.label = body.label;
     let inc={
       type :"UnaryExpression",
       operator : node.update.operator,
       argument : node.update.argument,

       prefix :  node.update.prefix
     }
     let endGoto = {
         type: "GotoStatement",
         label: ifGuard.label
     }
     let loopExit = {
         type: 'LabeledStatement',
         label: GenLabel(),
         body: {
             type: "EmptyStatement"
         },
         inherited: false
     }
     topGoto.label = loopExit.label;

     return {
         type: "SequenceExpression",
         statements: [initial, ifGuard, topGoto, body, inc, endGoto, loopExit]
     }
 }

 export function convertDoWhileStatement(node) {

     assert.ok(node.type == 'DoWhileStatement', node.type, "invalid node type(Assign expected)");


     let body = {
         type: "LabeledStatement",
         label: GenLabel(),
         body: convertAll(node.body),
         inherited: false
     }
     let ifGuard = {
        type: "IfGotoStatement",
        test: node.test,
        label: null
    };
    ifGuard.label = body.label;
    let loopExit = {
        type: 'LabeledStatement',
        label: GenLabel(),
        body: {
            type: "EmptyStatement"
        },
        inherited: false
    }
     let endGoto = {
         type: "GotoStatement",
         label: null
     }
     endGoto.label = loopExit.label
     return {
         type: "Sequence",
         statements: [ body, ifGuard,  endGoto, loopExit]
     }
 }



export function convertAssignExpression(node) {
    assert.ok(node.type == 'AssignmentExpression',`invalid node type(Assign expected),got ${node.type}`);

    let tempBlock = {
        type: "SingleAssignmentExpression",
        target: genTemp(),
        operand1: node.right
    };

    let assignblock = {
        type: "SingleAssignmentExpression",
        target: node.left,
        operand1: tempBlock.target
    };
    return {
        type: "Sequence",
        statements: [tempBlock, assignblock]
    }

}

export function convertWhileStatement(node) {

    assert.ok(node.type == 'WhileStatement', node.type, "invalid node type(Assign expected)");

    let ifGuard = {
        type: "LabeledStatement",
        body: {
            type: "IfGotoStatement",
            test: node.test,
            label: null
        },
        label: GenLabel(),
        inherited: false
    };
    let topGoto = {
        type: "GotoStatement",
        label: null
    }
    let body = {
        type: "LabeledStatement",
        label: GenLabel(),
        body: convertAll(node.body),
        inherited: false
    }
    ifGuard.body.label = body.label;
    let endGoto = {
        type: "GotoStatement",
        label: ifGuard.label
    }
    let loopExit = {
        type: 'LabeledStatement',
        label: GenLabel(),
        body: {
            type: "EmptyStatement"
        },
        inherited: false
    }
    topGoto.label = loopExit.label;

    return {
        type: "SequenceExpression",
        statements: [ifGuard, topGoto, body, endGoto, loopExit]
    }
}

export function convertAll(node) {
    if (node == null || typeof node == 'undefined')
        return;

    switch (node.type) {
        case "WhileStatement":
            node = convertWhileStatement(node);
            break;
        case "DoWhileStatement":
            node = convertDoWhileStatement(node);
            break;
        case "ForStatement":
            node = convertForStatement(node);
            break;
        case "IfStatement":
            node = convertIfElseStatement(node);
            break;
        case "AssignmentExpression":
            node = convertAssignExpression(node);
            break;
        case "ExpressionStatement":
            node = convertExpressionStatement(node);
            break;
        default:
            console.log(`[Warning] ${node.type} transformation not supported`);
    }
    return node;
}
