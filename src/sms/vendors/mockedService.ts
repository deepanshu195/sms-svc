import SmsBase from './index';
class MockedService extends SmsBase {
    cred: any;
    constructor(name: string, cred: any) {
        super(name);
        this.cred = cred;
    }

    async sendTransactionalMessage(message: string, phone: number): Promise<any> {
        message = message + phone;
        return true;
    }
}
export default MockedService;
