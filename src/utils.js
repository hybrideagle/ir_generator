var labelCount = 0;
var tempCount = 0;
/**
 *  Create a new label
 *  @param  name Custom label name, optional
 *  @return      A string
 */
function GenLabel(name) {
    if (name == null)
        return `L${labelCount++}`;
    else
        return name;
    }

function genTemp(name) {
    let temp = {
        type: "Identifier",
        name: null
    }
    if (name == null)
        temp.name =`t${tempCount++}`;
    else
        temp.name = name;
    return temp;    
}

function gen(...args) {
    let output = "";
    args.map((arg) => {
        if (typeof arg == 'object')
            //do something here
            return name;
        else
            return arg;
        }
    );
    return args.join("");
}

exports.genTemp = genTemp;
exports.GenLabel = GenLabel;
