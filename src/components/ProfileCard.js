import * as React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';


export const ProfileCard = ({username, id, avatar, bio, firstName, lastName, trips}) => {
    
return(
<Container>
<Box sx={{
    // marginTop: 5,
    // display: 'flex',
    // flexDirection: 'column',
    // alignItems: 'center',
    // justifyContent:'center',

    }}
>
    <Card>
    id: {id}
    </Card>
    <Card>
        {avatar}
    </Card>
    <Card>
    bio: {bio}
    </Card>
    <Card>
    name: {firstName} {lastName}
    </Card>
    <Card>
    username: {username}
    </Card>
    <Card>
    trips: {trips}
    </Card>
</Box>
</Container>
)
}