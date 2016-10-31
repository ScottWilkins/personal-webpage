import React from 'react';
import sesameIntro from '../resources/Sesame-Intro.gif';
import sesameDoor from '../resources/sesame-door.gif';
import got from '../resources/g-o-t.gif';
import fairshare from '../resources/fairshare.gif';
import reddit from '../resources/reddit.gif';

export default (props) => {

    switch(props.project) {
      case "sesame":
        return (
          <div>
            <img src={sesameIntro} className="project" />
            <img src={sesameDoor} className="project" />
          </div>
        );
      case "wiki":
        return (
          <div>
          <img src={got} className="project" />
        </div>
      );
      case "fairshare":
      return (
        <div>
        <img src={fairshare} className="project" />
      </div>
    );
      case "reddit":
      return (
        <div>
        <img src={reddit} className="project" />
      </div>
    );
      default:
        return (<h1>coming soon...</h1>)

    }


}
