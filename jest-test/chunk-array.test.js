const chunkArray = require('./chunk-array');

test('test function exists', () => {
    expect(chunkArray).toBeDefined();
});

test('test array 1-10 with lenght 2', () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const len = 2;
    const chunkArr = chunkArray(numbers, len);
    expect(chunkArr).toEqual([[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]]);
})