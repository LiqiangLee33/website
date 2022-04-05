import React from "react";
import "./Resources.css";
import { resources } from "../../utils/constant";

function renderResources(resource, idx) {
  return (
    <li key={idx}>
      <a href={resource.link} target="_blank" rel="noreferrer" className="link">
        <div className="image">
          <img src={resource.logo} alt={resource.name} />
        </div>
        <div className="header">{resource.name}</div>
        <div>{resource.description}</div>
      </a>
    </li>
  );
}

function Resources() {
  return (
    <div className="resources_wrapper">
      <div className="top">
        <h1>OUR RESOURCES</h1>
      </div>
      <div className="bottom">
        <ul className="resources_list">{resources.map(renderResources)}</ul>
      </div>
    </div>
  );
}

export default Resources;
