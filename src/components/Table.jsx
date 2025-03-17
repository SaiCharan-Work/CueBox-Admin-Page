import React from "react";
// import "./Table.css";

const Table = () => {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Incident ID</th>
            <th>Client</th>
            <th>Broker</th>
            <th>Expiry Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>101</td>
            <td>John Doe</td>
            <td>XYZ Brokers</td>
            <td>2025-04-12</td>
            <td>Active</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
