
import SmsBase from "./index";
class MockedService extends SmsBase{
    cred : any;
    constructor(name:string,cred:any){
        super(name);
        this.cred =  cred;
    }

    async sendTransactionalMessage(message: string, phone: number): Promise<any> {
        return true;
    }

    createRequestBody(message:string,phone:number,url:string):object{
            return {
                    url:  url,
                    method: 'GET',
                    headers: { Accept: 'application/json' }
                    }
    }
}
export default MockedService;