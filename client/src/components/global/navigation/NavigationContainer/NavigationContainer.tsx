import { Link } from '@tanstack/react-router';
import { useAuth0 } from '@auth0/auth0-react';
import NavigationItem from '../NavigationItem';
import { getNavItems } from './utils';
import NotifiIcon from '../../../../assets/components/NotifiIcon';

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
				icon={item.icon}
			/>
		)
	);

	const getHomePath = (): string => (isAuthenticated ? '/dashboard' : '/');

	return (
		<nav>
			<Link to={getHomePath()}>
				<NotifiIcon width={35} height={35} />
				<span>Notifi</span>
			</Link>
			<ul>{navItems}</ul>
		</nav>
	);
};

export default NavigationContainer;
