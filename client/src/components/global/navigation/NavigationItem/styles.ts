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
		color: ${colors.root.darkGray};
		font-weight: 500;

		&:hover {
			svg path {
				fill: ${colors.root.black};
			}

			span {
				color: ${colors.root.black};
			}
		}

		span {
			margin-left: 0.5rem;
		}
	}
`;
