
import React, { useRef, useEffect } from "react"
import mapboxgl, {Marker} from "mapbox-gl"
import MapboxGeocoder from "mapbox-gl"

// import the mapbox styles
// alternatively can use a link tag in the head of public/index.html
// see https://docs.mapbox.com/mapbox-gl-js/api/
// import "mapbox-gl/dist/mapbox-gl.css"

// Grab the access token from your Mapbox account
// I typically like to store sensitive things like this
// in a .env file
mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN

const MapBox = ({latitude, longitude}) => {
  // const [lng, setLng] = useState(-79.919376);
  // const [lat, setLat] = useState(436.112514,);
  const mapContainer = useRef()
  const lng= longitude
  const lat= latitude

  

  // this is where all of our map logic is going to live
  // adding the empty dependency array ensures that the map
  // is only rendered once
  useEffect(() => {
    // create the map and configure it
    // check out the API reference for more options
    // https://docs.mapbox.com/mapbox-gl-js/api/map/
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: 12,
      marker: false
        
    })
    const marker = new mapboxgl.Marker({
      color: '#708090'
    }).setLngLat([lng, lat])
      // .setPopup(newPopup)
      .addTo(map)
  
  //   import mapboxgl, {Marker} from "mapbox-gl"
  //   const marker = new mapboxgl.Marker() // initialize a new marker
  // .setLngLat([-122.25948, 37.87221]) // Marker [lng, lat] coordinates
  // .addTo(map); // Add the marker to the map

    // const geocoder = new MapboxGeocoder({
    //   accessToken: mapboxgl.accessToken,
    //   marker: {
    //   color: 'orange'
    //   },
    //   mapboxgl: mapboxgl
    //   });
       
    //   map.addControl(geocoder);
  //   const marker = new mapboxgl.Marker() // initialize a new marker
  // .setLngLat([-122.25948, 37.87221]) // Marker [lng, lat] coordinates
  // .addTo(map); // Add the marker to the map

    // cleanup function to remove map on unmount
    return () => map.remove()
  }, [lng, lat])

  return <div ref={mapContainer} style={{ width: "25vh", height: "20vh" }} />
}
// import * as React from 'react';
// import Map from 'react-map-gl';

// function MapBox() {
//   return <Map
//     initialViewState={{
//       longitude: -100,
//       latitude: 40,
//       zoom: 3.5
//     }}
//     style={{width: 600, height: 400}}
//     mapStyle="mapbox://styles/mapbox/streets-v9"
//   />;
// }
export default MapBox

