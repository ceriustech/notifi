import React from 'react';
import ReactDOM from 'react-dom/client';
import { StateProvider } from './state/contextProvider';
import AuthProvider from './auth/AuthProvider';

import App from './App.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<AuthProvider>
			<StateProvider>
				<App />
			</StateProvider>
		</AuthProvider>
	</React.StrictMode>
);
