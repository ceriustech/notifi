export interface Routes {
	id: string;
	path: string;
	name: string;
	component: string;
	access: 'public' | 'private' | 'auth';
	layout?: string;
}

const PAGE_ROUTES_DATA: Record<string, Routes> = {
	HOME: {
		id: 'home',
		path: '/',
		name: 'Home',
		component: 'routes/pages/public/home/index.tsx',
		access: 'public',
	},
	ABOUT: {
		id: 'about',
		path: '/about',
		name: 'ABOUT',
		component: 'routes/pages/public/about/index.tsx',
		access: 'public',
	},
	AUTH: {
		id: 'auth',
		path: '/auth',
		name: 'Auth',
		component: 'routes/pages/auth/index.tsx',
		access: 'public',
	},
	STATISTICS: {
		id: 'statistics',
		path: '/statistics',
		name: 'Statistics',
		component: 'routes/pages/private/statistics/index.tsx',
		access: 'private',
		layout: 'routes/components/layout/index.tsx',
	},
	DASHBOARD: {
		id: 'dashboard',
		path: '/dashboard',
		name: 'Dashboard',
		component: 'routes/pages/private/dashboard/index.tsx',
		access: 'private',
		layout: 'routes/components/layout/index.tsx',
	},
};

export { PAGE_ROUTES_DATA };
