import SmsManager from './sms/index'
import SmsBase from './sms/vendors'
// @ts-ignore
let a =10;
export default class SmsService extends SmsManager {
   logger: object | undefined;
  /**
   * @param credential
   */
  //   logger ? logger:Console. use like this.
  constructor(credential?: object, logger?: object) {
      super()
      if (credential) this.initialize(credential, logger)
  }

  /** Initialize the service **/
  /**
   * @param credential
   */
  initialize(credential: object, logger?: object): void {
      logger = logger ? logger : console
      // @ts-ignore
      this.logger = logger
      this.logger = logger ? logger : console
      // @ts-ignore
      this.addVendors(credential, logger)
  }
}
