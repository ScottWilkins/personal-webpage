import React from 'react';

export default (props) => {

    switch(props.project) {
      case "sesame":
        return (
          <div className="project-container projects-titles">
            <h1>sesame</h1>
          </div>
        );
      case "wiki":
        return (
          <div className="project-container projects-titles">
            <h1>clickable wiki of thrones</h1>
          </div>
      );
      case "fairshare":
      return (
        <div className="project-container projects-titles">
          <h1>fairshare</h1>
        </div>
    );
      case "reddit":
      return (
        <div className="project-container projects-titles">
          <h1>reddit klone</h1>
        </div>
    );
      default:
        return (<h1>coming soon...</h1>)

    }


}
