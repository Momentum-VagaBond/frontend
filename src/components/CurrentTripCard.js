import * as React from 'react';
import axios from "axios";
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline';
import { Card, CardActionArea } from '@mui/material/';
import Container from '@mui/material/Container';
import { ThemeProvider } from "styled-components";
import { Theme } from "../Theme";
import ImageList from "@mui/material/ImageList";
import { ImageListItem } from "@mui/material";
import ListSubheader from "@mui/material/ListSubheader";
import LaunchTwoToneIcon from '@mui/icons-material/LaunchTwoTone';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Button from "@mui/material/Button";
import { Link as RouterLink, Navigate } from 'react-router-dom';
import Flags from './Flags.jpg';
import Moment from 'react-moment';


export const CurrentTripCard = ({pk, tripId, title, location, trip_username, begin, end, log }) => {
    const name = `${trip_username}`;
    const str = name;
    const usernameCapital= str.charAt(0).toUpperCase() + str.slice(1);

    const params = useParams()


    return(

<ThemeProvider theme={Theme}>

<CssBaseline />

<CardActionArea component={RouterLink} to={`/trips/${tripId}`}>
<Container component="main" size="sm"
    sx={{
        marginBottom: 10,
        backgroundColor: '#e9ecef',
        position: 'absolute',
    }}
    key={tripId}
    >

    <ImageList
    sx={{
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        width: 'auto',
        height: 'auto',
        marginTop: 2,
    }}
    >

    <ImageListItem key={title}
    sx={{
        marginBottom: .5,
        marginTop: .5,
    }}
    >
        <img
            src={`${Flags}?w=248&fit=crop&auto=format`}
            srcSet={`${Flags}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={title}
            loading="lazy"
        />
    </ImageListItem>

    </ImageList>
    <Card
    sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 2,
    }}
    >
    <h2>{location}!</h2>
    <Moment format="MM/D/YYYY">{begin}</Moment> to <Moment format="MM/D/YYYY">{end}</Moment>
    </Card>


  {/* </Box> */}
{/* <CardActionArea component={RouterLink} to={`/trips/${params.tripId}/${log.pk}`}></CardActionArea> */}
</Container>
</CardActionArea>
</ThemeProvider>
    )
}



    //     <Card sx={{
    //         marginTop: 8,
    //         maxWidth: 300 
    //     }}
    //         >
    //     <CardActionArea component={RouterLink} to={`/trips/${tripId}`}>
    //     <CardMedia
    //         component="img"
    //         alt="green iguana"
    //         height= '100%'
    //         width='auto'
    //         // image="/static/images/cards/contemplative-reptile.jpg"
    //         src="https://parade.com/wp-content/uploads/2021/02/family-beach-vacations-2021-1024x767.jpg"
    //     />
        
    //     <CardContent key={pk}>
            
    //         <Typography gutterBottom align="center" variant="body1" component="div">
    //         {trip_username === username ? (
    //         <>{location}</> 
    //         ):( 
    //         <>{usernameCapital}'s trip to {location}</>
    //         )
    //     }
        
    //          {/* /{trip_username}'s trip to {location} */}
    
    //         </Typography>
    //         <Typography variant="body2" align="center" color="text.secondary">
    //             {title}
    //             {/* <h4>{username}</h4> */}
    //             {/* {user_first_name} {user_last_name} */}
    //             <Moment format="MM/D/YYYY">{begin}</Moment> to <Moment format="MM/D/YYYY">{end}</Moment>
                
    //         </Typography>
    //     </CardContent>
    
    //     {/* <CardActions>
    //         <Button size="small">Make favorite</Button>
    //         <Button size="small">Trip details</Button>
    //     </CardActions> */}
    //         </CardActionArea>
    //     </Card>
    //     );
    // }
