const daysOfWeek = {
    SUN: 0,
    MON: 1,
    TUES: 2,
    WED: 3,
    THUR: 4,
    FRI: 5,
    SAT: 6,
};

const oneDayInMilliseconds = 24 * 60 * 60 * 1000;

/**
 * Get the future occurrences of a specific day from a starting date.
 * @param day - The day of the week (e.g., MON, TUES)
 * @param startDateStr - The starting date in 'YYYY-MM-DD' format
 * @param occurrences - Optional number of occurrences (default is 1)
 */
export const futureDayOccurrences = (
    day: keyof typeof daysOfWeek,
    startDateStr: string,
    occurrences: number = 1
): string[] => {
    const startDate = new Date(startDateStr);
    const targetDay = daysOfWeek[day];
    const results: string[] = [];

    let currentDay = startDate.getDay();
    let daysToAdd = (targetDay - currentDay + 7) % 7;
    // If the day is the same as the start date, go to the next occurrence
    if (daysToAdd === 0) {
        daysToAdd = 7;
    }

    let futureDate = new Date(startDate.getTime() + daysToAdd * oneDayInMilliseconds);
    results.push(futureDate.toISOString().split('T')[0]);

    for (let i = 1; i < occurrences; i++) {
        futureDate = new Date(futureDate.getTime() + 7 * oneDayInMilliseconds); // Move 7 days forward
        results.push(futureDate.toISOString().split('T')[0]);
    }

    return results;
};

/**
 * Get the past occurrences of a specific day from a starting date.
 * @param day - The day of the week (e.g., MON, TUES)
 * @param startDateStr - The starting date in 'YYYY-MM-DD' format
 * @param occurrences - Optional number of occurrences (default is 1)
 */
export const pastDayOccurrences = (
    day: keyof typeof daysOfWeek,
    startDateStr: string,
    occurrences: number = 1
): string[] => {
    const startDate = new Date(startDateStr);
    const targetDay = daysOfWeek[day];
    const results: string[] = [];

    let currentDay = startDate.getDay();
    let daysToSubtract = (currentDay - targetDay + 7) % 7;
    if (daysToSubtract === 0) daysToSubtract = 7; // If the day is the same as the start date, go to the previous occurrence

    let pastDate = new Date(startDate.getTime() - daysToSubtract * oneDayInMilliseconds);
    results.push(pastDate.toISOString().split('T')[0]);

    for (let i = 1; i < occurrences; i++) {
        pastDate = new Date(pastDate.getTime() - 7 * oneDayInMilliseconds); // Move 7 days backward
        results.push(pastDate.toISOString().split('T')[0]);
    }

    return results;
};

/**
 * Get all occurrences of a specific day between two dates.
 * @param day - The day of the week (e.g., MON, TUES)
 * @param startDateStr - The starting date in 'YYYY-MM-DD' format
 * @param endDateStr - The end date in 'YYYY-MM-DD' format
 */
export const dayOccurrencesBetween = (
    day: keyof typeof daysOfWeek,
    startDateStr: string,
    endDateStr: string
): string[] => {
    const startDate = new Date(startDateStr);
    const endDate = new Date(endDateStr);
    const results: string[] = [];

    let nextDate = futureDayOccurrences(day, startDateStr)[0]; // Get the first occurrence

    while (new Date(nextDate).getTime() <= endDate.getTime()) {
        results.push(nextDate);
        nextDate = futureDayOccurrences(day, nextDate)[0]; // Move to the next occurrence
    }

    return results;
};
