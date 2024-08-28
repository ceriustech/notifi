import styled, { css } from 'styled-components';
import { defaultColors as colors } from '../../../styles/colors';

interface LayoutContainerProps {
	isAuthenticated: boolean;
}

interface HeaderProps extends LayoutContainerProps {}

export const LayoutContainer = styled.div<LayoutContainerProps>`
	${({ isAuthenticated }) => {
		return css`
			display: flex;
			${isAuthenticated ? 'flex-direction: row;' : 'flex-direction: column;'}
			height: 100vh;
			width: 100%;
		`;
	}}
`;

export const Header = styled.header<HeaderProps>`
	${({ isAuthenticated }) => {
		return css`
			${isAuthenticated
				? `border-right: 1px solid ${colors.root.lightGray}`
				: ''};
			${isAuthenticated ? 'flex-basis: 15%;' : 'width: 100%;'}
		`;
	}}
`;

export const Main = styled.main`
	padding: 1rem;
	width: 100%;
`;
