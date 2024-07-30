export const routes = [
	{
		id: 'home',
		path: '/',
		routeName: 'Home',
		exact: true,
		designation: {
			authenticated: false,
		},
	},
	{
		id: 'login',
		path: '/login',
		routeName: 'Login',
		exact: true,
		designation: {
			authenticated: false,
		},
	},
	{
		id: 'signup',
		path: '/signup',
		routeName: 'Signup',
		exact: true,
		designation: {
			authenticated: false,
		},
	},
	{
		id: 'dashboard',
		path: '/dashboard',
		routeName: 'Dashboard',
		exact: true,
		designation: {
			authenticated: true,
		},
	},
	{
		id: 'legislation',
		path: '/legislation',
		routeName: 'Legislation',
		exact: true,
		designation: {
			authenticated: true,
		},
	},
	{
		id: 'politician-profile',
		path: '/politician-profile',
		routeName: 'PoliticianProfile',
		exact: true,
		designation: {
			authenticated: true,
		},
	},
	{
		id: 'user-profile',
		path: '/user-profile',
		routeName: 'UserProfile',
		exact: true,
		designation: {
			authenticated: true,
		},
	},
];
