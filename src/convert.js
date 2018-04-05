
const assert = require("assert");
const TreeModel = require("tree-model");
import {Node, WhileStatement} from "./schema";
import {GenLabel} from "./utils";
// Inputs a WhileStatement object. and returns a simplified object
function convertWhileStatement(node) {
    let ifGuard = {
        type: "LabeledStatement",
        body: {
            type:"IfGotoStatement",
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
}
