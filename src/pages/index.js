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

const musicList = [
  {
    name: 'Main Title',
    url: 'https://youtu.be/Ov5ljc44Ajs?list=PLsNZSmkIbJbiGQNVSqa9xYFSXpBAhyQpL'
  },
  {
    name: 'North Of The Wall',
    url: 'https://youtu.be/LXK2ZiIRfXc?list=PLsNZSmkIbJbiGQNVSqa9xYFSXpBAhyQpL'
  },
  {
    name: 'Goodbye Brother',
    url: 'https://youtu.be/spQljapBR7s?list=PLsNZSmkIbJbiGQNVSqa9xYFSXpBAhyQpL'
  },
  {
    name: 'The Kingsroad',
    url: 'https://youtu.be/60OCZAHSxDk?list=PLsNZSmkIbJbiGQNVSqa9xYFSXpBAhyQpL'
  },
  {
    name: 'The Kings Arrival',
    url: 'https://youtu.be/PwsUAxu6rjg?list=PLsNZSmkIbJbiGQNVSqa9xYFSXpBAhyQpL'
  },
  {
    name: 'Love In The Eyes',
    url: 'https://youtu.be/SFbp8GzZ-ec?list=PLsNZSmkIbJbiGQNVSqa9xYFSXpBAhyQpL'
  },
  {
    name: 'A Raven From Kings Landing',
    url: 'https://youtu.be/AXb5wyNf6Jw?list=PLsNZSmkIbJbiGQNVSqa9xYFSXpBAhyQpL'
  },
  {
    name: 'The Wall',
    url: 'https://youtu.be/eRgxqnP0qw4?list=PLsNZSmkIbJbiGQNVSqa9xYFSXpBAhyQpL'
  },
  {
    name: 'Things I Do For Love',
    url: 'https://youtu.be/JZyLqrVfslQ?list=PLsNZSmkIbJbiGQNVSqa9xYFSXpBAhyQpL'
  },
  {
    name: 'A Golden Crown',
    url: 'https://youtu.be/hX509eFmZfg?list=PLsNZSmkIbJbiGQNVSqa9xYFSXpBAhyQpL'
  },
  {
    name: 'Winter Is Coming',
    url: 'https://youtu.be/jHWk1bFwqYE?list=PLsNZSmkIbJbiGQNVSqa9xYFSXpBAhyQpL'
  },
  {
    name: 'A Bird Without Feathers',
    url: 'https://youtu.be/1Lc1skF69lU?list=PLsNZSmkIbJbiGQNVSqa9xYFSXpBAhyQpL'
  },
  {
    name: 'Await The Kings Justice',
    url: 'https://youtu.be/fON6yJyM1bw?list=PLsNZSmkIbJbiGQNVSqa9xYFSXpBAhyQpL'
  },
  {
    name: 'Youll Be Queen One Day',
    url: 'https://youtu.be/UaPGoXe3VLo?list=PLsNZSmkIbJbiGQNVSqa9xYFSXpBAhyQpL'
  },
  {
    name: 'The Assassins Dagger',
    url: 'https://youtu.be/bCuuWufKPPk?list=PLsNZSmkIbJbiGQNVSqa9xYFSXpBAhyQpL'
  },
  {
    name: 'Jons Honor',
    url: 'https://youtu.be/HFIWi-KoozE?list=PLsNZSmkIbJbiGQNVSqa9xYFSXpBAhyQpL'
  },
  {
    name: 'To Vaes Dothrak',
    url: 'https://youtu.be/MrnMIIMRC0g?list=PLsNZSmkIbJbiGQNVSqa9xYFSXpBAhyQpL'
  },
  {
    name: 'Black Of Hair',
    url: 'https://youtu.be/DksmuiccR-0?list=PLsNZSmkIbJbiGQNVSqa9xYFSXpBAhyQpL'
  },
  {
    name: 'You Win Or You Die',
    url: 'https://youtu.be/S0LG82B1bVc?list=PLsNZSmkIbJbiGQNVSqa9xYFSXpBAhyQpL'
  },
  {
    name: 'Small Pack Of Wolves',
    url: 'https://youtu.be/avNYe_941so?list=PLsNZSmkIbJbiGQNVSqa9xYFSXpBAhyQpL'
  },
  {
    name: 'Game Of Thrones',
    url: 'https://youtu.be/9VgoADESpw0?list=PLsNZSmkIbJbiGQNVSqa9xYFSXpBAhyQpL'
  }
]

export default function Home() {
  const [videoUrl, setVideoUrl] = useState('/videos/1-day.mp4');
  const [livestream, playLiveStream] = useState(false);

  const start = () => {
    const start = livestream?false:true;
    playLiveStream(start);
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
      <Fab sx={{ position: 'fixed', bottom: '50px', left: '43%', transform: 'translateX(-50%)' }} color="primary" aria-label="add" size="small">
        <FastForwardIcon />
      </Fab>
      <Fab sx={{ position: 'fixed', bottom: '50px', left: '46%', transform: 'translateX(-50%)' }} color="primary" aria-label="add" size="small">
        <FastRewindIcon />
      </Fab>
      <Fab sx={{ position: 'fixed', bottom: '50px', left: '50%', transform: 'translateX(-50%)' }} color="primary" aria-label="add" onClick={start}>
        <PlayArrowIcon />
      </Fab>
      <Fab sx={{ position: 'fixed', bottom: '50px', left: '54%', transform: 'translateX(-50%)' }} color="primary" aria-label="add" size="small">
        <FastForwardIcon />
      </Fab>
      <Fab sx={{ position: 'fixed', bottom: '50px', left: '57%', transform: 'translateX(-50%)' }} color="primary" aria-label="add" size="small">
        <FastForwardIcon />
      </Fab>
      <Slider disabled defaultValue={30} aria-label="Disabled slider" />
      <ReactPlayer
        url='https://youtu.be/Ov5ljc44Ajs?list=PLsNZSmkIbJbiGQNVSqa9xYFSXpBAhyQpL'
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
