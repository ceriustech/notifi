import { useStateContext } from '../../../state/contextProvider';
import { DashboardContainer, UserDescription } from './styles';

interface User {
	user: string;
	name: string;
}

function getUserName(user: User | undefined): string | undefined {
	if (user && user.name) {
		const match = user.name.match(/^[^\s]+/);
		return match ? match[0] : undefined;
	}
}

const Dashboard = () => {
	const { state } = useStateContext();
	const { user } = state;

	const userData = user ? user : 'user name';

	console.log('USER INFO:', user);

	return (
		<DashboardContainer>
			<UserDescription>
				<h1>Hello {getUserName(userData)}</h1>
			</UserDescription>
		</DashboardContainer>
	);
};

export default Dashboard;
