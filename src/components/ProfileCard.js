import * as React from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import { deepOrange } from "@mui/material/colors";
import { Link as RouterLink } from 'react-router-dom'


export const ProfileCard = ({profilePk, id, bio}) => {
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
    {/* <Card>
    pk: {profilePk}
    </Card> */}
</Box>
)
}