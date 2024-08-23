import styled from 'styled-components';
import { defaultColors as colors } from '../../../styles/colors';

export const LayoutContainer = styled.div`
	display: flex;
	height: 100vh;
	width: 100%;
`;

export const Header = styled.header`
	border-right: 1px solid ${colors.root.lightGray};
  
`;

export const Main = styled.main`
	width: 100%;
`;
