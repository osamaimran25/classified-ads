import "./HelpOptions.scss";
import { Button, Container, Grid } from "@material-ui/core";

const HelpOptions = () => {
  return (
    <div style={{ padding: "100px 0px" }}>
      <Container>
        <Grid container item spacing={5} className="options">
          <Grid item md={4} lg={4} sm={6} xs={12}>
            <Button variant="outlined" className="sub_option">
              User Testimonials
            </Button>
          </Grid>
          <Grid item md={4} lg={4} sm={6} xs={12}>
            <Button variant="outlined" className="sub_option">
              islamicAds Autos
            </Button>
          </Grid>
          <Grid item md={4} lg={4} sm={6} xs={12}>
            <Button variant="outlined" className="sub_option">
              Seller FAQs
            </Button>
          </Grid>
          {/* start new grid */}
          <Grid item md={4} lg={4} sm={6} xs={12}>
            <Button variant="outlined" className="sub_option">
              Buyer FAQs
            </Button>
          </Grid>
          <Grid item md={4} lg={4} sm={6} xs={12}>
            <Button variant="outlined" className="sub_option">
              General Queries
            </Button>
          </Grid>
          <Grid item md={4} lg={4} sm={6} xs={12}>
            <Button variant="outlined" className="sub_option">
              Trust and Safety
            </Button>
          </Grid>
          {/* 2nd part */}
          <Grid item md={6} le={6} sm={6} xs={12} className="options">
            <Button variant="outlined" className="sub_option">
              Trust and Safety
            </Button>
          </Grid>
          <Grid item md={6} le={6} sm={6} xs={12} className="options">
            <Button variant="outlined" className="sub_option">
              Trust and Safety
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default HelpOptions;
