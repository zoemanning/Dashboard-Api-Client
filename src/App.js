
import './App.css';
import Weather from "./components/Weather";
import { Grid } from '@mui/material';
import Joke from './components/Joke';
import Cocktail from './components/Cocktail';

function App() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <Weather></Weather>
      </Grid>   

      <Grid item small ={8}>
      <Joke></Joke>
      </Grid> 

      <Grid item lg ={16}>
      <Cocktail></Cocktail>
      </Grid> 
      </Grid> 
  );
}
export default App;
