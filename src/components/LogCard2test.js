import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

export default function AllTrips() {
    return (
      <ImageList sx={{ width: 500, height: 450 }}>
        <ImageListItem key="Subheader" cols={2}>
          <ListSubheader component="div">December</ListSubheader>
        </ImageListItem>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={item.title}
              subtitle={item.author}
              actionIcon={
                <IconButton
                  sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                  aria-label={`info about ${item.title}`}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    );
  }
  
  const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast in Durham',
      author: 'January 24th, 2022',
      rows: 2,
      cols: 2,
      featured: true,
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Dinner our first night',
      author: 'January 24th, 2022',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Daytrip to Raleigh',
      author: 'January 25th, 2022',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee in Cary',
      author: 'January 26th, 2022',
      cols: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Trying on hats ',
      author: 'January 27th, 2022',
      cols: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Local Honey',
      author: 'January 28th, 2022',
      rows: 2,
      cols: 2,
      featured: true,
    },
    // {
    //   img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    //   title: 'Basketball',
    //   author: '@tjdragotta',
    // },
    // {
    //   img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    //   title: 'Fern',
    //   author: '@katie_wasserman',
    // },
    // {
    //   img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    //   title: 'Mushrooms',
    //   author: '@silverdalex',
    //   rows: 2,
    //   cols: 2,
    // },
    // {
    //   img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    //   title: 'Tomato basil',
    //   author: '@shelleypauls',
    // },
    // {
    //   img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    //   title: 'Sea star',
    //   author: '@peterlaster',
    // },
    // {
    //   img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    //   title: 'Bike',
    //   author: '@southside_customs',
    //   cols: 2,
    // },
  ];