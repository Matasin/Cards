import React from "react";

const InformationButton = ({ className, handleBothValue }) => (
    <button 
        className={className}
        onMouseOver={handleBothValue}
    >
    </button>
)

export default InformationButton;