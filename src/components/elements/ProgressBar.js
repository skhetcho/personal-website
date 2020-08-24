import React from "react";
import * as images from '../../assets/images.js'
var progress = {
  Advanced: 100,
  Intermediate: 66,
  Basic: 33
};

function ProgressBar(props) {
  return (
    <div>
      <img src={images.default[props.content[1]]}></img>
      <span className="title is-5 is-spaced">{props.text}</span>
      <span className="subtitle is-6 skill-percentage">{props.content[0]}</span>
      <progress
        className="progress is-success"
        value={progress[props.content[0]]}
        max="100"
      >
        {progress[props.content[0]]}%
      </progress>
    </div>
  );
}

export default ProgressBar;
