import { Container } from "@material-ui/core";
import "./HelpCenterFooter.scss";

// import assets
import appStore from "../../../assets/HelpCenter/appStore.svg";
import playStore from "../../../assets/HelpCenter/playStore.png";

const HelpCenterFooter = () => {
  return (
    <>
      <Container>
        <hr />
        <div className="footers">
          <div>
            <p>Get your app today</p>
          </div>

          <div className="store">
            <img height="78px" width="180px" src={playStore} alt="" />
            <img height="50px" width="200px" src={appStore} alt="" />
          </div>
        </div>
      </Container>

      {/* <div style={{ backgroundColor: "#002f34" }}>
        <Container>
          <div className="footer2">
            <div>
              <ul className="footer_list">
                <li>India</li>
                <li>Help</li>
                <li>Center</li>
              </ul>
            </div>
            <div>
              <ul className="copyWrite">
                <li>Free classifieds in India.</li>
                <li>&copy; 2006-2021 OLX </li>
              </ul>
            </div>
          </div>
        </Container>
      </div> */}
    </>
  );
};

export default HelpCenterFooter;
