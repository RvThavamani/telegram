import React from "react";
import "./LeftChilds.css";
export function LeftPanelContainer() {
  return (
    <div className="LeftPanelContainer">
      <LeftPanelChilds UserName="Mani" Day="THU" Message="Hi' how are you?." />
      <LeftPanelChilds UserName="Maddy" Day="FRI" Message="Hi' how old are you?." />
      <LeftPanelChilds UserName="Kathir" Day="SUN" Message="Hi' where are you?." />
      <LeftPanelChilds UserName="Ravan" Day="TUE" Message="Hi' how to do this?." />
    </div>
  );
}

export function LeftPanelChilds(props) {
  return (
    <div className="LeftPanelChilds">
      <div className="LeftPanelChildProfile">
        <i class="fa-regular fa-circle-user"></i>
      </div>
      <div className="LeftPanelChildDatas">
        <div className="LeftPanelChildData">
          <div className="LPCDtittle">{props.UserName}</div>
          <div className="LPCDday">{props.Day}</div>
        </div>
        <div className="LeftPanelChildData">
          <div className="LPCDlastMessage"> {props.Message}</div>
          <div className="LPCDnotification">
            <i class="fa-regular fa-bell"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
