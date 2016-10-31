import React from 'react';
import Project from './projects.js';
import Description from './descriptions.js'


export default (props) => {

  return (
    <div className="project-container">
      <div className="project-div">
        <Project project={props.project} />
      </div>
      <div className="project-description-div">
        <Description project={props.project} />
      </div>

    </div>
  )
}
