import { Outlet } from '@tanstack/react-router';
import { LayoutContainer, Header, Main } from './styles';
import NavigationContainer from '../navigation/NavigationContainer';

const Layout = () => (
	<LayoutContainer>
		<Header>
			<NavigationContainer />
		</Header>
		<Main>
			<Outlet />
		</Main>
	</LayoutContainer>
);

export default Layout;
