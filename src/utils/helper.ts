function checkForCreds(service: string, account: string) {
    // @ts-ignore
    const credConfig = CredInstance.getCreds(service)
    if (credConfig) {
        if (account && credConfig[account]) {
            return credConfig[account]
        }
        return credConfig
    } else {
        return false
    }
}

function checkForInputValue(message: string, phone: number) {
    if (!message || !phone) {
        throw new Error('Message and Phone are mandatory')
    }
}
const loggerSuffix = 'SENDING_SMS_PACKAGE '
export default { checkForCreds, checkForInputValue, loggerSuffix }
