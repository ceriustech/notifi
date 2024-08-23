export interface User {
	name: string;
	email: string;
}

export interface State {
	user: User | null;
	isAuthenticated: boolean;
	isLoading: boolean;
}

export const initialState: State = {
	user: null,
	isAuthenticated: false,
	isLoading: true,
};

export type Action =
	| { type: 'SET_USER'; payload: User }
	| { type: 'LOGOUT' }
	| { type: 'SET_AUTHENTICATED'; payload: boolean }
	| { type: 'SET_LOADING'; payload: boolean };

export const reducer = (state: State, action: Action): State => {
	switch (action.type) {
		case 'SET_USER':
			return { ...state, user: action.payload };
		case 'LOGOUT':
			return { ...state, user: null };
		case 'SET_AUTHENTICATED':
			return { ...state, isAuthenticated: action.payload };
		case 'SET_LOADING':
			return { ...state, isLoading: action.payload };
		default:
			return state;
	}
};
