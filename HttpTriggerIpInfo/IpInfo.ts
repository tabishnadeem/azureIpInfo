import fetch from "node-fetch";

interface Ipnfo{

    ip: string
    city:string
    region:string
    country:string
    loc:string
    org:string
    postal:string
    timezone:string

}
export default async function getIpinfo(ip:string):Promise<Ipnfo> {

    const url = `https://ipinfo.io/${ip}/json?token=c191f96a1859dd`
    const result = await fetch(url);
    
    return result.json();
}