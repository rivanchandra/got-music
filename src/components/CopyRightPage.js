import { useState } from 'react';
import Fab from '@mui/material/Fab';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import Tooltip from '@mui/material/Tooltip';

export default function CopyRightPage() {
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
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
            position: 'fixed', bottom: '30px', right: '7%', transform: 'translateX(-50%)' }} color="primary" aria-label="add" size="small"
          onClick={handleClick}
        >
          <lord-icon
            src="https://cdn.lordicon.com/nocovwne.json"
            trigger="loop-on-hover"
            colors="primary:#ffffff,secondary:#ffffff"
            state="hover-2">
          </lord-icon>
        </Fab>
      </Tooltip>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </>
  );
}