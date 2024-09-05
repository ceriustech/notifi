export interface CalendarIconProps {
	width?: number;
	height?: number;
	fill?: string;
}

const CalendarIcon: React.FC<CalendarIconProps> = ({
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
			fill-rule="nonzero"
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
				<g transform="scale(5.33333,5.33333)">
					<path d="M12.5,6c-3.57194,0 -6.5,2.92806 -6.5,6.5v23c0,3.57194 2.92806,6.5 6.5,6.5h23c3.57194,0 6.5,-2.92806 6.5,-6.5v-23c0,-3.57194 -2.92806,-6.5 -6.5,-6.5zM12.5,9h23c1.95006,0 3.5,1.54994 3.5,3.5v1.5h-30v-1.5c0,-1.95006 1.54994,-3.5 3.5,-3.5zM9,17h30v18.5c0,1.95006 -1.54994,3.5 -3.5,3.5h-23c-1.95006,0 -3.5,-1.54994 -3.5,-3.5zM15.5,21c-1.38071,0 -2.5,1.11929 -2.5,2.5c0,1.38071 1.11929,2.5 2.5,2.5c1.38071,0 2.5,-1.11929 2.5,-2.5c0,-1.38071 -1.11929,-2.5 -2.5,-2.5zM24,21c-1.38071,0 -2.5,1.11929 -2.5,2.5c0,1.38071 1.11929,2.5 2.5,2.5c1.38071,0 2.5,-1.11929 2.5,-2.5c0,-1.38071 -1.11929,-2.5 -2.5,-2.5zM32.5,21c-1.38071,0 -2.5,1.11929 -2.5,2.5c0,1.38071 1.11929,2.5 2.5,2.5c1.38071,0 2.5,-1.11929 2.5,-2.5c0,-1.38071 -1.11929,-2.5 -2.5,-2.5zM15.5,30c-1.38071,0 -2.5,1.11929 -2.5,2.5c0,1.38071 1.11929,2.5 2.5,2.5c1.38071,0 2.5,-1.11929 2.5,-2.5c0,-1.38071 -1.11929,-2.5 -2.5,-2.5zM24,30c-1.38071,0 -2.5,1.11929 -2.5,2.5c0,1.38071 1.11929,2.5 2.5,2.5c1.38071,0 2.5,-1.11929 2.5,-2.5c0,-1.38071 -1.11929,-2.5 -2.5,-2.5z"></path>
				</g>
			</g>
		</svg>
	);
};

export default CalendarIcon;