const {isPrimeNumber, randomValueInRange, getWeatherDataByLatLong} = require('../service');

test('isPrimeNumber - Should output boolean true for all prime numbers', () => {
    const arrayOfPrimeNumbers = [2,7,79,31,163,167,-2,7072127];
    arrayOfPrimeNumbers.forEach(element => {
        const value = isPrimeNumber(element);
        expect(value).toBe(true);
    })
});

test('isPrimeNumber - Should output boolean false for all composite numbers and 1', () => {
    const arrayOfNumbers = [1,6,8,15,27,33,3032022];
    arrayOfNumbers.forEach(element => {
        const value = isPrimeNumber(element);
        expect(value).toBe(false);
    })
});

test('isPrimeNumber - Should output boolean false for any type of data other than numbers', () => {
    const arrayOfRandomElements = ["Hello",true,[2,3,4],{prop1:"test",prop2:"test2"}]
    arrayOfRandomElements.forEach(element => {
        const value = isPrimeNumber(element);
        expect(value).toBe(false);
    })
});

test('randomValueInRange - Should output number greater than or equal to start', () => {
    let start = -90;
    let end = 90;
    let fixed = 3;
    const testValue1 = randomValueInRange(start,end,fixed);
    expect(testValue1).toBeGreaterThanOrEqual(start);
    start = -180;
    end = 180;
    const testValue2 = randomValueInRange(start,end,fixed);
    expect(testValue2).toBeGreaterThanOrEqual(start);
})

test('randomValueInRange - Should output number less than or equal to end',() => {
    let start = -90;
    let end = 90;
    let fixed = 3;
    const testValue1 = randomValueInRange(start,end,fixed);
    expect(testValue1).toBeLessThanOrEqual(end);
    start = -180;
    end = 180;
    const testValue2 = randomValueInRange(start,end,fixed);
    expect(testValue2).toBeLessThanOrEqual(end);
})

test('randomValueInRange - Should output number less than or equal to end',() => {
    let start = -90;
    let end = 90;
    let fixed = 3;
    const testValue1 = randomValueInRange(start,end,fixed);
    expect(testValue1).toBeLessThanOrEqual(end);
    start = -180;
    end = 180;
    const testValue2 = randomValueInRange(start,end,fixed);
    expect(testValue2).toBeLessThanOrEqual(end);
})

