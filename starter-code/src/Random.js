import React from "react";

const Random = props => {
  function getRandom() {
    return Math.floor(Math.random() * (props.max - props.min) + props.min);
  }

  return (
    <div>
      <p>
        Random value between {props.min} and {props.max} => {getRandom()}
      </p>
    </div>
  );
};

export default Random;
