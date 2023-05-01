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
const ReactPlayer = dynamic(() => import("react-player/youtube"), { ssr: false });

const actions = [
  { icon: <FileCopyIcon />, name: 'Copy' },
  { icon: <SaveIcon />, name: 'Save' },
  { icon: <PrintIcon />, name: 'Print' },
  { icon: <ShareIcon />, name: 'Share' },
];

export default function Home() {
  const [videoUrl, setVideoUrl] = useState('/videos/1-day.mp4');

  return (
    <>
      <BackgroundVideo video={videoUrl} />
      <Fab sx={{ position: 'fixed', bottom: '50px', left: '43%', transform: 'translateX(-50%)' }} color="primary" aria-label="add" size="small">
        <FastForwardIcon />
      </Fab>
      <Fab sx={{ position: 'fixed', bottom: '50px', left: '46%', transform: 'translateX(-50%)' }} color="primary" aria-label="add" size="small">
        <FastRewindIcon />
      </Fab>
      <Fab sx={{ position: 'fixed', bottom: '50px', left: '50%', transform: 'translateX(-50%)' }} color="primary" aria-label="add">
        <PlayArrowIcon />
      </Fab>
      <Fab sx={{ position: 'fixed', bottom: '50px', left: '54%', transform: 'translateX(-50%)' }} color="primary" aria-label="add" size="small">
        <FastForwardIcon />
      </Fab>
      <Fab sx={{ position: 'fixed', bottom: '50px', left: '57%', transform: 'translateX(-50%)' }} color="primary" aria-label="add" size="small">
        <FastForwardIcon />
      </Fab>
      <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' className="youtube" />
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
