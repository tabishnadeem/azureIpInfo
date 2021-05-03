
export interface FunctionResponse{

    status:number
    body:string
   
   
    

}

export function responseFactory(body:any, httpCode= 200): FunctionResponse {

    return{

        status : httpCode,
        body : JSON.stringify(body),
        


    }
    
}