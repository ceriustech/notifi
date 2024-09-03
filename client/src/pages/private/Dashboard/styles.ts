import styled from 'styled-components';

export const DashboardContainer = styled.div`
	display: grid;
`;

export const UserDescription = styled.section`
	border: 1px solid #000;
	display: flex;
	align-items: center;
	justify-content: space-between;

	div {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
	h1 {
		font-size: 1.25rem;
		font-weight: 700;
	}

	p {
		font-size: 1rem;
	}
`;

export const DateContainer = styled.div`
`;
