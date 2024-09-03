const months = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
];

function getMonthName(month: number): string {
	return months[month];
}

export function getCurrentDateTime(): string {
	const date = new Date();
	const month = getMonthName(date.getMonth());
	const day = date.getDate();
	const year = date.getFullYear();

	return `${day} ${month}, ${year}`;
}
