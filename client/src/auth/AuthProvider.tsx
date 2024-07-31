import { Auth0Provider } from "@auth0/auth0-react";
import { useNavigate } from "@tanstack/react-router";

const Auth0Provider = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();

  return (
    <Auth0Provider
      domain={process.env.NOTIFI_LOCAL_DOMAIN}
      clientId={process.env.AUTH_CLIENT_ID}
      redirectUri={window.location.origin}
      onRedirectCallback={(appState: any) => {
        navigate(appState?.returnTo || window.location.pathname);
      }}
    >
      {children}
    </Auth0Provider>
  );
}

export default Auth0Provider;