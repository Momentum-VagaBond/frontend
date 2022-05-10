import * as React from 'react';
import { Container, Typography } from '@mui/material';
import { Card } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import ImageList from "@mui/material/ImageList";
import { ImageListItem } from "@mui/material";
import ListSubheader from "@mui/material/ListSubheader";
import { ImageListItemBar } from '@mui/material';
import Flags from './Flags.jpg';
import { ThemeProvider } from 'styled-components';
import { Theme } from '../Theme';
import Moment from 'react-moment';



const LogCard = ({detail_text,location, date_logged, logPk, title, fileName, log_user}) => (

  <ThemeProvider theme={Theme}>
  <CssBaseline />

      <h3>{title}</h3>
      <Moment format="MM/D/YYYY, h:mm a">{date_logged}</Moment>


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
    <ImageListItem key={logPk}
      sx={{
        width: '100%',
      }}>
      <img
        src={Flags}
        srcSet={`${Flags}?w=248&fit=crop&auto=format&dpr=2 2x`}
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
    {detail_text} at {location}!
  </Typography>
  </Card>
    </ImageListItem>
    </ImageList>

  </Container>
  </ThemeProvider>
  )
  export default LogCard;
