import React, { useState, useEffect, useRef } from "react";
import { useKeenSlider } from "keen-slider/react";

const Info = () => {
  return (
    <div className="infoContainer">
      <div className="infoBox">
        <div className="leftInfo">
          <h2 className="infoHeader">Real-time Ready</h2>
          <p className="infoText">
            Synchronize your application's state so that your clients are
            already up to date, whether you're on a single server or in a
            cluster. Aren't sure about implementing real-time support now? You
            can still utilize the other powerful features of Synapse and add it
            later in one line of code!
          </p>
        </div>
        <div className="realtimePic"></div>
      </div>

      <div className="horizontalLine"></div>

      <div className="infoBox">
        <div className="endpointsPic"></div>
        <div className="rightInfo">
          <h2 className="infoHeader">3-in-1 Endpoints</h2>
          <p className="infoText">
            HTTP? WebSockets? SSE? All of your endpoints are now compatible and
            ready to work with any major network protocol you choose.
          </p>
        </div>
      </div>

      <div className="horizontalLine"></div>

      <div className="infoBox">
        <div className="leftInfo">
          <h2 className="infoHeader">High Extensibility</h2>
          <p className="infoText">
            With a handful of custom built classes, Synapse provides a solid
            foundation for you to expand upon. You can edit or even define your
            own schemas and fields to fit your needs.
          </p>
        </div>
        <div className="extensiblePic"></div>
      </div>

      <div className="horizontalLine"></div>

      <div className="infoBox">
        <div className="validationPic"></div>
        <div className="rightInfo">
          <h2 className="infoHeader">Validation & Sanitization</h2>
          <p className="infoText">
            We've got you covered. Every input will be validated according to
            the schema you've set. Define them once and never worry again! With
            custom, built-in decorators, defining schemas is a breeze!
          </p>
        </div>
      </div>

      <div className="horizontalLine"></div>

      <div className="infoBox">
        <div className="leftInfo">
          <h2 className="infoHeader">Automatic Caching</h2>
          <p className="infoText">
            Every response is cached and invalidated if its value has changed.
            And yes, out of the box!
          </p>
        </div>
        <div className="CachePic"></div>
      </div>

      <div className="horizontalLine"></div>

      <div className="infoBox">
        <div className="IntegrationPic"></div>
        <div className="rightInfo">
          <h2 className="infoHeader">Seamless Integration</h2>
          <p className="infoText">
            With just a few lines of code, you're good to go. Use as little or
            as much of Synapse as you want to implement real-time capabilities
            across the entire application.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;
