const assert = require("assert");
const TreeModel = require("tree-model");
    // Convert the input JSON to a TreeModel object
function jsonToTreemodel(n) {
    // First we add the children and id properties to each object
    addProperties(n);
    // Now we build and return the TreeModel
    let tree = new TreeModel();
    return tree.parse(n);
}

// recursively adds properties to the tree
function addProperties(n){

    if (!n.id) {
        n.id = String(Math.random() * 100);
    }
    if (isLeaf(n)){
        return;
    }
    const children = Object.keys(n).filter(prop => typeof n[prop] === "object");
    assert.ok(children.length > 0);
    n["children"] = children.map(prop => n[prop]);
    children.forEach(prop=>addProperties(n[prop]));
}

function isLeaf(n){
    for (const prop in n) {
        if (typeof n[prop] === "object") {
            return false;
        }
    }
    return true;
}
