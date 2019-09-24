import React from "react";

const Rating = props => {
  let stars = [];
  let number = Math.round(props.num);
  let n = number;

  for (let i = 0; i < 5; i++) {
    if (i < n) {
      stars.push("★");
    } else {
      stars.push("☆");
    }
    console.log(stars, n);
  }
  stars = stars.join("");

  return (
    <div>
      <h3>{stars}</h3>
    </div>
  );
};

export default Rating;
