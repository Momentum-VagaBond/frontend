import * as React from 'react';
import { useState } from 'react';
import axios from "axios";
import { Navigate, useNavigate } from 'react-router-dom';
import { Container, CardMedia, FormGroup, Button, Box, Card, Grid, Paper, CssBaseline, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import { Theme } from '../Theme';
import { ThemeProvider } from 'styled-components';
import MapBG from './MapBG.png'



export default function NewTrip({token, isLoggedIn, VBLogo, loggedUserPk}) {
    const [title, setTitle] = useState("");
    const [location, setLocation] = useState("");
    const [begin, setBegin] = useState("");
    const [end, setEnd] = useState("");
    const [subscribers, setSubscribers] = useState([]);
    const [error, setError] = useState("");
    const [submit, setSubmit] = useState();
    const [confirm, setConfirm] = useState(false);
    const navigate = useNavigate();



    const handleSubmit = (e) => {
    e.preventDefault();
    setConfirm(true);
    setError("");
        console.log(location, title, begin, end);
    navigate('/home')


    axios
    .post("https://momentum-vagabond.herokuapp.com/api/trips/",
    {
        "title": title,
        "location": location,
        "begin": begin,
        "end": end,
        "subscribers": [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37],
    },
    {
        headers: {Authorization: `Token ${token}`}
    }
    )
    .then((response) => {
        console.log(response.data);
    setTitle('')
    setLocation('')
    setBegin('')
    setEnd('')
    setSubscribers([])
    alert("form submitted!")
    })
    .catch((e) => setError(e.message))
    }


    // if (!loggedUserPk) {
    //     return <Navigate to="/login" />
    // }


    return (
    <ThemeProvider theme={Theme}>
    <CssBaseline />
            
        <Container
        sx={{
            marginTop: 5,
            display: 'flex',
            flex: 1,
            flexDirection: 'column',
            alignItems: 'center',
            // backgroundImage: `url(${MapBG})`,
            // backgroundColor: '#e9ecef',
            position: 'relative',
            width: '100%',
        }}>
        {/* <Typography component="h1" variant="h5" >
            <strong>Create a Trip</strong>
        </Typography> */}

        <Grid container component="main">
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
        sx={{
            marginTop: 0,
            marginBottom: 0,
            marginRight: 0,
            display: 'flex',
            flex: 1,
            flexDirection: 'column',
            alignItems: 'center',
            
            // position: 'absolute',
            // paddingRight: 2,
            // paddingBottom: 6,
            paddingLeft: 0,
            position: 'fixed',
            width: '40ch',
            '& .MuiTextField-root': { m: 1, width: '40ch' },
        }}
        noValidate
        autoComplete="off"
        >
    {error && <div className="error">{error}</div>}
    <form onSubmit={handleSubmit}>


    <FormGroup>
        <label htmlFor='reg-title'> Title * </label>
        <TextField
            placeholder='Title'
            id="title"
            // label="Title"
            name='Title'
            variant="outlined"
            className='tripTitle'
            required value={title}
            margin="normal"
            helperText="This is required!"
            onChange={(e) => setTitle(e.target.value)}
        />
    </FormGroup>

    <FormGroup>
        <label htmlFor='reg-location'> Location * </label>
        <TextField
            placeholder='Location'
            id="location"
            // label="Location"
            name='Location'
            variant="outlined"
            className='tripLocation'
            margin="normal"
            required value={location}
            helperText="This is required!"
            onChange={(e) => setLocation(e.target.value)}
        />
    </FormGroup>

    <FormGroup>
    <label htmlFor='begin'> Start Date * </label>
    <TextField
        placeholder='Start Date'
        id="start-date"
        type="date"
        name='startDate'
        margin="normal"
        required value={begin}
        helperText="This is required!"
        onChange={(e) => setBegin(e.target.value)}
        sx={{ width: 220 }}
        InputLabelProps={{
            shrink: true,
        }}
    />
    </FormGroup>

    <FormGroup>
    <label htmlFor='begin'> End Date * </label>
    <TextField
        placeholder='End Date'
        id="end-date"
        type="date"
        name='endDate'
        margin="normal"
        required value={end}
        onChange={(e) => setEnd(e.target.value)}
        sx={{ width: 220 }}
        InputLabelProps={{
            shrink: true,
        }}
    />
    </FormGroup>

    <Button 
        type='submit'
        fullWidth
        variant="contained"
        sx={{
            mt: 3,
            mb: 2,
            borderRadius: 5,
        }}
        >
    Start Trip
    </Button>
    </form>
    
    </Box>
    </Grid>
    </Grid>
    </Container>

    {/* <Card  sx={{
        marginTop: 4,
        maxWidth: 300,
        backgroundColor: "#FAFAFA"
    }}
        >
    {/* <CardActionArea component={RouterLink} to={`/trips/${tripId}`}>
    <CardMedia
        component="img"
        alt="new trip"
        height={240}
        width='auto'
        src={VBLogo}
        // image="/static/images/cards/contemplative-reptile.jpg"
        // src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEX///8AAABKSkro6Ojq6upOTk6EhIQUFBTk5ORjY2NpaWkfHx+7u7srKyswMDCzs7Pa2tpycnJ7e3vx8fH39/eRkZF+fn7Ly8s3NzeZmZlsbGysrKzCwsLT09NfX18KCgolJSWMjIyfn5+tN9VaAAAEKElEQVR4nO3da3uiMBCG4aByEKlK66muPf7/H7naw9pVJGEymTD0fT63JvdVFQsJGnOsKmfJ8JqVlfmsuIs9l2DNxx/A2NMI2ok4xCfoubkxi9hzCNzBPMeeQuBq8xJ7CoF7NbFnEDwI9Qeh/iDU34UwT0faS/NWYWr0l7YKR7Gnx9AIQvVBqD8I9Qeh/mIKi2qdbbJ1VQQdJZpwW5/PW87qbbiBIgkXl2e88kWooaIIl/Pkut0yzGAxhI8NvlPvQUaLICxvAJNkH2I4eWHbWfVpgPHEhXULMEnu+QeUFv5pBSYJ/1uqsHBiASbJA/eQwsKpVVhzDykrXFqBScL9GU5WePtAcY77zUZUuHIAHufAm6jQ7RL6gXdQUWH7sfC7jHdQUeGrk3DHO6ik0O1lyP1ClBTaD/ef8R70JYVjR+GEddQ+Cseso0LIGYQQ0oKQMwghpAUhZxBCSAtCziCEkBaEnEEIIS0IOYMQQloQcgYhhLQg5AxCCGlByBmEENKCkDMIIaQFIWcQQkgLQs5c15f2ZfXlajLu1uTJUfjU+ZFX/MLDpmmTZLzmm5sr/CnC5V5u6h2qmzehdhc+2PcuxapsWiHeWdjvGys2bO7rKnTbFBKv611THYX9v3Hks5+wvy/Bc6WP8E1qll490oVbuVl69UQWum3Mit+OKrRtw+5PC6JQboa+5TThQW6G3m1JQg1Hiu9qklBufv7lFKHLVvr+VBCE/f7EfdmBIHyTmhxL7wRhJjc9ht4Iwnu56TF0P/i/YUYQruWmx9AjQVjJTY+hiiDUdTxcEoSqPtO8GIrQ5e45fWlPEmr63+JAEip6mv58kuJ//J8/avp1MeZ2c0MVul4dix39XNvN23L2K4/zpTrOZHid8/4F1y1+wbWnvp/NqK4njGvATfX1On7zXTNpazFW1aZf33Q5z1jXYnwph72ehpS2NVHdG/66NgghpAUhZxBCSAtCziCEkBaEnEEIIS0IOYMQQloQcgYhhLQg5AxCCGlByBmEENKCkDMIIaQFIWcQQkgLQs4ghJAWhJwNXzj81ZfDF7p+L3fbit/uSQqN29rwO95BRYVue/qvN4V4JSp02w/esCvEJ1Gh2wuRd0xZoXHZilLbH6ZTskKXTf3NO1/oyQodNjDu7Q/SLWGh/aDftDnLK2GhdUN4w+05PZMWWrZoMh8LT4kLWzfaTgOMJy9sebdhf5c5FUF4c9P7u/1XCcUQmmXT3Rl2zbdy9i6K8PiW+nLhy/nfRL+KJDRmW+f/hpnVW/svUIsmPFZU62yTrSvuz2n/F1MoE4T6g1B/EOoPQv21C9PY02MobRXm6Uh7ad4qHGAQ6g9C/UGoP5Pbf0Z1uYq7W/pUKrsxefcqPV95ROu0zqOIPYmgfSwoK4b7V5x/r5irprPYcwnQrPxYxvIXCI91UZD5cOYAAAAASUVORK5CYII="
    />
    </Card> */} 



    </ThemeProvider>
    );
}
