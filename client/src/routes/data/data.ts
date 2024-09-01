import { FC } from 'react';
import { ComponentType } from 'react';
import LoginButton from '../../components/global/auth/LoginButton';
import { icons } from '../../assets/images/images.data';

export interface NavItem {
	id: string;
	path: string;
	routeName: string;
	component?: ComponentType;
	icon?: FC;
}

export interface Route extends NavItem {
	exact: boolean;
	designation: {
		authenticated: boolean;
	};
	links?: NavItem[];
}

export const routes: Route[] = [
	{
		id: 'home',
		path: '/',
		routeName: 'Home',
		exact: true,
		designation: {
			authenticated: false,
		},
		links: [
			{ id: 'how it-works', path: '#how-it-works', routeName: 'How it Works' },
			{ id: 'faq', path: '#faq', routeName: 'FAQ' },
			{
				id: 'login',
				path: '/login',
				routeName: 'Login',
				component: LoginButton,
			},
		],
	},
	{
		id: 'dashboard',
		path: '/dashboard',
		routeName: 'Dashboard',
		icon: icons.dashboard,
		exact: true,
		designation: {
			authenticated: true,
		},
	},
	{
		id: 'politician-profile',
		path: '/politician-profile',
		routeName: 'PoliticianProfile',
		icon: icons.politicianProfile,
		exact: true,
		designation: {
			authenticated: true,
		},
	},
	{
		id: 'legislation',
		path: '/legislation',
		routeName: 'Legislation',
		icon: icons.legislation,
		exact: true,
		designation: {
			authenticated: true,
		},
	},
	{
		id: 'user-profile',
		path: '/user-profile',
		routeName: 'UserProfile',
		icon: icons.userProfile,
		exact: true,
		designation: {
			authenticated: true,
		},
	},
];
