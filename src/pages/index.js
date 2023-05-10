import { useState } from 'react';
import dynamic from 'next/dynamic';
import BackgroundVideo from './BackgroundVideo';
import Fab from '@mui/material/Fab';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import FastRewindIcon from '@mui/icons-material/FastRewind';
import FastForwardIcon from '@mui/icons-material/FastForward';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import Image from 'next/image';
import Slider from '@mui/material/Slider';
import PauseIcon from '@mui/icons-material/Pause';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import screenfull from 'screenfull';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';
const ReactPlayer = dynamic(() => import("react-player/youtube"), { ssr: false });

const actions = [
  { icon: <FileCopyIcon />, name: 'Copy' },
  { icon: <SaveIcon />, name: 'Save' },
  { icon: <PrintIcon />, name: 'Print' },
  { icon: <ShareIcon />, name: 'Share' },
];

let count = 0;

const musicList = [
  {
    name: 'Main Title',
    url: 'https://youtu.be/Ov5ljc44Ajs'
  },
  {
    name: 'North Of The Wall',
    url: 'https://youtu.be/LXK2ZiIRfXc'
  },
  {
    name: 'Goodbye Brother',
    url: 'https://youtu.be/spQljapBR7s'
  },
  {
    name: 'The Kingsroad',
    url: 'https://youtu.be/60OCZAHSxDk'
  },
  {
    name: 'The Kings Arrival',
    url: 'https://youtu.be/PwsUAxu6rjg'
  },
  {
    name: 'Love In The Eyes',
    url: 'https://youtu.be/SFbp8GzZ-ec'
  },
  {
    name: 'A Raven From Kings Landing',
    url: 'https://youtu.be/AXb5wyNf6Jw'
  },
  {
    name: 'The Wall',
    url: 'https://youtu.be/eRgxqnP0qw4'
  },
  {
    name: 'Things I Do For Love',
    url: 'https://youtu.be/JZyLqrVfslQ'
  },
  {
    name: 'A Golden Crown',
    url: 'https://youtu.be/hX509eFmZfg'
  },
  {
    name: 'Winter Is Coming',
    url: 'https://youtu.be/jHWk1bFwqYE'
  },
  {
    name: 'A Bird Without Feathers',
    url: 'https://youtu.be/1Lc1skF69lU'
  },
  {
    name: 'Await The Kings Justice',
    url: 'https://youtu.be/fON6yJyM1bw'
  },
  {
    name: 'Youll Be Queen One Day',
    url: 'https://youtu.be/UaPGoXe3VLo'
  },
  {
    name: 'The Assassins Dagger',
    url: 'https://youtu.be/bCuuWufKPPk'
  },
  {
    name: 'Jons Honor',
    url: 'https://youtu.be/HFIWi-KoozE'
  },
  {
    name: 'To Vaes Dothrak',
    url: 'https://youtu.be/MrnMIIMRC0g'
  },
  {
    name: 'Black Of Hair',
    url: 'https://youtu.be/DksmuiccR-0'
  },
  {
    name: 'You Win Or You Die',
    url: 'https://youtu.be/S0LG82B1bVc'
  },
  {
    name: 'Small Pack Of Wolves',
    url: 'https://youtu.be/avNYe_941so'
  },
  {
    name: 'Game Of Thrones',
    url: 'https://youtu.be/9VgoADESpw0'
  },
  {
    name: 'Kill Them All',
    url: 'https://youtu.be/CWm1jRbMB0M'
  },
  {
    name: 'The Pointy End',
    url: 'https://youtu.be/ulriP5SBStY'
  },
  {
    name: 'Victory Does Not Make Us Conquerors',
    url: 'https://youtu.be/wbSYRVese6Q'
  },
  {
    name: 'When The Sun Rises In The West',
    url: 'https://youtu.be/Rl3HQsJjsHI'
  },
  {
    name: 'King Of The North',
    url: 'https://youtu.be/t4U66h3robc'
  },
  {
    name: 'The Nights Watch',
    url: 'https://youtu.be/KU6G0rvLydc'
  },
  {
    name: 'Fire And Blood',
    url: 'https://youtu.be/RxBgXtwBHrE'
  },
  {
    name: 'Finale',
    url: 'https://youtu.be/jh_d5fvO0NU'
  },
  {
    name: 'A Lannister Always Pays His Debts',
    url: 'https://youtu.be/5qNtmne62Vo'
  },
  {
    name: 'Dracarys',
    url: 'https://youtu.be/jIsla-hNxf0'
  },
  {
    name: 'I Paid the Iron Price',
    url: 'https://youtu.be/D0-ptcQc1I8'
  },
  {
    name: 'Chaos Is a Ladder',
    url: 'https://youtu.be/sTe_hPK2RHY'
  },
  {
    name: 'Dark Wings, Dark Words',
    url: 'https://youtu.be/fywMObuBTrI'
  },
  {
    name: 'You Know Nothing',
    url: 'https://youtu.be/yd8IMTzc2bI'
  },
  {
    name: 'Wall Of Ice',
    url: 'https://youtu.be/XrAUlIdmcZ8'
  },
  {
    name: 'Kingslayer',
    url: 'https://youtu.be/HzkvWIsafNo'
  },
  {
    name: 'I Have to Go North',
    url: 'https://youtu.be/ps_6VVtPDQU'
  },
  {
    name: 'White Walkers',
    url: 'https://youtu.be/AsKQF20vUEo'
  },
  {
    name: 'Its Always Summer Under the Sea',
    url: 'https://youtu.be/aqhqXPlZPkY'
  },
  {
    name: 'Reek',
    url: 'https://youtu.be/9miyyd9_bUE'
  },
  {
    name: 'The Night Is Dark',
    url: 'https://youtu.be/snP0o-jUs4g'
  },
  {
    name: 'The Lannisters Send Their Regards',
    url: 'https://youtu.be/H4purJGrRfg'
  },
  {
    name: 'Heir to Winterfell',
    url: 'https://youtu.be/eXbWn_VyPPU'
  },
  {
    name: 'Mhysa',
    url: 'https://youtu.be/ggS5zjraJi4'
  },
  {
    name: 'For the Realm',
    url: 'https://youtu.be/0_yQa83T8Qg'
  }
]

