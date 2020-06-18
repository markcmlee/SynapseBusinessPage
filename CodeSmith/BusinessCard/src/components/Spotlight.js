import React, { useState, useEffect, useRef } from "react";

const Spotlight = () => {
  return (
    <div className="spotlightContainer">
      <div className="leftSide" />
      <div className="rightSide">
        <h1 className="synapseHeader">Synapse</h1>
        <h4 className="smallerHeader">Real-time API Library</h4>
        <a
          className="downloadButton"
          href="https://www.npmjs.com/package/@synapsejs/synapse"
        >
          NPM Download
        </a>
      </div>
    </div>
  );
};

export default Spotlight;
