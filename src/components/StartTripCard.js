import * as React from 'react';
import Card from '@mui/material/Card';
import { Box } from '@mui/system';
// import CardActionArea from '@mui/material/CardActionArea';
// import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link as RouterLink } from 'react-router-dom'
import Logo from './VagaBondLogo.png';


export const StartTripCard = () => {
 
    return (
    
    <Box component={RouterLink} to={"/newtrip"} sx={{
        marginTop: 4,
        maxWidth: 300,
        //backgroundColor: "#FAFAFA"
    }}
        >
    
    {/* <CardActionArea component={RouterLink} to={`/trips/${tripId}`}> */}
    {/* <CardMedia
        component="img"
        alt="new trip"
        height={240}
        width='auto'
        src={Logo}
        // image="/static/images/cards/contemplative-reptile.jpg"
        // src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEX///8AAABKSkro6Ojq6upOTk6EhIQUFBTk5ORjY2NpaWkfHx+7u7srKyswMDCzs7Pa2tpycnJ7e3vx8fH39/eRkZF+fn7Ly8s3NzeZmZlsbGysrKzCwsLT09NfX18KCgolJSWMjIyfn5+tN9VaAAAEKElEQVR4nO3da3uiMBCG4aByEKlK66muPf7/H7naw9pVJGEymTD0fT63JvdVFQsJGnOsKmfJ8JqVlfmsuIs9l2DNxx/A2NMI2ok4xCfoubkxi9hzCNzBPMeeQuBq8xJ7CoF7NbFnEDwI9Qeh/iDU34UwT0faS/NWYWr0l7YKR7Gnx9AIQvVBqD8I9Qeh/mIKi2qdbbJ1VQQdJZpwW5/PW87qbbiBIgkXl2e88kWooaIIl/Pkut0yzGAxhI8NvlPvQUaLICxvAJNkH2I4eWHbWfVpgPHEhXULMEnu+QeUFv5pBSYJ/1uqsHBiASbJA/eQwsKpVVhzDykrXFqBScL9GU5WePtAcY77zUZUuHIAHufAm6jQ7RL6gXdQUWH7sfC7jHdQUeGrk3DHO6ik0O1lyP1ClBTaD/ef8R70JYVjR+GEddQ+Cseso0LIGYQQ0oKQMwghpAUhZxBCSAtCziCEkBaEnEEIIS0IOYMQQloQcgYhhLQg5AxCCGlByBmEENKCkDMIIaQFIWcQQkgLQs5c15f2ZfXlajLu1uTJUfjU+ZFX/MLDpmmTZLzmm5sr/CnC5V5u6h2qmzehdhc+2PcuxapsWiHeWdjvGys2bO7rKnTbFBKv611THYX9v3Hks5+wvy/Bc6WP8E1qll490oVbuVl69UQWum3Mit+OKrRtw+5PC6JQboa+5TThQW6G3m1JQg1Hiu9qklBufv7lFKHLVvr+VBCE/f7EfdmBIHyTmhxL7wRhJjc9ht4Iwnu56TF0P/i/YUYQruWmx9AjQVjJTY+hiiDUdTxcEoSqPtO8GIrQ5e45fWlPEmr63+JAEip6mv58kuJ//J8/avp1MeZ2c0MVul4dix39XNvN23L2K4/zpTrOZHid8/4F1y1+wbWnvp/NqK4njGvATfX1On7zXTNpazFW1aZf33Q5z1jXYnwph72ehpS2NVHdG/66NgghpAUhZxBCSAtCziCEkBaEnEEIIS0IOYMQQloQcgYhhLQg5AxCCGlByBmEENKCkDMIIaQFIWcQQkgLQs4ghJAWhJwNXzj81ZfDF7p+L3fbit/uSQqN29rwO95BRYVue/qvN4V4JSp02w/esCvEJ1Gh2wuRd0xZoXHZilLbH6ZTskKXTf3NO1/oyQodNjDu7Q/SLWGh/aDftDnLK2GhdUN4w+05PZMWWrZoMh8LT4kLWzfaTgOMJy9sebdhf5c5FUF4c9P7u/1XCcUQmmXT3Rl2zbdy9i6K8PiW+nLhy/nfRL+KJDRmW+f/hpnVW/svUIsmPFZU62yTrSvuz2n/F1MoE4T6g1B/EOoPQv21C9PY02MobRXm6Uh7ad4qHGAQ6g9C/UGoP5Pbf0Z1uYq7W/pUKrsxefcqPV95ROu0zqOIPYmgfSwoK4b7V5x/r5irprPYcwnQrPxYxvIXCI91UZD5cOYAAAAASUVORK5CYII="
    /> */}
    
    {/* fontFamily="Permanent Marker, cursive" */}
        <Typography variant="h3" gutterBottom mb={2} mt={2} align="center"sx={{ typography: 'h5.fontSize' }} color="blackk" > 
        Click here to create a new trip!

        </Typography>
        {/* <Typography variant="body2" align="center" color="text.secondary">

        </Typography> */}
    

    {/* <CardActions>
        <Button size="small">Make favorite</Button>
        <Button size="small">Trip details</Button>
    </CardActions> */}
        {/* </CardActionArea> */}
       
    </Box>
    
    );
}