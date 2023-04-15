import React, { useEffect, useState } from "react";
import { user } from "../Join/Join";
import socketIo from "socket.io-client";
import "./Chat.css";
import sendLogo from "../../images/send.png";
import Message from "../Message/Message";
import ReactScrollToBottom from "react-scroll-to-bottom";
import closeIcon from "../../assets/3dot.png";
import chatroomBg from "../../assets/login.png";

let socket;
const ENDPOINT = "https://coc23-chatserver.c0mpli.repl.co";

const Chat = ({ user }) => {
  const [gameExists, setGameExists] = useState(false);

  const [id, setid] = useState("");
  const [messages, setMessages] = useState([]);

  const send = () => {
    const message = document.getElementById("chatInput").value;
    socket.emit("message", { message, id });
    document.getElementById("chatInput").value = "";
  };

  useEffect(() => {
    socket = socketIo(ENDPOINT, { transports: ["websocket"] });

    socket.on("connect", () => {
      setid(socket.id);
    });
    console.log(socket);
    socket.emit("joined", { user });

    socket.on("userJoined", (data) => {
      setMessages([...messages, data]);
      console.log(data.user, data.message);
    });

    socket.on("leave", (data) => {
      setMessages([...messages, data]);
      console.log(data.user, data.message);
    });

    return () => {
      socket.disconnect();
      socket.off();
    };
  }, []);

  useEffect(() => {
    socket.on("sendMessage", (data) => {
      setMessages([...messages, data]);
      console.log(data.user, data.message, data.id);
    });
    return () => {
      socket.off();
    };
  }, [messages]);

  return (
    <div className="chatPage">
      <img src={chatroomBg} className="chatroomBG" />

      <div className="chatContainer">
        <div className="header">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: "2rem",
            }}
          >
            <div className="header-circle"></div>
            <div>
              <h2>{user}</h2>
              <p style={{ color: "#34A853" }}>Online</p>
            </div>
          </div>

          <a href="/">
            <img src={closeIcon} alt="Close" />
          </a>
        </div>
        <ReactScrollToBottom className="chatBox">
          {messages.map((item, i) => (
            <Message
              user={item.id === id ? "" : item.user}
              message={item.message}
              classs={item.id === id ? "right" : "left"}
            />
          ))}
        </ReactScrollToBottom>
        <div className="inputBox">
          <input
            onKeyPress={(event) => (event.key === "Enter" ? send() : null)}
            type="text"
            id="chatInput"
            placeholder="Type a message"
          />
          <button onClick={send} className="sendBtn">
            <img src={sendLogo} alt="Send" />
          </button>
        </div>
      </div>
      {gameExists && (
        <iframe
          src="https://psycatgames.com/app/would-you-rather/"
          width="400"
          height="600"
          style={{ zIndex: "2", marginLeft: "2rem" }}
        ></iframe>
      )}
    </div>
  );
};

export default Chat;
