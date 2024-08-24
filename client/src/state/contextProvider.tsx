import React, {
	createContext,
	useReducer,
	ReactNode,
	Dispatch,
	useEffect,
	useMemo,
} from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { State, initialState, reducer, Action } from './reducer';

interface StateContextProps {
	state: State;
	dispatch: Dispatch<Action>;
}

const StateContext = createContext<StateContextProps>({
	state: initialState,
	dispatch: () => null,
});

export const StateProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const { user, isAuthenticated, isLoading } = useAuth0();

	useEffect(() => {
		dispatch({ type: 'SET_LOADING', payload: isLoading });

		// If authenticated, set the user and update the authentication state
		if (!isLoading && isAuthenticated && user && user.name && user.email) {
			dispatch({
				type: 'SET_USER',
				payload: { name: user.name, email: user.email },
			});
			dispatch({ type: 'SET_AUTHENTICATED', payload: true });
		} else if (!isLoading && !isAuthenticated) {
			dispatch({ type: 'LOGOUT' });
		}
	}, [user, isAuthenticated, isLoading]);

	const value = useMemo(() => ({ state, dispatch }), [state]);

	return (
		<StateContext.Provider value={value}>{children}</StateContext.Provider>
	);
};

export const useStateContext = (): StateContextProps => {
	const context = React.useContext(StateContext);
	if (context === undefined) {
		throw new Error('useStateContext must be used within a StateProvider');
	}
	return context;
};
