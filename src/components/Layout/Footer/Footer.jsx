import { Container, Grid, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./Footer.scss";

// data
import {
  popularLocations,
  trendingLocations,
  aboutUs,
  olx,
  followUs,
} from "../../../data/dummyLocation";

// import assets
import appStore from "../../../assets/Footer/appstore.webp";
import playStore from "../../../assets/Footer/playstore.webp";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <Container>
          <Grid container item spacing={2}>
            <Grid container item md={5} lg={5} sm={12} xs={12} spacing={2}>
              <Grid item md={6} lg={6} sm={6} xs={12}>
                <div>
                  <Typography
                    variant="h6"
                    style={{ color: "#002f34", fontWeight: "700" }}
                  >
                    POPULAR LOCATIONS
                  </Typography>
                </div>
                <div className="footer-items">
                  <ul>
                    {popularLocations.map((location) => {
                      return (
                        <li style={{ margin: "20px 0", color: "#58767a" }}>
                          <Link to={location.link}>{location.location}</Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </Grid>
              <Grid item md={6} lg={6} sm={6} xs={12}>
                <div>
                  <Typography
                    variant="h6"
                    style={{ color: "#002f34", fontWeight: "700" }}
                  >
                    TRENDING LOCATIONS
                  </Typography>
                </div>
                <div className="footer-items">
                  <ul>
                    {trendingLocations.map((location) => {
                      return (
                        <li style={{ margin: "20px 0", color: "#58767a" }}>
                          <Link to={location.link}>{location.location}</Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </Grid>
            </Grid>
            <Grid container item md={7} lg={7} sm={12} xs={12} spacing={2}>
              <Grid item md={4} lg={4} sm={12} xs={12}>
                <div>
                  <Typography
                    variant="h6"
                    style={{ color: "#002f34", fontWeight: "700" }}
                  >
                    ABOUT US
                  </Typography>
                </div>
                <div className="footer-items">
                  <ul>
                    {aboutUs.map((about) => {
                      return (
                        <li style={{ margin: "20px 0", color: "#58767a" }}>
                          <Link to={about.link}>{about.info}</Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </Grid>

              <Grid item md={4} lg={4} sm={6} xs={12}>
                <div>
                  <Typography
                    variant="h6"
                    style={{ color: "#002f34", fontWeight: "700" }}
                  >
                    IslamicAds
                  </Typography>
                </div>
                <div className="footer-items">
                  <ul>
                    {olx.map((olx) => {
                      return (
                        <li style={{ margin: "20px 0", color: "#58767a" }}>
                          <Link to={olx.link}>{olx.info}</Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </Grid>
              <Grid item md={4} lg={4} sm={6} xs={12}>
                <div>
                  <Typography
                    variant="h6"
                    style={{ color: "#002f34", fontWeight: "700" }}
                  >
                    FOLLOW US
                  </Typography>
                </div>
                <div className="footer-items">
                  <ul>
                    {followUs.map((logo) => {
                      return (
                        <Link to={logo.link} className="socialIcon">
                          {logo.img}
                        </Link>
                      );
                    })}
                  </ul>
                </div>

                <div className="store">
                  <a href="!#" className="appStore">
                    <img src={appStore} alt="" />
                  </a>
                  <a href="!#" className="playStore">
                    <img src={playStore} alt="" />
                  </a>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </div>
      {/* copyright section */}
      <div style={{ background: "#032f34", padding: "15px 0", color: "#fff" }}>
        <Container>
          <Grid
            container
            item
            spacing={1}
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <Grid
              item
              md={5}
              sm={12}
              xs={12}
              ls={5}
              className="copyWrite__footer_text"
            >
              <Typography variant="subtitle1">
                Other Countries Pakistan - South Africa - Indonesia
              </Typography>
            </Grid>
            <Grid
              item
              md={5}
              sm={12}
              xs={12}
              ls={5}
              style={{ textAlign: "right" }}
            >
              <Typography
                variant="subtitle1"
                className="copyWrite__footer_text"
              >
                Free Classifieds in India. &copy;{new Date().getFullYear()}
                <Link to="/" style={{ marginLeft: "6px", color: "#fff" }}>
                  IslamicAds{" "}
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
