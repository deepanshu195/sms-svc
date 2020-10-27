import Kalyera from './vendors/kalyera'
import AwsPinpoint from './vendors/awspinpoint'
import MockedService from './vendors/mockedService'
import MockedService2 from './vendors/mockedService2'
class SmsVendorFactory {
    buildVendor(name: string, props: object) {
        switch (name) {
        case 'awspinpoint':
            return new AwsPinpoint(name, props)
        case 'kaleyra':
            return new Kalyera(name, props)
        case 'mocked':
            return new MockedService(name, props)
        default:
            return new MockedService2(name, props)
        }
    }
}
let SmsVendorInstance: any
if (!SmsVendorInstance) {
    SmsVendorInstance = new SmsVendorFactory()
}
export default SmsVendorInstance