export default function Home() {
  const [videoUrl, setVideoUrl] = useState('/videos/1-day.mp4');
  const [livestream, playLiveStream] = useState(false);
  const [currentLive, setCurrentLive] = useState(musicList[count].url);
  const [volume, setVolume] = useState(100);
  const [fullscreenIcon, setFullscreenIcon] = useState(true);
  const [drawer, setDrawer] = useState(false);

  const start = () => {
    const start = livestream?false:true;
    playLiveStream(start);
  }

  const move = (cond) => {
    cond == 'next'?count = count===musicList.length-1?0:count+1:count = count===0?musicList.length-1:count-1;
    
    setCurrentLive(musicList[count].url);
  }

  const suffleMusic = () => {
    let tempData = musicList;
    let result = shuffle(tempData.length);
    setCurrentLive(musicList[result].url);
    count = tempData.indexOf(tempData[result])
  }

  function shuffle(max) {
    return Math.floor(Math.random() * max);
  }

  const handleChange = (event, newValue) => {
    setVolume(newValue);
  };

  const handleClickFullscreen = () => {
    if(screenfull.isFullscreen)
    {
      screenfull.exit();
      setFullscreenIcon(screenfull.isFullscreen);
      return;
    }

    screenfull.request();
    setFullscreenIcon(screenfull.isFullscreen);
  }

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <>
      <Image
        src="/images/targarean.jpg"
        alt="My Image"
        width="5000"
        height="5000"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1,
        }}
      />
      <Typography 
        style={{ fontFamily: 'MyCustomFont' }}
        sx={{ position: 'fixed', bottom: '150px', left: '1%' }}
        variant="h5"
        gutterBottom
      >
        {count} {musicList[count].name}
      </Typography>
      <Fab
        variant="outlined" 
        sx={{ position: 'fixed', bottom: '30px', left: '3%', transform: 'translateX(-50%)' }} color="primary" aria-label="add" size="small"
        onClick={()=> move('prev')}
      >
        <FastRewindIcon />
      </Fab>
      <Fab 
        sx={{ position: 'fixed', bottom: '30px', left: '7%', transform: 'translateX(-50%)' }} color="primary" aria-label="add" 
        onClick={start}
      >
        {livestream?<PauseIcon />:<PlayArrowIcon />}
      </Fab>
      <Fab 
        sx={{ position: 'fixed', bottom: '30px', left: '11%', transform: 'translateX(-50%)' }} color="primary" aria-label="add" size="small"
        onClick={()=> move('next')}
      >
        <FastForwardIcon />
      </Fab>
      <Slider 
        sx={{ height:100, position: 'fixed', bottom: '30px', left: '14%', transform: 'translateX(-50%)' }}
        orientation="vertical"
        aria-label="Volume" 
        value={volume}
        min={0}
        max={1}
        step={0.01}
        onChange={handleChange} 
      />
      <Fab 
        sx={{ position: 'fixed', bottom: '30px', left: '17%', transform: 'translateX(-50%)' }} color="primary" aria-label="add" size="small"
        onClick={() => suffleMusic()}
      >
        <ShuffleIcon />
      </Fab>
      <Fab 
        sx={{ position: 'fixed', bottom: '30px', left: '20%', transform: 'translateX(-50%)' }} color="primary" aria-label="add" size="small"
        onClick={() => handleClickFullscreen()}
      >
        {fullscreenIcon?<FullscreenIcon />:<FullscreenExitIcon />}
      </Fab>
      <Fab 
        sx={{ position: 'fixed', bottom: '30px', left: '23%', transform: 'translateX(-50%)' }} color="primary" aria-label="add" size="small"
        onClick={()=>setDrawer(true)}
      >
        {fullscreenIcon?<FullscreenIcon />:<FullscreenExitIcon />}
      </Fab>
      <Drawer
        anchor="right"
        open={drawer}
        onClose={()=>setDrawer(false)}
      >
        <p>test2</p>
      </Drawer>
      <ReactPlayer
        url={currentLive}
        className="youtube"
        playing={livestream}
        volume={volume}
        onEnded={()=> move('next')}
      />
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </>
  )
}
