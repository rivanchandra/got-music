import { useState } from 'react';
import Fab from '@mui/material/Fab';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export default function DrawerPage() {
  const [drawer, setDrawer] = useState(false);

  return(
    <>
      <Fab 
          sx={{ position: 'fixed', bottom: '30px', left: '23%', transform: 'translateX(-50%)' }} color="primary" aria-label="add" size="small"
          onClick={()=>setDrawer(true)}
      >
        <FullscreenIcon />
      </Fab>
      <Drawer
        anchor="right"
        open={drawer}
        onClose={()=>setDrawer(false)}
      >
        <Box component="span" sx={{ p: 2, width: [300, 500, 1000] }}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
            <iframe height="315" src="https://www.youtube.com/embed/bjqEWgDVPe0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </Grid>
            <Grid item xs={4}>
              <p>xs=6</p>
            </Grid>
            <Grid item xs={4}>
              <p>xs=4</p>
            </Grid>
            <Grid item xs={8}>
              <p>xs=8</p>
            </Grid>
          </Grid>
        </Box>
      </Drawer>
    </>
  );
}