import { Expression } from "./schema";

export interface IfGotoStatement {
    type: "IfGotoStatement";
    test: string;
    label: string;
}

export interface GotoStatement {
    type: "GotoStatement";
    label: string;
}

type Statement = GotoStatement | IfGotoStatement | AssignmentExpression | AssignmentExpressionSequence;

export interface Sequence {
    type: "Sequence";
    body: Statement[];  //this should be set to an array of nodes
}

export interface BinaryAssignmentExpression {
    type: "BinaryAssignmentExpression";
    target: string;
    operand1: string;
    operand2: string;
    operator: string;
}

export interface SingleAssignmentExpression {
    type: "SingleAssignmentExpression";
    target: string;
    operand1: string;
}

type AssignmentExpression = BinaryAssignmentExpression | SingleAssignmentExpression;

export interface AssignmentExpressionSequence {
    type: "AssignmentExpressionSequence";
    expressions: AssignmentExpression[];
    result: string; /**Variable where the result is stored*/
}

export interface Identifier {
    type: "Identifier";
    name: string;
}

export interface Literal {
    type: "Literal";
    kind: "int" | "char";
    value: string;
}
