import * as React from 'react';
import { Avatar } from '@mui/material';
import { Container } from '@mui/material';
import { Box, flexbox } from '@mui/system';
import { Card } from '@mui/material';
import { CardMedia } from '@mui/material';
import { CardContent } from "@mui/material";
import { IconButton } from "@mui/material";
import { Typography } from "@mui/material";
import { Icon } from "@mui/material";
import { borderRadius, spacing } from '@mui/system';
import { grey } from '@mui/material/colors';


const faces = [
  "http://i.pravatar.cc/300?img=6",
  "http://i.pravatar.cc/300?img=7",
  "http://i.pravatar.cc/300?img=8",
  "http://i.pravatar.cc/300?img=9"
];

const LogCard = () => (
  <Container className='bodyContainer'
  sx={{
  }}
  >
  <Card id="cardBody"
    sx={{
    mt: 8,
    // pl: 12,
    // pr: 12,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: 0,
    }}
  >
    <CardMedia
      component="img"
      className="CardMedia"
      src={
        "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
      }
      sx={{
        height: 'fit-content',
      }}
    />
    <Box sx={{
                  boxShadow: '0 16px 40px -12.125px rgba(0,0,0,0.3)',
                  borderRadius: 10,
                  marginBottom: 10,
                  backgroundColor: '#ffffff',
                  position: 'absolute',
                  top: '49%',
                  textAlign: 'left',
      }}
    >
    <CardContent className='CardContent'
      sx={{
          // marginBottom: 200,
          maxWidth: 350,
          margin: 'auto',
          overflow: 'initial',
          borderRadius: 10,
        
      }}>
      <div className="ContentHead"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Typography
          className="Typography"
          variant="h6"
          gutterBottom
        >
          Colloseo
        </Typography>
        <IconButton className="IconButton">
          <Icon>favorite</Icon>
        </IconButton>
      </div>
      <Typography
        className="TypographySubheading"
        color="textSecondary"
        gutterBottom
      >
        <Icon className="IconText"
        sx={{
          fontSize: 14,
          color: grey,
        }}
        >
          location_on
        </Icon>
        Rome
      </Typography>
      <div className="ContentRating">

        <Icon className="IconStarred"
        sx={{color: '#ffbb00'}}>star_rounded</Icon>
        <Icon className="IconStarred"
        sx={{color: '#ffbb00'}}>star_rounded</Icon>
        <Icon className="IconStarred"
        sx={{color: '#ffbb00'}}>star_rounded</Icon>
        <Icon className="IconStarred"
        sx={{color: '#ffbb00'}}>star_rounded</Icon>
        <Icon className="IconStarred"
        sx={{color: '#ffbb00'}}>star_rounded</Icon>

        <Typography className="TypographyRating" inline="true">
          4.0
        </Typography>
      </div>
      <Typography gutterBottom color="TextSecondary">
        Talking about travelling or new jobs, many people often think of change
        of environment...
      </Typography>
      <div className="ContentTail"
      // sx={{
      //   display: 'flexbox',
      //   flexDirection: 'row',
      // }}
      >
        {faces.map(face => (
          <Avatar className="Avatar" key={face} src={face} />
        ))}
        <Typography
          className="TypographyReviewer"
          color="textSecondary"
          sx={{
            marginLeft: 1,
            marginRight: 'auto',
          }}
        >
          +420
        </Typography>
        <IconButton className="IconButton">
          <Icon>more_horiz</Icon>
        </IconButton>
      </div>
    </CardContent>
    </Box>
  </Card>
  </Container>
  )

export default LogCard;
