// let assert = require("chai").assert;
// let expect = require("chai").expect;
// let { SmsService } = require('src/index.ts');
// import {SmsService} from "../dist/index.js";
// // const sinon = require('sinon');
import { SmsService } from '../src/index';
import sinon from 'sinon';
// import referee from '@sinonjs/referee';
import chaiAsPromised from 'chai-as-promised';

// const referee = require('@sinonjs/referee');
// const chaiAsPromised = require('chai-as-promised');
import chai from 'chai';
const assert = chai.assert;

// const chai = require('chai');
chai.use(chaiAsPromised);
const expect = chai.expect;

const sampleInput = {
    vendorConfigList: [
        {
            type: 'test',
            cred: {
                otp: {
                    method: 'xxx',
                    api_key: 'xxxx',
                    sender: 'xxxx',
                    baseEndpoint: 'xxxx',
                },
                transactional: {
                    method: 'xxx',
                    api_key: 'xxxx',
                    sender: 'xxxx',
                    baseEndpoint: 'xxxx',
                },
                promotional: {
                    method: 'xxx',
                    api_key: 'xxxx',
                    sender: 'xxxx',
                    baseEndpoint: 'xxxx',
                },
            },
        },
        {
            type: 'mocked',
            cred: {
                otp: {
                    method: 'xxx',
                    api_key: 'xxxx',
                    sender: 'xxxx',
                    baseEndpoint: 'xxxx',
                },
                transactional: {
                    method: 'xxx',
                    api_key: 'xxxx',
                    sender: 'xxxx',
                    baseEndpoint: 'xxxx',
                },
                promotional: {
                    method: 'xxx',
                    api_key: 'xxxx',
                    sender: 'xxxx',
                    baseEndpoint: 'xxxx',
                },
            },
        },
        {
            type: 'random',
            cred: {
                otp: {
                    method: 'xxx',
                    api_key: 'xxxx',
                    sender: 'xxxx',
                    baseEndpoint: 'xxxx',
                },
                transactional: {
                    method: 'xxx',
                    api_key: 'xxxx',
                    sender: 'xxxx',
                    baseEndpoint: 'xxxx',
                },
                promotional: {
                    method: 'xxx',
                    api_key: 'xxxx',
                    sender: 'xxxx',
                    baseEndpoint: 'xxxx',
                },
            },
        },
    ],
};

const sendSms = new SmsService();
sendSms.initialize(sampleInput);

describe('Testing started using sinon', () => {
    it('sending sms transactional function check', () => {
        return new Promise(async (resolve, rejects) => {
            try {
                let spy: any, spy1: any, spy2: any;
                for (let i = 0; i < sendSms.vendors.length; i++) {
                    const vendor = sendSms.vendors[i];
                    if (i == 0) {
                        spy = sinon.spy(vendor, 'sendTransactionalMessage');
                    } else if (i == 1) {
                        spy1 = sinon.spy(vendor, 'sendTransactionalMessage');
                    } else {
                        spy2 = sinon.spy(vendor, 'sendTransactionalMessage');
                    }
                }
                try {
                    await sendSms.sendTransactionalMessage('message', 99);

                    for (let i = 0; i < sendSms.vendors.length; i++) {
                        if (i == 0) {
                            assert(spy.calledOnce, 'Vendor 1 called once');
                            await expect(spy.getCall(0).returnValue).to.be.rejectedWith();
                        } else if (i == 1) {
                            assert(spy1.calledOnce, 'Vendor 2 called once');
                            await expect(spy1.getCall(0).returnValue).to.eventually.equals(true);
                        } else {
                            assert(spy2.notCalled, 'Vendor 3 should not be called');
                        }
                    }
                    resolve();
                } catch (e) {
                    rejects(e);
                }
            } catch (e) {
                resolve();
            }
        });
    });
});
