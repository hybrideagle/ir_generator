interface Node {
  type: string;
}

interface AssignmentPattern {
    type: 'AssignmentPattern';
    left: Identifier;
    right: Expression;
}

interface Identifier {
    type: 'Identifier';
    name: string;
}

interface Literal {
    type: 'Literal';
    kind: 'int' | 'char';
    value: string
}

interface ArrayExpression {
    type: 'ArrayExpression';
    elements: Expression[];
}

interface UnaryExpression {
    type: 'UnaryExpression';
    operator: '++' | '--' | '!' | '-';
    argument: Expression;
    prefix: true;
}

interface BinaryExpression {
    type: 'BinaryExpression';
    operator: '+' | '-' | '*' | '/' | '%' |
        '|' | '^' | '&' | '==' | '!=' |
        '<' | '>' | '<=' | '>=' ;
    left: Expression;
    right: Expression;
}

interface LogicalExpression {
    type: 'LogicalExpression';
    operator: '||' | '&&';
    left: Expression;
    right: Expression;
}

interface ConditionalExpression {
    type: 'ConditionalExpression';
    test: Expression;
    consequent: Statement;
    alternate?: Statement;
}

interface AssignmentExpression {
    type: 'AssignmentExpression';
    operator: '=' | '*=' | '/=' | '+=' | '-=' ;
    left: Expression;
    right: Expression;
}

interface SequenceExpression {
    type: 'SequenceExpression';
    expressions: Expression[];
}

type Statement = BlockStatement | BreakStatement | ContinueStatement |
    DoWhileStatement | EmptyStatement |
    ExpressionStatement | ForStatement |
    IfStatement |
    LabeledStatement | ReturnStatement | SwitchStatement |
    VariableDeclaration |
    WhileStatement ;

type Expression = Identifier | Literal |
    ArrayExpression | UnaryExpression |
    BinaryExpression | LogicalExpression | ConditionalExpression |
    AssignmentExpression | SequenceExpression;

interface BlockStatement {
    type: 'BlockStatement';
    body: StatementListItem[];
}

interface BreakStatement {
    type: 'BreakStatement';
    label: Identifier | null;
}

interface ContinueStatement {
    type: 'ContinueStatement';
    label: Identifier | null;
}

interface DoWhileStatement {
    type: 'DoWhileStatement';
    body: Statement;
    test: Expression;
}

interface ExpressionStatement {
    type: 'ExpressionStatement';
    expression: Expression;
}

interface EmptyStatement {
    type: 'EmptyStatement';
}

interface ForStatement {
    type: 'ForStatement';
    init: Expression | VariableDeclaration | null;
    test: Expression | null;
    update: Expression | null;
    body: Statement;
}

interface IfStatement {
    type: 'IfStatement';
    test: Expression;
    consequent: Statement;
    alternate?: Statement;
}

interface IfGotoStatement {
    type: 'IfGotoStatement';
    test: Expression;
    label: string;
}

interface LabeledStatement {
    type: 'LabeledStatement';
    label: string;
    body: Statement;
}

interface ReturnStatement {
    type: 'ReturnStatement';
    argument: Expression | null;
}

interface SwitchStatement {
    type: 'SwitchStatement';
    discriminant: Expression;
    cases: SwitchCase[];
    default: Statement[];
}

interface SwitchCase {
    type: 'SwitchCase';
    test: Expression;
    consequent: Statement[];
}

interface VariableDeclaration {
    type: 'VariableDeclaration';
    declarations: VariableDeclarator[];
    kind: 'int' | 'char';
}

interface VariableDeclarator {
    type: 'VariableDeclarator';
    id: Identifier;
    init: Expression | null;
}

interface WhileStatement {
    type: 'WhileStatement';
    test: Expression;
    body: Statement;
}

interface GotoStatement {
    type: 'GotoStatement';
    label: string;
}
