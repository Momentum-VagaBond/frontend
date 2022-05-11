import axios from "axios";
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline';
import { Card, CardContent, Box, Typography } from '@mui/material/';
import Container from '@mui/material/Container';
import { ThemeProvider } from "styled-components";
import { Theme } from "../Theme";
import ImageList from "@mui/material/ImageList";
import { ImageListItem } from "@mui/material";
import ListSubheader from "@mui/material/ListSubheader";
import LaunchTwoToneIcon from '@mui/icons-material/LaunchTwoTone';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Button from "@mui/material/Button";
// import { Link as RouterLink } from 'react-router-dom'
import Flags from './Flags.jpg';
// import CardActionArea from '@mui/material/CardActionArea';
import Moment from 'react-moment'



export const NEWTripDetailCard = ({pk, tripId, title, imageUrl, setImage, details, logId, date, location, username, user, trip_username, user_first_name, user_last_name, begin, end }) => {
    // function capitalizeFirst(string) {
    //     return string.charAt(0).toUpperCase() + string.slice(1);
    //   }
    // const name = `${trip_username}`;
    // const str = name;
    // const usernameCapital= str.charAt(0).toUpperCase() + str.slice(1);
    // console.log(str2)

    const dateFormatted = <Moment format="MM/D/YYYY">{date}</Moment>

    return (
      <Container
      // sx={{
      //   width: '100%',
      //   // border: 1,
      //   marginBottom: 5,
      //   margin: 0,
      //   padding: 0,
      //   display: 'flex',
      //   flexDirection: 'column',
      //   alignContent: 'center',
      //   //boxShadow: '0 16px 40px -12.125px rgba(0,0,0,0.3)',
      //   //backgroundColor: 'white',
      // }}
      >
        <Box
        sx={{
          width: '100%',
          // border: 1,
          marginBottom: 8,
          margin: 0,
          padding: 0,
          display: 'flex',
          flexDirection: 'column',
          alignContent: 'center',
        }}
        >
        <Card
            sx={{
              display: 'flex',
              flex: 1,
              flexDirection: 'column',
              alignContent: 'center',
              width: '100%',
              //margin: 2,
              marginBottom: 1.5,
              marginTop: 1.5,
              boxShadow: '0 30px 30px -12.125px rgba(0,0,0,0.3)',
              }}
        >
        <CardContent>
      {/* <ImageListItem> */}
      {/* <img
        component="img"
        alt={title}
        height= '50%'
        width='50%'
        src={`${imageUrl}?w=248&fit=crop&auto=format&dpr=2`}
      /> */}
      {/* <ImageListItemBar */}
      <Typography variant="h5">
        {title}
        </Typography>
        <Typography variant="h7">
        {dateFormatted}
      </Typography>

        {/* >
      </ImageListItemBar>
      </ImageListItem> */}
      </CardContent>
      </Card>
      </Box>
      </Container>
    )
    }

      // <CardActions>
      //   <Button>share</Button>
      // </CardActions>