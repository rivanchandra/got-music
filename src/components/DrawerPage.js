import { useState } from 'react';
import Fab from '@mui/material/Fab';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function DrawerPage() {
  const [drawer, setDrawer] = useState(false);
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={handleChange} aria-label="lab API tabs example">
                <Tab label="Game Of Thrones" value="1" />
                <Tab label="House Of Dragons" value="2" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Season 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Grid container spacing={2}>
                    <Grid item xs={8}>
                    <iframe height="315" src="https://www.youtube.com/embed/bjqEWgDVPe0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography>
                      The series begins with the death of Jon Arryn, the Hand of the King, under mysterious circumstances. Eddard Stark, Lord of Winterfell, is appointed as the new Hand by his longtime friend, King Robert Baratheon.
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography>
                        Eddard travels to the capital city of King's Landing with his daughters Sansa and Arya, leaving his wife Catelyn and their other children behind. Meanwhile, Jon Snow, Eddard's illegitimate son, joins the Night's Watch, a brotherhood tasked with defending the realm from the dangers beyond the Wall.
                      </Typography>
                      <br/>
                      <Typography>
                        As Eddard starts unraveling the truth about Jon Arryn's death, he discovers that Jon Arryn was investigating the legitimacy of Robert's children, suspecting that they are not his own. Eddard becomes increasingly embroiled in the dangerous game of politics, navigating the treacherous court while trying to protect his family.
                      </Typography>
                      <br/>
                      <Typography>
                        Across the Narrow Sea, Daenerys Targaryen, the exiled daughter of the deposed king, is married off to the powerful Dothraki horselord Khal Drogo. Daenerys gradually adapts to her new life and gains influence over Drogo, who promises to help her reclaim the Iron Throne.
                      </Typography>
                      <br/>
                      <Typography>
                        Back in King's Landing, Eddard uncovers a shocking secret: Robert's children are not his, but rather the product of an incestuous relationship between Queen Cersei Lannister and her brother Jaime. Eddard confronts Cersei, but his efforts to expose the truth are thwarted when he is betrayed by Petyr Baelish, the master of coin, and captured.
                      </Typography>
                      <br/>
                      <Typography>
                        Meanwhile, Daenerys discovers she is pregnant and begins hatching dragon eggs gifted to her as wedding presents. The Dothraki respect her increasingly as the "Mother of Dragons."
                      </Typography>
                      <br/>
                      <Typography>
                        As the season concludes, Eddard is falsely accused of treason and is executed on the orders of the new King Joffrey Baratheon, Robert's eldest "son." This event sets off a chain of events that will further escalate the power struggles and ignite a full-scale war for the Iron Throne in the subsequent seasons of "Game of Thrones."
                      </Typography>
                    </Grid>
                  </Grid>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography>Season 2</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
                
            </TabPanel>
            <TabPanel value="2">Comming Soon</TabPanel>
          </TabContext>
        </Box>
      </Drawer>
    </>
  );
}