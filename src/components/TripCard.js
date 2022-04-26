import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



export default function TripCard(pk, title, location, user, username, user_first_name, user_last_name, begin, end) {
    return (

    <Card sx={{ maxWidth: 345 }}>

    <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
    />
    
    <CardContent>
        {/* <Typography gutterBottom variant="h5" component="div"> */}
            Trip
        {/* </Typography> */}
        {/* <Typography variant="body2" color="text.secondary"> */}
            {pk}
            {title}
            {location}
            {username}
            {user}
            {user_first_name}
            {user_last_name}
            {begin}
            {end}
        {/* </Typography> */}
    </CardContent>

    <CardActions>
        <Button size="small">Make favorite</Button>
        <Button size="small">Trip details</Button>
    </CardActions>

    </Card>
    );
}