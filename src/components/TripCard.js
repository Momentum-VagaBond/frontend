import * as React from 'react';
import { Container, Typography, Card, Box } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import ImageList from "@mui/material/ImageList";
import { ImageListItem } from "@mui/material";
import ListSubheader from "@mui/material/ListSubheader";
import { ImageListItemBar } from '@mui/material';
import Flags from './Flags.jpg';
import { ThemeProvider } from 'styled-components';
import { Theme } from '../Theme';
import Moment from 'react-moment';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Link as RouterLink } from 'react-router-dom'

export const TripCard = ({pk, tripId, title, imageUrl, location, username,  date, user, trip_username, user_first_name, user_last_name, begin, end }) => {
    // function capitalizeFirst(string) {
    //     return string.charAt(0).toUpperCase() + string.slice(1);
    //   }
    const name = `${trip_username}`;
    const str = name;
    const usernameCapital= str.charAt(0).toUpperCase() + str.slice(1);
    // console.log(str2)

    return (

    <Container sx={{
        marginTop: 2,
        paddingTop: 2.5,
        boxShadow: '0 16px 40px -12.125px rgba(0,0,0,0.3)',
        backgroundColor: "white",
        borderRadius: 1,
        // maxWidth: "sm", 
    }}
        >
    <CardActionArea component={RouterLink} to={`/trips/${tripId}`}>
    <CardMedia
        sx={{borderRadius: .25}}
        component="img"
        alt={location}
        height= '50%'
        width='50%'
        src={`${Flags}?w=248&fit=crop&auto=format&dpr=2 2x`}
        // src={"https://parade.com/wp-content/uploads/2021/02/family-beach-vacations-2021-1024x767.jpg"}
        />
    
    <CardContent sx={{ flex: '1 0 auto' }} key={pk}>
            <Typography color="text.primary" sx={{typography:'h5.fontSize'}}>

        {trip_username === username ? (
        <strong>{location}</strong> 
            ):( 
            <>{usernameCapital}'s trip to {location}</> 
            )
        }
        </Typography>
            <Typography  sx={{ typography: 'subtitle2' }} color="text.secondary">
            <Moment format="MM/D/YYYY">{begin}</Moment> to <Moment format="MM/D/YYYY">{end}</Moment>
        </Typography>
        </CardContent>
        

        {/* {(trip_username === username) ? (
            <>
        <strong>{usernameCapital}</strong>
        ) : (
        <></>
        )
        </>
        )} */}




  
    {/* <CardActions>
        <Button size="small">Make favorite</Button>
        <Button size="small">Trip details</Button>
    </CardActions> */}
        </CardActionArea>
    </Container>
    );
}
export default TripCard;