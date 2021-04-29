import { Container, Grid, Typography } from "@material-ui/core";
import "./HeroArea.scss";
const HeroArea = () => {
  return (
    <div className="hero__area__wrapper">
      <Container>
        <Grid container item spacing={3}>
          <Grid item md={6} sm={12} xs={12}>
            <Typography variant="h4">
              All you need is here & classified!
            </Typography>
            <Typography variant="subtitle1">
              Browse out Top most categories
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default HeroArea;
