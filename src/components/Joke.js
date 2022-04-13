import React, {useEffect,useState} from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import axios from 'axios';


export default function MediaControlCard() {
  const theme = useTheme();
  const [randomJoke, setRandomJoke] = useState(undefined);
  const newJoke = () =>{
      console.log("I was pressed");
      requestNewJoke ();
  }
  const requestNewJoke = () =>{
      console.log("I was clicked")
      axios.get("http://localhost:8080/jokes")
      .then(response => {
          setRandomJoke(response.data)
      });
  }

  useEffect(()=>{
  requestNewJoke();
}, [])

  return (
    <Card sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            Random Joke
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Joke: {randomJoke?.content}
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
         
          <IconButton aria-label="play/pause" onClick={newJoke}>
            <PlayArrowIcon sx={{ height: 25, width: 40 }} />
          </IconButton>
    
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 300 }}
        image="https://image.shutterstock.com/shutterstock/photos/1467799901/display_1500/stock-vector-ha-ha-ha-ha-sticker-for-social-media-content-decoration-wallpaper-vector-hand-drawn-illustration-1467799901.jpg"
        alt="Live from space album cover"
      />
    </Card>
  );
}
