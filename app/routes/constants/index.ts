export interface Routes {
	id: string;
	path: string;
	name: string;
	component: string;
	access: 'public' | 'private' | 'auth';
	layout?: string;
	metaData?: PageMetaData[];
}

const BASE_META = [
	{ httpEquiv: 'Content-type', content: 'text/html; charset=utf-8' },
	{
		name: 'viewport',
		content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0',
	},
];

const getSocialMeta = (
	title: string,
	description: string,
	path: string = '',
) => [
	{ title: `Notifi${title ? ` | ${title}` : ''}` },
	{ name: 'description', content: description },
	{ property: 'og:title', content: title || 'Notifi' },
	{ property: 'og:description', content: 'Sports data' },
	{
		property: 'og:url',
		content: `https://notifi.app${path ? `/${path}` : ''}`,
	},
];

const PAGE_ROUTES_DATA: Record<string, Routes> = {
	HOME: {
		id: 'home',
		path: '/',
		name: 'Home',
		component: 'routes/pages/public/home/index.tsx',
		access: 'public',
		metaData: [
			...BASE_META,
			...getSocialMeta('', 'View sports data'),
			{
				name: 'keywords',
				content:
					'sports betting, sports betting data, college sports records, ncaa womens basketball, ncaa mens basketball, ncaa football',
			},
		],
	},
	ABOUT: {
		id: 'about',
		path: '/about',
		name: 'About',
		component: 'routes/pages/public/about/index.tsx',
		access: 'public',
		metaData: [
			...BASE_META,
			...getSocialMeta(
				'About',
				'Learn more about Notifi and our mission to provide the best sports data',
				'about',
			),
			{
				name: 'keywords',
				content:
					'sports betting, sports betting data, college sports records, ncaa womens basketball, ncaa mens basketball, ncaa football',
			},
		],
	},
	AUTH: {
		id: 'auth',
		path: '/auth',
		name: 'Auth',
		component: 'routes/pages/auth/index.tsx',
		access: 'public',
		metaData: [
			...BASE_META,
			...getSocialMeta(
				'Auth',
				'Log in to your Notifi account to access sports data and gain insights',
				'auth',
			),
			{
				name: 'keywords',
				content:
					'sports betting, sports betting data, college sports records, ncaa womens basketball, ncaa mens basketball, ncaa football',
			},
		],
	},
	STATISTICS: {
		id: 'statistics',
		path: '/statistics',
		name: 'Statistics',
		component: 'routes/pages/private/statistics/index.tsx',
		access: 'private',
		layout: 'routes/components/layout/index.tsx',
		metaData: [
			...BASE_META,
			...getSocialMeta(
				'Statistics',
				'View detailed sports statistics and insights',
				'statistics',
			),
			{
				name: 'keywords',
				content:
					'sports betting, sports betting data, college sports records, ncaa womens basketball, ncaa mens basketball, ncaa football',
			},
		],
	},
	DASHBOARD: {
		id: 'dashboard',
		path: '/dashboard',
		name: 'Dashboard',
		component: 'routes/pages/private/dashboard/index.tsx',
		access: 'private',
		layout: 'routes/components/layout/index.tsx',
		metaData: [
			...BASE_META,
			...getSocialMeta(
				'Dashboard',
				'View your personalized sports data and insights',
				'dashboard',
			),
			{
				name: 'keywords',
				content:
					'sports betting, sports betting data, college sports records, ncaa womens basketball, ncaa mens basketball, ncaa football',
			},
		],
	},
};

export { PAGE_ROUTES_DATA };
