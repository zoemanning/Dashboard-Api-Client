import React, {useEffect,useState} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import useEnhancedEffect from '@mui/material/utils/useEnhancedEffect';
import axios from 'axios';

export default function Cocktail() {
    const [cocktails, setCocktails] = useState(undefined);
    const  newCocktail = () =>{
        console.log("I was pressed");
        requestNewCocktail ();
    }
    const requestNewCocktail = () =>{
        axios.get("http://localhost:8080/cocktails")
        .then(response => {
            setCocktails(response.data)
        });
    }
    useEffect(() =>{
        requestNewCocktail();
    },[]);

  return (
    <Card sx={{ maxWidth: 350 }}>
      <CardMedia
        component="img"
        height="320"
        image="https://media.istockphoto.com/vectors/cocktail-glasses-minimal-vector-thin-line-illustration-six-refreshing-vector-id1156647123?s=612x612"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Cocktail : {cocktails?.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            Ingredients : {cocktails?.ingredients}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"onClick = {newCocktail}>Next</Button>
      </CardActions>
    </Card>
  );
}
