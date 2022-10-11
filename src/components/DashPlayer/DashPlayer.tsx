import React, { useRef } from 'react'
import { Box } from '@mui/material'
import ReactPlayer, { ReactPlayerProps } from 'react-player'

function DashPlayer({ url }: ReactPlayerProps) {
  const videoEl = useRef(null);
  const playerRef = useRef();

  // @ts-ignore
  console.log(playerRef.current)
  return (
    <Box
      width="600px"
      height="auto"
      sx={{
        border: "2px solid white",
      }}
    >
      <ReactPlayer
        url={url}
        autoPlay={true}
        type="application/dash+xml"
        width="100%"
        height="auto"
        ref={videoEl}
        controls
        config={{
          file: {
            forceDASH: true,
          }
        }}
      />
    </Box>
  )
}

export default DashPlayer