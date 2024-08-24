import { useStateContext } from '../../../state/contextProvider';
import { Outlet } from '@tanstack/react-router';
import { LayoutContainer, Header, Main } from './styles';
import NavigationContainer from '../navigation/NavigationContainer';

const Layout = () => {
	const { state } = useStateContext();
	const { isAuthenticated } = state;

	return (
		<LayoutContainer isAuthenticated={isAuthenticated}>
			<Header isAuthenticated={isAuthenticated}>
				<NavigationContainer />
			</Header>
			<Main>
				<Outlet />
			</Main>
		</LayoutContainer>
	);
};

export default Layout;
