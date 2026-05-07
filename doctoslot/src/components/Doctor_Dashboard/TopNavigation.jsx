
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function TopNavigation() {
    const [showBack, setShowBack] = useState(true);
    const navigate = useNavigate();

    const handleBackClick = () => {
        setShowBack(false);
        navigate("/");
    };

    return (
        <div className="top-nav">
            <input type="text" placeholder="🔎 Search..." className="search-bar" />
            <div className="user-profile">
                {showBack ? (
                    <button className="back-to-home-btn" onClick={handleBackClick}>
                        Back to Home
                    </button>
                ) : (
                    <span>Dr. Logon</span>
                )}
            </div>
        </div>
    );
}

export default TopNavigation;