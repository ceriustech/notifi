import styled from 'styled-components';
import { defaultColors as colors } from '../../../../styles/colors';

export const NavItem = styled.li`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	padding: 0.5rem;

	a {
		display: flex;
		align-items: center;
		text-decoration: none;
		color: ${colors.root.black};
		font-weight: 500;
	}
`;
