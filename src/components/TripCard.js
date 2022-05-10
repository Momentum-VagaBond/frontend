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
        src={`${imageUrl}?w=248&fit=crop&auto=format&dpr=2 2x`}
        />
    
    <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
          
        {trip_username === username ? (
        <>{location}</> 
            ):( 
            <>{usernameCapital}'s trip to {location}</> 
            )
        }
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
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
// const TripCard = ({pk, tripId, title, location, username, fileName, begin, end }) => (
//     // function capitalizeFirst(string) {
//     //     return string.charAt(0).toUpperCase() + string.slice(1);
//     //   }
//     // const name = `${trip_username}`;
//     // const str = name;
//     // const usernameCapital= str.charAt(0).toUpperCase() + str.slice(1);

// <ThemeProvider theme={Theme}>
// <CssBaseline />

//     <Container component="main"
//     sx={{
//         width: '100%',
//         height: '75%',
//         marginBottom: 3,
//         margin: 0,
//         padding: 0,
//         boxShadow: '0 16px 40px -12.125px rgba(0,0,0,0.3)',
//         backgroundColor: 'white',
//         // mx: 'auto',
//     }}
//     >

// <ImageList
//     sx={{
//     display: 'flex',
//     flexDirection: 'column',
//     flex: 1,
//     width: '35ch',
//     // height: '35ch',
//     marginTop: 0,
//     alignContent: 'center',
//     boxShadow: '0 16px 40px -12.125px rgba(0,0,0,0.3)',
//     border: 1,
//     }}
//     >
//     <ImageListItem key={tripId}
//     sx={{
//         width: '100%',
//     }}>
//     <img
//         src={fileName}
//         srcSet={`${Flags}?w=248&fit=crop&auto=format&dpr=2 2x`}
//         alt={location}
//         loading="lazy"
//     />
//     <Card>
//         <Typography component="div"
//         sx={{
//             // paddingLeft: 2,
//             lineHeight: 1,
//             marginBottom: 1,
//         }}
//         >
//             <h3>{title} in {location}</h3>
//             <Moment format="MM/D/YYYY">{begin}</Moment> to <Moment format="MM/D/YYYY">{end}</Moment>
//         </Typography>
//     </Card>
//     </ImageListItem>
//     </ImageList>

// </Container>
// </ThemeProvider>
// )
// export default TripCard;













// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardActionArea from '@mui/material/CardActionArea';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { Link as RouterLink } from 'react-router-dom'
// import Moment from 'react-moment'


// export const TripCard = ({pk, tripId, title, location, username,  date, user, trip_username, user_first_name, user_last_name, begin, end }) => {
//     // function capitalizeFirst(string) {
//     //     return string.charAt(0).toUpperCase() + string.slice(1);
//     //   }
//     const name = `${trip_username}`;
//     const str = name;
//     const usernameCapital= str.charAt(0).toUpperCase() + str.slice(1);
//     // console.log(str2)

//     return (

//     <Card sx={{
//         marginTop: 2,
//         maxWidth: 300, 
//     }}
//         >
//     <CardActionArea component={RouterLink} to={`/trips/${tripId}`}>
//     <CardMedia
//         component="img"
//         alt={location}
//         height= '100%'
//         width='auto'
//         // image="/static/images/cards/contemplative-reptile.jpg"
//         src="https://parade.com/wp-content/uploads/2021/02/family-beach-vacations-2021-1024x767.jpg"
//     />
    
//     <CardContent key={pk}>
        
//         <Typography gutterBottom align="center" variant="body1" component="div">
//         {trip_username === username ? (
//         <strong>{location}</strong> 
//         ):( 
//         <strong>{usernameCapital}'s trip to {location}</strong>
//         )
//     }
    
//          {/* /{trip_username}'s trip to {location} */}

//         </Typography>
//         {/* fontFamily="Permanent Marker, cursive" */}
//         <Typography  variant="body2" align="center" color="text.secondary">
//             {title}
//             <br />
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


