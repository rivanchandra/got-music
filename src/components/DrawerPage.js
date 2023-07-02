import { useState } from 'react';
import dynamic from 'next/dynamic';
import Fab from '@mui/material/Fab';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import Divider from '@mui/material/Divider';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ReactPlayer = dynamic(() => import("react-player/youtube"), { ssr: false });

import { gotStory } from '../resources/story.js';

export default function DrawerPage() {
  const [drawer, setDrawer] = useState(false);
  const [value, setValue] = useState('1');
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleListItemClick = (event, index) => {
		setSelectedIndex(index);
	};

  const SeasonDisplayLeft = () => {
    return gotStory.seasons.map((season, index)=> {
      const startIndex = 2;
      const newStories = season.stories.slice(startIndex);

      return(
        <>
          {index === selectedIndex?
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <iframe width="500" height="315" src={season.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="p">
                  {season.stories[0]}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="p">
                  {season.stories[1]}
                </Typography>
                {newStories.map((story) => {
                  return(
                    <>
                      <Typography variant="p">
                        {story}
                      </Typography>
                      <br/><br/>
                    </>
                  );
                })}
                <iframe width="500" height="315" src={season.bts} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </Grid>
            </Grid>
          :''}
        </>
      )
    })
  }

  const SeasonDisplayRight = () => {
    return gotStory.seasons.map((season, index)=> {
      return(
        <List
          sx={{
            position: 'relative',
            overflow: 'auto',
            maxHeight: '90vh',
            padding:'0'
          }}
          component="nav" 
          key={`right${index}`}
        >
          <ListItemButton
            key={`list-${index}`}
            selected={selectedIndex === index}
            onClick={(event) => handleListItemClick(event, index)}
          >
            <ListItemText primary={`Season ${index+1}`} />
          </ListItemButton>
          <Divider component="li" />
        </List>
      );
    })
  }

  // const SeasonDisplay = () => {
  //   return gotStory.seasons.map((season, index)=> {
  //     const startIndex = 2;
  //     const newStories = season.stories.slice(startIndex);

  //     return(
  //       <>
  //         <Accordion key={index}>
  //           <AccordionSummary
  //             expandIcon={<ExpandMoreIcon />}
  //             aria-controls="panel1a-content"
  //             id="panel1a-header"
  //           >
  //             <Typography variant="p">Season {index+1}</Typography>
  //           </AccordionSummary>
  //           <AccordionDetails>
  //             <Grid container spacing={2}>
  //               <Grid item xs={8}>
  //                 <iframe width="560" height="315" src={season.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  //               </Grid>
  //               <Grid item xs={4}>
  //                 <Typography variant="p">
  //                   {season.stories[0]}
  //                 </Typography>
  //                 <br/><br/>
  //                 <Typography variant="p">
  //                   {season.stories[1]}
  //                 </Typography>
  //               </Grid>
  //               <Grid item xs={12}>
  //                 {newStories.map((story) => {
  //                   return(
  //                     <>
  //                       <Typography variant="p">
  //                         {story}
  //                       </Typography>
  //                       <br/><br/>
  //                     </>
  //                   );
  //                 })}
  //                 <iframe width="560" height="315" src={season.bts} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  //               </Grid>
  //             </Grid>
  //           </AccordionDetails>
  //         </Accordion>
  //       </>
  //     )
  //   })
  // }

  return(
    <>
      <Fab 
          sx={{ 
            borderRadius: '60px',
          color: '#ffffff',
          border: 'solid #ffffff 2px',
          backgroundColor: 'rgba(0,0,0,0)',
          position: 'fixed', bottom: '30px', left: '23%', transform: 'translateX(-50%)',
          '@media (max-width: 1024px)': {
            display:'none'
          } }} color="primary" aria-label="add" size="small"
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
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={handleChange} aria-label="lab API tabs example">
                <Tab label="Game Of Thrones" value="1" />
                <Tab label="House Of Dragons" value="2" />
              </TabList>
            </Box>
            <TabPanel value="1">
              {/* <SeasonDisplay /> */}
              <Grid container spacing={2}>
                <Grid item xs={10}>
                  <SeasonDisplayLeft />
                </Grid>
                <Grid item xs={2}>
                  <SeasonDisplayRight />
                </Grid>
              </Grid>
            </TabPanel>
            <TabPanel value="2">Coming Soon</TabPanel>
          </TabContext>
        </Box>
      </Drawer>
    </>
  );
}