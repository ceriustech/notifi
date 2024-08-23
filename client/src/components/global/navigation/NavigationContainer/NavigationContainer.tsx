import { Link } from '@tanstack/react-router';
import { useStateContext } from '../../../../state/contextProvider';
import NavigationItem from '../NavigationItem';
import { getNavItems } from './utils';
import NotifiIcon from '../../../../assets/components/NotifiIcon';
import { NavigationLayoutContainer, LogoContainer } from './styles';

const NavigationContainer = () => {
	const { state } = useStateContext();
	const { isAuthenticated, isLoading } = state;

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
		<NavigationLayoutContainer>
			<LogoContainer>
				<Link to={getHomePath()}>
					<NotifiIcon width={35} height={35} />
					<span>Notifi</span>
				</Link>
			</LogoContainer>
			<ul>{navItems}</ul>
		</NavigationLayoutContainer>
	);
};

export default NavigationContainer;
