
import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import getIPInfo from "./IpInfo";
import {FunctionResponse, responseFactory} from "./util/responseFactory";


const httpTrigger: AzureFunction = async function (context: Context): Promise<FunctionResponse> {
   
    let ip : string;
    let responseMessage: string;

    FIXME:
    //API fetch unsuccessful in postman
    //https://ipinfo.io/103.211.53.137/json?token=c191f96a1859dd
    
    ip = context.req.body && context.req.body.ip;
    console.log(ip);

    if(ip){
        const ipInfo = await getIPInfo(ip);
        console.log(ipInfo);
        return responseFactory({city:ipInfo.city,region:ipInfo.region});
       
    }else{

        responseMessage = "Please pass IP address to the payload";
        return responseFactory({ResponseMessage:responseMessage},400);
        
    }


};

export default httpTrigger;
