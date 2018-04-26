var labelCount = 0;
var tempCount = 0;

export function cleanupGenerators() {
    labelCount = 0;
    tempCount = 0;
}
/**
 *  Create a new label
 *  @param  name Custom label name, optional
 *  @return      A string
 */
export function GenLabel(name) {
    if (name == null)
        return `L${labelCount++}`;
    else
        return name;
    }

export function genTemp(name) {
    let temp = {
        type: "Identifier",
        name: null
    }
    if (name == null)
        temp.name = `t${tempCount++}`;
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
