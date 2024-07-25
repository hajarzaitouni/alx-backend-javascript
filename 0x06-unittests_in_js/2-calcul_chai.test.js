const calculateNumber = require('./1-calcul.js');
const { expect } = require('chai');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return 4', () => {
      expect.strictEqual(calculateNumber('SUM', 1, 3)).to.equal(4);
    });

    it('should return 4', () => {
      expect.strictEqual(calculateNumber('SUM', 1.2, 3)).to.equal(4);
    });

    it('should return 5', () => {
      expect.strictEqual(calculateNumber('SUM', 1.5, 3)).to.equal(5);
    });

    it('should return 6', () => {
      expect.strictEqual(calculateNumber('SUM', 3, 3.1)).to.equal(6);
    });

    it('should return 5', () => {
      expect.strictEqual(calculateNumber('SUM', 1, 3.7)).to.equal(5);
    });

    it('should return 6', () => {
      expect.strictEqual(calculateNumber('SUM', 1.5, 3.7)).to.equal(6);
    });

    it('should return 1', () => {
      expect.strictEqual(calculateNumber('SUM', 0.7, 0.4)).to.equal(1);
    });

    it('should return 0', () => {
      expect.strictEqual(calculateNumber('SUM', 0.1, 0.4)).to.equal(0);
    });

    it('should return 6', () => {
      expect.strictEqual(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });
  });

  describe('SUBTRACT', () => {
    it('should return 2', () => {
      expect.strictEqual(calculateNumber('SUBTRACT', 3, 1)).to.equal(2);
    });

    it('should return 2', () => {
      expect.strictEqual(calculateNumber('SUBTRACT', 3.1, 1)).to.equal(2);
    });

    it('should return 2', () => {
      expect.strictEqual(calculateNumber('SUBTRACT', 3.7, 1.5)).to.equal(2);
    });

    it('should return -2', () => {
      expect.strictEqual(calculateNumber('SUBTRACT', 1, 3)).to.equal(-2);
    });

    it('should return -2', () => {
      expect.strictEqual(calculateNumber('SUBTRACT', 1.5, 3.7)).to.equal(-2);
    });

    it('should return -4', () => {
      expect.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });

    it('should return 1', () => {
      expect.strictEqual(calculateNumber('SUBTRACT', 0.7, 0.4)).to.equal(1);
    });

    it('should return 0', () => {
      expect.strictEqual(calculateNumber('SUBTRACT', 0.1, 0.4)).to.equal(0);
    });

    it('should return -1', () => {
      expect.strictEqual(calculateNumber('SUBTRACT', 0.1, 0.6)).to.equal(-1);
    });
  });

  describe('DIVIDE', () => {
    it('should return 2', () => {
      expect.strictEqual(calculateNumber('DIVIDE', 4, 2)).to.equal(2);
    });

    it('should return 3', () => {
      expect.strictEqual(calculateNumber('DIVIDE', 3.1, 1)).to.equal(3);
    });

    it('should return 2', () => {
      expect.strictEqual(calculateNumber('DIVIDE', 3.7, 1.5)).to.equal(2);
    });

    it('should return 0.25', () => {
      expect.strictEqual(calculateNumber('DIVIDE', 1, 4)).to.equal(0.25);
    });

    it('should return 0.5', () => {
      expect.strictEqual(calculateNumber('DIVIDE', 1.5, 3.7)).to.equal(0.5);
    });

    it('should return Error', () => {
      expect.strictEqual(calculateNumber('DIVIDE', 0.7, 0.4)).to.equal('Error');
    });

    it('should return Error', () => {
      expect.strictEqual(calculateNumber('DIVIDE', 0.1, 0.4)).to.equal('Error');
    });

    it('should return 0', () => {
      expect.strictEqual(calculateNumber('DIVIDE', 0.1, 0.6)).to.equal(0);
    });
  });
});
