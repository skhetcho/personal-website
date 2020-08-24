import React from "react";
import NavBar from "./NavBar";
import GlitchText from 'react-glitch-effect/core/Text';
import Typed from "react-typed";

import Resume from "../../resume.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Hero() {
  return (
    <section className="hero is-dark is-fullheight has-bg-image">
      <div className="hero-head">
        <NavBar />
      </div>
      <div className="hero-body">
        <div className="container">
          <p className="subtitle is-5 has-text-weight-light">I'm a</p>
          <h1 className="title">
            <GlitchText>
              <Typed
                strings={[`${Resume.basics.label}`]}
                typeSpeed={15}
                backSpeed={50}
              >
              </Typed>
            </GlitchText>
          </h1>
          <h2 className="subtitle">
            {Resume.basics.location.region}, {Resume.basics.location.country}
          </h2>
        </div>
      </div>
      <div className="hero-foot" style={{ paddingBottom: "20px" }}>
        <div className="columns is-mobile">
          <div className="column"></div>
          {Resume.basics.profiles.map((value, index) => {
            return (
              <div key={index} className="column has-text-centered">
                <a
                  href={value.url}
                  target="blank"
                  className="is-hovered"
                  title={value.network}
                >
                  <span className="icon is-medium is-">
                    <FontAwesomeIcon icon={"fa-linkedin"} />
                  </span>
                </a>
              </div>
            );
          })}
          <div className="column"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
