export interface User {
	name: string;
	email: string;
}

export function getUserName(
	user: User | null,
	firstName: boolean
): string | undefined {
	if (!user || !user.name) {
		return 'anonymous';
	}

	const userName = user.name.split(' ');

	if (firstName) {
		return userName[0];
	} else {
		return user.name;
	}
}
