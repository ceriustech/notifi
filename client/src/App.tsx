import { RouterProvider } from '@tanstack/react-router';
import { router } from './routes/routes.tsx';
import './App.css';

const App = () => {
	return <RouterProvider router={router} />;
};

export default App;
