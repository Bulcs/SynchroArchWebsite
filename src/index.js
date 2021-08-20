import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {
  App,
  FrontFace,
  Parceiros,
  Projeto,
  EquipeTabs,
  BottomBar,
} from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

ReactDOM.render(<FrontFace />, document.getElementById("front-face-id"));

ReactDOM.render(<Projeto />, document.getElementById("projeto-id"));

ReactDOM.render(<Parceiros />, document.getElementById("parceiros-id"));

ReactDOM.render(<EquipeTabs />, document.getElementById("equipe-id"));

ReactDOM.render(<BottomBar />, document.getElementById("bottom-bar-id"));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
