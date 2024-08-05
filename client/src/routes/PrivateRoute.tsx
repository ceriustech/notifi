import { Navigate } from '@tanstack/react-router';

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
	const isAuthenticated = false; // replace with actual authentication check
	// const isLoading = false; // replace with actual loading check

	// will be used to check if user is authenticated
	// if (!isLoading && !isAuthenticated) {
	// 	<div>Loading...</div>;
	// }

	return isAuthenticated ? <>{children}</> : <Navigate to="/" />;
};

export default PrivateRoute;
