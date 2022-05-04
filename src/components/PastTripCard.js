import * as React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';

export const PastTripCard = ({title, user, location, begin, end }) => {
    return(
        <Container>
<Box sx={{
    marginTop: 5,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent:'center',
    }}
>
    <Card>
    title: {title}
    </Card>
    <Card>
    user: {user}
    </Card>
    <Card>
    location: {location}
    </Card>
    <Card>
    begin: {begin}
    </Card>
    <Card>
    end: {end}
    </Card>
</Box>
</Container>
)
}