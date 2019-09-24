import React from "react";

const BoxColor = props => {
  const divStyle = {
    backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`,
    height: 100,
    width: 200
  };

  return (
    <div>
      <div style={divStyle}>
        rgb({props.r},{props.g},{props.b})
      </div>
    </div>
  );
};

export default BoxColor;
