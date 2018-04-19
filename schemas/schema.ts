export interface Node {
  type: string;
  id?: string;
}

export interface AssignmentOperation{
    type: "AssignmentOperation";
    left: Identifier;
    right: Expression;
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

////////////////
// Expressions//
////////////////

export interface ArrayExpression {
    type: "ArrayExpression";
    elements: Expression[];
}

export interface UnaryExpression {
    type: "UnaryExpression";
    operator: "++" | "--" | "!" | "-";
    argument: Expression;
    prefix: true;
}

export interface BinaryExpression {
    type: "BinaryExpression";
    operator: "+" | "-" | "*" | "/" | "%" |
        "|" | "^" | "&" | "==" | "!=" |
        "<" | ">" | "<=" | ">=" ;
    left: Expression;
    right: Expression;
}

export interface LogicalExpression {
    type: "LogicalExpression";
    operator: "||" | "&&";
    left: Expression;
    right: Expression;
}

export interface ConditionalExpression {
    type: "ConditionalExpression";
    test: Expression;
    consequent: Statement;
    alternate?: Statement;
}

export interface AssignmentExpression {
    type: "AssignmentExpression";
    operator: "=" | "*=" | "/=" | "+=" | "-=" ;
    left: Expression;
    right: Expression;
}

export type Expression = Identifier | Literal |
    ArrayExpression | UnaryExpression |
    BinaryExpression | LogicalExpression | ConditionalExpression |
    AssignmentExpression | SequenceExpression;


export interface SequenceExpression {
    type: "SequenceExpression";
    statements: Expression[];
}

export type Statement = BlockStatement | BreakStatement | ContinueStatement |
    DoWhileStatement | EmptyStatement |
    ExpressionStatement | ForStatement |
    IfStatement |
    LabeledStatement | ReturnStatement | SwitchStatement |
    VariableDeclaration |
    WhileStatement ;

export interface ExpressionStatement {
    type: "ExpressionStatement";
    expression: Expression;
}




export interface BlockStatement {
    type: "BlockStatement";
    body: Statement[];
}

export interface BreakStatement {
    type: "BreakStatement";
    label: Identifier | null;
}

export interface ContinueStatement {
    type: "ContinueStatement";
    label: Identifier | null;
}

export interface DoWhileStatement {
    type: "DoWhileStatement";
    body: BlockStatement;
    test: Expression;
}


export interface EmptyStatement {
    type: "EmptyStatement";
}

export interface ForStatement {
    type: "ForStatement";
    init: Expression | VariableDeclaration | null;
    test: Expression | null;
    update: Expression | null;
    body: Statement;
}
export interface WhileStatement {
    type: "WhileStatement";
    test: Expression;
    body: Statement;
}

export interface IfStatement {
    type: "IfStatement";
    test: Expression;
    consequent: Statement;
    alternative: Statement;
}


export interface LabeledStatement {
    type: "LabeledStatement";
    label: string;
    body: Statement;
}

export interface ReturnStatement {
    type: "ReturnStatement";
    argument: Expression | null;
}

export interface SwitchStatement {
    type: "SwitchStatement";
    discriminant: Expression;
    cases: SwitchCase[];
    default: Statement[];
}

export interface SwitchCase {
    type: "SwitchCase";
    test: Expression;
    consequent: Statement[];
}

export interface VariableDeclaration {
    type: "VariableDeclaration";
    declarations: VariableDeclarator[];
    kind: "int" | "char";
}

export interface VariableDeclarator {
    type: "VariableDeclarator";
    var_id: Identifier;
    init: Expression | null;
}



export interface GotoStatement {
    type: "GotoStatement";
    label: string;
}
