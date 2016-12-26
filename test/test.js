const expect = require('chai').expect;
require('../src/index');


describe('Test hasVowels', () => {
  it('should return false if the string has no vowels', () => {
    expect('N VWLS'.hasVowels()).to.equal(false);
  });
  it('should return true if the string has vowels', () => {
    expect('No vowels'.hasVowels()).to.equal(true);

    // Introduce failing test
    // expect('Has vowels'.hasVowels()).to.equal(false);
  });
});
