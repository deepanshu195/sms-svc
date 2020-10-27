// let assert = require("chai").assert;
// let expect = require("chai").expect;
let SmsServiceClass = require("../dist/index.js").default;
let apiCallExecutor = require("../dist/network/apiCallExecutor.js").default
  .apiCallExecutor;
const sinon = require("sinon");
const referee = require("@sinonjs/referee");
const assert = referee.assert;
const chaiAsPromised = require('chai-as-promised');
const chai = require("chai");
chai.use(chaiAsPromised)
let expect = chai.expect;

let { sampleInput } = require("./testCaseObject.js");
let SmsService = new SmsServiceClass();
SmsService.initialize(sampleInput);


describe("Testing started using sinon for build folder(dist)", () => {
    it("sending sms transactional function check",()=> {
        return new Promise(async (resolve, rejects) => {
            try {
                let spy, spy1, spy2;
                for (let i = 0; i < SmsService.vendors.length; i++) {
                    let vendor = SmsService.vendors[i];
                    if (i == 0) {
                        spy = sinon.spy(vendor, "sendTransactionalMessage");
                    } else if (i == 1) {
                        spy1 = sinon.spy(vendor, "sendTransactionalMessage");
                    } else {
                        spy2 = sinon.spy(vendor, "sendTransactionalMessage");
                    }
                }
                try {
                    await SmsService.sendTransactionalMessage("message", 99);

                for (let i = 0; i < SmsService.vendors.length; i++) {
                    if (i == 0) {
                        assert(spy.calledOnce, "Vendor 1 called once");
                        // console.log(spy.getCall(i),"check")
                        await expect(spy.getCall(0).returnValue).to.be.rejectedWith();

                    } else if (i == 1) {
                        assert(spy1.calledOnce, "Vendor 2 called once");
                        await expect(spy1.getCall(0).returnValue).to.eventually.equals(true);
                    } else {
                        assert(spy2.notCalled, "Vendor 3 should not be called");
                    }
                }
                    resolve();
                } catch (e) {
                    console.log(e);
                    rejects(e);
                }

            }catch (e) {
                resolve();
            }
        })
    })
})
