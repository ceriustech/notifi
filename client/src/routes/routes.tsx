import {
	createRouter,
	createRootRoute,
	createRoute,
	Outlet,
} from '@tanstack/react-router';
import Home from '../pages/Home';
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
	legislationRoute,
	politicianProfileRoute,
]);

export const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
	interface Register {
		routes: typeof router;
	}
}
