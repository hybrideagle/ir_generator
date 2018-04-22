import assert from "assert";
import {path} from 'path';
import {GenLabel, genTemp} from "./utils";

/**
 *  Intermediate node is cleaned removing extra labels
 *  @param   node The node to convert(JS object)
 *  @return       An array of nodes repesenting the simplified construct
 */


 function cleanNode(node){
    var tempLabel = "";
    var child;
    switch(node.type){
        case 'LabeledStatement':
            if(node.body.type == "Sequence" || node.body.type == "SequenceExpression"){
                child = node.body.statements;
                if(child[0].type == "LabeledStatement"){
                    child[0].inherited = true;
                    tempLabel += child[0].label;
                    child[0].label = node.label;
                    var i;
                    for(i = 0;i < child.length;i++){
                        if(child[i].label == tempLabel){
                            child[i].label = node.label;
                        }
                    }
                }
            }
    }
    return node;
 }


 export function cleanUp(node){
    // console.log(node); 
    var cleanedNode = node.statements.map(e => cleanNode(e));
    // console.log(cleanedNode);
    return node;
 }