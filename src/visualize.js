import assert from "assert";
import {Treant} from "treant-js";


export function draw(node) {
    var chart_config = getChartConfig(node);
    console.log(chart_config);
    new Treant(chart_config);

}




// Convert the input JSON to a TreeModel object
export function getChartConfig(node) {
    return {
        chart: {
            container: "#basic-example",
            rootOrientation: "NORTH",

            node: {
                HTMLclass: "node"
            },
            connectors: {
                type: "straight",
                style: {
                    "stroke-width": 1,
                    "stroke": "#ccc"
                }
            }
        },
        nodeStructure: getNodeStructure(node)
    };
}

function getNodeStructure(node) {
    switch (node.type) {
        case "Identifier":
            return {
                text: {
                    name: `Identifier(${node.name})`
                }
            };

        case "Literal":
            return {
                text: {
                    name: `Literal(${node.value})`
                }
            };

        case "AssignmentOperation":
            return {
                text: {
                    name: {
                        name: node.type
                    }
                },
                children: [
                    getNodeStructure(node.left),
                    getNodeStructure(node.right)
                ]
            };
        case "ArrayExpression":
            return {
                text: {
                    name: node.type
                },
                children: node.elements.map(e => getNodeStructure(e))
            };
        case "UnaryExpression":
            return {
                text: {
                    name: node.type
                },
                children: [
                    {
                        text: {
                            name: node.operator
                        }
                    },
                    getNodeStructure(node.argument)
                ]
            };

        case "BinaryExpression":
        case "LogicalExpression":
        case "ConditionalExpression":
        case "AssignmentExpression":
            return {
                text: {
                    name: node.operator
                },
                children: [
                    getNodeStructure(node.left),
                    getNodeStructure(node.right)
                ]
            };

        case "SequenceExpression":
            return {
                text: {
                    name: node.type
                },
                children: node.expressions.map(e => getNodeStructure(e))
            };
        case "ExpressionStatement":
            return {
                text: {
                    name: node.type
                },
                children: [getNodeStructure(node.expression)]
            };
        case "BlockStatement":
            return {
                text: {
                    name: node.type
                },
                children: node.body.map(e => getNodeStructure(e))
            };
        case "BreakStatement":
            return {
                text: {
                    name: `break: ${node.label}`
                }
            };
        case "ContinueStatement":
            return {
                text: {
                    name: `Identifier: ${node.label}`
                }
            };
        case "DoWhileStatement":
            return {
                text: {
                    name: node.type
                },
                children: [
                    getNodeStructure(node.test),
                    getNodeStructure(node.body)
                ]
            };
        case "EmptyStatement":
            return {
                text: {
                    name: `EmptyStatement`
                }
            };

        case "ForStatement":
            return {
                text: {
                    name: node.type
                },
                children: [
                    getNodeStructure(node.init),
                    getNodeStructure(node.test),
                    getNodeStructure(node.update),
                    getNodeStructure(node.body)
                ]
            };
        case "WhileStatement":
            return {
                text: {
                    name: node.type
                },
                children: [
                    getNodeStructure(node.test),
                    getNodeStructure(node.body)
                ]
            };
        case "IfStatement":
            return {
                text: {
                    name: node.type
                },
                children: [
                    getNodeStructure(node.test),
                    getNodeStructure(node.consequent),
                    getNodeStructure(node.alternative)
                ]
            };
        case "LabeledStatement":
            return {
                text: {
                    name: node.type
                },
                children: [
                    {
                        text: {
                            name: `label: ${node.label}`
                        }
                    },
                    getNodeStructure(node.body)
                ]
            };
        case "ReturnStatement":
            if (node.argument == null)
                var c = {
                    text: {
                        name: "((None))"
                    }
                }
            else
                var c = getNodeStructure(node.argument)
            return {
                text: {
                    name: node.type,
                    children: c
                }
            };
        case "VariableDeclaration":
            var c = {
                text: {
                    name: node.type
                },
                children: node.declarations.map(e => getNodeStructure(e))
            };
            c.children.unshift({
                text: {
                    name: node.kind
                }
            });
            return c;

        case "VariableDeclarator":
            return {
                text: {
                    name: node.type
                },
                children: [
                    getNodeStructure(node.var_id),
                    getNodeStructure(node.init)
                ]
            };

        case "GotoStatement":
            return {
                text: {
                    name: node.type
                },
                children: [
                    {
                        text: {
                            name: node.label
                        }
                    }
                ]
            };
        default:
            console.error(`getNodeStructure: ${node.type} not supported`);
            return {
                text: {
                    name: "Unsupported"
                }
            };
    }
}
