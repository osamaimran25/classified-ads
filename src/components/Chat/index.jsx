import { useState } from "react";
import Layout from "../Layout";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Paper, Grid } from "@material-ui/core";

// images
import chatLogo from "../../assets/ChatPage/emptyChat.webp";

// data
import chatUsers from "../../data/chatUsers";

// components
import SingleUserList from "./SingleUserList";
import ChatBox from "./ChatBox";

// styles
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // marginTop: 100,
    marginTop: 30,
    marginBottom: 50,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

// main function
const Chat = () => {
  const classes = useStyles();
  // const [isNoMessage, setIsNoMessage] = useState(false);
  const isNoMessage = false;
  const [selectedChat, setSelectedChat] = useState();

  return (
    <Layout>
      <div className={classes.root}>
        {/* if message not available */}
        {isNoMessage ? (
          <div style={{ textAlign: "center", marginTop: 100 }}>
            <Typography style={{ marginBottom: 20 }}>
              No messages, yet?
            </Typography>
            <img src={chatLogo} alt="chat" />
            <Typography style={{ marginTop: 70 }}>
              We’ll keep messages for any item you’re selling in here
            </Typography>
          </div>
        ) : (
          <section style={{ padding: "0 30px" }}>
            {/* if message available */}
            <Paper>
              <Grid container spacing={0}>
                <Grid
                  item
                  xs={12}
                  sm={4}
                  style={{ padding: 10, borderRight: "1px solid #efefef" }}
                >
                  {chatUsers?.map(
                    ({ id, name, img, chatText, lastActive, isActive }) => (
                      <SingleUserList
                        key={id}
                        id={id}
                        name={name}
                        img={img}
                        chatText={chatText}
                        lastActive={lastActive}
                        isActive={isActive}
                        setSelectedChat={setSelectedChat}
                      />
                    )
                  )}
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={8}
                  style={{ minHeight: "85vh", backgroundColor: "#efefef" }}
                >
                  <ChatBox selectedChat={selectedChat} />
                </Grid>
              </Grid>
            </Paper>
          </section>
        )}
      </div>
    </Layout>
  );
};

export default Chat;
