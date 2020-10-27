class SmsBase {
    vendorName:string |undefined;
    constructor(vendorId:string) {
        this.vendorName= vendorId;
    }
    async sendPromotionalMessage(message: string, phone: number):Promise<any>{
        throw  "Not implemented";
    }
    async sendTransactionalMessage(message: string, phone: number):Promise<any>{
        throw new Error("Not implemented")
    }
    async sendOtpMessage(message: string, phone: number):Promise<any>{
        throw "Not implemented"
    }
}
export default SmsBase;