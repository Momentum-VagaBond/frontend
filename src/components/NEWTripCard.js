import * as React from 'react';
import { Container, Typography, Card } from '@mui/material';
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


const TripCard = ({pk, tripId, title, location, username, fileName, begin, end }) => {
    // function capitalizeFirst(string) {
    //     return string.charAt(0).toUpperCase() + string.slice(1);
    //   }
    // const name = `${trip_username}`;
    // const str = name;
    // const usernameCapital= str.charAt(0).toUpperCase() + str.slice(1);


<ThemeProvider theme={Theme}>
<CssBaseline />


    <Container component="main"
    sx={{
        width: '100%',
        marginBottom: 3,
        margin: 0,
        padding: 0,
        boxShadow: '0 16px 40px -12.125px rgba(0,0,0,0.3)',
        backgroundColor: 'white',
        mx: 'auto',
    }}
    >


<ImageList
    sx={{
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    width: '40ch',
    height: 'auto',
    marginTop: 0,
    alignContent: 'center',
    boxShadow: '0 16px 40px -12.125px rgba(0,0,0,0.3)',
    border: 1,
    }}
    >
    <ImageListItem key={tripId}
    sx={{
        width: '100%',
    }}>
    <img
        component='img'
        src={`${Flags}?w=248&fit=crop&auto=format&dpr=2 2x`}
        alt={location}
        loading="lazy"
    />
        {/* <ImageListItemBar
        sx={{
          border: 1,
          height: '5%',
        }}
          detail_text={detail_text}
          location={location}
          date_logged={date_logged}
        /> */}
    <Card>
        <Typography component="div"
        sx={{
            paddingLeft: 2,
            lineHeight: 2,
        }}
        >
            <h3>{title} in {location}</h3>
            <Moment format="MM/D/YYYY">{begin}</Moment> to <Moment format="MM/D/YYYY">{end}</Moment>
        </Typography>
    </Card>
    </ImageListItem>
    </ImageList>

</Container>
</ThemeProvider>
}
export default TripCard;