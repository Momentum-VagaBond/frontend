import * as React from 'react';

import { Container, Typography, Card, Box } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';

import { ImageListItem , ImageList} from "@mui/material";
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


const LogCard = ({detail_text,location, tripId, trip_username, username, date_logged, logPk, title, fileName, log_user}) => (
   <ThemeProvider theme={Theme}>
  <CssBaseline />
      <Typography variant="h5" pt={2} gutterBottom><strong>{title}</strong></Typography>
      <Typography variant="body1" color="primary">{location}</Typography>
  <Container sx={{
    marginTop: 2,
    paddingTop: 2.5,
    boxShadow: '0 16px 40px -12.125px rgba(0,0,0,0.3)',
    borderRadius: 1,
    backgroundColor: "white",
    bottomMargin: 3,

    // maxWidth: "sm", 
}}
    >
<CardActionArea component={RouterLink} to={`/trips/${tripId}`}>
<CardMedia
    sx={{borderRadius: .25}}
    component="img"
    alt={location}
    height= '100%'
    width='100%'
    // image="/static/images/cards/contemplative-reptile.jpg"
    src={`${Flags}?w=248&fit=crop&auto=format&dpr=2 2x`}
    />

<CardContent sx={{ flex: '1 0 auto' }}>
      <Typography component="div" variant="h6" mb={1.5}>
      {detail_text}
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" component="div">
      <Moment format="MM/D/YYYY, h:mm a">{date_logged}</Moment>
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
</ThemeProvider>
);

export default LogCard;


  // <ThemeProvider theme={Theme}>
  // <CssBaseline />

  //     <h3>{title}</h3>
  //     <Moment format="MM/D/YYYY, h:mm a">{date_logged}</Moment>


  // <Container component="main"
  //   sx={{
  //     width: '100%',
  //     marginBottom: 3,
  //     margin: 0,
  //     padding: 0,
  //     boxShadow: '0 16px 40px -12.125px rgba(0,0,0,0.3)',
  //     backgroundColor: 'white',
  //     mx: 'auto',
  //   }}
  //   >


  // <ImageList
  //   sx={{
  //     display: 'flex',
  //     flexDirection: 'column',
  //     flex: 1,
  //     width: '40ch',
  //     height: 'auto',
  //     marginTop: 0,
  //     alignContent: 'center',
  //     boxShadow: '0 16px 40px -12.125px rgba(0,0,0,0.3)',
  //     border: 1,
  //   }}
  //   >
  //   <ImageListItem key={logPk}
  //     sx={{
  //       width: '100%',
  //     }}>
  //     <img
  //       src={Flags}
  //       srcSet={`${Flags}?w=248&fit=crop&auto=format&dpr=2 2x`}
  //       alt={location}
  //       loading="lazy"
  //       />
  //         {/* <ImageListItemBar
  //         sx={{
  //           border: 1,
  //           height: '5%',
  //         }}
  //           detail_text={detail_text}
  //           location={location}
  //           date_logged={date_logged}
  //         /> */}
  //   <Card>
  // <Typography component="div"
  // sx={{
  //   paddingLeft: 2,
  //   lineHeight: 2,
  // }}
  // >
  //   {detail_text} at {location}!
  // </Typography>
  // </Card>
  //   </ImageListItem>
  //   </ImageList>

  // </Container>
  // </ThemeProvider>
  // )
  // export default LogCard;