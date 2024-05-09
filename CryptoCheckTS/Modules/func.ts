/*
  Axios & etc
              */
import ax from "axios"
import ln from "../config/confg.json" assert {type:"json"}

const axi = ax.default

export namespace req {
  export async function axget(crypto:string,curr:string){
    const js = ln.API_u;
    const link = `${js}${crypto}&tsyms=${curr}`
    const get = await axi.get(link);
    return(get.data);
}
}