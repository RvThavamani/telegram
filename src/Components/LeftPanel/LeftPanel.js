import React from "react";
import "./LeftPanel.css";
import {LeftPanelContainer} from './LeftChilds.js';

export default function LeftPanel() {
  return(
    <div className="LeftPanel">
      <LeftPanelHeader />
      <NewMessage/>
      <LeftPanelContainer />
   
    </div>
  );
}

function LeftPanelHeader() {
  return (
    <div className="LeftPanelHeader">
      <div className="MenuBar">
        <div className="Menu">
          <i class="fa-solid fa-bars"></i>
        </div>
      </div>
      <SearchBox />
    </div>
  );
}

function SearchBox() {
  return (
    <div className="SearchBox">
      <div className="SearchIcon">
        <i class="fa-solid fa-magnifying-glass"></i>
      </div>
      <input className="SearchInput" placeholder="Search"></input>
    </div>
  );
}
function NewMessage() {
  return (
    <div className="NewMessage"><i class="fa-solid fa-pen"></i></div>
  )
}
