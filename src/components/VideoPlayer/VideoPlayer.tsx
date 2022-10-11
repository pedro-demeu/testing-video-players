import React, { useRef } from 'react'
import { Box } from '@mui/material';
// import { Player } from 'video-react';
import ReactHlsPlayer from 'react-hls-player';

function VideoPlayer({ url }: { url: string }) {
  const playerRef = useRef(null);

  return (
    <Box
      width="600px"
      height="auto"
      sx={{
        border: "2px solid white",
      }}
    >

      <ReactHlsPlayer
        src={url}
        autoPlay
        muted
        width="100%"
        height="auto"
        playerRef={playerRef}
        hlsConfig={{
          progresive: true
        }}
      />

    </Box>
  )
}

export default VideoPlayer