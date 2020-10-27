import apiCall from '../../network/apiCallExecutor'
import SmsBase from './index'
class Kalyera extends SmsBase {
  cred: any | undefined;
  constructor(name: string, cred: any) {
      super(name)
      this.cred = cred
  }

  async sendOtpMessage(message: string, phone: number): Promise<any> {
      const { baseEndpoint, api_key, sender, method } = this.cred.otp || {}
      const url = `${baseEndpoint}?method=${method}&api_key=${api_key}&sender=${sender}&to=${phone}&message=${encodeURIComponent(
          message
      )}`
      const reqObjected = this.createRequestBody(message, phone, url)
      const response = await apiCall.apiCallExecutor(reqObjected)
      if (((response.data || {}).status || '').toLowerCase() === 'ok') {
          return response
      }
      throw new Error('Could not be fulfilled.')
  }

  async sendTransactionalMessage(message: string, phone: number): Promise<any> {
      const { baseEndpoint, api_key, sender, method } =
      this.cred.transactional || {}
      const url = `${baseEndpoint}?method=${method}&api_key=${api_key}&sender=${sender}&unicode=auto&to=${phone}&message=${encodeURIComponent(
          message
      )}`
      const reqObjected = this.createRequestBody(message, phone, url)
      const response = await apiCall.apiCallExecutor(reqObjected)
      if (((response.data || {}).status || '').toLowerCase() === 'ok') {
          return response
      }
      throw new Error('Could not be fulfilled.')
  }
  /**
   * Not in use.
   *  **/
  async sendPromotionalMessage(message: string, phone: number): Promise<any> {
      const { baseEndpoint, api_key, sender, method } =
      this.cred.promotional || {}
      const url = `${baseEndpoint}?method=${method}&api_key=${api_key}&sender=${sender}&to=${phone}&message=${encodeURIComponent(
          message
      )}`
      const reqObjected = this.createRequestBody(message, phone, url)
      const response = await apiCall.apiCallExecutor(reqObjected)
      if (((response.data || {}).status || '').toLowerCase() === 'ok') {
          return response
      }
      throw new Error('Could not be fulfilled.')
  }
  createRequestBody(message: string, phone: number, url: string): object {
      return {
          url: url,
          method: 'GET',
          headers: { Accept: 'application/json' },
      }
  }
}
export default Kalyera
