import React, { useState } from "react";
import { Typography } from "@material-ui/core";
import chatLogo from "../../assets/ChatPage/emptyChat.webp";
import { IoSend } from "react-icons/io5";
import InputEmoji from "react-input-emoji";

const ChatBox = ({ selectedChat }) => {
  const [text, setText] = useState("");

  function handleOnEnter(text) {
    console.log("enter", text);
  }

  return (
    <div style={{ height: "100%" }}>
      {selectedChat ? (
        <div>
          {/* if any chat selected */}
          <section style={{ minHeight: "80vh" }}>
            <Typography style={{ paddingTop: 30 }}>
              selected chat option {selectedChat}
            </Typography>
          </section>

          <section
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
              marginBottom: "10px",
            }}
          >
            <aside style={{ width: "95%" }}>
              <InputEmoji
                value={text}
                onChange={setText}
                cleanOnEnter
                onEnter={handleOnEnter}
                placeholder="Type a message"
              />
            </aside>
            <IoSend style={{ fontSize: 25, color: "#858585" }} />
          </section>
        </div>
      ) : (
        <>
          {/* if no chat selected */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <img src={chatLogo} alt="chat" width="150px" />
            <Typography style={{ marginTop: 30, fontWeight: "550" }}>
              Select a chat to view conversation
            </Typography>
          </div>
        </>
      )}
    </div>
  );
};

export default ChatBox;
