import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

class Equipe extends Component {
  render() {
    return (
      <div className="worker-tab">
        <img className="worker-img" src={this.props.workerImg} />
        <div className="worker-tab-content">
          <h3>{this.props.name}</h3>
          <h6>{this.props.atuacao}</h6>
          <div className="worker-tab-links">
            <a
              href={this.props.link1}
              target="_blank"
              style={{ "margin-left": "20px" }}
            >
              <FontAwesomeIcon
                icon={faLinkedinIn}
                size="2x"
                transform="shrink-3"
              />
            </a>
            <a href={this.props.link2} target="_blank">
              <FontAwesomeIcon
                icon={faGithubAlt}
                size="2x"
                transform="shrink-3"
              />
            </a>
            <a
              href={this.props.link3}
              target="_blank"
              style={{ "margin-right": "20px" }}
            >
              <FontAwesomeIcon icon={faGlobe} size="2x" transform="shrink-3" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Equipe;
