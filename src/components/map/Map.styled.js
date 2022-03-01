import styled from 'styled-components';

export const MapContainer = styled.div`
	position: absolute;
	z-index: 1;
	width: 100%;
	height: 100%;

	& .leaflet-control-container {
		& .leaflet-bottom {
			bottom: ${(props) =>
				props.className === 'up'
					? Number(props.theme.fixedHeights.footer) + 1
					: 1}px;
			transition: all 1s;
		}
		& .leaflet-left {
			left: 1px;
			transition: all 1s;
		}
	}
`;
