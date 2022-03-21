import styled from 'styled-components';

export const RightColumn = styled.div`
	& div {
		display: inline-flex;

		&:nth-child(n) {
			margin-right: 10px;
		}
		&:last-child {
			margin-right: 0;
		}
	}
`;
