import React from 'react';
import { getCurrentDateTime } from './utils';
import { icons } from '../../../assets/images/images.data';

const DateTime = () => {
	return (
		<div>
			<p>
				{getCurrentDateTime()}
				<span>{React.createElement(icons.calendar)}</span>
			</p>
		</div>
	);
};

export default DateTime;
