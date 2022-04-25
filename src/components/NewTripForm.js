// import React from 'react';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';

// export default function NewTripForm({handleSubmit, title, setTitle, location, setLocation, duration, setDuration}) {

//     return (
//     <Box
//     component="form"
//     sx={{
//         '& .MuiTextField-root': { m: 1, width: '25ch' },
//     }}
//     noValidate
//     autoComplete="off"
//     >

// <form onSubmit={handleSubmit}>

// <label htmlFor='reg-title'>Title: </label>
//     <TextField id="filled-basic"
//     label="Title"
//     variant="filled"
//     className='reg-title'
//     required value={title}
//     onChange={(e) => setTitle(e.target.value)}
//     />

// <label htmlFor='reg-location'>Location: </label>
// <TextField id="filled-basic"
//     label="Location"
//     variant="filled"
//     className='reg-location'
//     required value={location}
//     onChange={(e) => setLocation(e.target.value)}
// />

//     <br></br>

// <label htmlFor='duration'>Duration </label>
// <TextField id="filled-basic"
//     label="Duration"
//     variant="filled"
//     className='password-reg'
//     required value={duration}
//     onChange={(e) => setDuration(e.target.value)}
//   />
//   {/* <br></br>
//   <label htmlFor='password'>Enter your e-mail: </label>
//   <input
//     type='text'
//     className='text-input'
//     required
//     value={email}
//     onChange={(e) => setEmail(e.target.value)}
//   /> */}
//   < button color="primary" type='submit'>Submit</button>
// </form>

//     </Box>
//     );
// }