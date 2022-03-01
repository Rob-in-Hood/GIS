import styled from 'styled-components';

export const AppContainer = styled.div`
	& * {
		font-family: ${(props) => props.theme.fonts[1]};
		font-variation-settings: 'wght' 500;
	}
`;
