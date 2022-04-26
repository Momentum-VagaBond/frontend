import * as React from 'react';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import LogCard from './LogCard';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function LogGrid() {
    return (
    <div>
    <Stack
        direction="column"
        divider={<Divider orientation="horizontal" flexItem />}
        spacing={2}
    >
        {/* need to map through the logcards here */}
        <LogCard />
        <Item>(Log goes here)</Item>
        <Item>(Log goes here)</Item>
        <Item>(Log goes here)</Item>
    </Stack>
    </div>
);
}