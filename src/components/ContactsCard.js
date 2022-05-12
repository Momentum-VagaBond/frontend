import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Card, Container, Box, Grid, Typography, Paper } from '@mui/material/';
import { ThemeProvider } from "styled-components";
import { Theme } from "../Theme";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ForkLeft } from '@mui/icons-material';

export default function ContactsCard({firstName, subscriberId, subscriberPk, lastName, email, key}) {

    return(
<ThemeProvider theme={Theme}>
    <div>
  <CssBaseline />

  <Box
  sx={{
    overflow: 'auto',
  }}
  >
    
    <Typography align="left"
      sx={{
        overflow: 'auto',
      }}
    >
    <ul>
  ✈ {firstName} {lastName}
    <br />
      {email}
    </ul>
    </Typography>
  </Box>

</div>
</ThemeProvider>
    )
}