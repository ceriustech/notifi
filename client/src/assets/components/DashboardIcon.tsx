export interface DashboardIconProps {
	width?: number;
	height?: number;
	fill?: string;
}

const DashboardIcon: React.FC<DashboardIconProps> = ({
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
				<g transform="scale(4,4)">
					<path d="M32,8c-0.91125,0 -1.82195,0.30919 -2.56445,0.92969l-20.63477,17.24219c-0.765,0.639 -1.0373,1.75333 -0.5293,2.61133c0.647,1.092 2.07877,1.30534 3.00977,0.52734l0.71875,-0.59961v18.28906c0,2.761 2.239,5 5,5h9c1.657,0 3,-1.343 3,-3v-10.5c0,-0.276 0.224,-0.5 0.5,-0.5h5c0.276,0 0.5,0.224 0.5,0.5v10.5c0,1.657 1.343,3 3,3h9c2.761,0 5,-2.239 5,-5v-18.28711l0.71875,0.59961c0.374,0.313 0.8273,0.46484 1.2793,0.46484c0.695,0 1.38462,-0.36069 1.76563,-1.05469c0.465,-0.848 0.19122,-1.91906 -0.55078,-2.53906l-3.21289,-2.68555v-8.49805c0,-1.105 -0.895,-2 -2,-2h-2c-1.105,0 -2,0.895 -2,2v3.48438l-11.43555,-9.55469c-0.7425,-0.6205 -1.6532,-0.92969 -2.56445,-0.92969zM32,12.15234c0.11475,0 0.22877,0.03919 0.32227,0.11719l15.67773,13.09961v20.63086c0,1.105 -0.895,2 -2,2h-6.5c-0.276,0 -0.5,-0.224 -0.5,-0.5v-10.5c0,-1.657 -1.343,-3 -3,-3h-8c-1.657,0 -3,1.343 -3,3v10.5c0,0.276 -0.224,0.5 -0.5,0.5h-6.5c-1.105,0 -2,-0.895 -2,-2v-20.63281l15.67773,-13.09766c0.0935,-0.078 0.20752,-0.11719 0.32227,-0.11719z"></path>
				</g>
			</g>
		</svg>
	);
};

export default DashboardIcon;
