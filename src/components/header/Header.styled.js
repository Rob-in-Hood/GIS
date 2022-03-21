import styled from 'styled-components';

export const MiddleColumn = styled.div`
	& * {
		&:nth-child(n) {
			margin-right: 20px;
		}
		&:last-child {
			margin-right: 0;
		}
	}
`;
