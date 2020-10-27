import SmsVendorsFactory from './smsVendorFactory'
import SmsBase from './vendors/index'
import helper from '../utils/helper'

class SmsManager {
  vendors: Array<SmsBase> | undefined;
  private logger: object | undefined;
  constructor() {
      this.logger = console
      this.vendors = []
  }
  async sendTransactionalMessage(
      message: string,
      phone: number,
      priorityArray?: Array<string>
  ): Promise<any> {
      helper.checkForInputValue(message, phone)
      const vendorsList = this.sendPriorityWise(priorityArray)
      // @ts-ignore
      this.logger.log(
          helper.loggerSuffix +
        ' sendTransactionalMessage after arranged in priority for phone(' +
        phone +
        ') and message (' +
        message +
        ')',
          vendorsList
      )
      // @ts-ignore
      for (const vendor of vendorsList) {
          try {
              const response = await vendor.sendTransactionalMessage(message, phone)
              // @ts-ignore
              this.logger.log(vendorsList)
              return Object.assign(response, { vendorName: vendor.vendorName })
          } catch (e) {
              // @ts-ignore
              this.logger.error(
                  helper.loggerSuffix +
            ' sendTransactionalMessage error for service' +
            vendor.vendorName +
            ' for phone(' +
            phone +
            ') and message (' +
            message +
            ')',
                  e
              )
          }
      }
      // @ts-ignore
      this.logger.error(
          helper.loggerSuffix +
        ' sendTransactionalMessage none service could send it for phone(' +
        phone +
        ') and message (' +
        message +
        ')'
      )
      throw new Error('No service could fulfil the request.')
  }

  async sendOtpMessage(
      message: string,
      phone: number,
      priorityArray?: Array<string>
  ): Promise<any> {
      helper.checkForInputValue(message, phone)
      const vendorsList = this.sendPriorityWise(priorityArray)
      // @ts-ignore
      this.logger.log(
          helper.loggerSuffix +
        ' sendOtpMessage after arranged in priority for phone(' +
        phone +
        ') and message (' +
        message +
        ')',
          vendorsList
      )

      // @ts-ignore
      for (const vendor of vendorsList) {
          try {
              const response = await vendor.sendTransactionalMessage(message, phone)
              return Object.assign(response, { vendorName: vendor.vendorName })
          } catch (e) {
              // @ts-ignore
              this.logger.error(
                  helper.loggerSuffix +
            ' sendOtpMessage error for service' +
            vendor.vendorName +
            ' for phone(' +
            phone +
            ') and message (' +
            message +
            ')',
                  e
              )
          }
      }
      // @ts-ignore
      this.logger.error(
          helper.loggerSuffix +
        ' sendOtpMessage none service could send it for phone(' +
        phone +
        ') and message (' +
        message +
        ')'
      )

      throw new Error('No service could fulfil the request.')
  }

  async sendPromotionalMessage(
      message: string,
      phone: number,
      priorityArray?: Array<string>
  ): Promise<any> {
      helper.checkForInputValue(message, phone)
      const vendorsList = this.sendPriorityWise(priorityArray)
      // @ts-ignore
      this.logger.log(
          helper.loggerSuffix +
        ' sendPromotionalMessage after arranged in priority for phone(' +
        phone +
        ') and message (' +
        message +
        ')',
          vendorsList
      )

      // @ts-ignore
      for (const vendor of vendorsList) {
          try {
              const response = await vendor.sendTransactionalMessage(message, phone)
              return Object.assign(response, { vendorName: vendor.vendorName })
          } catch (e) {
              // @ts-ignore
              this.logger.error(
                  helper.loggerSuffix +
            ' sendPromotionalMessage error for service' +
            vendor.vendorName +
            ' for phone(' +
            phone +
            ') and message (' +
            message +
            ')',
                  e
              )
          }
      }
      // @ts-ignore
      this.logger.error(
          helper.loggerSuffix +
        ' sendPromotionalMessage none service could send it for phone(' +
        phone +
        ') and message (' +
        message +
        ')'
      )

      throw new Error('No service could fulfil the request.')
  }

  addVendors(config: any, logger: object): void {
      this.logger = logger
      // @ts-ignore
      this.logger.info(helper.loggerSuffix + 'initialized for config', config)
      const vendors: any[] = []
      let error
      config.vendorConfigList.forEach((element: any) => {
          if (element.type && element.cred) {
              vendors.push(SmsVendorsFactory.buildVendor(element.type, element.cred))
          } else {
              error = true
          }
      })
      if (error) {
          throw new Error('type and cred are mandatory.')
      } else {
          this.vendors = vendors
      }
  }

  sendPriorityWise(priorityArray?: Array<string>): any[] | undefined {
      let fillArrayPriorityWise: Array<SmsBase> | undefined
      if (priorityArray) {
          priorityArray.forEach((vendorName) => {
              this.vendors?.forEach((vendor) => {
                  if (vendor.vendorName == vendorName) {
                      fillArrayPriorityWise?.push(vendor)
                  }
              })
          })
      }
      return this.vendors
  }
}

export default SmsManager
