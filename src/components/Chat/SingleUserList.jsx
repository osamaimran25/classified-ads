import { makeStyles } from "@material-ui/core/styles";
import { Avatar, Paper, Typography } from "@material-ui/core";

// styles
const useStyles = makeStyles((theme) => ({
  paper: {
    // padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    marginBottom: 10,
  },
}));

// main function
const SingleUserList = ({
  id,
  name,
  img,
  chatText,
  lastActive,
  isActive,
  setSelectedChat,
}) => {
  const classes = useStyles();

  return (
    <Paper
      className={classes.paper}
      style={{ display: "flex", alignItems: "center" }}
      onClick={() => setSelectedChat(id)}
    >
      <Avatar
        alt={name}
        src={img}
        style={{ marginRight: 20, marginLeft: 20 }}
      />
      <div style={{ textAlign: "left", marginBottom: 10 }}>
        <Typography variant="p" style={{ fontWeight: "bold" }}>
          {name}
          <Typography
            variant="span"
            style={{
              color: isActive ? "#39ce39" : "gray",
              fontSize: 30,
              marginLeft: 2,
            }}
          >
            •
          </Typography>
        </Typography>
        <Typography style={{ fontSize: 13 }}>
          Last active:
          {isActive ? "now" : ` ${lastActive}`}
          {/* `${new Date().toDateString()} ${new Date().toTimeString()}` */}
        </Typography>
        <Typography style={{ marginTop: 20 }}>
          {chatText.slice(0, 50)} {chatText.length > 30 && "....."}
        </Typography>
      </div>
    </Paper>
  );
};

export default SingleUserList;
