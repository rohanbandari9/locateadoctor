import React, { useState, useMemo, useEffect } from "react";
import "./AdminDashboard.css";
import { useNavigate } from "react-router-dom";
import Button from "../../components/ui/Button";

export default function AdminDashboard() {
    const [arrowRotated, setArrowRotated] = useState(false);
    const toggleArrowRotation = () => {
        setArrowRotated(!arrowRotated);
    }
    const handleCancelUpdate=()=>{}
    const menuArrowDown = (rotated, fillColor) => {
        const rotationStyle = rotated ? { transform: 'rotate(180deg)' } : {};
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={fillColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={rotationStyle} className="icon-transition">
                <path d="m6 9 6 6 6-6" />
            </svg>
        );
    }

    return (
        <div className="dashboard-outer-container">
            <div className="doctor-dashboard-header">
                <div className="dashboard-header-text">Dashboarda</div>
                <div className="doctor-dashboard-header-menu">
                    <img className="user-logo" src="assets/Patient-logo.jpg" alt="logo" />
                    <div className="user-logo-arrow" onClick={toggleArrowRotation}>
                        {menuArrowDown(arrowRotated, 'black')}
                    </div>
                </div>
            </div>
            <div className="admin-dashboard-content">
                <div className="action-buttons">
                <Button label="Manage Doctors" buttonType="Admin-dashboard" handleFunction={handleCancelUpdate} />
                <Button label="Manage Admin" buttonType="Admin-dashboard" handleFunction={handleCancelUpdate} />
                <Button label="Reports" buttonType="Admin-dashboard" handleFunction={handleCancelUpdate} />
                <Button label="Trends" buttonType="Admin-dashboard" handleFunction={handleCancelUpdate} />

                </div>
                <div className="admin-profile-details">

                </div>

            </div>
        </div>
    );
}
