import React from "react";

function TopNavigation() {
    return (
        <div className="top-nav">
            <input type="text" placeholder="🔎 Search..." className="search-bar" />
            <div className="user-profile">
                <span>Dr. Sharma</span>
            </div>
        </div>
    )
}

export default TopNavigation;