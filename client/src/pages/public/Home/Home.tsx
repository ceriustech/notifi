import { useAuth0 } from '@auth0/auth0-react';
import Header from './components/Header';
import HowItWorks from './components/HowItWorks';
import FAQ from './components/Faq';

const Home = () => {
	const { isAuthenticated } = useAuth0();

	return (
		<>
			{!isAuthenticated && (
				<>
					<Header />
					<HowItWorks />
					<FAQ />
				</>
			)}
		</>
	);
};

export default Home;
