// import React, { useState } from "react";

// const StepTwo = () => {
//   const [files, setFiles] = useState([]);

//   return (
//     <div>
//       <h3>Step 2: Upload Files</h3>
//       <input 
//         type="file" 
//         multiple 
//         onChange={(e) => setFiles([...files, ...e.target.files])} 
//       />

//       <ul>
//         {files.map((file, index) => (
//           <li key={index}>{file.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default StepTwo;



import React, { useState } from "react";

const StepTwo = () => {
  const [files, setFiles] = useState([]);

  const handleFileChange = (e) => {
    setFiles([...files, ...e.target.files]);
  };

  return (
    <div className="step-two">
      <h3>Upload Documents</h3>
      <input type="file" multiple onChange={handleFileChange} />

      <div className="file-list">
        {files.map((file, index) => (
          <p key={index}>{file.name}</p>
        ))}
      </div>
    </div>
  );
};

export default StepTwo;
