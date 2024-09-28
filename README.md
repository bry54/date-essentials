# date-essentials

**date-essentials** is a lightweight utility library for handling common date-related operations in JavaScript and TypeScript. It provides functions to easily generate date ranges, manipulate dates, and format them as needed.

## Features

- Generate date ranges based on a fixed number of days relative to today.
- Generate date ranges between two specific dates.
- Parse and format date strings in `YYYY-MM-DD` format.
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

#### 1. `dateRangeFromFixedNumber(days: number): string[]`

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

#### 2. `dateRangeFromTwoDates(start: string, end: string): string[]`

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
