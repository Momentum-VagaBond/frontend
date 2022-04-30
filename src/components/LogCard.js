import * as React from 'react';
import { Avatar } from '@mui/material';
import { Container } from '@mui/material';
import { Box } from '@mui/system';
import { Card } from '@mui/material';
import { CardMedia } from '@mui/material';
import { CardContent } from "@mui/material";
import { IconButton } from "@mui/material";
import { Typography } from "@mui/material";
import { Icon } from "@mui/material";
// import { borderRadius, spacing } from '@mui/system';
import { grey } from '@mui/material/colors';
import CommentBox from './CommentBox';


const faces = [
  "http://i.pravatar.cc/300?img=6",
  "http://i.pravatar.cc/300?img=7",
  "http://i.pravatar.cc/300?img=8",
  "http://i.pravatar.cc/300?img=9"
];

const LogCard = ({detail_text,location, comments}) => (
  <Container className='bodyContainer'
  sx={{
    alignItems: 'center',
    position: 'sticky',
  }}
  >
  
  <Card id="cardBody"
    sx={{
    mt: 5,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: 0,
    borderRadius: 5,

    // position: 'relative',
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
        borderRadius: 5,
      }}
    />
    </Card>
    <Container className='cardContainer'
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
    >
    <Box sx={{
                  boxShadow: '0 16px 40px -12.125px rgba(0,0,0,0.3)',
                  borderRadius: 10,
                  marginBottom: 10,
                  backgroundColor: '#ffffff',
                  position: 'absolute',
                  top: '75%',
                  textAlign: 'left',
                  maxWidth: 350,
                  width: '60%',
                  overflow: 'auto',
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
          {detail_text}
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
        {location}
      </Typography>
      {/* <div className="ContentRating">

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
      </div> */}
      {/* <Typography gutterBottom color="TextSecondary">
        {detail_text}
      </Typography> */}
      <div className="ContentTail"
      // sx={{
      //   display: 'flexbox',
      //   flexDirection: 'row',
      // }}
      >
        {faces.map(face => (
          <Avatar className="Avatar" key={face} src={face}
          sx={{
          }}
          />
        ))}
        {/* <Typography
          className="TypographyReviewer"
          color="textSecondary"
          sx={{
            marginLeft: 1,
            marginRight: 'auto',
          }}
        >
          +420
        </Typography> */}
        <IconButton className="IconButton">
          <Icon>more_horiz</Icon>
        </IconButton>
      </div>
    </CardContent>

    </Box>
    </Container>
  </Container>
  )

export default LogCard;
