
import SmsBase from "./index";
class MockedService2 extends SmsBase{
    cred : any;
    constructor(name:string,cred:any){
        super(name);
        this.cred =  cred;
    }
    createRequestBody(message:string,phone:number,url:string):object{
        return {
            url:  url,
            method: 'GET',
            headers: { Accept: 'application/json' }
        }
    }
}
export default MockedService2;