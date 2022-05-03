import React, { useEffect, useState } from 'react';
import axios from "axios";

export default function Geolocate () {
const [lat, setLat] = useState(null);
const [lng, setLng] = useState(null);
const [status, setStatus] = useState(null);
// const [pois, setPois] = useState([])

useEffect(() => {
  // creates search query for mapbox forward geocode - address into coordinates
  axios.get('https://api.mapbox.com/geocoding/v5/mapbox.places/-74.0445,40.689249.json?limit=1&types=poi%2Caddress&access_token=pk.eyJ1IjoiZW1pbHlmbG8iLCJhIjoiY2wyZGRsNG9hMHk0aDNicGR1bjhxZGZmdyJ9.OwfzAfjxswxUss6pTmNVUQ')
    .then(response => {
      console.log(response.data)
    }, [])
})

const getLocation = () => {
  if (!navigator.geolocation) {
    setStatus('Geolocation is not supported by your browser');
  } else {
    setStatus('Locating...');
    navigator.geolocation.getCurrentPosition((position) => {
      setStatus(null);
      setLat(position.coords.latitude);
      setLng(position.coords.longitude);
    }, () => {
      setStatus('Unable to retrieve your location');
    });
    
  }
}

  
return (
  <div className="Geolocate">
    <button onClick={getLocation}>Get Location</button>
    <h1>Coordinates</h1>
    <p>{status}</p>
    {lat && <p>Latitude: {lat}</p>}
    {lng && <p>Longitude: {lng}</p>}
 </div>
  )
}

// useEffect(() => {
//   // creates search query for mapbox forward geocode - address into coordinates
//   axios.get('https://api.mapbox.com/geocoding/v5/mapbox.places/7%20ca.json?proximity=ip&types=poi%2Caddress&access_token=pk.eyJ1IjoiZW1pbHlmbG8iLCJhIjoiY2wyZGRsNG9hMHk0aDNicGR1bjhxZGZmdyJ9.OwfzAfjxswxUss6pTmNVUQ')
//     .then(response => {
//       console.log(response.data)
//     }, [])
// })