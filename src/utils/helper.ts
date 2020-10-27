function checkForInputValue(message: string, phone: number) {
    if (!message || !phone) {
        throw new Error('Message and Phone are mandatory');
    }
}
const loggerSuffix = 'SENDING_SMS_PACKAGE ';
export default { checkForInputValue, loggerSuffix };
