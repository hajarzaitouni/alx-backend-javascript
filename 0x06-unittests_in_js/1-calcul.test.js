const calculateNumber = require('./1-calcul.js');
const assert = require('assert');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return 4', () => {
      assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
    });

    it('should return 4', () => {
      assert.strictEqual(calculateNumber('SUM', 1.2, 3), 4);
    });

    it('should return 5', () => {
      assert.strictEqual(calculateNumber('SUM', 1.5, 3), 5);
    });

    it('should return 6', () => {
      assert.strictEqual(calculateNumber('SUM', 3, 3.1), 6);
    });

    it('should return 5', () => {
      assert.strictEqual(calculateNumber('SUM', 1, 3.7), 5);
    });

    it('should return 6', () => {
      assert.strictEqual(calculateNumber('SUM', 1.5, 3.7), 6);
    });

    it('should return 1', () => {
      assert.strictEqual(calculateNumber('SUM', 0.7, 0.4), 1);
    });

    it('should return 0', () => {
      assert.strictEqual(calculateNumber('SUM', 0.1, 0.4), 0);
    });

    it('should return 6', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });
  });

  describe('SUBTRACT', () => {
    it('should return 2', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 3, 1), 2);
    });

    it('should return 1', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 3.1, 1), 2);
    });

    it('should return 2', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 3.7, 1.5), 2);
    });

    it('should return -1', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1, 3), -2);
    });

    it('should return -1', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.5, 3.7), -2);
    });

    it('should return -4', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });

    it('should return 1', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 0.7, 0.4), 1);
    });

    it('should return 0', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 0.1, 0.4), 0);
    });

    it('should return -1', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 0.1, 0.6), -1);
    });
  });

  describe('DIVIDE', () => {
    it('should return 2', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 4, 2), 2);
    });

    it('should return 1', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 3.1, 1), 3);
    });

    it('should return 2', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 3.7, 1.5), 2);
    });

    it('should return 0.25', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1, 4), 0.25);
    });

    it('should return 0.5', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.5, 3.7), 0.5);
    });

    it('should return Error', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 0.7, 0.4), 'Error');
    });

    it('should return Error', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 0.1, 0.4), 'Error');
    });

    it('should return 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 0.1, 0.6), 0);
    });
  });
});
