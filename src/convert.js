const assert = require("assert");
const TreeModel = require("tree-model");
var path = require('path');
//import {Node, WhileStatement, AssignmentExpression} from "./schema";
//import {GenLabel, genTemp} from "./utils";
var utils = require(path.resolve(__dirname, 'utils.js'));
var GenLabel = utils.GenLabel;
var genTemp = utils.genTemp;

/**
 *  Coverts a node to a simplified series of nodes
 *  @param   node The node to convert(JS object)
 *  @return       An array of nodes repesenting the simplified construct
 */

function convertAssignExpression(node) {
    assert.ok(node.type == 'AssignmentExpression');

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

function convertWhileStatement(node) {

    assert.ok(node.type == 'WhileStatement', node.type);

    let ifGuard = {
        type: "LabeledStatement",
        body: {
            type: "IfGotoStatement",
            test: node.test,
            label: null
        },
        label: GenLabel()
    };
    let topGoto = {
        type: "GotoStatement",
        label: null
    }
    let body = {
        type: "LabeledStatement",
        label: GenLabel(),
        body: node.body
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
        }
    }

    return {
        type: "Sequence",
        statements: [ifGuard, topGoto, body, endGoto, loopExit]
    }
}

function convertAll(node) {
    if (node == null)
        return;

    let props = node.getOwnPropertyNames();
    props.forEach(prop => {
        let n = node[prop];
        if (typeof n !== null && (typeof n === 'object' || typeof n == 'array'))
            node[prop] = convertAll(node[prop]);
        }
    );

    switch (node.type) {
        case "WhileStatement":
            node = convertWhileStatement(node);
            break;
        case "ForStatement":
            node = convertForStatement(node);
            break;
        case "IfStatement":
            node = convertWhileStatement(node);
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
}

exports.convertWhileStatement = convertWhileStatement;
exports.convertAssignExpression = convertAssignExpression;
