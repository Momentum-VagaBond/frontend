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
import InfoIcon from '@mui/icons-material/Info';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Button from "@mui/material/Button";
import Moment from 'react-moment';
import { Link as RouterLink, Navigate } from 'react-router-dom';
import Flags from './Flags.jpg';
import { IconButton } from "@mui/material";


export const TripDetail = ({token, pk, logId, username, isLoggedIn }) => {

  const [trip, setTrip] = useState(null)
  const [tripLocation, setTripLocation] = useState("")
  const [logs, setLogs] = useState([])
  const [tripPk, setTripPk] = useState([])
  // const [selectedId, setSelectedId] = useState(null)
  // const [acceptedResponse, setAcceptedResponse] = useState(null)
  // const [questionSubmitted, setQuestionSubmitted] = useState(false)
  
  const params = useParams()

  useEffect(() => {
    axios
      .get(`https://momentum-vagabond.herokuapp.com/api/trips/${params.tripId}`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((res) => {
        setTrip(res.data)
        setLogs(res.data.trip_logs)
        setTripPk(res.data.pk)
        setTripLocation(res.data.location)
        // setTripId(res.data.pk)
        console.log("logpk", res.data.trip_logs.pk)
        // setAcceptedResponse(res.data.accepted_response)
        console.log("trip detail request fired")
        console.log(res.data.trip_logs)
        console.log(res.data)
        // console.log(username)
      })
  }, [params.tripId, token])

  if (!isLoggedIn) {
    return Navigate('/login');
  }


  return (

    <ThemeProvider theme={Theme}>
<Container component="main"
  sx={{
    marginBottom: 10,
    backgroundColor: '#e9ecef',
    position: 'absolute',
  }}
  >
  <CssBaseline />

  {/* <Box
  sx={{
    border: 'dotted',
  }}
  > */}
  <ImageList
    sx={{
      width: 'auto',
      height: 'auto',
      marginTop: 5,
      marginRight: 1,
      marginLeft: 1,
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
    <h2>{username}, this is trip #{tripPk} to {tripLocation}!</h2>
  </ListSubheader>
  </Card>
  </ImageListItem>
    
  {itemData.map((item) => (
        <ImageListItem key={item.title}
        sx={{
          margin: .5,
        }}
        >
          <img
            src={`${Flags}?w=248&fit=crop&auto=format`}
            srcSet={`${Flags}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>


    {/* </Box> */}
{/* <CardActionArea component={RouterLink} to={`/trips/${params.tripId}/${log.pk}`}></CardActionArea> */}
  </Container>
  </ThemeProvider>
  );
}

const itemData = [
  {
    img: {Flags},
    title: 'Breakfast',
    author: '@bkristastucchio',
    rows: 2,
    cols: 2,
  },
  {
    img: {Flags},
    title: 'Burger',
    author: '@rollelflex_graphy726',
  },
  {
    img: {Flags},
    title: 'Camera',
    author: '@helloimnik',
  },
  {
    img: {Flags},
    title: 'Coffee',
    author: '@nolanissac',
    cols: 2,
  },
]




{/* <ImageListItem key={trip.pk}>
    {logs.map((log) => (
    <TripDetailCard
    // key={trip.pk}
    // sx={{
    //   marginTop: 8,
    //   paddingLeft: 4,
    // }}
      logId={log.pk}
      details={log.details}
      location={log.location}
      date={log.date_logged}
    />
    ))}
              <ImageListItemBar
            actionIcon={
              <Button
              className='MuiButton--readMore' size="xs" component={RouterLink} to={`/trips/${params.tripId}/${logId}`}
              >
                <Moment format="MM/D/YYYY">{trip.date}</Moment>
                {trip.location}
                {trip.details}
                <InfoIcon />
              </Button>
            }
          />
    </ImageListItem>
</ImageList> */}