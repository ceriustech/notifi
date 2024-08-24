import styled, { css } from 'styled-components';
import { defaultColors as colors } from '../../../../styles/colors';

interface NavigationLayoutContainerProps {
	isAuthenticated: boolean;
}

interface LogoContainerProps extends NavigationLayoutContainerProps {}

export const NavigationLayoutContainer = styled.nav<NavigationLayoutContainerProps>`
	${({ isAuthenticated }) => {
		return css`
			display: flex;
			${isAuthenticated ? 'flex-direction: column;' : 'flex-direction: row;'}
		`;
	}}
`;

export const LogoContainer = styled.div<LogoContainerProps>`
	${({ isAuthenticated }) => {
		return css`
			display: flex;
			align-items: center;
			padding: 1rem;
			width: 100%;
			${isAuthenticated
				? 'justify-content: center;'
				: 'justify-content: flex-start;'}
			a {
				text-decoration: none;
			}
		`;
	}}
`;

export const Logo = styled.div`
	display: flex;
	align-items: center;
	h1 {
		margin-left: 0.5rem;
		color: ${colors.root.black};
		font-weight: 700;
	}
`;
