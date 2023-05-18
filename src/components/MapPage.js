import { useState } from 'react';
import Fab from '@mui/material/Fab';
import MapIcon from '@mui/icons-material/Map';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';

import Map, {Marker} from 'react-map-gl';

import 'mapbox-gl/dist/mapbox-gl.css';

const MAPBOX_TOKEN = 'pk.eyJ1Ijoicml2YW5jaGFuIiwiYSI6ImNsaHNzMXR4NjBzOTMzaG9hcDN6ZTcxemoifQ.YdGmErhcP7pYQ2gbAWQNug';

export default function MapPage() {
	const [drawer, setDrawer] = useState(false);
	return (
		<>
			<Fab
				sx={{ position: 'fixed', bottom: '30px', left: '26%', transform: 'translateX(-50%)' }} color="primary" aria-label="add" size="small"
				onClick={() => setDrawer(true)}
			>
				<MapIcon />
			</Fab>
			<Drawer
				anchor="right"
				open={drawer}
				onClose={() => setDrawer(false)}
			>
				<Box component="span" sx={{ p: 2, width: [300, 500, 1000] }}>
					<Map
						initialViewState={{
							latitude: 10.12,
							longitude: 45.76,
							zoom: 2.5
						}}
						style={{width: '60vw', height: '92vh'}}
						mapStyle="mapbox://styles/rivanchan/clhsk42gv021d01qyfg3m7ygr"
						mapboxAccessToken={MAPBOX_TOKEN}
					>
					</Map>
				</Box>
			</Drawer>
		</>
	);
}