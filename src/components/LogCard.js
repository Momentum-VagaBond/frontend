import * as React from 'react';
import { Container } from '@mui/material';
import { Card } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import ImageList from "@mui/material/ImageList";
import { ImageListItem } from "@mui/material";
import ListSubheader from "@mui/material/ListSubheader";
import { ImageListItemBar } from '@mui/material';
import Flags from './Flags.jpg';
import { ThemeProvider } from 'styled-components';
import { Theme } from '../Theme';



const LogCard = ({detail_text,location, date_logged, logPk, log_user}) => (

  <ThemeProvider theme={Theme}>
  <Container component="main"
    sx={{
      marginBottom: 10,
      backgroundColor: '#e9ecef',
      position: 'relative',
    }}
    >
  <CssBaseline />

  <ImageList
    sx={{
      width: '100%',
      height: '100%',
      marginTop: 5,
    }}
    >
  <ImageListItem key="Subheader" cols={2}>
  <Card>
  <ListSubheader component="div"
  sx={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }}
  >
    <h2>{log_user}, this is trip #{logPk} to {location}!</h2>
  </ListSubheader>
  </Card>
  </ImageListItem>

        <ImageListItem key={logPk}
        sx={{
          margin: .5,
        }}
        >
          <img
            src={`${Flags}?w=248&fit=crop&auto=format`}
            srcSet={`${Flags}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={location}
            loading="lazy"
          />
          <ImageListItemBar
            details={detail_text}
            date_logged={date_logged}
            
            // actionIcon={
            //   <Button
            //   className='TripDetailButton' size="xs" component={RouterLink} to={`/trips/${params.tripId}/${logId}`}
            //   >
            //     <LaunchTwoToneIcon />
            //   </Button>
            // }
          />
        </ImageListItem>
    </ImageList>

    {/* </Box> */}
{/* <CardActionArea component={RouterLink} to={`/trips/${params.tripId}/${log.pk}`}></CardActionArea> */}
  </Container>
  <p>Comments will go down here</p>
  </ThemeProvider>
  )
  export default LogCard;
//   <Container className='bodyContainer'
//   sx={{
//     alignItems: 'center',
//     position: 'sticky',
//   }}
//   >
  
//   <Card id="cardBody"
//     sx={{
//     mt: 5,
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     border: 0,
//     borderRadius: 5,
//     }}
//   >
//     <CardMedia
//       component="img"
//       className="CardMedia"
//       src={
//         "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
//       }
//       sx={{
//         height: 'fit-content',
//         borderRadius: 5,
//       }}
//     />
//     </Card>
//     <Container className='cardContainer'
//     sx={{
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//     }}
//     >
//     <Box sx={{
//                   boxShadow: '0 16px 40px -12.125px rgba(0,0,0,0.3)',
//                   borderRadius: 5,
//                   // marginBottom: 10,
//                   backgroundColor: '#ffffff',
//                   position: 'absolute',
//                   top: '90%',
//                   textAlign: 'left',
//                   maxWidth: 300,
//                   width: '60%',
//                   overflow: 'auto',
//       }}
//     >
//     <CardContent className='CardContent'
//       sx={{
//           // marginBottom: 200,
//           maxWidth: 350,
//           margin: 0,
//           overflow: 'initial',
//           borderRadius: 5,
        
//       }}>
//       <div className="ContentHead"
//         sx={{
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'space-between',
//         }}
//       >
//         <Typography
//           className="Typography"
//           variant="h7"
//           gutterBottom
//         >
//           {detail_text}
//         </Typography>
//         <IconButton className="IconButton">
//           <Icon>favorite</Icon>
//         </IconButton>
//       </div>
//       <Typography
//         className="TypographySubheading"
//         color="textSecondary"
//         gutterBottom
//       >
//         <Icon className="IconText"
//         sx={{
//           fontSize: 14,
//           color: grey,
//         }}
//         >
//           location_on
//         </Icon>
//         {location}
//       </Typography>
//       {/* <div className="ContentRating">

//         <Typography className="TypographyRating" inline="true">
//           4.0
//         </Typography>
//       </div> */}
//       {/* <Typography gutterBottom color="TextSecondary">
//         {detail_text}
//       </Typography> */}
//       {/* <div className="ContentTail"> */}
//         {/* {faces.map(face => (
//           <Avatar className="Avatar" key={face} src={face}
//           sx={{
//           }}
//           />
//         ))} */}
//         {/* <IconButton className="IconButton">
//           <Icon>more_horiz</Icon>
//         </IconButton> */}
//       {/* </div> */}
//     </CardContent>

//     </Box>
//     </Container>
//   </Container>
//   )

// export default LogCard;
