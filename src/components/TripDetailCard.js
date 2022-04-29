import React from 'react';
import { Button } from '@mui/material';
import { Card } from '@mui/material';
import { CardMedia } from '@mui/material';
import { CardContent } from '@mui/material';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';


export const TripDetailCard = ({log, details, date_logged}) => {
    return (
    <Card className='MuiPostCard'
    sx={{
        borderRadius: 16,
        transition: '0.3s',
        boxShadow: '0px 14px 80px rgba(34, 35, 58, 0.2)',
        width: '90%',
        position: 'relative',
        maxWidth: 800,
        marginLeft: 2,
        marginRight: 2,
        marginTop: 2,
        overflow: 'hidden',
        background: '#ffffff',
        display: 'flex',
        // flexDirection: 'column',
        alignItems: 'center',
        padding: 0,
        '&:hover': {
        transform: 'translateY(-3px)',
        boxShadow: '0 4px 20px 0 rgba(0,0,0,0.12)',
        }
    }}
    >
    <CardMedia
        className='MuiCardMedia-root'
        image={
            'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2000px-Git_icon.svg.png'
        }
        sx={{
            flexShrink: 0,
            position: 'relative',
            width: '40%',
            maxWidth: 256,
            // mt: 3,
            // mb: 3,
            // pt: 3,
            paddingTop: 30,
            transform: "translateX(-10%)",
            boxShadow: '4px 4px 20px 1px rgba(252, 56, 56, 0.2)',
            borderRadius: 5, // 16px
            backgroundSize: 'constrain',
            backgroundImage: 'linear-gradient(147deg, #fe8a39 0%, #fd3838 74%)',
            backgroundColor: '#0000',
            overflow: 'initial',
            '&:after': {
                content: '" "',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: 'linear-gradient(147deg, #fe8a39 0%, #fd3838 74%)',
                borderRadius: 2, // 16
                opacity: 0.5,
            },
        }}
    />
    
    <Box className='cardContentBox'
    sx={{
    }}
    >
    <CardContent className='MuiCardContent-root'
    sx={{
        textAlign: 'left',
        padding: 0,
        p: 2,
        position: 'relative',
    }}
    >
        <Typography className='MuiTypography--date' variant='overline'>
            28 Mar 2019
        </Typography>
        <Typography
            sx={{fontWeight: 'bold'}}
            className='MuiTypography--heading'
            variant='h6'
            gutterBottom
        >
        </Typography>
        <Typography
        className='MuiTypography--subheading'
        sx={{
            marginBottom: 2,
            marginRight: 3,
            display: 'flex',
            alignItems: 'left',
            overflow: 'initial',
        }}
        >
        </Typography>
        <Button className='MuiButton--readMore'
        sx={{
            backgroundImage: 'linear-gradient(147deg, #fe8a39 0%, #fd3838 74%)',
            backgroundSize: 'constrain',
            position: 'relative',
            boxShadow: '0px 4px 32px rgba(252, 56, 56, 0.4)',
            borderRadius: 100,
            paddingLeft: 24,
            paddingRight: 24,
            color: '#ffffff',
            marginRight: 10,
            overflow: 'clip',
        }}
        >
        Read More
        </Button>
    </CardContent>
    </Box>
    </Card>
    )};