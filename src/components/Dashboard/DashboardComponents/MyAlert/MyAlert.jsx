import { Typography } from "@material-ui/core";
import "./MyAlert.scss";

const MyAlert = () => {
  return (
    <div className="alert">
      <Typography>You don't have any search alerts yet</Typography>
      <Typography className="p__2">
        To set an alert, select the 'Set search alert' button on any search
        results page'
      </Typography>
    </div>
  );
};

export default MyAlert;
