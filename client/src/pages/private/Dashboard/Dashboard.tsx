import React from 'react';
import { useStateContext } from '../../../state/contextProvider';
import { DashboardContainer, UserDescription } from './styles';
import DateTime from '../../../components/global/date_time';
import { getUserName, User } from '../../../utility/getUserName';

const Dashboard = () => {
	const { state } = useStateContext();
	const { user } = state;

	const userData: User | null = user ? user : null;

	return (
		<DashboardContainer>
			<UserDescription>
				<div>
					<h1>Hello {getUserName(userData, true)}</h1>
					<p>Track the latest political info here.</p>
				</div>
				<DateTime />
			</UserDescription>
		</DashboardContainer>
	);
};

export default Dashboard;
