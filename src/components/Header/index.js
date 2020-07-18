import React from "react";
import OffCanvas from "../Header/OffCanvas";
import "./style.css";

function Header() {
    return (
        <div className="header-container">
            <h1 className="subtitle">Employee Directory</h1>
           
            <OffCanvas />
        </div>
    )
};

export default Header;