export interface LegislationIconProps {
	width?: string;
	height?: string;
}

const LegislationIcon: React.FC<LegislationIconProps> = ({
	width = 30,
	height = 30,
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
				fill="#7b7b7b"
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
				<g transform="scale(4,4)">
					<path d="M20,10c-3.309,0 -6,2.691 -6,6v32c0,3.309 2.691,6 6,6h24c3.309,0 6,-2.691 6,-6v-32c0,-3.309 -2.691,-6 -6,-6zM20,14h24c1.103,0 2,0.897 2,2v32c0,1.103 -0.897,2 -2,2h-24c-1.103,0 -2,-0.897 -2,-2v-32c0,-1.103 0.897,-2 2,-2zM23,20c-0.553,0 -1,0.448 -1,1c0,0.552 0.447,1 1,1h18c0.553,0 1,-0.448 1,-1c0,-0.552 -0.447,-1 -1,-1zM23,28c-0.553,0 -1,0.448 -1,1c0,0.552 0.447,1 1,1h10c0.553,0 1,-0.448 1,-1c0,-0.552 -0.447,-1 -1,-1zM39,28c-0.553,0 -1,0.448 -1,1c0,0.552 0.447,1 1,1h2c0.553,0 1,-0.448 1,-1c0,-0.552 -0.447,-1 -1,-1zM23,34c-0.553,0 -1,0.448 -1,1c0,0.552 0.447,1 1,1h10c0.553,0 1,-0.448 1,-1c0,-0.552 -0.447,-1 -1,-1zM39,34c-0.553,0 -1,0.448 -1,1c0,0.552 0.447,1 1,1h2c0.553,0 1,-0.448 1,-1c0,-0.552 -0.447,-1 -1,-1zM23,40c-0.553,0 -1,0.448 -1,1c0,0.552 0.447,1 1,1h10c0.553,0 1,-0.448 1,-1c0,-0.552 -0.447,-1 -1,-1zM39,40c-0.553,0 -1,0.448 -1,1c0,0.552 0.447,1 1,1h2c0.553,0 1,-0.448 1,-1c0,-0.552 -0.447,-1 -1,-1z"></path>
				</g>
			</g>
		</svg>
	);
};

export default LegislationIcon;
