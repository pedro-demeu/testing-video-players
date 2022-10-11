import React from 'react';
import { Box, Typography } from '@mui/material';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
// import { useStyles } from './styles';

function App() {
  // const classes = useStyles();
  return (
    <Box sx={{
      backgroundColor: "black",
      color: "white",
      padding: "1rem",
      height: "100vh",
    }}>
      <Typography>Hello Segware!</Typography>
      <Box
        sx={{
          border: "1px solid white",
          width: "100%",
          marginBottom: "2rem",
          marginTop: "0.5rem"
        }}
      />
      <Box display="flex" gap={2}>
        <VideoPlayer url="https://sim-server-ovh-staging.segware.com/live/140/playlist/playlist.m3u8" />
        <VideoPlayer url="https://sim-server-ovh-staging.segware.com/live/62/playlist/playlist.m3u8" />
        <VideoPlayer url="https://sim-server-ovh-staging.segware.com/live/183/playlist/playlist.m3u8" />
        <VideoPlayer url="https://sim-server-ovh-staging.segware.com/live/160/playlist/playlist.m3u8" />
      </Box>
    </Box>
  );
}

export default App;
