import { useState } from 'react';
import Fab from '@mui/material/Fab';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';

import Tooltip from '@mui/material/Tooltip';

import Chip from '@mui/material/Chip';

export default function CopyRightPage() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState();

  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };

  return(
    <>
      <Tooltip title="Copyright" placement="top" arrow>
        <Fab
          variant="outlined" 
          sx={{ 
            borderRadius: '60px',
            color: '#ffffff',
            border: 'solid #ffffff 2px',
            backgroundColor: 'rgba(0,0,0,0)',
            position: 'fixed', bottom: '30px', right: '7%', transform: 'translateX(-50%)',
            '@media (max-width: 1024px)': {
              display:'none'
            } }} color="primary" aria-label="add" size="small"
          onClick={handleClick('top-end')}
        >
          <lord-icon
            src="https://cdn.lordicon.com/nocovwne.json"
            trigger="loop-on-hover"
            colors="primary:#ffffff,secondary:#ffffff"
            state="hover-2">
          </lord-icon>
        </Fab>
      </Tooltip>
      <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper>
              <Typography sx={{ p: 2 }}>Resource of the music is from <Chip label="WaterTowerWB" component="a" href="https://www.youtube.com/@WaterTowerWB" clickable /> <Chip label="Ramin Djawadi" component="a" href="https://www.youtube.com/channel/UCvV2r2DeuALi2RprU-J53EA" clickable /> and this website made by a fan. Enjoy!</Typography>
            </Paper>
          </Fade>
        )}
      </Popper>
    </>
  );
}