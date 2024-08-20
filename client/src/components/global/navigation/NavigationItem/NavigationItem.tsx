import React from 'react';
import { Link } from '@tanstack/react-router';

interface NavigationItemProps {
	path: string;
	routeName: string;
	component?: React.ComponentType;
	icon?: React.ComponentType;
}

const NavigationItem = ({
	path,
	routeName,
	component,
	icon,
}: NavigationItemProps) => {
	return (
		<li>
			{component ? (
				React.createElement(component)
			) : (
				<Link to={path}>
					{icon && React.createElement(icon)}
					{routeName}
				</Link>
			)}
		</li>
	);
};

export default NavigationItem;
