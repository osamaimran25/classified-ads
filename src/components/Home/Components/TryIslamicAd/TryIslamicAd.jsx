import { CardMedia, Container, Grid, Typography } from "@material-ui/core";
import mobile from "../../../../assets/images/mobile.svg";
import appStore from "../../../../assets/images/appstore.png";
import googleStore from "../../../../assets/images/playstore_2.png";
import "./TryIslamicAd.scss";

const TryIslamicAd = () => {
  return (
    <div className="TryIslamicAd_wrapper">
      <Container>
        <Grid
          container
          item
          spacing={1}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Grid
            item
            md={4}
            sm={6}
            xs={12}
            lg={4}
            className="TryIslamicAd_image"
          >
            <CardMedia component="img" image={mobile} />
          </Grid>
          <Grid item md={4} sm={6} xs={12} lg={4} className="TryIslamicAd_info">
            <Typography variant="h4">TRY THE IslamicAd APP</Typography>
            <Typography variant="h6">
              Buy, sell and find just about anything using the app on your
              mobile.
            </Typography>
          </Grid>
          <Grid
            item
            md={4}
            sm={6}
            xs={12}
            lg={4}
            className="TryIslamicAd_get_app"
          >
            <Typography variant="h6"> GET YOUR APP TODAY</Typography>
            <div className="app_google">
              <div className="app_img">
                <img src={appStore} alt="appStore" />
              </div>
              <div className="google_img">
                <img src={googleStore} alt="googleStore" />
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default TryIslamicAd;
