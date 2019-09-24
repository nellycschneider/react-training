import React from "react";
// get props.lang
// get name
// if props.lang === 'en'
// return Good morning (name)
const Greetings = props => {
  let res = "";

  if (props.lang === "de") {
    res = "Hallo " + props.name;
  } else if (props.lang === "fr") {
    res = "Bonjour " + props.name;
  }

  return (
    <div>
      <p>{res}</p>
    </div>
  );
};

export default Greetings;
