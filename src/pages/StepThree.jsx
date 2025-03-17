// import React from "react";

// const StepThree = () => {
//   return (
//     <div>
//       <h3>Step 3: Summary & Confirmation</h3>
//       <table>
//         <thead>
//           <tr>
//             <th>Field</th>
//             <th>Value</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>Name</td>
//             <td>Example Name</td>
//           </tr>
//           <tr>
//             <td>Description</td>
//             <td>Example Description</td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default StepThree;


import React from "react";

const StepThree = () => {
  return (
    <div className="step-three">
      <h3>Risk & Score Details</h3>
      <div className="input-group">
        <label>Premium</label>
        <input type="text" value="$100,000" readOnly />
        <label>Loss Ratio</label>
        <input type="text" value="30%" readOnly />
      </div>

      {/* Table */}
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Year</th>
              <th>Premium</th>
              <th>Losses</th>
              <th>Loss Incurred</th>
              <th>Loss Ratio</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2024</td>
              <td>$23,000</td>
              <td>2</td>
              <td>2,600,000</td>
              <td>23.1%</td>
            </tr>
            <tr>
              <td>2024</td>
              <td>$23,000</td>
              <td>2</td>
              <td>2,600,000</td>
              <td>23.1%</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Footer Buttons */}
      <button className="risk-btn">Calculate Risk Ratio</button>
    </div>
  );
};

export default StepThree;

