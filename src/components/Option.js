import React from "react";

const Option = (props) => (
  <div>
    <p>Option: {props.optionText}</p>
    <button
      onClick={(e) => {
        props.handleDeleteOption(props.optionText);
      }}
      className="button button--link"
    >
      Remove
    </button>
  </div>
);

export default Option;
