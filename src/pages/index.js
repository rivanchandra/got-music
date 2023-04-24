import { useState } from 'react';
import BackgroundVideo from './BackgroundVideo';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

export default function Home() {
  const [videoUrl, setVideoUrl] = useState('/videos/1-day.mp4');

  return (
    <>
      <BackgroundVideo video={videoUrl} />
      <Fab sx={{ position: 'fixed', bottom: '50px', left: '50%', transform: 'translateX(-50%)' }} color="primary" aria-label="add">
        <AddIcon />
      </Fab>
    </>
  )
}
