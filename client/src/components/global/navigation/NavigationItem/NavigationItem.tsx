import { Link } from '@tanstack/react-router';

interface NavigationItemProps {
	path: string;
	routeName: string;
}

const NavigationItem = ({ path, routeName }: NavigationItemProps) => {
	return (
		<li>
			<Link to={path}>{routeName}</Link>
		</li>
	);
};

export default NavigationItem;
