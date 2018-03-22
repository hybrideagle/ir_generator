export interface Node {
  type: string;
  id?: string;
}

export interface AssignmentOperation extends Node {
    type: "AssignmentPattern";
    left: Identifier;
    right: Expression;
}

export interface Identifier extends Node {
    type: "Identifier";
    name: string;
}

export interface Literal extends Node {
    type: "Literal";
    kind: "int" | "char";
    value: string;
}

////////////////
// Expressions//
////////////////

export interface ArrayExpression extends Node {
    type: "ArrayExpression";
    elements: Expression[];
}

export interface UnaryExpression extends Node {
    type: "UnaryExpression";
    operator: "++" | "--" | "!" | "-";
    argument: Expression;
    prefix: true;
}

export interface BinaryExpression extends Node {
    type: "BinaryExpression";
    operator: "+" | "-" | "*" | "/" | "%" |
        "|" | "^" | "&" | "==" | "!=" |
        "<" | ">" | "<=" | ">=" ;
    left: Expression;
    right: Expression;
}

export interface LogicalExpression extends Node {
    type: "LogicalExpression";
    operator: "||" | "&&";
    left: Expression;
    right: Expression;
}

export interface ConditionalExpression extends Node {
    type: "ConditionalExpression";
    test: Expression;
    consequent: Statement;
    alternate?: Statement;
}

export interface AssignmentExpression extends Node {
    type: "AssignmentExpression";
    operator: "=" | "*=" | "/=" | "+=" | "-=" ;
    left: Expression;
    right: Expression;
}

type Expression = Identifier | Literal |
    ArrayExpression | UnaryExpression |
    BinaryExpression | LogicalExpression | ConditionalExpression |
    AssignmentExpression | SequenceExpression;


export interface SequenceExpression extends Node {
    type: "SequenceExpression";
    expressions: Expression[];
}

type Statement = BlockStatement | BreakStatement | ContinueStatement |
    DoWhileStatement | EmptyStatement |
    ExpressionStatement | ForStatement |
    IfStatement |
    LabeledStatement | ReturnStatement | SwitchStatement |
    VariableDeclaration |
    WhileStatement ;

export interface ExpressionStatement extends Node {
    type: "ExpressionStatement";
    expression: Expression;
}




export interface BlockStatement extends Node {
    type: "BlockStatement";
    body: Statement[];
}

export interface BreakStatement extends Node {
    type: "BreakStatement";
    label: Identifier | null;
}

export interface ContinueStatement extends Node {
    type: "ContinueStatement";
    label: Identifier | null;
}

export interface DoWhileStatement extends Node {
    type: "DoWhileStatement";
    body: Statement;
    test: Expression;
}


export interface EmptyStatement extends Node {
    type: "EmptyStatement";
}

export interface ForStatement extends Node {
    type: "ForStatement";
    init: Expression | VariableDeclaration | null;
    test: Expression | null;
    update: Expression | null;
    body: Statement;
}

export interface IfStatement extends Node {
    type: "IfStatement";
    test: Expression;
    consequent: Statement;
    alternate?: Statement;
}

export interface IfGotoStatement extends Node {
    type: "IfGotoStatement";
    test: Expression;
    label: string;
}

export interface LabeledStatement extends Node {
    type: "LabeledStatement";
    label: string;
    body: Statement;
}

export interface ReturnStatement extends Node {
    type: "ReturnStatement";
    argument: Expression | null;
}

export interface SwitchStatement extends Node {
    type: "SwitchStatement";
    discriminant: Expression;
    cases: SwitchCase[];
    default: Statement[];
}

export interface SwitchCase extends Node {
    type: "SwitchCase";
    test: Expression;
    consequent: Statement[];
}

export interface VariableDeclaration extends Node {
    type: "VariableDeclaration";
    declarations: VariableDeclarator[];
    kind: "int" | "char";
}

export interface VariableDeclarator extends Node {
    type: "VariableDeclarator";
    var_id: Identifier;
    init: Expression | null;
}

export interface WhileStatement extends Node {
    type: "WhileStatement";
    test: Expression;
    body: Statement;
}

export interface GotoStatement extends Node {
    type: "GotoStatement";
    label: string;
}
