const sinon = require('sinon');
const { expect } = require('chai');

const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  it('should call the Utils function with 100 and 20', () => {
    const spy = sinon.spy(Utils, 'calculateNumber');
    
    sendPaymentRequestToApi(100, 20);
    expect(spy.calledOnceWithExactly('SUM', 100, 20)).to.be.true;

    spy.restore();
  });

  it('should log the correct total', () => {
    const consoleSpy = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);
    expect(consoleSpy.calledOnceWithExactly('The total is: 120')).to.be.true;

    consoleSpy.restore();
  });
});
