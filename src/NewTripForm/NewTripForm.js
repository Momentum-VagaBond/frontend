// import React, { useState } from "react";
// import { NewTripFormStep1 } from './NewTripFormStep1'
// import { NewTripFormStep2 }from "./NewTripFormStep2";
// import { NewTripFormStep3 } from "./NewTripFormStep3";
// import { NewTripFormSubmit } from "./NewTripFormSubmit";

// export default function NewTrip({token, isLoggedIn}) {
//     const [error, setError] = useState("");
//     const [currentStep, setCurrentStep] = useState(1);
//     const [formData, setFormData] = useState({
//         title: "",
//         location: "",
//         begin: "",
//         end: "",
// });
//     const handleChange = (event) => {
//     event.preventDefault();
//     setError("");
//     setFormData({
//         ...formData,
//         [event.target.name]: event.target.value,
//     });
// };
//     const next = () => {
//     setCurrentStep(currentStep + 1);
// };
//     const back = () => {
//         setCurrentStep(currentStep - 1);
// };
//     switch (currentStep) {
//     case 1:
//     return (
//         <NewTripFormStep1 
//             data={formData} 
//             handleChange={handleChange} 
//             next={next} 
//         />
//       );
//     case 2:
//       return (
//         <NewTripFormStep2
//           data={formData}
//           handleChange={handleChange}
//           next={next}
//           back={back}
//         />
//       );
//     case 3:
//       return (
//         <NewTripFormStep3
//           data={formData}
//           handleChange={handleChange}
//           next={next}
//           back={back}
//         />
//       );
//     default:
//       return <NewTripFormSubmit data={formData} back={back} />;
//   }
// };