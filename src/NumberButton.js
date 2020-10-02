import React from "react";

const NumberButton = ({ number }) => {
  return (
    <React.Fragment>
      <button>{number}</button>
    </React.Fragment>
  );
};

export default NumberButton;
