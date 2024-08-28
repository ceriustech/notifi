export interface PoliticianProfileIconProps {
	width?: string;
	height?: string;
	fill?: string;
}

const PoliticianProfile: React.FC<PoliticianProfileIconProps> = ({
	width = 30,
	height = 30,
	fill = '#7b7b7b',
}) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			viewBox="0,0,256,256"
			width={width}
			height={height}
		>
			<g
				fill={fill}
				fill-rule="nonzero"
				stroke="none"
				stroke-width="1"
				stroke-linecap="butt"
				stroke-linejoin="miter"
				stroke-miterlimit="10"
				stroke-dasharray=""
				stroke-dashoffset="0"
				font-family="none"
				font-weight="none"
				font-size="none"
				text-anchor="none"
				style={{ mixBlendMode: 'normal' }}
			>
				<g transform="scale(2,2)">
					<path d="M64,27c-12.7,0 -23,10.3 -23,23c0,12.7 10.3,23 23,23c12.7,0 23,-10.3 23,-23c0,-12.7 -10.3,-23 -23,-23zM64,67c-9.4,0 -17,-7.6 -17,-17c0,-9.4 7.6,-17 17,-17c9.4,0 17,7.6 17,17c0,9.4 -7.6,17 -17,17zM98.5,107.1c0.8,1.4 2.7,1.9 4.1,1.1c1.4,-0.8 1.9,-2.6 1.1,-4.1c-8.1,-14.2 -23.3,-23.1 -39.7,-23.1c-16.4,0 -31.6,8.9 -39.7,23.1c-0.8,1.4 -0.3,3.3 1.1,4.1c0.5,0.3 1,0.4 1.5,0.4c1,0 2.1,-0.5 2.6,-1.5c7.1,-12.4 20.3,-20.1 34.5,-20.1c14.2,0 27.4,7.7 34.5,20.1z"></path>
				</g>
			</g>
		</svg>
	);
};

export default PoliticianProfile;
