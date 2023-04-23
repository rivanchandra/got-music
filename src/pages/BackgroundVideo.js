import React, { useState, useRef, useEffect } from 'react';

const BackgroundVideo = ({ video }) => {
  const videoRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadStart = () => {
    setIsLoading(true);
  };

  const handleLoadedMetadata = () => {
    setIsLoading(false);
  };

  const handleLoadedData = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    const videoElement = videoRef.current;

		if(videoElement)
		{
			videoElement.play().catch((error) => {
				console.error('Autoplay failed:', error);
			});
		}
  }, []);

  return (
    <>
      {isLoading && <p>Loading</p>}
      <video
        ref={videoRef}
        src={video}
        onLoadStart={handleLoadStart}
        onLoadedMetadata={handleLoadedMetadata}
        onLoadedData={handleLoadedData}
        autoPlay
        muted
        loop
        playsInline
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
    </>
  );
};

export default BackgroundVideo;
