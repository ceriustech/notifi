import LoginButton from '../../components/global/auth/LoginButton';
import LogoutButton from '../../components/global/auth/LogoutButton';

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
		component: {
			type: 'button',
			component: LoginButton,
		},
		exact: true,
		designation: {
			authenticated: false,
		},
	},
	{
		id: 'logout',
		path: '/logout',
		routeName: 'Logout',
		component: {
			type: 'button',
			component: LogoutButton,
		},
		exact: true,
		designation: {
			authenticated: true,
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
