import React from "react";

const CreditCard = props => {
  const divStyle = {
    backgroundColor: `${props.bgColor}`,
    color: props.color,
    width: 250,
    height: 200
  };

  return (
    <div>
      <div style={divStyle}>
        <img src={props.image} alt="" />
        <p>{props.type}</p>
        <p>{props.number}</p>
        <p>{props.expirationMonth}</p>
        <p>{props.expirationYear}</p>
        <p>{props.bank}</p>
        <p>{props.owner}</p>
      </div>
    </div>
  );
};

export default CreditCard;
