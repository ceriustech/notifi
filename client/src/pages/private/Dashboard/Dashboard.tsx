import { useStateContext } from '../../../state/contextProvider';
import { DashboardContainer, UserDescription } from './styles';
import { getUserName, User } from '../../../utility/getUserName';

const Dashboard = () => {
	const { state } = useStateContext();
	const { user } = state;

	const userData: User | null = user ? user : null;

	console.log('USER INFO:', user);

	return (
		<DashboardContainer>
			<UserDescription>
				<h1>Hello {getUserName(userData, true)}</h1>
			</UserDescription>
		</DashboardContainer>
	);
};

export default Dashboard;
