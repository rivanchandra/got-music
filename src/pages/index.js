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
