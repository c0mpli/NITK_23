import React from "react";
import Navbar from "../components/Navbar/Navbar";
import chatroomBg from "../assets/chatroomBG.png";
import threedots from "../assets/3dot.png";
import emojiIcon from "../assets/emojiIcon.png";
import "./Chatroom.css";
import Chat from "../components/Chat/Chat";
function Chatroom() {
  return (
    <div className="chatroom-wrapper">
      <img src={chatroomBg} className="chatroomBG" />
      <Navbar />
      <div className="chat-wrapper">
        <div className="chatBox-wrapper">
          <div className="chatBox-titlebar">
            <span style={{ display: "flex", alignItems: "center" }}>
              <div className="titlebarCircle"></div>
              <span>
                <h4>Name</h4>
                <p>Status</p>
              </span>
            </span>
            <img src={threedots} />
          </div>
          <div className="chatBox-bottom">
            <img src={emojiIcon} />
            <input placeholder="Type a message" />
            <button>{">"}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chatroom;
