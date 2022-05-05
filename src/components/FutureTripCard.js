import * as React from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link as RouterLink } from 'react-router-dom'
import Moment from 'react-moment'

export const FutureTripCard = ({pk, tripId, title, location, username, user, trip_username, user_first_name, user_last_name, begin, end }) => {
    const name = `${trip_username}`;
    const str = name;
    const usernameCapital= str.charAt(0).toUpperCase() + str.slice(1);

    return(

        <Card sx={{
            marginTop: 8,
            maxWidth: 300 
        }}
            >
        <CardActionArea component={RouterLink} to={`/trips/${tripId}`}>
        <CardMedia
            component="img"
            alt="green iguana"
            height= '100%'
            width='auto'
            // image="/static/images/cards/contemplative-reptile.jpg"
            src="https://parade.com/wp-content/uploads/2021/02/family-beach-vacations-2021-1024x767.jpg"
        />
        
        <CardContent key={pk}>
            
            <Typography gutterBottom align="center" variant="body1" component="div">
            {trip_username === username ? (
            <>{location}</> 
            ):( 
            <>{usernameCapital}'s trip to {location}</>
            )
        }
        
             {/* /{trip_username}'s trip to {location} */}
    
            </Typography>
            <Typography variant="body2" align="center" color="text.secondary">
                {title}
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

//         <Container>
// <Box sx={{
//     marginTop: 5,
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent:'center',
//     }}
// >
//     <Card>
//     title: {title}
//     </Card>
//     <Card>
//     user: {user}
//     </Card>
//     <Card>
//     location: {location}
//     </Card>
//     <Card>
//     begin: {begin}
//     </Card>
//     <Card>
//     end: {end}
//     </Card>
// </Box>
// </Container>
// )
// }