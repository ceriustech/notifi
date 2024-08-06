import { routes, NavItem, Route } from '../../../../routes/data/data';

export const findCurrentRoute = (
	isAuthenticated: boolean,
	pathname: string
): Route | undefined => {
	return routes.find(
		(route) =>
			route.designation.authenticated === isAuthenticated &&
			(pathname === route.path || (route.path === '/' && pathname === ''))
	);
};

export const filterRoutesByAuth = (isAuthenticated: boolean): Route[] => {
	return routes.filter(
		(route) => route.designation.authenticated === isAuthenticated
	);
};

export const getNavItems = (
	isAuthenticated: boolean,
	pathname: string
): NavItem[] => {
	const currentRoute = findCurrentRoute(isAuthenticated, pathname);
	return currentRoute && currentRoute.links
		? currentRoute.links
		: filterRoutesByAuth(isAuthenticated);
};
