/** 
  @author 0xFreDi
                 */
import {req} from "../Modules/func.js"
import {argv} from "process";
import {c} from "../Modules/colors.js"

class print{
  flt:any;crpt:any 
  constructor(float,crypto){
    this.flt = float
    this.crpt = crypto;
}
print = () => {
console.log(
`--------------------------
|\t${c.green}[${this.flt}]${c.reset}\t\t|
|   Price = ${c.cyan}[${this.crpt.EUR}]${c.reset}\t|
---------------------------\n`);
}
}

const main = async(argv1:string,argv2:string) => {
  for(;;){
    const a = await req.axget(argv1,argv2).then(dat => b = JSON.stringify(dat))
    let b:any;
    let prt = new print(argv1,JSON.parse(b))
    console.clear();
    prt.print();
    await delay(500);
  }
}

function delay(ms:number){
  return new Promise<void>(res => {
    setTimeout(() => {
      res();
},ms)
})
}

main(argv[2].toUpperCase(),argv[3].toUpperCase());