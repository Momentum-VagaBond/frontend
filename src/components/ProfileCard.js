import * as React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';


export const ProfileCard = ({profilePk, id, bio, trips}) => {
return(

<Box sx={{
    marginTop: 5,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent:'center',
    }}
>
    <Card>
    id: {id}
    </Card>
    <Card>
    bio: {bio}
    </Card>
</Box>
)
}