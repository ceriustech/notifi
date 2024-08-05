import { Auth0Provider, Auth0ProviderOptions } from '@auth0/auth0-react';

interface Auth0ProviderProps {
	children: React.ReactNode;
}

const AuthProvider: React.FC<Auth0ProviderProps> = ({ children }) => {
	const domain = import.meta.env.VITE_NOTIFI_LOCAL_DOMAIN || '/';
	const clientId = import.meta.env.VITE_AUTH_CLIENT_ID || '';
	const authorizationParams = { redirect_uri: window.location.origin };

	const options: Auth0ProviderOptions = {
		domain,
		clientId,
		authorizationParams,
	};

	return <Auth0Provider {...options}>{children}</Auth0Provider>;
};

export default AuthProvider;
