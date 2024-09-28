const helpers = require('../src/index');

const { futureDayOccurrences, pastDayOccurrences, dayOccurrencesBetween } = helpers;

const startDay = '2024-09-29'
const endDay = '2024-10-29'

describe('futureDayOccurrences', () => {
    test('should return the next Monday from a given date', () => {
        const result = futureDayOccurrences('SUN', startDay);
        expect(result).toEqual(['2024-10-06']);
    });

    test('should return the next 3 Tuesdays from a given date', () => {
        const result = futureDayOccurrences('SUN', startDay, 2);
        expect(result).toEqual(['2024-10-06', '2024-10-13']);
    });
});

describe('pastDayOccurrences', () => {
    test('should return the previous Wednesday from a given date', () => {
        const result = pastDayOccurrences('SUN', startDay);
        expect(result).toEqual(['2024-09-22']);
    });

    test('should return the previous 2 Sundays from a given date', () => {
        const result = pastDayOccurrences('SUN', startDay, 2);
        expect(result).toEqual(['2024-09-22', '2024-09-15']);
    });
});

describe('dayOccurrencesBetween', () => {
    test('should return all Mondays between two dates', () => {
        const result = dayOccurrencesBetween('SUN', startDay, endDay);
        expect(result).toEqual(['2024-10-06', '2024-10-13', '2024-10-20', '2024-10-27']);
    });
});
