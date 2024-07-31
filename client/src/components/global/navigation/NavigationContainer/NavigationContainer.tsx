import NavigationItem from '../NavigationItem';
import { routes } from '../../../../routes/data/data';

const NavigationContainer = () => {
	const isAuthenticated = true; // replace with actual authentication check
	const navigation = routes
		.filter((route) => route.designation.authenticated === isAuthenticated)
		.map((route) => (
			<NavigationItem
				key={route.path}
				path={route.path}
				routeName={route.routeName}
			/>
		));
	return (
		<nav>
			<ul>{navigation}</ul>
		</nav>
	);
};

export default NavigationContainer;
