import { Link } from '@tanstack/react-router';

interface NavigationItemProps {
	path: string;
	routeName: string;
	children?: React.ReactNode;
}

const NavigationItem = ({ path, routeName, children }: NavigationItemProps) => {
	return (
		<li>
			<Link to={path}>{routeName || children}</Link>
		</li>
	);
};

export default NavigationItem;
