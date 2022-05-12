import React from 'react';
import { Box, Typography } from '@mui/material/';
import Container from '@mui/material/Container';
import Moment from 'react-moment'


export const NEWTripDetailCard = ({ title, date }) => {
    // function capitalizeFirst(string) {
    //     return string.charAt(0).toUpperCase() + string.slice(1);
    //   }
    // const name = `${trip_username}`;
    // const str = name;
    // const usernameCapital= str.charAt(0).toUpperCase() + str.slice(1);
    // console.log(str2)

    const dateFormatted = <Moment format="MM/D/YYYY">{date}</Moment>

    return (
      <Container>
              <Typography variant="h6"
      sx={{
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        alignContent: 'center',
      }}
      >
        {title}
        </Typography>
        <Typography variant="h7">
        {dateFormatted}
      </Typography>
        <Box
        sx={{
          width: 'auto',
          // border: 1,
          marginBottom: 8,
          margin: 0,
          padding: 0,
          display: 'flex',
          flexDirection: 'column',
          alignContent: 'center',
        }}
        >
        <Box
            sx={{
              display: 'flex',
              flex: 1,
              flexDirection: 'column',
              alignContent: 'center',
              width: 'auto',
              //margin: 2,
              marginBottom: 1.5,
              marginTop: 1.5,
              //boxShadow: '0 30px 30px -12.125px rgba(0,0,0,0.3)',
              }}
        >
                {/* <img
        component="img"
        alt={location}
        height= '10%'
        width='10%'
        src={img}
        src={`${imageUrl}?w=248&fit=crop&auto=format&dpr=2`}
      /> */}

      {/* <ImageListItem> */}
      {/* <img
        component="img"
        alt={location}
        height= '10%'
        width='10%'
        //src={imageUrl}
        src={`${imageUrl}?w=248&fit=crop&auto=format&dpr=2`}
      /> */}
      {/* <ImageListItemBar */}
      {/* <Typography variant="h6"
      sx={{
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        alignContent: 'center',
      }}
      >
        {title}
        </Typography>
        <Typography variant="h7">
        {dateFormatted}
      </Typography> */}

      </Box>
      </Box>
      </Container>
)}