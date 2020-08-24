import React, { useState } from "react";
import Switch from "react-switch";
import Badge from "../elements/Badge";
import Resume from "../../resume.json";

function AboutMe() {
  const [toggle, setToggle] = useState(true);

  return (
    <section className="section has-background-link" id="aboutMe">
      <div className="container has-text-centered">
        <figure className="image container is-180x180">
          <img
            width="180px"
            height="180px"
            src={Resume.basics.picture}
            alt={Resume.basics.name}
            className="is-rounded"
          />
        </figure>
        <p className="subtitle is-4 has-text-white has-text-weight-bold">
          {Resume.basics.x_title}
        </p>
        <p className="subtitle is-5 has-text-white has-text-weight-light summary-text">
          {Resume.basics.summary}
        </p>
        <div className="container interests">
          <div className="field is-grouped is-grouped-multiline has-text-centered">
            {Resume.interests.map((value, index) => {
              return (
                <Badge key={index} text={value.name} faIcon={value.x_icon} faIconFamily={value.icon_family}/>
              );
            })}
          </div>
        </div>
        <div className="container interests toggle-div">
          <h1 className="subtitle is-4 has-text-white" style={{ marginBottom: 0, marginRight: 10, height: 33 }}>Coffee Mode</h1>
          <Switch
            onChange={setToggle}
            checked={toggle}
            className="react-switch"
          />
          <h1 className="subtitle is-4 has-text-white" style={{ marginBottom: 0, width: 100, height: 33 }}>{toggle ? "☕😊" : "🙁"}</h1>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
