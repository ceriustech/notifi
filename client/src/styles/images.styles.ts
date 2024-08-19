import styled, { css } from 'styled-components';

interface PictureContainerProps {
	styles?: {
		displayFlexValue?: string;
		justifyContentValue?: string;
		alignItemValue?: string;
		widthValue?: string;
		heightValue?: string;
	};
}

interface ImageProps {
	styles?: {
		heightValue?: string;
	};
}

export const PictureContainer = styled.picture<PictureContainerProps>`
	${(props) => {
		const displayFlex = props.styles?.displayFlexValue || 'flex';
		const justifyContent = props.styles?.justifyContentValue || 'center';
		const alignItems = props.styles?.alignItemValue || 'center';
		const width = props.styles?.widthValue || '100%';
		const height = props.styles?.heightValue || 'auto';
		return css`
			display: ${displayFlex};
			justify-content: ${justifyContent};
			align-items: ${alignItems};
			width: ${width};
			height: ${height};
		`;
	}}
`;

export const Image = styled.img<ImageProps>`
	${(props) => {
		const height = props.styles?.heightValue || 'auto';

		return css`
			width: 100%;
			height: ${height};
		`;
	}}
`;

export const Source = styled.source`
	width: 100%;
`;
