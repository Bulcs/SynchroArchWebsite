import React, { Component } from "react";

class NavBar extends Component {
  render() {
    let buttonInteractiveMenu =
      document.getElementsByClassName("interactiveMenu");
    return (
      <div className="navbar col-12">
        <ul className="col-12 menu-nav">
          <li className="item-nav">
            <a href="" className="a-item-nav logo-menu-mobile">
              <h2 className="naoSelecionavel icon-menu-mobile">SynchroArch</h2>
            </a>
          </li>
          <li className="item-nav">
            <a href="#" className="a-item-nav">
              INÍCIO
            </a>
          </li>
          <li className="item-nav">
            <a href="#project" className="a-item-nav">
              PROJETO
            </a>
          </li>
          <li className="item-nav">
            <a href="#equipe" className="a-item-nav">
              EQUIPE
            </a>
          </li>
          <li className="item-nav">
            <a href="#contact" className="a-item-nav">
              CONTATO
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavBar;
