import { useState } from 'react';
import Fab from '@mui/material/Fab';
import RouteIcon from '@mui/icons-material/Route';
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

import { journey } from '../resources/journey.js';

import 'mapbox-gl/dist/mapbox-gl.css';

const MAPBOX_TOKEN = 'pk.eyJ1Ijoicml2YW5jaGFuIiwiYSI6ImNsaHNzMXR4NjBzOTMzaG9hcDN6ZTcxemoifQ.YdGmErhcP7pYQ2gbAWQNug';

export default function MapPage() {
	const [drawer, setDrawer] = useState(false);
	const [selectedIndex, setSelectedIndex] = useState(-1);
	const [selected, setSelected] = useState(-1);

	const handleListItemClick = (event, index) => {
		setSelectedIndex(index);
		setSelected(index);
	};

	const MarkerUnit = () => {
		return journey[selected].location.map((data, index) => (
			<Marker key={index} longitude={data.longitude} latitude={data.latitude} anchor="bottom">
				<Avatar sx={{ fontSize: 10, width: 15, height: 15, bgcolor: 'blue' }}>{index+1}</Avatar>
			</Marker>
		));
	}

	const ListUnit = () => {
		return journey.map((data, index) => (
			<>
				<ListItemButton
					key={`list-${index}`}
					selected={selectedIndex === index}
					onClick={(event) => handleListItemClick(event, index)}
				>
					<ListItemAvatar>
						<Avatar
							alt={data.name}
							src={data.image}
						/>
					</ListItemAvatar>
					<ListItemText primary={data.name} />
				</ListItemButton>
				<Divider component="li" />
			</>
		));
	}

	return (
		<>
			<Fab
				sx={{ 
					borderRadius: '60px',
          color: '#ffffff',
          border: 'solid #ffffff 2px',
          backgroundColor: 'rgba(0,0,0,0)',
					position: 'fixed', bottom: '30px', left: '26%', transform: 'translateX(-50%)' }} color="primary" aria-label="add" size="small"
				onClick={() => setDrawer(true)}
			>
				
				<lord-icon
						src="https://cdn.lordicon.com/zzcjjxew.json"
						trigger="loop-on-hover"
						colors="primary:#ffffff,secondary:#ffffff"
						state="loop-spin"
						style={{width:'100px', height:'100px'}}>
				</lord-icon>
			</Fab>
			<Drawer
				anchor="right"
				open={drawer}
				onClose={() => setDrawer(false)}
			>
				<Box component="span" sx={{ p: 2, width: [500, 800, 1050] }}>
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
								{selected > -1?<MarkerUnit />:''}
							</Map>
						</Grid>
						<Grid item xs={2}>
							<List
								sx={{
									position: 'relative',
									overflow: 'auto',
									maxHeight: '90vh'
								}}
								component="nav" 
								aria-label="secondary mailbox folder"
							>
								<ListUnit />
							</List>
						</Grid>
					</Grid>
					
				</Box>
			</Drawer>
		</>
	);
}