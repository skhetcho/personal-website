import React, { useState } from "react";
import SkillsList from "../elements/SkillsList";
import Resume from "../../resume.json";
import { useToasts } from 'react-toast-notifications';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



function Skills() {
    const { addToast } = useToasts();
    const [changeShield, setChangeShield] = useState(false);

    const sheildClick = () => {
      setChangeShield(true);
      addToast("The penguin has taken over the shield 😈", { appearance: 'error', autoDismiss: true });
    }

    return (
      <section className="section" id="skills">
        <div className="container">
          <h1 className="title">Hard Skills</h1>
          <div className="columns">
            <div className="column is-12 skills-mobile-margin">
              <div className="has-text-centered">
                <span onClick={sheildClick} className="icon has-text-link">
                  {
                    changeShield ?
                      <FontAwesomeIcon icon={['fab', 'linux']} size='3x'/>
                      :
                      <FontAwesomeIcon icon={['fas', 'shield-alt']} size='3x'/>
                  }

                </span>
                <h2 className="title is-5">Hacking</h2>
              </div>
              <SkillsList
                skills={Resume.skills
                  .filter(skill => skill.keywords.includes("Hacking"))
                  .reduce((obj, item) => {
                    obj[item.name] = [item.level, item.imgURL];
                    console.log(item)
                    return obj;
                  }, {})}
              />
            </div>
            {/* <div className="column is-4 skills-mobile-margin">
              <div className="has-text-centered">
                <span className="icon has-text-link">
                  <FontAwesomeIcon icon={['fas', 'laptop-code']} size='3x'/>
                </span>
                <h2 className="title is-5">Software Development</h2>
              </div>
              <SkillsList
                skills={Resume.skills
                  .filter(skill => skill.keywords.includes("Software Developer"))
                  .reduce((obj, item) => {
                    obj[item.name] = item.level;
                    return obj;
                  }, {})}
              />
            </div>
            <div className="column is-4 skills-mobile-margin">
              <div className="has-text-centered">
                <span className="icon has-text-link">
                  <FontAwesomeIcon icon={['fas', 'microchip']} size="3x"/>
                </span>
                <h2 className="title is-5">Hardware</h2>
              </div>
              <SkillsList
                skills={Resume.skills
                  .filter(skill => skill.keywords.includes("Hardware"))
                  .reduce((obj, item) => {
                    obj[item.name] = item.level;
                    return obj;
                  }, {})}
              />
            </div> */}
          </div>
        </div>
      </section>
    );
  }

export default Skills;
