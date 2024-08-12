import { Navigate } from '@tanstack/react-router';
import { useAuth0 } from '@auth0/auth0-react';

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
	const { isAuthenticated, isLoading } = useAuth0();

	if (isLoading) {
		return <div>Loading ...</div>;
	}

	return isAuthenticated ? <>{children}</> : <Navigate to="/dashboard" />;
};

export default PrivateRoute;
