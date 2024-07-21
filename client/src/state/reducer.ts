export interface State {
	user: null | { name: string; email: string };
}

export const initialState: State = {
	user: null,
};

export type Action =
	| { type: 'SET_USER'; payload: { name: string; email: string } }
	| { type: 'LOGOUT' };

export const reducer = (state: State, action: Action): State => {
	switch (action.type) {
		case 'SET_USER':
			return { ...state, user: action.payload };
		case 'LOGOUT':
			return { ...state, user: null };
		default:
			return state;
	}
};
