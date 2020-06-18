/* disable es-lint */

import React from "react";

const Tutorial = () => {
  return (
    <div className="tutorialContainer">
      <h1 className="tutorialHeader">Getting Started</h1>
      <h2>Server-Side</h2>
      <div className="tutorialServer" />
      <div className="innerDiv">
        <p>
          Just like with all the packages, we first need to install synapse:{" "}
          <br />
          npm i @synapsejs
        </p>

        <p>
          {" "}
          Within the server file, require synapse and invoke it passing in the
          directory of your resources.
        </p>
        <p>
          {" "}
          - To add Websocket support to your endpoints - simply add .ws method
          of synapse instance to the route.
        </p>
        <p>
          {" "}
          - Similar logic follows HTTP and SSE handling, with a simple rule to
          follow: .sse method should always come before .http method on your
          route.
        </p>
        <p> - api.use middleware is handling all the responses.</p>
        <p> Lets draw a simple mental model:</p>
        <p>
          {" "}
          Any incoming request is being process by its respective method, after
          going through synapse itll be sent back to the client from the global
          api.use response handler.
        </p>
      </div>
      <h2>Sample Resource Class</h2>
      <div className="tutorialResource" />
      <div className="innerDiv">
        <p>
          This code snippet demonstrates a sample User class. Note that all
          classes that are passed to Synapse extend the Resource class.
        </p>
        <p>
          Next, we have 4 field decorators that define schemas for each user
          input:
        </p>
        <p>
          The first field decorator guarantees that all id's follow the MongoId
          format. Word and Text take 2 optional arguments that determine how
          short or long these inputs should be. In this case, usernames must be
          within 3~16 characters. The expose decorator dynamically creates
          routes that are specified to the passed in endpoints.
        </p>

        <p>
          Here, we have two exposed endpoints that find a user by id and create
          a new user, respectively. Each have their own schemas.
        </p>
        <p>
          - The first uses the select method, which creates a new schema
          containing a subset of the instance's fields selected via arguments.
        </p>
        <p>
          - The second uses exclude and extend methods:
          <ul>
            <li>
              Exclude creates a new schema containing a subset of the instance's
              fields excluding those passed-in as arguments.{" "}
            </li>
            <li>
              Extend creates a new schema containing all of the current
              instance's fields along with the additional fields you can pass
              in.
            </li>
          </ul>
        </p>
        <p>
          The business logic of these methods is entirely up to you, but must
          return either an instance of the class, or an instance of State.
        </p>
        <p>
          Classes have access to the restore and create methods, along with many
          others.
        </p>
        <ul>
          <li>
            Restore and create instantiate a new instance of the class from the
            plain object in compliance with the Class's schema.
          </li>
        </ul>
        <p>
          The State class contains methods that correspond to response errors.
          They can be passed custom messages to return to the client.
        </p>
        <ul>
          <li>
            State.NOT_FOUND(), for example, corresponds to a 404 error and will
            only return this status code.
          </li>
          <li>
            If it was State.NOT_FOUND("This user does not exist"), this message
            would be passed along as well.
          </li>
        </ul>
      </div>
      <h3 className="lastSentence">
        With these simple steps your application is ready to handle any network
        request coming its way.
      </h3>
    </div>
  );
};

// const Tutorial = () => {
//   console.log("tutorial");
//   return (
//     <iframe
//       src="https://oslabs-beta.github.io/synapse/index.html"
//       title="docsiFrame"
//       width="100%"
//       height="100%"
//       marginWidth="0"
//       marginHeight="0"
//       frameBorder="0"
//     />
//   );
// };

export default Tutorial;
