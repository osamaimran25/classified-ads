// import SCSS
import "./HelpCenter.scss";

// import asset
import searchIcon from "../../assets/HelpCenter/search-icon.png";
import HelpOptions from "./HelpOptions/HelpOptions";
import HelpCenterFooter from "./HelpCenterFooter/HelpCenterFooter";
import Layout from "../Layout";
import { Container, Grid } from "@material-ui/core";

const HelpCenter = () => {
  return (
    <Layout>
      <div style={{ paddingTop: "1px" }}>
        <div className="red_text">
          <Container>
            <Grid container item md={12} className="help_text">
              <p>**Never scan QR code or share your OTP with anyone**</p>
            </Grid>
          </Container>
        </div>
        <div className="link_text">
          <Container>
            <Grid container item md={12} className="help_text">
              <a href="!#">
                Protect yourself from frauds - Click here to know more
              </a>
            </Grid>
          </Container>
        </div>
      </div>

      <form className="hero_area">
        <div>
          <h1>Hi. How can we help you?</h1>
        </div>
        <div className="search_bar">
          <img src={searchIcon} alt="" />
          <input placeholder="Search the Help Center" type="text" />
        </div>
      </form>

      <HelpOptions />
      <HelpCenterFooter />
    </Layout>
  );
};

export default HelpCenter;
