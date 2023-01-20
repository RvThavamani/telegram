import React from "react";
import { LeftPanelChilds } from "../LeftPanel/LeftChilds"; //LeftPanelContainer
import "./RightPanel.css";

export default function RightPanel() {
  return (
    <div className="RightPanel">
      <RightPanelHeader />
      <RightPanelContainer />
    </div>
  );
}

function RightPanelHeader() {
  return (
    <div className="RightPanelHeader">
      <div className="RPHchild1">
        <div className="RPHCprofile">
          <i class="fa-regular fa-circle-user"></i>
        </div>
        <div className="RPHCtitle">
          <div className="RPHCTname">Title Name</div>
          <div className="RPHCTdate">Last Seen 07:30 PM</div>
        </div>
      </div>
      <div className="RPHchild2">
        <div className="PinMessageBox">
          <div className="PinMessageBoxLeft"></div>
          <div className="PinMessageBoxRight">
            <div className="PIN pinned">Pinned Message</div>
            <div className="PinedMessage pinned"> Message</div>
          </div>
        </div>
        <div className="RPHCI">
          <i class="fa-solid fa-xmark"></i>
        </div>
        <div className="RPHCI">
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>
        <div className="RPHCI">
          <i class="fa-solid fa-phone"></i>
        </div>
        <div className="RPHCI">
          <i class="fa-solid fa-ellipsis-vertical"></i>
        </div>
      </div>
    </div>
  );
}

function RightPanelContainer() {
  return (
    <div className="RightPanelContainer">
      <div className="RightPanelLayer"></div>
      <div className="chatting">
        <div className="RightPanelChatPage">
          <div className="ChatScroll">
            <div className="ChatList">
              <LeftPanelChilds
                UserName="Mani"
                Day="THU"
                Message="Hi' how are you?."
              />
            </div>
          </div>
          <UnreadMessages />
          <MessageInputBox />
        </div>
      </div>
    </div>
  );
}
function UnreadMessages() {
  return (
    <div className="UnreadMessages">
      <i class="fa-solid fa-arrow-down"></i>
    </div>
  );
}
function MessageInputBox() {
  return (
    <div className="MessageInputBox">
      <MessageBox />
      <div className="MicIcon">
        <i class="fa-solid fa-microphone"></i>
      </div>
    </div>
  );
}

function MessageBox() {
  return (
    <div className="MessageBox">
      <div className="SmileIcon">
        <i class="fa-regular fa-face-smile"></i>
      </div>
      <input className="MessageInput" placeholder="Message"></input>
      <div className="GalleryIcon">
        <i class="fa-solid fa-paperclip"></i>
      </div>
    </div>
  );
}
