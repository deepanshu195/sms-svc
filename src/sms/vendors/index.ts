class SmsBase {
    vendorName: string | undefined;
    constructor(vendorId: string) {
        this.vendorName = vendorId;
    }
    async sendPromotionalMessage(message: string, phone: number): Promise<any> {
        throw 'Not implemented for phone(' + phone + ') and message(' + message + ')';
    }
    async sendTransactionalMessage(message: string, phone: number): Promise<any> {
        throw 'Not implemented for phone(' + phone + ') and message(' + message + ')';
    }
    async sendOtpMessage(message: string, phone: number): Promise<any> {
        throw 'Not implemented for phone(' + phone + ') and message(' + message + ')';
    }
}
export default SmsBase;
