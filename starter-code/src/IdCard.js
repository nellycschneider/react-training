import React from "react";

const IdCard = props => {
  return (
    <div>
      <p>First Name: {props.firstName}</p>
      <p>Last Name: {props.lastName}</p>
      <p>Gender: {props.gender}</p>
      <p>Height: {props.height}</p>
      <p>Birth: {props.birth}</p>
      <img src={props.picture} alt="" />
    </div>
  );
};

export default IdCard;
