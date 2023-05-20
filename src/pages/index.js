import { useState } from 'react';
import dynamic from 'next/dynamic';
import Fab from '@mui/material/Fab';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import FastRewindIcon from '@mui/icons-material/FastRewind';
import FastForwardIcon from '@mui/icons-material/FastForward';
import Image from 'next/image';
import Slider from '@mui/material/Slider';
import PauseIcon from '@mui/icons-material/Pause';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import ListIcon from '@mui/icons-material/List';

import screenfull from 'screenfull';

import FullscreenIcon from '@mui/icons-material/Fullscreen';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import {list} from '../resources/list.js';
import {pictures} from '../resources/pictures.js';
import DrawerPage from '../components/DrawerPage.js';
import MapPage from '../components/MapPage.js';

const ReactPlayer = dynamic(() => import("react-player/youtube"), { ssr: false });

let count = 0;
let musicList = list;
let pictureList = pictures;

export default function Home() {
  
  const [videoUrl, setVideoUrl] = useState('/videos/1-day.mp4');
  const [livestream, playLiveStream] = useState(false);
  const [currentLive, setCurrentLive] = useState(musicList[count].url);
  const [currentPicture, setCurrentPicture] = useState(pictureList[0].path);
  const [volume, setVolume] = useState(100);
  const [fullscreenIcon, setFullscreenIcon] = useState(true);

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

  const changeBg = (data) => {
    setCurrentPicture(data);
  }


  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Image
        src={currentPicture}
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
        sx={{ 
          borderRadius: '60px',
          color: '#ffffff',
          border: 'solid #ffffff 2px',
          backgroundColor: 'rgba(0,0,0,0)',
          position: 'fixed', 
          bottom: '30px', 
          left: '3%', 
          transform: 'translateX(-50%)' 
        }} color="primary" aria-label="add" size="small"
        onClick={()=> move('prev')}
      >
        <FastRewindIcon />
      </Fab>
      <Fab 
        sx={{ 
          borderRadius: '60px',
          color: '#ffffff',
          border: 'solid #ffffff 2px',
          backgroundColor: 'rgba(0,0,0,0)',
          position: 'fixed', bottom: '30px', left: '7%', transform: 'translateX(-50%)' }} color="primary" aria-label="add" 
        onClick={start}
      >
        {livestream?<PauseIcon />:<PlayArrowIcon />}
      </Fab>
      <Fab 
        sx={{ 
          borderRadius: '60px',
          color: '#ffffff',
          border: 'solid #ffffff 2px',
          backgroundColor: 'rgba(0,0,0,0)',
          position: 'fixed', bottom: '30px', left: '11%', transform: 'translateX(-50%)' }} color="primary" aria-label="add" size="small"
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
        sx={{ 
          borderRadius: '60px',
          color: '#ffffff',
          border: 'solid #ffffff 2px',
          backgroundColor: 'rgba(0,0,0,0)',
          position: 'fixed', bottom: '30px', left: '17%', transform: 'translateX(-50%)' }} color="primary" aria-label="add" size="small"
        onClick={() => suffleMusic()}
      >
        <ShuffleIcon />
      </Fab>
      <Fab 
        sx={{ 
          borderRadius: '60px',
          color: '#ffffff',
          border: 'solid #ffffff 2px',
          backgroundColor: 'rgba(0,0,0,0)',
          position: 'fixed', bottom: '30px', left: '20%', transform: 'translateX(-50%)' }} color="primary" aria-label="add" size="small"
        onClick={() => handleClickFullscreen()}
      >
        {fullscreenIcon?<FullscreenIcon />:<FullscreenExitIcon />}
      </Fab>
      <DrawerPage />
      <MapPage />
      <ReactPlayer
        url={currentLive}
        className="youtube"
        playing={livestream}
        volume={volume}
        onEnded={()=> move('next')}
      />
      <Fab
        variant="outlined" 
        sx={{ 
          borderRadius: '60px',
          color: '#ffffff',
          border: 'solid #ffffff 2px',
          backgroundColor: 'rgba(0,0,0,0)',
          position: 'fixed', bottom: '30px', right: '1%', transform: 'translateX(-50%)' }} color="primary" aria-label="add" size="small"
        onClick={handleClick}
      >
        <ListIcon />
      </Fab>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {pictureList.map((pic) => {
          return (
            <>
              <MenuItem onClick={()=> changeBg(pic.path)}>{pic.name}</MenuItem>
            </>
          )
        })}
      </Menu>
    </>
  )
}
