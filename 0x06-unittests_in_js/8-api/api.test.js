const app = require('./api');
const { expect } = require('chai');
const request = require('request');

describe('index page', () => {
  describe('GET /', () => {
    it('should return the correct status and body ', (done) => {
      const opt = {
        url: 'http://localhost:7865',
        method: 'GET',
      };

      request(opt, (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Welcome to the payment system');
        done();
      });
    });
  });
});
