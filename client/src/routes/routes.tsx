import {
	createRouter,
	createRootRoute,
	createRoute,
	Outlet,
} from '@tanstack/react-router';
import Home from '../pages/Home';
import Login from '../pages/auth/Login';
import Signup from '../pages/auth/SignUp';
import Dashboard from '../pages/Dashboard';
import Legislation from '../pages/Legislation';
import PoliticianProfile from '../pages/PoliticianProfile';
import NavigationContainer from '../components/global/navigation/NavigationContainer';

const rootRoute = createRootRoute({
	component: () => (
		<>
			<NavigationContainer />
			<hr />
			<Outlet />
		</>
	),
});

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

export const dashboardRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: '/dashboard',
	component: Dashboard,
});

export const legislationRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: '/legislation',
	component: Legislation,
});

export const politicianProfileRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: '/politician-profile',
	component: PoliticianProfile,
});

const routeTree = rootRoute.addChildren([
	homeRoute,
	loginRoute,
	signupRoute,
	dashboardRoute,
	legislationRoute,
	politicianProfileRoute,
]);

export const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
	interface Register {
		routes: typeof router;
	}
}
