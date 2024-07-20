import NavigationItem from '../NavigationItem';
import { routes } from '../../../../routes/data/data';

const NavigationContainer = () => {
	const navigation = routes.map((route) => (
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
