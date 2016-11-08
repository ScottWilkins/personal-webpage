import React from 'react';


  export default (props) => {

      switch(props.project) {
        case "sesame":
          return (
            <div>
              <p>Sesame is a React-Native app for iPhone that lets you unlock your doors using TouchID. This was a group project completed with two friends from class. We had ten days to research new technologies and create the final product. We initially used an Arduino with a servo to turn the lock, but soon realized we needed to piggy-back off a raspberry pi to ensure the wifi would work. I was in charge of writing the johnny-five code to talk to the servo as well as figuring out how to make all the pieces communicate with each other. At meetups we were told to try sockets io, but I figured out a way to communicate directly through the firebase database using realtime, two-way communication. We will be giving a talk about this project at the Denver Script meetup on November 21st.</p>
              <p>Github: <a href="https://github.com/rickycpadilla/sesame-app" target="_blank">Sesame</a></p>
            </div>
          );
        case "wiki":
          return (
            <div>
              <p>The Clickable Wiki of Thrones was the first project I completed at Galvanize. It's a simple front-end app that uses HTML, javascript and jQuery as well as D3 for the graphics on the splash page. Clicking sigils will bring up the sworn members of each house from the "an api of ice and fire" API. Hovering over members will give additional information including an actor's profile picture from the Open Movie Database API. Choosing on a member will bring in an Iframe of the character from the Wiki of Ice and Fire.</p>
              <p>Website: <a href="https://g-o-t-database.firebaseapp.com/" target="_blank">Clickable Wiki of Thrones</a></p>
              <p>Github: <a href="https://github.com/ScottWilkins/GOT" target="_blank">Clickable Wiki of Thrones</a></p>

            </div>
        );
        case "fairshare":
        return (
          <div>
            <p>FairShare is my first deep dive into React. It is a bill sharing application that lets users split up costs fairly and easily. It has a robust database with password authorization and authentication. It also uses two-way data binding so that users working on the same event on different computers will see updates in real time. With ten days to learn and deploy a new technology, I was able to create an application that I use a lot in my own life.</p>
            <p>Website: <a href="https://fairshare-cca1f.firebaseapp.com" target="_blank">FairShare</a></p>
            <p>Github: <a href="https://github.com/ScottWilkins/bill-killer" target="_blank">FairShare</a></p>
          </div>
      );
        case "reddit":
        return (
          <div>
            <p>Reddit Klone is an Angular app that mimics that popular social media site. It uses factories, filters and dependency injection along with an external api to bring in data and allows users to post and comment. </p>
            <p>Website: <a href="https://reddit-klone.firebaseapp.com" target="_blank">Reddit Klone</a></p>
            <p>Github: <a href="https://github.com/ScottWilkins/reddit-clone" target="_blank">Reddit Klone</a></p>
          </div>
      );
        default:
          return (<h1>coming soon...</h1>)

      }
  }
