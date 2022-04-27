import React from 'react';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Icon from '@mui/material/Icon';

const faces = [
  'http://i.pravatar.cc/300?img=6',
  'http://i.pravatar.cc/300?img=7',
  'http://i.pravatar.cc/300?img=8',
  'http://i.pravatar.cc/300?img=9',
];

export const LogCard = () => (
  <Card className={'MuiReviewCard--01'}>
    <CardMedia
      component={'img'}
      className={'MuiCardMedia-root'}
      src={
        'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80'
      }
    />
    <CardContent className={'MuiCardContent-root'}>
      <div className={'ContentHead'}>
        <Typography
          className={'MuiTypography--heading'}
          variant={'h6'}
          gutterBottom
        >
          Colloseo
        </Typography>
        <IconButton className={'MuiIconButton-root'}>
          <Icon>favorite</Icon>
        </IconButton>
      </div>
      <Typography
        className={'MuiTypography--subheading'}
        color={'textSecondary'}
        gutterBottom
      >
        <Icon className={'MuiIcon--text'}>location_on</Icon> Rome
      </Typography>
      <div className={'ContentRating'}>
        <Icon className={'MuiIcon--starred'}>star_rounded</Icon>
        <Icon className={'MuiIcon--starred'}>star_rounded</Icon>
        <Icon className={'MuiIcon--starred'}>star_rounded</Icon>
        <Icon className={'MuiIcon--starred'}>star_rounded</Icon>
        <Icon>star_rounded</Icon>
        <Typography className={'MuiTypography--rating'} inline="true">
          4.0
        </Typography>
      </div>
      <Typography gutterBottom color={'textSecondary'}>
        Talking about travelling or new jobs, many people often think of change
        of environment...
      </Typography>
      <div className={'ContentTail'}>
        {faces.map(face => (
          <Avatar className={'MuiAvatar-root'} key={face} src={face} />
        ))}
        <Typography
          className={'MuiTypography--reviewer'}
          color={'textSecondary'}
        >
          +420
        </Typography>
        <IconButton className={'MuiIconButton-root'}>
          <Icon>more_horiz</Icon>
        </IconButton>
      </div>
    </CardContent>
  </Card>
);
LogCard.getTheme = muiBaseTheme => ({
  MuiCard: {
    root: {
      "&.MuiReviewCard--01": {
        marginBottom: 200,
        maxWidth: 304,
        margin: "auto",
        overflow: "initial",
        position: "relative",
        transition: "0.3s cubic-bezier(.47,1.64,.41,.8)",
        boxShadow: "none",
        borderRadius: 0,
        "&:hover": {
          "& .MuiTypography--explore": {
            transform: "scale(1.2)"
          }
        },
        "& button": {
          marginLeft: 0
        },
        "& .MuiCardMedia-root": {
          height: "100%"
        },
        "& .MuiCardContent-root": {
          boxShadow: "0 16px 40px -12.125px rgba(0,0,0,0.3)",
          borderRadius: muiBaseTheme.spacing.unit / 2,
          margin: `0 ${muiBaseTheme.spacing.unit * 2}px`,
          backgroundColor: "#ffffff",
          position: "absolute",
          top: "60%",
          padding: muiBaseTheme.spacing.unit * 3,
          textAlign: "left",
          "& .ContentHead": {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
          },
          "& .MuiIcon--text": {
            fontSize: 14,
            color: muiBaseTheme.palette.grey[500]
          },
          "& .ContentRating": {
            marginBottom: muiBaseTheme.spacing.unit / 2,
            "& svg, .material-icons": {
              fontSize: 20,
              color: muiBaseTheme.palette.grey[300]
            },
            "& .MuiIcon--starred": {
              color: "#ffbb00"
            },
            "& .MuiTypography--rating": {
              verticalAlign: "top",
              fontWeight: "bold",
              fontSize: 16,
              marginLeft: muiBaseTheme.spacing.unit * 2
            }
          },
          "& .MuiAvatar-root": {
            width: 32,
            height: 32,
            display: "inline-block",
            border: "2px solid white",
            "&:not(:first-of-type)": {
              marginLeft: -muiBaseTheme.spacing.unit * 1.5
            }
          },
          "& .ContentTail": {
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            "& .MuiTypography--reviewer": {
              marginLeft: muiBaseTheme.spacing.unit,
              marginRight: "auto"
            }
          }
        },
        "& .MuiIconButton-root": {
          padding: muiBaseTheme.spacing.unit
        }
      }
    }
  }
});
LogCard.metadata = {
  name: "Review Card I",
  description: "Commonly found in traveling guide"
};









// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Card from '@mui/material/Card';
// import CardHeader from '@mui/material/CardHeader';
// import CardMedia from '@mui/material/CardMedia';
// import CardContent from '@mui/material/CardContent';
// import CardActions from '@mui/material/CardActions';
// import Collapse from '@mui/material/Collapse';
// import Avatar from '@mui/material/Avatar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import { red } from '@mui/material/colors';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// import { Box } from '@mui/system';

// const ExpandMore = styled((props) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//   marginLeft: 'auto',
//   transition: theme.transitions.create('transform', {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));

// export default function LogCard() {
//   const [expanded, setExpanded] = React.useState(false);

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };

//   return (
//     <Box
//     sx={{
//         marginTop: 8,
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//     }}
//     >
//     <Card sx={{ maxWidth: 345 }}>
//       <CardHeader
//         avatar={
//           <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
//             K
//           </Avatar>
//         }
//         action={
//           <IconButton aria-label="settings">
//             <MoreVertIcon />
//           </IconButton>
//         }
//         title="Landed in New Orleans!"
//         subheader="May 14, 2022"
//       />
//       <CardMedia
//         component="img"
//         height="194"
//         image="src/assets/TravelStock.jpg"
//         alt="temp stock photo"
//       />
//       <CardContent>
//         <Typography variant="body2" color="text.secondary">
//             Had a very luxurious flight down to the Big Easy!
//         </Typography>
//       </CardContent>
//       <CardActions disableSpacing>
//         <IconButton aria-label="add to favorites">
//           <FavoriteIcon />
//         </IconButton>
//         <IconButton aria-label="share">
//           <ShareIcon />
//         </IconButton>
//         <ExpandMore
//           expand={expanded}
//           onClick={handleExpandClick}
//           aria-expanded={expanded}
//           aria-label="show more"
//         >
//           <ExpandMoreIcon />
//         </ExpandMore>
//       </CardActions>
//       <Collapse in={expanded} timeout="auto" unmountOnExit>
//         <CardContent>
//           <Typography paragraph>Method:</Typography>
//           <Typography paragraph>
//             Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
//             aside for 10 minutes.
//           </Typography>
//           <Typography paragraph>
//             Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
//             medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
//             occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
//             large plate and set aside, leaving chicken and chorizo in the pan. Add
//             pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
//             stirring often until thickened and fragrant, about 10 minutes. Add
//             saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
//           </Typography>
//           <Typography paragraph>
//             Add rice and stir very gently to distribute. Top with artichokes and
//             peppers, and cook without stirring, until most of the liquid is absorbed,
//             15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
//             mussels, tucking them down into the rice, and cook again without
//             stirring, until mussels have opened and rice is just tender, 5 to 7
//             minutes more. (Discard any mussels that don&apos;t open.)
//           </Typography>
//           <Typography>
//             Set aside off of the heat to let rest for 10 minutes, and then serve.
//           </Typography>
//         </CardContent>
//       </Collapse>
//     </Card>
//     </Box>
//   );
// }