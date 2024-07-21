import React from 'react';
import ReactDOM from 'react-dom/client';
import { StateProvider } from './state/contextProvider';
import App from './App.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<StateProvider>
			<App />
		</StateProvider>
	</React.StrictMode>
);
