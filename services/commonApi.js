import axios from "axios";

export const commonApi = async(httpMethod,url,reqBody)=>{
    
    let reaConfig = {
        method: httpMethod,
        url: url,
        headers: {
            'Content-Type': 'application/json'
        },
        data: reqBody
    }
    return await axios(reaConfig).then((res)=>{
        return res}).catch((err)=>{return err})
}
 //steps to use axios
 //1. import axios
 //2. call commonApi
 //3. pass method, url, reqBody
 //4. return promise
 