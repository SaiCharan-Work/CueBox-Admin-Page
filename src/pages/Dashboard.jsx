import React, { useState, useRef, useEffect } from "react";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import Home from "../pages/Home";
import Orders from "../pages/Orders";
import Invoices from "../pages/Invoices";
import Requests from "../pages/Requests";
import Incident from "./IncidentForm";
import Navbar from "../components/Navbar";
import CardSmall from "../components/CardSmall";
import CardLarge from "../components/CardLarge";
import Modal from "../components/Modal";
import "../styles/dashboard.css";
import IncidentForm from "./IncidentForm";

const Dashboard = () => {
  const { logout } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const [tableData, setTableData] = useState([
    { id: "001", name: "John Doe", email: "john@example.com", status: "Active" },
    { id: "002", name: "Jane Smith", email: "jane@example.com", status: "Inactive" },
  ]);

  const cardsData = [
    { icon: "fas fa-chart-line", title: "Sales", subtitle: "Total Revenue" },
    { icon: "fas fa-box", title: "Orders", subtitle: "New Orders" },
    { icon: "fas fa-users", title: "Customers", subtitle: "Active Users" },
    { icon: "fas fa-tasks", title: "Requests", subtitle: "Pending" },
    { icon: "fas fa-file-invoice", title: "Invoices", subtitle: "Recent Bills" },
    { icon: "fas fa-bell", title: "Notifications", subtitle: "New Alerts" }
  ];

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      {/* Routes */}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/invoices" element={<Invoices />} />
        <Route path="/requests" element={<Requests />} />
        <Route path="/incidentform" element={<IncidentForm />} />
      </Routes>

      <Navbar />


      {/* Dashboard Content */}
      <section className="dashboard">

      <div className="cards-row-small">
        {cardsData.map((card, index) => (
          <CardSmall
            key={index}
            icon={card.icon}
            title={card.title}
            subtitle={card.subtitle}
          />
        ))}
      </div>

      <div className="cards-row-large">
        {[
          { label: "A", icon: "fas fa-chart-bar", topText: "Analytics", leftText: "View Reports", rightText: "Summary Data" },
          { label: "B", icon: "fas fa-shopping-cart", topText: "Orders", leftText: "Recent Orders", rightText: "Total Sales" },
          { label: "C", icon: "fas fa-users", topText: "Customers", leftText: "New Users", rightText: "Retention Rate" },
        ].map((data, index) => (
        <CardLarge key={index} {...data} />
        ))}
      </div>

        {/* Button Section (Popup & Logout) */}
        <div className="button-container" ref={dropdownRef}>
        <button
            className="dropdown-btn"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            Options ⏷
          </button>

          {isDropdownOpen && (
            <div className="dropdown-menu">
              <button onClick={() => { setIsDropdownOpen(false); navigate("/incidentform"); }}>
                Go to Information
              </button>
              <button onClick={() => { setIsModalOpen(true); setIsDropdownOpen(false); }}>
                Open Popup
              </button>
            </div>
          )}
        </div>

        {/* Popup Modal */}
        {isModalOpen && (
          <Modal onClose={() => setIsModalOpen(false)}>
            <p>This is a popup!</p>
            <button onClick={() => navigate("/incidentform")}>Go to Information</button>
          </Modal>
        )}

        {/* Table Section */}
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => (
                <tr key={index}>
                  <td>{row.id}</td>
                  <td>{row.name}</td>
                  <td>{row.email}</td>
                  <td>{row.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="pagination">
          <button>&laquo; Prev</button>
          <span>Page 1 of 10</span>
          <button>Next &raquo;</button>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>Copyright © 2025 MyWebsite. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Dashboard;
