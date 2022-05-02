import * as React from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link as RouterLink } from 'react-router-dom'
import Moment from 'react-moment'


export const TripCard = ({pk, tripId, title, location, username, user, trip_username, user_first_name, user_last_name, begin, end }) => {
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
        <><h2>{usernameCapital}'s trip to {location}</h2></>
        )
    }
    
         {/* /{trip_username}'s trip to {location} */}

        </Typography>
        <Typography variant="body2" align="center" color="text.secondary">
            {/* <h3>{title}</h3> */}
            {/* <h4>{username}</h4> */}
            {/* {user_first_name} {user_last_name} */}
            <Moment format="MM/D/YYYY">{begin}</Moment> to <Moment format="MM/D/YYYY">{end}</Moment>
            
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