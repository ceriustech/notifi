import React from 'react';
import { Link } from '@tanstack/react-router';

interface NavigationItemProps {
	path: string;
	routeName: string;
	component?: React.ComponentType;
}

const NavigationItem = ({
	path,
	routeName,
	component,
}: NavigationItemProps) => {
	return (
		<li>
			{component ? (
				React.createElement(component)
			) : (
				<Link to={path}>{routeName}</Link>
			)}
		</li>
	);
};

export default NavigationItem;
