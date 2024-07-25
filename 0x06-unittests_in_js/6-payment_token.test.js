const getPaymentTokenFromAPI = require('./6-payment_token');
const { expect } = require('chai');

describe('getPaymentTokenFromAPI', () => {
  it('should resolve promise with correct data when it is true', (done) => {
    getPaymentTokenFromAPI(true)
    .then((response) => {
      expect(response).to.eql({ data: 'Successful response from the API' });
      done();
    })
    .catch((error) => done(error));
  });
});
