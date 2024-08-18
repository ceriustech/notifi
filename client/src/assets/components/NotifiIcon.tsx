interface NotifiIconProps {
	width?: number;
	height?: number;
}

const NotifiIcon: React.FC<NotifiIconProps> = ({
	width = 250,
	height = 250,
}) => {
	return (
		<svg
			id="_Layer_1"
			data-name="Layer 1"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 250 250"
			width={width}
			height={height}
		>
			<defs>
				<style>
					{`
            .cls-1, .cls-2 {
              stroke-width: 0px;
            }

            .cls-2 {
              fill: #fff;
            }
          `}
				</style>
			</defs>
			<rect className="cls-2" width="250" height="250" />
			<path
				className="cls-1"
				d="m103.59,191.03h91.23v9.31h-58.7c-.56,4.7-5.33,10.38-11.12,10.38s-10.55-5.68-11.12-10.38h-10.3v-9.31Zm-4.65,9.31h-43.75v-9.31h43.75v9.31Zm0-13.96h-43.64c.06-.18.15-.34.27-.5.47-.62,1.26-1.67,1.73-2.3,14.34-19.36,24.06-51.02,29.19-72.61h77.05c5.13,21.59,14.85,53.24,29.19,72.61.46.63,1.26,1.68,1.73,2.3.12.15.21.32.27.5h-91.12v-2.76l-6.37-22.29,3.66-8.25-1.97-12.67-4.6.71,1.76,11.32-3.79,8.54,6.66,23.29v2.11Zm62.52-85.64c.31,1.87.66,3.73,1.04,5.59h-74.99c.38-1.85.73-3.72,1.04-5.59h72.91Zm-72.2-4.65c.55-4.03.96-8.1,1.2-12.21.06-.98.87-1.75,1.86-1.75,3.93,0,13.68,0,21.51,0h0c0-5.14,5.01-11.31,11.17-11.31s11.17,6.17,11.17,11.31h0c7.83,0,17.58,0,21.51,0,.99,0,1.8.77,1.86,1.75.25,4.11.65,8.18,1.2,12.21h-71.49Zm110.21-56.78v46.54h-17.98c-13.13-14.16-33.56-23.27-56.49-23.27s-43.36,9.11-56.49,23.27h-17.99v-46.54h148.94Z"
			/>
		</svg>
	);
};

export default NotifiIcon;