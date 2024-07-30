import {
	createRouter,
	createRootRoute,
	createRoute,
	Outlet,
} from '@tanstack/react-router';
import Home from '../pages/public/Home';
import Login from '../pages/public/auth/Login';
import Signup from '../pages/public/auth/SignUp';

import PrivateRoute from './PrivateRoute';
import Dashboard from '../pages/private/Dashboard';
import Legislation from '../pages/private/Legislation';
import PoliticianProfile from '../pages/private/PoliticianProfile';
import NavigationContainer from '../components/global/navigation/NavigationContainer';
import UserProfile from '../pages/private/UserProfile';

const rootRoute = createRootRoute({
	component: () => (
		<>
			<NavigationContainer />
			<hr />
			<Outlet />
		</>
	),
});

// routes available to non authenticated users
export const homeRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: '/',
	component: Home,
});

export const loginRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: '/login',
	component: Login,
});

export const signupRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: '/signup',
	component: Signup,
});

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

const routeTree = rootRoute.addChildren([
	homeRoute,
	loginRoute,
	signupRoute,
	...privateRoutes,
]);

export const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
	interface Register {
		routes: typeof router;
	}
}
