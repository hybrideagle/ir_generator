import {Expression} from "./schema";

export interface IfGotoStatement {
    type: "IfGotoStatement";
    test: string;
    label: string;
}

export interface GotoStatement {
    type: "GotoStatement";
    label: string;
}

export interface Sequence {
    type: "Sequence";
    body: null;  //this should be set to an array of nodes
}

export interface BinaryAssignmentExpression {
    type: "BinaryAssignmentExpression";
    target: string;
    operand1: string;
    operand2: string;
    operator: string;
}

export interface SingleAssignmentExpression {
    type: "BinaryAssignmentExpression";
    target: string;
    operand1: string;
}

type AssignmentExpression = BinaryAssignmentExpression | SingleAssignmentExpression;

export interface AssignmentExpressionSequence {
    type: "AssignmentExpressionSequence";
    expressions: AssignmentExpression[];
    result: string; /**Variable where the result is stored*/
}
