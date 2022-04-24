import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function FormPropsTextFields() {

    return (
    <Box
    component="form"
    sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
    >

    <div>
        <TextField
            required
            id="filled-required"
            label="Required"
            defaultValue="Hello World"
            variant="filled"
        />
        <TextField
            id="filled-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="filled"
        />
        <TextField
            id="filled-number"
            label="Number"
            type="number"
            InputLabelProps={{
            shrink: true,
        }}
            variant="filled"
        />
        <TextField
            id="filled-search"
            label="Search field"
            type="search"
            variant="filled"
        />
        <TextField
            id="filled-helperText"
            label="Helper text"
            defaultValue="Default Value"
            helperText="Some important text"
            variant="filled"
        />
    </div>

    </Box>
    );
}