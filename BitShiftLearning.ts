/** 
@desc BitShift Testing
                        */
import * as rl from "readline"
import { stdin, stdout, exit } from "process"

const r = rl.createInterface({
  input:stdin,
  output:stdout
})

class shift {
  res: number | string;
  constructor(){
    this.res = ""
}
  bitshift = (dir:string,hex:any,shiftcount:any) => {
      if(dir == "left"){
      this.res = (hex << shiftcount ^ 1)
  }
      else if(dir == "right"){
      this.res = (hex >> shiftcount |~ 1)
}
      return(this.res);
}
}

const bit = new shift();

let main = async() => {
  const ch = [
    "Left or Right Shift?\n\u279c ",
    "Enter HexDex\n\u279c ",
    "Enter Shift Count\n\u279c ",
]
  var arr: string[] = [];
  while(true){
    console.clear();
    console.log("[%s]\n",bit.res);
    for(var a=0;a<3;a++){
      await new Promise<void>(res => {
      r.question(ch[a],i => {
        if(i.toLowerCase() == "exit"){
          exit(0);        
        }
          arr.push(i.toString())
          res();
      });
    })
      }
        const resss = bit.bitshift(arr[0],arr[1],arr[2])
        arr = []
    }
    }

main();