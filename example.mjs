import {
	dateRangeFromFixedNumber,
	pastDayOccurrences,
	futureDayOccurrences,
	dayOccurrencesBetween
} from "date-essentials";

const startDay = '2024-09-29'
const endDay = '2024-10-29'

console.log('Past Days', dateRangeFromFixedNumber(-3));
console.log('Futr Days',dateRangeFromFixedNumber(3));

console.log('Past 2 Occurrence', pastDayOccurrences('SUN', startDay, 2));
console.log('Next 2 Occurrence', futureDayOccurrences('SUN', startDay, 2));
console.log('Occurrence Between', dayOccurrencesBetween('SUN', startDay, endDay));