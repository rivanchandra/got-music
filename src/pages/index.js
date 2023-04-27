import { useState } from 'react';
import BackgroundVideo from './BackgroundVideo';
import Fab from '@mui/material/Fab';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import FastRewindIcon from '@mui/icons-material/FastRewind';
import FastForwardIcon from '@mui/icons-material/FastForward';

export default function Home() {
  const [videoUrl, setVideoUrl] = useState('/videos/1-day.mp4');

  return (
    <>
      <BackgroundVideo video={videoUrl} />
      <Fab sx={{ position: 'fixed', bottom: '50px', left: '50%', transform: 'translateX(-50%)' }} color="primary" aria-label="add">
        <PlayArrowIcon />
      </Fab>
      <Fab sx={{ position: 'fixed', bottom: '50px', left: '45%', transform: 'translateX(-50%)' }} color="primary" aria-label="add">
        <FastRewindIcon />
      </Fab>
      <Fab sx={{ position: 'fixed', bottom: '50px', left: '55%', transform: 'translateX(-50%)' }} color="primary" aria-label="add">
        <FastForwardIcon />
      </Fab>
      <Fab sx={{ position: 'fixed', bottom: '50px', left: '60%', transform: 'translateX(-50%)' }} color="primary" aria-label="add">
        <FastForwardIcon />
      </Fab>
    </>
  )
}
