// import React, {useState} from "react";
// import { useForm } from "usetheform";

// export const NewTripFormSubmit = ({props, location, title, i}) => {
//     const { isValid } = useForm();
//     const { data } = props;
//     const [error, setError] = useState("");

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setError("");
//             console.log(location, title);
//     }
//     const listItems = Object.entries(data).map(([key, value, i]) => (
//     <li key={i}>
//         <strong>{key}:</strong> {value}
//     </li>
// ));
//     return (
        
//     <div>
//         <ul>{listItems}</ul>
//         <button type="submit"
//         onSubmit={handleSubmit}
//         >Submit</button>
//     </div>
// );
// };