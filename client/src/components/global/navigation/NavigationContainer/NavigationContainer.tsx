import { Link } from '@tanstack/react-router';
import { useAuth0 } from '@auth0/auth0-react';
import NavigationItem from '../NavigationItem';
import { getNavItems } from './utils';

const NavigationContainer = () => {
	const { isAuthenticated, isLoading } = useAuth0();

	if (isLoading) {
		return null;
	}

	console.log('AUTH:', isAuthenticated);

	const navItems = getNavItems(isAuthenticated, window.location.pathname).map(
		(item) => (
			<NavigationItem
				key={item.id}
				path={item.path}
				routeName={item.routeName}
				component={item.component}
			/>
		)
	);

	return (
		<nav>
			<Link to="/">
				<img src="/path-to-logo.png" alt="Site Logo" />
				<span>Site Name</span>
			</Link>
			<ul>{navItems}</ul>
		</nav>
	);
};

export default NavigationContainer;
