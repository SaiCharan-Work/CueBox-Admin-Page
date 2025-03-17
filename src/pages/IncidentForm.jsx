// import React, { useState } from "react";
// import StepOne from "./StepOne";
// import StepTwo from "./StepTwo";
// import StepThree from "./StepThree";

// const IncidentForm = () => {
//   const [step, setStep] = useState(1); // Track current step

//   // Move to next step
//   const handleNext = () => {
//     setStep((prevStep) => prevStep + 1);
//   };

//   // Move to previous step
//   const handleBack = () => {
//     setStep((prevStep) => prevStep - 1);
//   };

//   return (
//     <div className="incident-form">
//       <h2>Incident Creation</h2>
      
//       {/* Step Indicator */}
//       <div className="steps">
//         <span className={step === 1 ? "active" : ""}>1. Information</span>
//         <span className={step === 2 ? "active" : ""}>2. Upload Files</span>
//         <span className={step === 3 ? "active" : ""}>3. Summary</span>
//       </div>

//       {/* Render Step Based on State */}
//       {step === 1 && <StepOne />}
//       {step === 2 && <StepTwo />}
//       {step === 3 && <StepThree />}

//       {/* Navigation Buttons */}
//       <div className="buttons">
//         {step > 1 && <button onClick={handleBack}>Back</button>}
//         {step < 3 && <button onClick={handleNext}>Save & Next</button>}
//       </div>
//     </div>
//   );
// };

// export default IncidentForm;


import React, { useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";

const IncidentForm = () => {
  const [step, setStep] = useState(1); // Track current step

  // Move to next step
  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  // Move to previous step
  const handleBack = () => {
    setStep((prevStep) => prevStep - 1);
  };

  return (
    <div className="incident-form">
      <h2>Incident Creation</h2>

      {/* Step Indicator */}
      <div className="steps">
        <span className={step === 1 ? "active" : ""}>1. Information</span>
        <span className={step === 2 ? "active" : ""}>2. Upload Files</span>
        <span className={step === 3 ? "active" : ""}>3. Summary</span>
      </div>

      {/* Render Step Based on State */}
      {step === 1 && <StepOne />}
      {step === 2 && <StepTwo />}
      {step === 3 && <StepThree />}

      {/* Navigation Buttons */}
      <div className="buttons">
        {step > 1 && <button onClick={handleBack}>Back</button>}
        {step < 3 && <button onClick={handleNext}>Save & Next</button>}
      </div>
    </div>
  );
};

export default IncidentForm;
