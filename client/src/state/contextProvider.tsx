import React, {
	createContext,
	useReducer,
	ReactNode,
	Dispatch,
	useMemo,
} from 'react';
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
