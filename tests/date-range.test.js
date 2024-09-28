// tests/date-range.test.ts

const helpers = require('../src/index'); // Update with your actual file path
const { dateRangeFromFixedNumber, dateRangeFromTwoDates } = helpers;

describe('dateRangeFromFixedNumber', () => {
    test('should return the correct date range for the past 7 days + today (8 days)', () => {
        const result = dateRangeFromFixedNumber(-7);
        expect(result.length).toBe(8); // Expect 8 days in the array
    });

    test('should return the correct date range for the next 5 days + today (6 days)', () => {
        const result = dateRangeFromFixedNumber(5);
        expect(result.length).toBe(6); // Expect 6 days in the array
    });
});

describe('dateRangeFromTwoDates', () => {
    test('should return dates between two specific dates', () => {
        const result = dateRangeFromTwoDates('2023-09-01', '2023-09-07');
        expect(result).toEqual([
            '2023-09-01',
            '2023-09-02',
            '2023-09-03',
            '2023-09-04',
            '2023-09-05',
            '2023-09-06',
            '2023-09-07',
        ]);
    });

    test('should throw an error for invalid date format', () => {
        expect(() => {
            dateRangeFromTwoDates('invalid-date', '2023-09-07');
        }).toThrow('Invalid date format');
    });
});
