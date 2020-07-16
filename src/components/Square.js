import React from "react";

const style = {
    background: "lightblue",
    border: "1px solid darkblue",
    fontSize: "40px",
    fontWeight: "900",
    cursor: "pointer",
};

const Square = ({value, onClick}) => (
    <button style={style} onClick={onClick}>
        {value}
    </button>
)

export default Square 