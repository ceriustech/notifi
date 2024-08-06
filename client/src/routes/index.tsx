import {
	createRouter,
	createRootRoute,
	createRoute,
} from '@tanstack/react-router';
import Home from '../pages/public/Home';
import Layout from '../components/global/layout/Layout';
import PrivateRoute from './PrivateRoute';
import Dashboard from '../pages/private/Dashboard';
import Legislation from '../pages/private/Legislation';
import PoliticianProfile from '../pages/private/PoliticianProfile';
import UserProfile from '../pages/private/UserProfile';

const rootRoute = createRootRoute({
	component: Layout,
});

// routes available to non authenticated users
const publicRoutes = [
	createRoute({
		getParentRoute: () => rootRoute,
		path: '/',
		component: Home,
	}),
];

// routes available to authenticated users
const privateRoutes = [
	createRoute({
		getParentRoute: () => rootRoute,
		path: '/dashboard',
		component: () => (
			<PrivateRoute>
				<Dashboard />
			</PrivateRoute>
		),
	}),

	createRoute({
		getParentRoute: () => rootRoute,
		path: '/legislation',
		component: () => (
			<PrivateRoute>
				<Legislation />
			</PrivateRoute>
		),
	}),

	createRoute({
		getParentRoute: () => rootRoute,
		path: '/politician-profile',
		component: () => (
			<PrivateRoute>
				<PoliticianProfile />
			</PrivateRoute>
		),
	}),

	createRoute({
		getParentRoute: () => rootRoute,
		path: '/user-profile',
		component: () => (
			<PrivateRoute>
				<UserProfile />
			</PrivateRoute>
		),
	}),
];

const routeTree = rootRoute.addChildren([...publicRoutes, ...privateRoutes]);

export const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
	interface Register {
		routes: typeof router;
	}
}
