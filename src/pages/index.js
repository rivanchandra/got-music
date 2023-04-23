import { useState } from 'react';
import BackgroundVideo from './BackgroundVideo';

export default function Home() {
  const [videoUrl, setVideoUrl] = useState('/videos/1-day.mp4');

  return (
    <>
      <BackgroundVideo video={videoUrl} />
    </>
  )
}
