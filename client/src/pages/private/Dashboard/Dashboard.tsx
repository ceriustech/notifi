import React from 'react';
import { useStateContext } from '../../../state/contextProvider';
import {
	DashboardContainer,
	UserDescription,
	Overview,
	OverviewCard,
} from './styles';
import DateTime from '../../../components/global/date_time';
import { getUserName, User } from '../../../utility/getUserName';

const Dashboard = () => {
	const { state } = useStateContext();
	const { user } = state;

	const userData: User | null = user ? user : null;

	const array = [
		{ id: 1, title: 'Presidential Race Overview' },
		{ id: 2, title: 'Upcoming Events' },
		{ id: 3, title: 'Recent Poll Resulsts' },
		{ id: 4, title: 'Key Election Issues' },
	];

	function displayCards() {
		return array.map((item) => {
			return <OverviewCard key={item.id}>{item.title}</OverviewCard>;
		});
	}

	return (
		<DashboardContainer>
			<UserDescription>
				<div>
					<h1>Hello {getUserName(userData, true)}</h1>
					<p>Track the latest political info here.</p>
				</div>
				<DateTime />
			</UserDescription>
			<Overview>{displayCards()}</Overview>
		</DashboardContainer>
	);
};

export default Dashboard;
