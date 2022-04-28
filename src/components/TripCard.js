import * as React from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link as RouterLink } from 'react-router-dom'


export const TripCard = ({pk, tripId, title, currentUser, location, username, trip_user, trip_username, trip_user_first_name, trip_user_last_name, begin, end }) => {
    // function capitalizeFirst(string) {
    //     return string.charAt(0).toUpperCase() + string.slice(1);
    //   }
    const name = `${trip_username}`;
    const str = name;
    const usernameCapital= str.charAt(0).toUpperCase() + str.slice(1);
    // console.log(str2)

    return (

    <Card sx={{
        marginTop: 8,
        maxWidth: 345 
    }}
        >
    <CardActionArea component={RouterLink} to={`/trips/${tripId}`}>
    <CardMedia
        component="img"
        alt="green iguana"
        height="200"
        // image="/static/images/cards/contemplative-reptile.jpg"
        src="https://parade.com/wp-content/uploads/2021/02/family-beach-vacations-2021-1024x767.jpg"
    />
    
    <CardContent key={pk}>
        
        <Typography gutterBottom align="center" variant="body1" component="div">
        {trip_username === username ? (
        <> My trip to {location}</> 
        ):( 
        <>{usernameCapital}'s trip to {location}</>
        )
    }
    
         {/* /{trip_username}'s trip to {location} */}

        </Typography>
        <Typography variant="body2" align="center" color="text.secondary">
            {/* {title} */}
            {/* {username}
            {user}
            {user_first_name}
            {user_last_name} */}
            {begin} - {end}
        </Typography>
    </CardContent>

    {/* <CardActions>
        <Button size="small">Make favorite</Button>
        <Button size="small">Trip details</Button>
    </CardActions> */}
        </CardActionArea>
    </Card>
    );
}