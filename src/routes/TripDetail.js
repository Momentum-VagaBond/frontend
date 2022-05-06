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
import { Link as RouterLink, Navigate } from 'react-router-dom';
import Flags from './Flags.jpg';


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

  if (!token) {
    return <Navigate to="/login" />
} 


  return (

  <ThemeProvider theme={Theme}>

  <CssBaseline />

  <Container component="main"
    sx={{
      marginBottom: 10,
      backgroundColor: '#e9ecef',
      position: 'absolute',
    }}
    >

  <Card
  sx={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 2,
  }}
  >
    <h2>{tripLocation}!</h2>
  </Card>

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
  {itemData.map((item) => (
        <ImageListItem key={item.title}
        sx={{
          marginBottom: .5,
          marginTop: .5,
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
              <Button
              className='TripDetailButton' size="xs" component={RouterLink} to={`/trips/${params.tripId}/${logId}`} icon={<LaunchTwoToneIcon sx={{ color: 'white'}}/>}
              />
                // <LaunchTwoToneIcon />
              // </Button>
            }/>
        </ImageListItem>
      ))}

    </ImageList>

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