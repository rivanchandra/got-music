import { useState } from 'react';
import Fab from '@mui/material/Fab';
import MapIcon from '@mui/icons-material/Map';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import Divider from '@mui/material/Divider';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

import Map, {Marker} from 'react-map-gl';

import 'mapbox-gl/dist/mapbox-gl.css';

const MAPBOX_TOKEN = 'pk.eyJ1Ijoicml2YW5jaGFuIiwiYSI6ImNsaHNzMXR4NjBzOTMzaG9hcDN6ZTcxemoifQ.YdGmErhcP7pYQ2gbAWQNug';

export default function MapPage() {
	const [drawer, setDrawer] = useState(false);
	const [selectedIndex, setSelectedIndex] = useState(1);

	const handleListItemClick = (event, index) => {
		setSelectedIndex(index);
	};

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
				<Box component="span" sx={{ p: 2, width: [500, 800, 1000] }}>
					<Grid container spacing={2}>
						<Grid item xs={10}>
							<Map
								initialViewState={{
									latitude: 10.12,
									longitude: 45.76,
									zoom: 2.5
								}}
								style={{height: '95vh'}}
								mapStyle="mapbox://styles/rivanchan/clhsk42gv021d01qyfg3m7ygr"
								mapboxAccessToken={MAPBOX_TOKEN}
							>
							</Map>
						</Grid>
						<Grid item xs={2}>
							<List component="nav" aria-label="secondary mailbox folder">
								<ListItemButton
									selected={selectedIndex === 2}
									onClick={(event) => handleListItemClick(event, 2)}
								>
									<ListItemAvatar>
										<Avatar
											alt={`daenerys`}
											src={`/images/char/daenerys.png`}
										/>
									</ListItemAvatar>
									<ListItemText primary={`Daenerys`} />
								</ListItemButton>
								<Divider component="li" />
								<ListItemButton
									selected={selectedIndex === 3}
									onClick={(event) => handleListItemClick(event, 3)}
								>
									<ListItemAvatar>
										<Avatar
											alt={`Avatar`}
											src={`/images/arryn.jpg`}
										/>
									</ListItemAvatar>
									<ListItemText primary={`Jon Snow`} />
								</ListItemButton>
							</List>
						</Grid>
					</Grid>
					
				</Box>
			</Drawer>
		</>
	);
}