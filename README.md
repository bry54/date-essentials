# date-essentials

**date-essentials** is a lightweight utility library for handling common date-related operations in JavaScript and TypeScript. It provides functions to easily generate date ranges, manipulate dates, and format them as needed.

## Features
- Accepted date format format `YYYY-MM-DD`.
- Simple, efficient, and easy to use with TypeScript support.

## Installation

You can install the library using npm:

```bash
npm install date-essentials
```

## Usage

### Importing

You can import the functions into your project like this:

```typescript
import { dateRangeFromFixedNumber, dateRangeFromTwoDates } from 'date-essentials';
```

### Functions


|                                               |                                           |                                                 |
|-----------------------------------------------|-------------------------------------------|-------------------------------------------------|
| [futureDayOccurrences](#futuredayoccurrences) | [pastDayOccurrences](#pastdayoccurrences) | [dayOccurrencesBetween](#dayoccurrencesbetween) |



#### <a name="daterangefromfixednumber">1.</a> `dateRangeFromFixedNumber(days: number): string[]`

Generates a date range based on a fixed number of days relative to today. The function will calculate a range of dates either going backward or forward in time, depending on the input.

- **Parameters**:
  - `days` (number): The number of days relative to today. Negative values generate dates in the past, positive values generate dates in the future.

- **Returns**:
  - An array of date strings in the format `YYYY-MM-DD`.

- **Example**:

  ```typescript
  // Get date range for the past 7 days, including today
  const last7Days = dateRangeFromFixedNumber(-7);
  console.log(last7Days); // ['YYYY-MM-DD', 'YYYY-MM-DD', ...]

  // Get date range for the next 5 days
  const next5Days = dateRangeFromFixedNumber(5);
  console.log(next5Days); // ['YYYY-MM-DD', 'YYYY-MM-DD', ...]
  ```

#### <a name="daterangefromtwodates">2</a>. `dateRangeFromTwoDates(start: string, end: string): string[]`

Generates an array of dates between two given date strings, inclusive of both start and end dates.

- **Parameters**:
  - `start` (string): The start date in the format `YYYY-MM-DD`.
  - `end` (string): The end date in the format `YYYY-MM-DD`.

- **Returns**:
  - An array of date strings in the format `YYYY-MM-DD`.

- **Example**:

  ```typescript
  // Get all the dates between '2024-09-01' and '2024-09-07'
  const dateRange = dateRangeFromTwoDates('2024-09-01', '2024-09-07');
  console.log(dateRange); // ['2024-09-01', '2024-09-02', ..., '2024-09-07']
  ```

#### <a name="futuredayoccurrences">3.</a> `futureDayOccurrences(day: string, startDate: string, occurrences?: number): string[]`

Returns an array of future occurrences of the specified day of the week starting from the given date. The number of occurrences is optional and defaults to 1.

- **Parameters**:
  - `day`: A string representing the day of the week (e.g., `'MON'`, `'TUES'`).
  - `startDate`: The starting date in `YYYY-MM-DD` format.
  - `occurrences` (optional): Number of future occurrences to retrieve (defaults to 1).

- **Returns**: An array of strings representing the dates of future occurrences.

- **Example**:

```typescript
// Get the next 2 Sundays from '2024-09-29'
futureDayOccurrences('SUN', '2024-09-29', 2);
// Output: ['2024-10-06', '2024-10-13']
```

#### <a name="pastdayoccurrences">4.</a> `pastDayOccurrences(day: string, startDate: string, occurrences?: number): string[]`

Returns an array of past occurrences of the specified day of the week starting from the given date. The number of occurrences is optional and defaults to 1.

- **Parameters**:
  - `day`: A string representing the day of the week (e.g., `'MON'`, `'TUES'`).
  - `startDate`: The starting date in `YYYY-MM-DD` format.
  - `occurrences` (optional): Number of past occurrences to retrieve (defaults to 1).

- **Returns**: An array of strings representing the dates of past occurrences.

- **Example**:

```typescript
// Get the previous 2 Sundays from '2024-09-29'
pastDayOccurrences('SUN', '2024-09-29', 2);
// Output: ['2024-09-22', '2024-09-15']
```

#### <a name="dayoccurrencesbetween">5.</a> `dayOccurrencesBetween(day: string, startDate: string, endDate: string): string[]`

Returns all occurrences of the specified day of the week between two dates.

- **Parameters**:
  - `day`: A string representing the day of the week (e.g., `'MON'`, `'TUES'`).
  - `startDate`: The starting date in `YYYY-MM-DD` format.
  - `endDate`: The ending date in `YYYY-MM-DD` format.

- **Returns**: An array of strings representing the dates of all occurrences within the range.

- **Example**:

```typescript
// Get all Sundays between '2024-09-29' and '2024-10-29'
dayOccurrencesBetween('SUN', '2024-09-29', '2024-10-29');
// Output: ['2024-10-06', '2024-10-13', '2024-10-20', '2024-10-27']
```

## Error Handling

- **Invalid Date Inputs**: If the provided date strings are not valid dates (e.g., incorrect format or invalid values), the functions will throw an error.

  ```typescript
  try {
    const dateRange = dateRangeFromTwoDates('invalid-date', '2024-09-07');
  } catch (error) {
    console.error(error.message); // "Invalid date format. Please provide valid dates in 'YYYY-MM-DD' format."
  }
  ```

## License

This project is licensed under the ISC License.

---
