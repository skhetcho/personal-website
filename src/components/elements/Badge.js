import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Badge(props) {
  const faIcon = [`${props.faIconFamily}`, `${props.faIcon}`];
  const faIconSize = '1x';
  return (
    <div className="control">
      <div className="tags has-addons">
        <span className="tag is-dark">{props.text}</span>
        <span className="tag is-success">
          <FontAwesomeIcon icon={faIcon} size={faIconSize} />
        </span>
      </div>
    </div>
  );
}

export default Badge;
