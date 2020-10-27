import SmsBase from './index';
class MockedService2 extends SmsBase {
    cred: any;
    constructor(name: string, cred: any) {
        super(name);
        this.cred = cred;
    }
}
export default MockedService2;
