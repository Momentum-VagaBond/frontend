import axios from "axios";
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline';
import { Card } from '@mui/material/';
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

export const NEWTripDetailCard = ({pk, tripId, title, details, logId, date, location, username, user, trip_username, user_first_name, user_last_name, begin, end }) => {
    // function capitalizeFirst(string) {
    //     return string.charAt(0).toUpperCase() + string.slice(1);
    //   }
    // const name = `${trip_username}`;
    // const str = name;
    // const usernameCapital= str.charAt(0).toUpperCase() + str.slice(1);
    // console.log(str2)

    const dateFormatted = <Moment format="MM/D/YYYY">{date}</Moment>

    return (
<ThemeProvider theme={Theme}>
<CssBaseline />
{/* <CardActionArea component={RouterLink} to={`/trips/${tripId}/${logId}`}> */}
<Container component="main" key={logId}
  sx={{
    marginBottom: 10,
    backgroundColor: '#e9ecef',
    position: 'absolute',
  }}
  >
<ImageList
  sx={{
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    width: 'auto',
    height: 'auto',
    marginTop: 2,
    // marginRight: 1,
    // marginLeft: 1,
  }}
  >
  {/* <Card> */}

  <ImageListItem 
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
        <ImageListItemBar
          title={title}
          details={details}
          subtitle={dateFormatted}
        />
      </ImageListItem>

  </ImageList>

</Container>
{/* </CardActionArea> */}
</ThemeProvider>
  )
}