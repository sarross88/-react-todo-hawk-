export default function ToggleSwitch() {
  return (
    <div className="toggle-container">
      <h3>Sort by Alphabetical Order</h3>
      <label className="toggle-switch">
        <input type="checkbox" className="toggle-switch-input" />
        <span className="toggle-switch-slider"></span>
      </label>
    </div>
  );
}

// import { useState, useEffect } from "react";
// import axios from "axios";

// export default function ToggleSwitch() {
//   const [isChecked, setIsChecked] = useState(false);
//   const [data, setData] = useState([]);
//   const AIRTABLE_API_URL =
//     "https://api.airtable.com/v0/app7lmaUmZE2fzohz/Default";
//   const AIRTABLE_API_KEY = import.meta.env.VITE_AIRTABLE_API_TOKEN;

//   // Function to fetch data from Airtable
//   const fetchData = (sort = false) => {
//     const config = {
//       headers: {
//         Authorization: `Bearer ${AIRTABLE_API_KEY}`,
//       },
//       params: {
//         fields: ["title"], // Fetch only the 'title' field
//       },
//     };

//     // If the toggle is on (sorted alphabetically), modify the request params
//     if (sort) {
//       config.params.sort = [{ field: "title", direction: "asc" }];
//     } else {
//       // No sorting is applied if the toggle is off, showing natural order (creation order)
//       delete config.params.sort;
//     }

//     // Fetch data from Airtable
//     axios
//       .get(AIRTABLE_API_URL, config)
//       .then((response) => {
//         setData(response.data.records); // Store the fetched data
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   };

//   // Handle the toggle change event
//   const handleChange = (event) => {
//     const checked = event.target.checked;
//     setIsChecked(checked);
//     fetchData(checked); // Fetch sorted or unsorted data based on the toggle state
//   };

//   // Fetch data on initial render (unsorted by default)
//   useEffect(() => {
//     fetchData(); // Default fetch without sorting (order of creation)
//   }, []);

//   return (
//     <div className="toggle-container">
//       <h3>Sort by Alphabetical Order</h3>
//       <label className="toggle-switch">
//         <input
//           type="checkbox"
//           className="toggle-switch-input"
//           checked={isChecked}
//           onChange={handleChange}
//         />
//         <span className="toggle-switch-slider"></span>
//       </label>

//       {/* Render the fetched data */}
//       <div className="data-list">
//         <ul>
//           {data.map((record) => (
//             <li key={record.id}>{record.fields.title}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }
