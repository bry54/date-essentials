const oneDayInMilliseconds = 24 * 60 * 60 * 1000;

/**
 * Generates a date range based on a fixed number of days relative to today.
 * @param {number} days - The number of days (can be positive for future or negative for past).
 * @returns {string[]} An array of date strings in the format 'YYYY-MM-DD'.
 */
export const dateRangeFromFixedNumber = (days: number): string[] => {
	let endDate, startDate;
	const today = new Date().getTime();

	if (days < 0) {
		// Going back in time
		endDate = today;
		startDate = today + oneDayInMilliseconds * days; // Negative days shifts back
	} else {
		// Going forward in time
		startDate = today;
		endDate = today + oneDayInMilliseconds * days; // Positive days shifts forward
	}

	const startDateAsString = new Date(startDate).toISOString().split("T")[0];
	const endDateAsString = new Date(endDate).toISOString().split("T")[0];

	return dateRangeFromTwoDates(startDateAsString, endDateAsString);
};

/**
 * Generates an array of dates between two date strings.
 * @param {string} start - Start date as a string 'YYYY-MM-DD'.
 * @param {string} end - End date as a string 'YYYY-MM-DD'.
 * @returns {string[]} An array of date strings in the format 'YYYY-MM-DD'.
 */
export const dateRangeFromTwoDates = (start: string, end: string): string[] => {
	const result = [];
	let startDate = new Date(start).getTime();
	let endDate = new Date(end).getTime();

	if (isNaN(startDate) || isNaN(endDate)) {
		throw new Error(
			"Invalid date format. Please provide valid dates in 'YYYY-MM-DD' format.",
		);
	}

	// Swap if startDate is greater than endDate to always go forward in time
	if (startDate > endDate) {
		[startDate, endDate] = [endDate, startDate];
	}

	// Generate date range
	while (startDate <= endDate) {
		result.push(new Date(startDate).toISOString().split("T")[0]);
		startDate += oneDayInMilliseconds;
	}

	return result;
};
