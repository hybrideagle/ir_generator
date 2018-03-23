
interface Label {
  name: string;
}

interface Temp {
  name: string;
}

var labelCount = 0;

class Label{
  name: string;
  constructor(name?) {
    if(!name)
      this.name = `L${labelCount++}`;
    else
      this.name = name;
  }
}

class Temp{
  name: string;
  constructor(name?) {
    if(!name)
      this.name = `L${labelCount++}`;
    else
      this.name = name;
  }
}

type gen_arg = Label|Temp|string;

function gen(...args: gen_arg[]): string {
  let output = "";
  args.map((arg) => {
    if(typeof arg == 'object')
      return name;
    else
      return arg;
  });
  return args.join("");
}
