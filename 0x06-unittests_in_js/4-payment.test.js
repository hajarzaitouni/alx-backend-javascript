const sinon = require('sinon');
const { expect } = require('chai');

const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  let stub = sinon.stub(Utils, 'calculateNumber').returns(10);
  let consoleSpy = sinon.spy(console, 'log');

  it('should call the Utils function with 100 and 20', () => {
    sendPaymentRequestToApi(100, 20);
    expect(stub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    expect(consoleSpy.calledOnceWithExactly('The total is: 10')).to.be.true;

    stub.restore();
    consoleSpy.restore();
  });
});
