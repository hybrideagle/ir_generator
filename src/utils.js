
var labelCount = 0;
var typeCount = 0;
/**
 *  Create a new label
 *  @param  name Custom label name, optional
 *  @return      A string
 */
function GenLabel(name){
    if(name == null)
      return `L${labelCount++}`;
    else
      return name;
}

function genTemp(name) {
    if(name == null)
      this.name = `L${tempCount++}`;
    else
      this.name = name;
}


function gen(...args) {
  let output = "";
  args.map((arg) => {
    if(typeof arg == 'object')
        //do something here
      return name;
    else
      return arg;
  });
  return args.join("");
}
