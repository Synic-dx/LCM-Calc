const lcmCalc = require('./lcm');

test('LCM of 12 & 15 is 60', () => { 
    expect(lcmCalc(12, 15)).toBe(60)
})