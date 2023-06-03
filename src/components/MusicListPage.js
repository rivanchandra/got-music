import { useState } from 'react';
import dynamic from 'next/dynamic';
import Fab from '@mui/material/Fab';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import { FixedSizeList } from 'react-window';

import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';

import { list } from '@/resources/list.js';

export default function MusicListPage() {
  const [drawer, setDrawer] = useState(false);
  // const [checked, setChecked] = useState([0]);

  // const handleToggle = (value) => () => {
  //   const currentIndex = checked.indexOf(value);
  //   const newChecked = [...checked];

  //   if (currentIndex === -1) {
  //     newChecked.push(value);
  //   } else {
  //     newChecked.splice(currentIndex, 1);
  //   }

  //   setChecked(newChecked);
  // };

  function renderRow(props) {
    const { index, style } = props;
  
    return (
      <ListItem style={style} key={index} component="div" 
        secondaryAction={
          <Checkbox
            edge="end"
            // onChange={handleToggle(value.id)}
            // checked={checked.indexOf(value.id) !== -1}
            // inputProps={{ 'aria-labelledby': labelId }}
          />
        }
      disablePadding>
        <ListItemButton>
          <ListItemText primary={list[index].name} />
        </ListItemButton>
      </ListItem>
    );
  }

  return(
    <>
      <Fab 
          sx={{ 
            borderRadius: '60px',
          color: '#ffffff',
          border: 'solid #ffffff 2px',
          backgroundColor: 'rgba(0,0,0,0)',
          position: 'fixed', bottom: '30px', left: '29%', transform: 'translateX(-50%)' }} color="primary" aria-label="add" size="small"
          onClick={()=>setDrawer(true)}
      >
        <lord-icon
          src="https://cdn.lordicon.com/jvucoldz.json"
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
        <Box component="span" sx={{ p: 2 }}>
          <FixedSizeList
            className="MusicList"
            height={1000}
            width={360}
            itemSize={46}
            itemCount={223}
            overscanCount={5}
          >
            {renderRow}
          </FixedSizeList>
        </Box>
      </Drawer>
    </>
  );
}