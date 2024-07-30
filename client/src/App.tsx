import { RouterProvider } from '@tanstack/react-router';
import { router } from './routes/index.tsx';
import './App.css';

const App: React.FC = () => {
	return <RouterProvider router={router} />;
};

export default App;
