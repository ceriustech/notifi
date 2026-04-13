import { Button } from '~/components/ui/button';
import { createMetaData } from '~/site_header_data/utils';

export const meta = createMetaData('HOME');

const Home = () => {
	return (
		<div className="p-8">
			<h1>Home</h1>
			<Button variant="destructive">Test Shadcn Button</Button>
		</div>
	);
};

export default Home;
