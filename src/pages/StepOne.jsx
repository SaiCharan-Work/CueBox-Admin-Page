// import React, { useState } from "react";

// const StepOne = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     description: "",
//   });

//   return (
//     <div>
//       <h3>Step 1: Provide Incident Information</h3>
//       <label>Name:</label>
//       <input 
//         type="text" 
//         value={formData.name} 
//         onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
//       />

//       <label>Description:</label>
//       <textarea 
//         value={formData.description} 
//         onChange={(e) => setFormData({ ...formData, description: e.target.value })} 
//       />
//     </div>
//   );
// };

// export default StepOne;


import React from "react";

const StepOne = () => {
  return (
    <div className="step-one">
      <h3>Incident Information</h3>
      <form>
        <label>Incident Name</label>
        <input type="text" placeholder="Enter incident name" />

        <label>Incident Date</label>
        <input type="date" />

        <label>Description</label>
        <textarea placeholder="Describe the incident"></textarea>
      </form>
    </div>
  );
};

export default StepOne;

