import SmsManager from './sms/index';
import { Credentials, Logger } from './utils/basicInterface';
class SmsServiceInstance extends SmsManager {
    /**
     * @param credential
     */
    //   logger ? logger:Console. use like this...
    constructor(credential?: Credentials, logger?: Logger) {
        super();
        if (credential) this.initialize(credential, logger);
    }

    /** Initialize the service **/
    /**
     * @param credential
     */
    initialize(credential: Credentials, logger?: Logger): void {
        logger = logger ? logger : console;
        this.addVendors(credential, logger);
    }
}
export const SmsService = SmsServiceInstance;
// export = { SmsService };
