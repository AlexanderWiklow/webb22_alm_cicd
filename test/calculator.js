const assert = require('assert');
const { Calculator } = require('../public/javascripts/calculator');

describe('Calculator', () => {
  let calc;
  beforeEach(function () {
    calc = new Calculator();
    this.retries(2);
  });
  describe('getResult()', () => {
    it('should return 0 when the calculator is created', () => {
      assert.equal(calc.getResult(), 0);
    });
  });
});
