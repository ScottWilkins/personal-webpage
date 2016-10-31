import React from 'react';

export default (props) => {

    switch(props.project) {
      case "sesame":
        return (
          <div className="project-container projects-titles">
            <h1>Sesame</h1>
          </div>
        );
      case "wiki":
        return (
          <div className="project-container projects-titles">
            <h1>Clickable Wiki of Thrones</h1>
          </div>
      );
      case "fairshare":
      return (
        <div className="project-container projects-titles">
          <h1>FairShare</h1>
        </div>
    );
      case "reddit":
      return (
        <div className="project-container projects-titles">
          <h1>Reddit Klone</h1>
        </div>
    );
      default:
        return (<h1>coming soon...</h1>)

    }


}
