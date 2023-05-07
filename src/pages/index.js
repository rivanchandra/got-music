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
  }
]

export default function Home() {
  const [videoUrl, setVideoUrl] = useState('/videos/1-day.mp4');
  const [livestream, playLiveStream] = useState(false);
  const [currentLive, setCurrentLive] = useState(musicList[count].url);

  const start = () => {
    const start = livestream?false:true;
    playLiveStream(start);
  }

  const move = (cond) => {
    cond == 'next'?count = count===musicList.length-1?0:count+1:count = count===musicList.length-1?0:count-1;
    
    setCurrentLive(musicList[count].url);
  }

  const suffleMusic = () => {
    let tempData = musicList;
    let result = shuffle(tempData.length);
    setCurrentLive(musicList[count].url);
    count = tempData.indexOf(tempData[result])
  }

  function shuffle(max) {
    return Math.floor(Math.random() * max);
  }

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
      <Fab sx={{ position: 'fixed', bottom: '50px', left: '3%', transform: 'translateX(-50%)' }} color="primary" aria-label="add" size="small">
        <FastForwardIcon />
      </Fab>
      <Fab 
        sx={{ position: 'fixed', bottom: '50px', left: '6%', transform: 'translateX(-50%)' }} color="primary" aria-label="add" size="small"
        onClick={()=> move('prev')}
      >
        <FastRewindIcon />
      </Fab>
      <Fab 
        sx={{ position: 'fixed', bottom: '50px', left: '10%', transform: 'translateX(-50%)' }} color="primary" aria-label="add" 
        onClick={start}
      >
        <PlayArrowIcon />
      </Fab>
      <Fab 
        sx={{ position: 'fixed', bottom: '50px', left: '14%', transform: 'translateX(-50%)' }} color="primary" aria-label="add" size="small"
        onClick={()=> move('next')}
      >
        <FastForwardIcon />
      </Fab>
      <Fab sx={{ position: 'fixed', bottom: '50px', left: '17%', transform: 'translateX(-50%)' }} color="primary" aria-label="add" size="small">
        <FastForwardIcon />
      </Fab>
      <Slider 
        sx={{ width: 200, position: 'fixed', bottom: '50px', left: '26%', transform: 'translateX(-50%)' }} 
        defaultValue={30} 
        aria-label="Disabled slider" 
      />
      <ReactPlayer
        url={currentLive}
        className="youtube"
        playing={livestream}
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
