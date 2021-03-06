import React from "react";
import "./Title.css";
const Title = ({ onHandleChange, input, onHandleSubmit }) => {
  return (
    <React.Fragment>
      <div className="box">
        <input
          aria-label="Searching movies"
          className="f4 pa2 ma3"
          type="text"
          placeholder="Search Movie here"
          value={input}
          onChange={onHandleChange}
        />
        <button
          className="f4 pv2 ph3  bg-dark-green white link"
          onClick={onHandleSubmit}
        >
          Click
        </button>
      </div>
    </React.Fragment>
  );
};

export default Title;
