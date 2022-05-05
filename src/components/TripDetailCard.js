// import React from 'react';
// import { Link as RouterLink } from 'react-router-dom';
// import { useParams} from 'react-router-dom'
// import { Button, Container } from '@mui/material';
// import { Card } from '@mui/material';
// import { CardMedia } from '@mui/material';
// import { CardContent } from '@mui/material';
// import { Typography } from '@mui/material';
// import { Box } from '@mui/system';
// import Moment from 'react-moment';
// import ImageList from '@mui/material/ImageList';
// import ImageListItem from '@mui/material/ImageListItem';
// import ImageListItemBar from '@mui/material/ImageListItemBar';
// import ListSubheader from '@mui/material/ListSubheader';
// import IconButton from '@mui/material/IconButton';
// import InfoIcon from '@mui/icons-material/Info';



// export const TripDetailCard = ({details, pk, date, location, logId}) => {
//     const params = useParams()

//     return (
//       <div>
//         <ImageList key={{pk}} cols={2} rowHeight={150}
//           sx={{
//             width: 500,
//             height: 450,
//             // columnCount: 2,
//             marginBottom: 1,
//             position: 'relative',
//             border: 'dotted',
//             }}
//           >
//             <Container>
//         <Card>
//       <ImageListItem key="Subheader" col={2}>
//         <ListSubheader component="div">{location}</ListSubheader>
//       </ImageListItem>
//         <ImageListItem>
//           <img
//             src={
//               'https://source.unsplash.com/random'
//             }
//             style={{
//                 height: 'auto',
//                 width: '100%',
//             }}
//             alt='random'
//             loading="lazy"
//           />
//           {/* <ImageListItemBar
//             actionIcon={
//               <Button
//               className='MuiButton--readMore' size="xs" component={RouterLink} to={`/trips/${params.tripId}/${logId}`}
//               >
//                 <Moment format="MM/D/YYYY">{date}</Moment>
//                 {location}
//                 {details}
//                 <InfoIcon />
//               </Button>
//             }
//           /> */}
//         </ImageListItem>
//         </Card>
//         </Container>
//     </ImageList>
//     </div>
//     )};






// // import React from 'react';
// // import { Link as RouterLink } from 'react-router-dom';
// // import { useParams} from 'react-router-dom'
// // import { Button } from '@mui/material';
// // import { Card } from '@mui/material';
// // import { CardMedia } from '@mui/material';
// // import { CardContent } from '@mui/material';
// // import { Typography } from '@mui/material';
// // import { Box } from '@mui/system';
// // import Moment from 'react-moment';




// // export const TripDetailCard = ({details, pk, date, location, logId}) => {
// //     const params = useParams()
    
// //     return (

// //     <Card className='MuiPostCard'
// //     sx={{
// //         borderRadius: 10,
// //         transition: '0.3s',
// //         boxShadow: '0px 14px 80px rgba(34, 35, 58, 0.2)',
// //         width: '90%',
// //         height: '90%',
// //         maxHeight: 125,
// //         position: 'relative',
// //         maxWidth: 600,
// //         marginLeft: 2,
// //         marginRight: 2,
// //         marginTop: 3,
// //         overflow: 'visible',
// //         background: '#ffffff',
// //         display: 'flex',
// //         // flexDirection: 'column',
// //         alignItems: 'center',
// //         padding: 0,
// //         paddingTop: 10,
// //         paddingBottom: 10,
// //         '&:hover': {
// //         transform: 'translateY(-3px)',
// //         boxShadow: '0 4px 20px 0 rgba(0,0,0,0.12)',
// //         }
// //     }}
// //     >
// //     <CardMedia
// //         className='MuiCardMedia-root'
// //         //need to connect log photopk here in the image field//
// //         image={
// //             'https://source.unsplash.com/random'
// //         }
// //         sx={{
// //             flexShrink: 0,
// //             position: 'relative',
// //             width: '30%',
// //             maxwidth: 200,
// //             paddingTop: 13,
// //             paddingBottom: 8,
// //             transform: "translateX(-10%)",
// //             // boxShadow: '7px 4px 30px 2px rgba(252, 56, 56, 0.2)',
// //             borderRadius: 10, // 16px
// //             backgroundSize: 'constrain',
// //             backgroundImage: 'linear-gradient(147deg, #fe8a39 0%, #fd3838 74%)',
// //             backgroundColor: '#0000',
// //             overflow: 'initial',
// //             '&:after': {
// //                 content: '" "',
// //                 // position: 'absolute',
// //                 top: 0,
// //                 left: 0,
// //                 // width: '100%',
// //                 // height: '100%',
// //                 borderRadius: 2,

// //             },
// //         }}
// //     />
    
// //     <Box className='cardContentBox'
// //     sx={{
// //     }}
// //     >
// //     <CardContent className='MuiCardContent-root' key={logId}
// //     sx={{
// //         textAlign: 'left',
// //         p: 2,
// //         position: 'relative',
// //     }}
// //     >
// //         <Typography className='MuiTypography--date' variant='overline'>
// //             {/* 28 Mar 2019 */}
// //             <Moment format="MM/D/YYYY">{date}</Moment>
// //         </Typography>
// //         <Typography
// //             sx={{fontWeight: 'bold'}}
// //             className='MuiTypography--heading'
// //             variant='h6'
// //             gutterBottom
// //         >
// //             {location}
// //         </Typography>
// //         <Typography
// //         className='MuiTypography--subheading'
// //         sx={{
// //             marginBottom: 2,
// //             marginRight: 3,
// //             display: 'flex',
// //             alignItems: 'left',
// //             overflow: 'initial',
// //         }}
// //         >
// //             {details}
// //         </Typography>
// //         {/* <CardActionArea component={RouterLink} to={`/trips/${params.tripId}`}> */}
// //         <Button className='MuiButton--readMore' size="xs" component={RouterLink} to={`/trips/${params.tripId}/${logId}`}
// //         sx={{
// //             // backgroundImage: 'linear-gradient(147deg, #2af1b5 0%, #fd3838 74%)',
// //             backgroundColor: '#F86A13',
// //             backgroundSize: 'constrain',
// //             position: 'relative',
// //             // boxShadow: '0px 4px 32px rgba(252, 56, 56, 0.4)',
// //             borderRadius: 5,
// //             paddingLeft: 12,
// //             paddingRight: 12,
// //             color: '#ffffff',
// //             marginRight: 10,
// //             overflow: 'clip',
// //         }}
// //         >
// //         Read More
// //         </Button>
// //         {/* </CardActionArea> */}
// //     </CardContent>
// //     </Box>
// //     </Card>
// //     )};