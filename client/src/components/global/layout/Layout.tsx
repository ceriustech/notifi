import { Outlet } from '@tanstack/react-router';
import NavigationContainer from '../navigation/NavigationContainer';

const Layout = () => (
	<>
		<header>
			<NavigationContainer />
		</header>
		<main>
			<Outlet />
		</main>
	</>
);

export default Layout;
