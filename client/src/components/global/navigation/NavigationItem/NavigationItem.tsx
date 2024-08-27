import React from 'react';
import { Link } from '@tanstack/react-router';
import { NavItem } from './styles';

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
		<NavItem>
			{component ? (
				React.createElement(component)
			) : (
				<Link to={path}>
					{icon && React.createElement(icon)}
					{routeName}
				</Link>
			)}
		</NavItem>
	);
};

export default NavigationItem;
