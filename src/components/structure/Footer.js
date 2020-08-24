import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Footer() {
  return (
    <footer className="footer has-background-link">
      <div className="content has-text-centered has-text-white">
        <p>
          Built at <FontAwesomeIcon icon={['fas', 'moon']} /> by{" "}
          <a href="https://github.com/skhetcho" className="has-text-white">
            <strong>Souren Khetcho</strong>
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
