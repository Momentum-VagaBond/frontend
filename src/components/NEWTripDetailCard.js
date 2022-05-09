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
      <Container
      sx={{
        width: '100%',
        // border: 1,
        marginBottom: 3,
        margin: 0,
        padding: 0,
        //boxShadow: '0 16px 40px -12.125px rgba(0,0,0,0.3)',
        //backgroundColor: 'white',
      }}
      >
      <ImageListItem>
      <img
        src={`${Flags}?w=248&fit=crop&auto=format`}
        srcSet={`${Flags}?w=248&fit=crop&auto=format&dpr=2 2x`}
        alt={title}
        loading="lazy"
      />
      <ImageListItemBar
        title={title}
        subtitle={dateFormatted}
        >
      </ImageListItemBar>
      </ImageListItem>
      </Container>
    )
    }
