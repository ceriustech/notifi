import { Link } from '@tanstack/react-router';
import { useStateContext } from '../../../../state/contextProvider';
import NavigationItem from '../NavigationItem';
import { getNavItems } from './utils';
import NotifiIcon from '../../../../assets/components/NotifiIcon';
import { NavigationLayoutContainer, LogoContainer, Logo } from './styles';

const NavigationContainer = () => {
	const { state } = useStateContext();
	const { isAuthenticated, isLoading } = state;

	if (isLoading) {
		return null;
	}

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
		<NavigationLayoutContainer isAuthenticated={isAuthenticated}>
			<LogoContainer isAuthenticated={isAuthenticated}>
				<Link to={getHomePath()}>
					<Logo>
						<NotifiIcon width={35} height={35} />
						<h1>Notifi</h1>
					</Logo>
				</Link>
			</LogoContainer>
			<ul>{navItems}</ul>
		</NavigationLayoutContainer>
	);
};

export default NavigationContainer;
