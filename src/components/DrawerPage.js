import { useState } from 'react';
import Fab from '@mui/material/Fab';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export default function DrawerPage() {
  const [drawer, setDrawer] = useState(false);

  return(
    <>
      <Fab 
          sx={{ 
            borderRadius: '60px',
          color: '#ffffff',
          border: 'solid #ffffff 2px',
          backgroundColor: 'rgba(0,0,0,0)',
          position: 'fixed', bottom: '30px', left: '23%', transform: 'translateX(-50%)' }} color="primary" aria-label="add" size="small"
          onClick={()=>setDrawer(true)}
      >
        <lord-icon
          src="https://cdn.lordicon.com/wxnxiano.json"
          trigger="loop-on-hover"
          colors="primary:#ffffff,secondary:#ffffff"
          state="hover">
      </lord-icon>
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